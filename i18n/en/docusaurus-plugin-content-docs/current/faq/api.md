---
id: api
title: Using the Logora API
description: Fetch debates, messages, users, and statistics through the Logora REST API.
sidebar_label: Public API
---

The Logora API exposes 51 REST endpoints to programmatically access your debates, messages, users, votes, statistics, and more.

The full interactive documentation (Swagger UI) lives here: **[https://app.logora.fr/docs](https://app.logora.fr/docs)**.

## Authentication

The API supports two authentication schemes (source: `securitySchemes` in the OpenAPI spec):

| Scheme | Type | Transport |
|---|---|---|
| `bearer_auth` | HTTP Bearer | `Authorization: Bearer ...` header |
| `api_key` | API key | **Query string parameter**: `?api_key=...` |

:::caution `api_key` is a query parameter
Unlike many APIs, `api_key` is **not** a header — it's a URL parameter. This means it can show up in your server logs and HTTP referer. For server-to-server use, prefer the OAuth bearer token (see below).
:::

### Get an OAuth access token

```bash
curl -d grant_type=client_credentials \
     -d client_id=YOUR_API_KEY \
     -d client_secret=YOUR_CLIENT_SECRET \
     -d scope=public \
     https://app.logora.fr/oauth/token
```

The `public` scope is the one mentioned in the official API documentation.

Once you have the token, add it to your requests:

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
     "https://app.logora.fr/api/v1/groups"
```

## Common conventions

### Pagination

List endpoints return the following HTTP headers:

| Header | Description |
|---|---|
| `total` | Total number of items |
| `total-pages` | Total number of pages |
| `current-page` | Current page |
| `next-page` | Next page number |
| `page-items` | Items per page |
| `link` | RFC 5988 links to adjacent pages |

Standard query parameters on list endpoints:

- `page` — page number (default 1)
- `per_page` — page size
- `cursor_pagination` (boolean) — switch to cursor-based pagination
- `countless` (boolean) — skip total count (faster)
- `sort` — sort key (string, depends on the endpoint)

### Date filters

List endpoints support date filters (ISO 8601):

```
?created_at.gte=2026-01-01T00:00:00Z
?created_at.lte=2026-01-31T23:59:59Z
```

## Main endpoints

### List debates

```http
GET /api/v1/groups
Authorization: Bearer YOUR_TOKEN
```

Parameters: `page`, `per_page`, `countless`, `sort`, `cursor_pagination`.

### List messages (arguments and comments)

```http
GET /api/v1/messages?group_id=123
Authorization: Bearer YOUR_TOKEN
```

:::note Vocabulary
In the API model, **debate arguments** and **comments** are both `messages`. The OpenAPI tag "Messages" is described as *"Debate arguments and comments"*. To fetch the arguments of a debate, filter by `group_id`.
:::

Available filters: `page`, `per_page`, `sort`, `created_at.gte`/`.lte`, `is_edited`, `status`, `is_reply`, `moderation_score`, `score`, `user_id`, `group_id`, `position_id`, `language`, `is_deleted`, `is_selected`.

### Get a user

```http
GET /api/v1/users/{user_hash_id}
Authorization: Bearer YOUR_TOKEN
```

:::warning Three different user identifiers
Depending on the endpoint, the API uses three different user identifiers:

| Identifier | Endpoints |
|---|---|
| `user_uid` (UUID you provide via SSO) | `POST /users/{user_uid}/anonymize`, `DELETE /users/{user_uid}` |
| `user_slug` | `PATCH /users/{user_slug}`, `/users/{user_slug}/messages`, `/users/{user_slug}/badges`, etc. |
| `user_hash_id` | `GET /users/{user_hash_id}` (show) |

Always check the parameter expected by each endpoint in the [Swagger](https://app.logora.fr/docs).
:::

### Anonymize a user

```http
POST /api/v1/users/{user_uid}/anonymize
Authorization: Bearer YOUR_TOKEN
```

Anonymizes all personal data while preserving contributions.

### Delete a user

```http
DELETE /api/v1/users/{user_uid}
Authorization: Bearer YOUR_TOKEN
```

### Statistics

```http
GET /api/v1/stats/{resource}?filter=day&from_date=2026-01-01&to_date=2026-01-31
Authorization: Bearer YOUR_TOKEN
```

The `{resource}` segment must be one of: `users`, `groups`, `consultations`, `messages`, `proposals`, `votes`.

| Parameter | Description |
|---|---|
| `filter` | Aggregation dimension. Default `day`. Examples: `day`, `week`, `month`. |
| `from_date` | Start date (objects created after this date). |
| `to_date` | End date. |

Sample response:

```json
[
  { "dimension": "2026-04-30", "value": 3 },
  { "dimension": "2026-04-29", "value": 7 }
]
```

:::tip Daily granularity
For daily stats (not an aggregated total), pass `filter=day`.
:::

## Moderation via API

The Logora admin handles moderation internally, but if you have your own external moderation queue you can also consume these endpoints:

```http
GET /api/v1/moderation_entries
PATCH /api/v1/moderation_entries/{id}
GET /api/v1/moderation_entries/lock
```

The PATCH accepts a body with `status`, `moderation_reason`, `is_moderated`.

## See also

- **[Interactive Swagger](https://app.logora.fr/docs)** — full list of 51 endpoints with "Try it out"
- [Pre-render API (`render.logora.fr`)](/faq/render-api) — to fetch pre-rendered HTML for newsletters and homepages
- [User deletion and anonymization](/faq/account-deletion)
