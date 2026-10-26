---
id: render-api
title: Pre-render API (render.logora.fr)
description: Fetch pre-rendered HTML for Logora debates, comments, and widgets to embed in newsletters, custom homepages, or third-party CMS.
sidebar_label: Pre-render API
---

`render.logora.fr` is Logora's **pre-render API**. It returns the HTML of a widget (debate, comments, vote, consultation…) directly, without loading the JavaScript on the client.

:::tip Common use cases
- Embed an article's **comments** into a newsletter
- Build a **custom homepage** highlighting the most active debates
- Server-side pre-rendering for **SEO** (HTML is served directly to crawlers)
- Plug into a **third-party CMS** (Livingdocs, Drupal, etc.) that consumes HTML
:::

Full interactive documentation: **[https://render.logora.fr/docs](https://render.logora.fr/docs)**.

## Authentication

None. Render endpoints accept anonymous requests — access control is enforced via your application's `shortname`.

## Common parameters

All endpoints share these query string parameters:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `shortname` | string | ✅ | Your application's shortname (visible in the Logora admin) |
| `language` | string | optional | Display language: `fr`, `en`, `es`, or `de`. Default `fr`. |
| `noHtml` | boolean | optional | If `true`, returns metadata only (no compiled HTML) |

## Endpoints

### `POST /synthesis` — debate synthesis

Returns the HTML of the debate synthesis associated with a page on your site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `shortname` | string | ✅ | |
| `uid` | string | ✅ | Page identifier (your source's `uid`) |
| `device` | string | optional | `mobile`, `tablet`, or `desktop` (responsive code) |
| `language` | string | optional | |
| `noHtml` | boolean | optional | |

**Response**:

```json
{
  "success": true,
  "debate": {
    "id": 123,
    "slug": "my-debate",
    "name": "My debate ?",
    "direct_url": "https://example.com/debate/my-debate",
    "type": "Group"
  },
  "content": "<div id=\"logoraRoot\">...</div>"
}
```

**Real production example**:

```
POST https://render.logora.fr/synthesis?shortname=milenio-4e7a57&uid=2050434
```

### `POST /embed/comments` — comments module

Returns the HTML of the comments module for a source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `shortname` | string | ✅ | |
| `uid` | string | ✅ | Source unique identifier |
| `language` | string | optional | |
| `noHtml` | boolean | optional | |

**Real production example**:

```
POST https://render.logora.fr/embed/comments?shortname=krone-f8d02e&uid=3930450&device=tablet
```

### `GET /app` — full debate space page

Returns the full HTML of a debate space page (e.g. a debate landing page).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `shortname` | string | ✅ | |
| `url` | string | ✅ | URL of the page to render |

### `POST /widget` — debate widget (by `uid`)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `shortname` | string | ✅ | |
| `uid` | string | optional | |
| `language` | string | optional | |
| `noHtml` | boolean | optional | |

### `POST /embed/argument` — single argument widget

| Parameter | Type | Required | Description |
|---|---|---|---|
| `shortname` | string | ✅ | |
| `id` | string | ✅ | Argument identifier |
| `language` | string | optional | |
| `noHtml` | boolean | optional | |

### `POST /embed/group` — debate widget (by `id`)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `shortname` | string | ✅ | |
| `id` | string | ✅ | Group (debate) identifier |
| `language` | string | optional | |
| `noHtml` | boolean | optional | |

### `POST /embed/proposal` — proposal widget

| Parameter | Type | Required | Description |
|---|---|---|---|
| `shortname` | string | ✅ | |
| `id` | string | ✅ | Proposal identifier |
| `language` | string | optional | |
| `noHtml` | boolean | optional | |

### `POST /embed/consultation` — consultation widget

| Parameter | Type | Required | Description |
|---|---|---|---|
| `shortname` | string | ✅ | |
| `id` | string | ✅ | Consultation slug |
| `language` | string | optional | |
| `noHtml` | boolean | optional | |

### `POST /embed/vote` — vote widget

| Parameter | Type | Required | Description |
|---|---|---|---|
| `shortname` | string | ✅ | |
| `id` | string | ✅ | Vote identifier |
| `language` | string | optional | |
| `noHtml` | boolean | optional | |

## Response shape

Most `/embed/*` endpoints return:

```json
{
  "success": true,
  "resource": { "id": 1234 },
  "html": "<div id=\"logoraRoot\">...</div>"
}
```

`/synthesis` and `/widget` return a slightly different payload (with a `debate` key instead of `resource`, and `content` instead of `html`).

## Errors

On failure, the response is:

```json
{
  "success": false,
  "error": "Data fetching error"
}
```

## Full example: top debates in a newsletter

```javascript
// On your newsletter server (Node.js for instance)

// 1. Fetch the latest debates via the public API
const groupsRes = await fetch(
  'https://app.logora.fr/api/v1/groups?per_page=3',
  { headers: { 'Authorization': `Bearer ${accessToken}` } }
);
const { data: debates } = await groupsRes.json();

// 2. For each debate, fetch the pre-rendered synthesis
const blocks = await Promise.all(debates.map(async (d) => {
  const res = await fetch(
    `https://render.logora.fr/synthesis?shortname=YOUR_APP&uid=${d.uid}`,
    { method: 'POST' }
  );
  const { content } = await res.json();
  return content;
}));

// 3. Inject into your email template
const newsletterHtml = template.replace('{{debates}}', blocks.join(''));
```

## See also

- **[Render API Swagger](https://render.logora.fr/docs)**
- [Public Logora API](/faq/api) — for classic REST endpoints
- [Server-side install](/installation/server-side-sdk) — alternative for embedding HTML in your article pages
