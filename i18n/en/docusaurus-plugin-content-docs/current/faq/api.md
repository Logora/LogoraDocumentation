---
id: api
title: Using the Logora API
description: Fetch your debates, comments and statistics through the REST API
sidebar_label: Public API
---

Logora exposes a REST API to fetch your debates, comments, and statistics.

:::tip Common use cases
- Embed top debates in your **newsletter**
- Add a "Hot debates" widget on a **custom homepage**
- Export comments to a **data lake**
- Connect a **third-party CMS** (Livingdocs, Drupal, etc.)
:::

## Authentication

All routes require an OAuth 2.0 token. Get your API key and secret from your [admin space](https://admin.logora.fr) (*Configuration > General*).

### Get an access token

```bash
curl -d grant_type=client_credentials \
     -d client_id=YOUR_API_KEY \
     -d client_secret=YOUR_API_SECRET \
     -d scope=public \
     https://app.logora.fr/oauth/token
```

Response:

```json
{
  "access_token": "Av9wbEK-0QTOdxhzB4S3-B1ZFKj1Z4y8Xcl17iVcHsg",
  "token_type": "Bearer",
  "expires_in": 7200
}
```

:::info Token lifetime
The token is valid for **2 hours**. Refresh it before expiration. Add it to the `Authorization: Bearer YOUR_TOKEN` header of every request.
:::

## Main routes

### Fetch active debates

```http
GET https://app.logora.fr/api/v1/groups?application_id=YOUR_ID&sort=hot
Authorization: Bearer YOUR_TOKEN
```

| Parameter | Description | Example |
|---|---|---|
| `sort` | Sort order | `hot`, `recent`, `popular` |
| `per_page` | Results per page (1–100) | `20` |
| `tag_name` | Filter by tag | `politics` |
| `language` | Filter by language | `en`, `fr`, `de`, `es` |

### Fetch a debate's pre-rendered HTML

```http
GET https://render.logora.fr/synthesis?short_name=YOUR_APP&uid=ARTICLE_UID
```

Returns the full HTML (CSS + JS included), ready to insert into your template or newsletter.

### Fetch an article's comments

```http
GET https://render.logora.fr/embed/comments?short_name=YOUR_APP&uid=ARTICLE_UID
```

### Fetch debate arguments (JSON)

```http
GET https://app.logora.fr/api/v1/arguments?debate_id=DEBATE_ID&sort=score&per_page=10
Authorization: Bearer YOUR_TOKEN
```

### Fetch statistics

```http
GET https://app.logora.fr/api/v1/stats?from=2026-01-01&to=2026-01-31&granularity=day
Authorization: Bearer YOUR_TOKEN
```

:::warning Statistics granularity
For **daily** stats (not just an aggregated total), pass `granularity=day`. Without this parameter, the CSV export contains a **single row** with the total — a limitation reported repeatedly by clients.

Available granularities: `day`, `week`, `month`.
:::

## Full example: top debates in a newsletter

```javascript
// On your newsletter server
const accessToken = await getLogoraToken();

// 1. Fetch the 3 hottest debates
const { data: debates } = await fetch(
  'https://app.logora.fr/api/v1/groups?application_id=YOUR_ID&sort=hot&per_page=3',
  { headers: { 'Authorization': `Bearer ${accessToken}` } }
).then(r => r.json());

// 2. For each debate, fetch the pre-rendered synthesis
const blocks = await Promise.all(debates.map(async (d) => {
  return fetch(
    `https://render.logora.fr/synthesis?short_name=YOUR_APP&uid=${d.uid}`
  ).then(r => r.text());
}));

// 3. Inject into your email template
const newsletterHtml = template.replace('{{debates}}', blocks.join(''));
```

## Full Swagger documentation

All routes are documented and testable here: **[https://app.logora.fr/docs](https://app.logora.fr/docs)**.

## Limits and best practices

| Topic | Limit / recommendation |
|---|---|
| **Rate limit** | 100 req/min per API key. Beyond, returns `HTTP 429` |
| **Cache** | `/synthesis` and `/embed/comments` are cached 60 s on Logora side |
| **Pagination** | Use `page` and `per_page`, don't load everything at once |
| **High volumes** | For massive daily exports, prefer the automatic CSV export (admin > Configuration > Exports) |
| **Real-time** | To be notified of new arguments or reports, configure a **webhook** in *Admin > Configuration > Webhooks* |

:::tip Need help?
For any integration question or access to an undocumented route, contact us at [contact@logora.fr](mailto:contact@logora.fr).
:::
