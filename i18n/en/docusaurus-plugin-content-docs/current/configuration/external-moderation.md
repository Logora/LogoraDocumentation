---
id: external-moderation
title: External moderation provider
description: Connect your moderation provider to Logora so it can fetch pending content and send back its decisions
---

This page is for moderation providers that moderate a Logora space on behalf of
a client. Your tool calls the Logora API to fetch content awaiting moderation,
then sends back a decision for each item.

The full API reference is available in the
[Logora API documentation](https://app.logora.fr/docs).

### How it works

Each piece of content published on the space goes through these steps:

1. A user posts a comment. With pre-moderation, it stays hidden until a
   decision is made.
2. Logora's automatic moderation analyzes the content. It accepts or rejects
   clear cases and leaves ambiguous ones pending.
3. Your tool fetches pending content.
4. Your tool sends the decision: `accepted` publishes the content, `rejected`
   hides it.
5. Your tool can change a decision at any time (post-moderation).

:::note

The content you receive depends on the space configuration. If the space uses
Logora's automatic moderation, you only receive the content it leaves pending.
If the space uses manual moderation, you receive all content.

:::

### Prerequisite: a moderator account

Your tool authenticates with a Logora administration account. To get this
account:

1. The space administrator invites you from **Team > Invite a new member**,
   with the **Moderator** role. See
   [Invitations and role management](../faq/invitation.md).
2. Create your account in the
   [administration area](https://admin.logora.fr) with the invited email
   address, then accept the invitation.

We recommend a dedicated technical account rather than a personal one: each
decision is attributed to this account in the space's moderation history. The
**Journalist** and **Administrator** roles also give access to moderation, but
the **Moderator** role is enough.

If your account is a member of several spaces, add the `current-application`
header to each request, set to the target application name (shown in
*Configuration > General*). Without this header, the API uses the account's
first space.

### 1. Get an access token

Exchange the account's email and password for an access token:

```bash
curl -X POST https://app.logora.fr/oauth/token \
  -d grant_type=password \
  -d username=moderation@provider.example \
  -d password=PASSWORD
```

Response:

```json
{
  "access_token": "ACCESS_TOKEN",
  "token_type": "Bearer",
  "expires_in": 7200,
  "refresh_token": "REFRESH_TOKEN",
  "scope": "public",
  "created_at": 1795770381
}
```

The access token is valid for 2 hours (`expires_in`, in seconds). Before it
expires, request a new one with the refresh token:

```bash
curl -X POST https://app.logora.fr/oauth/token \
  -d grant_type=refresh_token \
  -d refresh_token=REFRESH_TOKEN
```

Then send the access token in the `Authorization` header of every request:
`Authorization: Bearer ACCESS_TOKEN`.

### 2. Fetch pending content

```bash
curl -H "Authorization: Bearer ACCESS_TOKEN" \
  "https://app.logora.fr/api/v1/moderation_entries?status=pending&is_moderated=true&moderable_type=Message&sort=%2Bid&per_page=100&page=1"
```

Parameters:

| Parameter | Value | Description |
|---|---|---|
| `status` | `pending` | Required. Content awaiting a decision. |
| `is_moderated` | `true` | Content already analyzed by Logora's automatic moderation. Omit this parameter if the space uses manual moderation. |
| `moderable_type` | `Message` | Comments and arguments only. |
| `sort` | `+id` | Oldest first. Encode `+` as `%2B` in the URL. |
| `per_page` | `1` to `1000` | Items per page. Defaults to `10`. |
| `page` | integer | Page number, starting at `1`. |

Pagination is returned in the response headers: `total`, `total-pages`,
`current-page`, `page-items`, and `next-page`. The `next-page` header is absent
on the last page.

Example response, reduced to the fields used for moderation:

```json
{
  "success": true,
  "data": [
    {
      "id": 81,
      "status": "pending",
      "moderation_reason": "ambiguous",
      "moderable_type": "Message",
      "moderable": {
        "id": 78,
        "content": "Comment text",
        "created_at": "2026-11-27T09:06:21.227Z",
        "edited_at": "2026-11-27T09:06:21.227Z",
        "is_reply": false,
        "reply_to_id": null,
        "direct_url": "https://www.example.com/article#comment-78",
        "language": "en",
        "author_email": "author@example.com",
        "author": {
          "id": 223,
          "full_name": "Nestor Howe",
          "created_at": "2026-11-02T10:12:00.000Z",
          "moderation_status": "default"
        },
        "group": {
          "uid": "7546908e-98b0-4aaf-9e8a-4dc780f60627",
          "title": "Article title",
          "subtitle": "Article subtitle",
          "source_url": "https://www.example.com/article",
          "publisher": "Media name"
        }
      }
    }
  ]
}
```

Main fields:

| Field | Description |
|---|---|
| `id` | Moderation entry ID. Use it to send the decision. |
| `moderation_reason` | Reason left by automatic moderation, if it analyzed the content. |
| `moderable.content` | Text to moderate. |
| `moderable.edited_at` | Date the author last edited the text. |
| `moderable.reply_to_id` | Parent comment ID if the content is a reply. |
| `moderable.direct_url` | Link to the content on the website. |
| `moderable.author.id` | Unique, stable author ID. |
| `moderable.author.full_name` | Publicly displayed name. |
| `moderable.author_email` | Author's email address (personal data). |
| `moderable.group` | Commented article: title, subtitle, URL, and ID. |

We recommend calling the API once per minute. Content stays in the list until
a decision is recorded. To avoid sending it twice to your moderators, keep
track of the content in progress using the `id` and `moderable.edited_at` pair.
If the author edits the text, the content returns to pending with the same `id`
and a new `edited_at` value: treat it as new content.

### 3. Send a decision

```bash
curl -X PATCH https://app.logora.fr/api/v1/moderation_entries/81 \
  -H "Authorization: Bearer ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"status": "rejected", "moderation_reason": "insult"}'
```

Request body:

| Field | Description |
|---|---|
| `status` | Required. `accepted` publishes the content, `rejected` hides it. |
| `moderation_reason` | Optional. Reason for the decision, shown in the administration area. |
| `moderator_notes` | Optional. Internal note visible to the space's team. |

The API responds with `200` and the updated entry. Rejected content is hidden,
not deleted: you can still publish it later.

### Post-moderation

To change a decision, send a new `PATCH` request on the same `id`. The last
decision received applies, in both directions.

The `moderation_reason` field isn't cleared automatically. Send it again with
each new decision, empty if needed.

The space's team can also moderate content from the administration area. Here
too, the last decision applies. Content already handled by the team disappears
from the pending list. For content that stayed with your moderators for a long
time, check its status with `GET /api/v1/moderation_entries/{id}` before
sending the decision.

### Errors

Errors use the following format:

```json
{
  "success": false,
  "error": {
    "title": "Objet non trouvé",
    "detail": "Impossible de trouver l'objet demandé.",
    "code": "NOT_FOUND"
  }
}
```

| HTTP code | Cause | Action |
|---|---|---|
| `400` | Invalid parameter, for example an unknown `status`. | Fix the request. |
| `401` | Missing, invalid, or expired token, or account without a moderation role on the space. | Renew the token. If the error persists, check the account's role with the space administrator. |
| `404` | Entry not found in this space, for example because the content was deleted. | Skip the content. |
| `5xx` | Temporary error. | Retry later with an increasing delay. |

### Personal data

The content you receive includes the authors' personal data, including their
email address. Process it according to your contract with the client, and
don't keep it longer than moderation requires.
