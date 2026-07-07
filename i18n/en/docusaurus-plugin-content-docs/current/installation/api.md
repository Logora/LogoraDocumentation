---
id: server-side-sdk
title: Server-side Installation
description: Integrate Logora server-side using our API
---

Logora provides an API to install the debate space server-side. This API returns the complete HTML code of the block for articles or debate space pages (including CSS and scripts), which you can insert into your page templates.

For more detailed documentation on the pre-render API, visit the [Documentation](https://render.logora.fr/docs).

### 1. Retrieving the block code in articles

The API allows you to retrieve the complete HTML code of the block for articles (including CSS and scripts), which you can insert into your page template. This method replaces the insertion of the Logora script on your pages.

> This API is also used by the Logora JavaScript code to display the block in articles.

#### Request

Base URL :
- `https://render.logora.fr/synthesis` for the debate summary, see documentation for other options

Method: `POST`

Header: `Content-Type: application/json`

URL parameters:
- `shortname` (required): your application name available in your admin space
- `uid` (required): unique identifier of the page
- `device` (optional): indicates the user's device type. Possible values: `mobile`, `tablet`, `desktop`. This parameter is used to adapt the module design to the screen size.
- `language` (optional): indicates the language of the synthesis texts. Possible values: `fr`, `es`, `en`, `de`, `it`.
- `insertType` (optional): insertion mode, do not add for standard insertion. Use *amp* for AMP page insertion or *iframe* for iframe insertion.
- `cache` (optional): _true_ or _false_. Allows disabling cache for testing in development environments. By default, requests are cached for a few minutes. Do not disable cache in production.
- `noHtml` (optional): _true_. Prevents HTML code generation to only retrieve the necessary information to integrate your own design.

Request body (optional) : The request body must contain metadata about the page, in JSON format.

> If you want to retrieve information about a debate or comments, without creating an article, you can omit the body of the request

```json
{
	"source": 
	{
		"source_url": "https://yoursite.com/article", // (Required) Canonical URL of the page
		"uid": "a3f4e033-9e13-4abb-be11-2d87a2294013", // (Required) Unique identifier of the page
		"title": "Article title", // (Required) Page title
		"description": "Page description", // (Optional) Page description
		"origin_image_url": "https://image.com/image.png", // (Optional) Page image URL
		"published_date": "2020-12-01T12:00:00+01:00", // (Required) Publication date in ISO_8601 format
		"publisher": "My site", // (Optional) Site name
		"tag_objects": [  // (Optional) Article tags as an array of objects
				{ 
					"name": "politics",  // (Required) Display name of the tag
					"uid": "politics-001" // (Optional) Unique identifier of the tag. Can be omitted if names are already unique
				}, 
				{ 
					"name": "health", 
					"uid": "health-003" 
				},
		]
	}
}
```

Example request URLs:
```
https://render.logora.fr/synthesis?shortname=demo-app&uid=cc7c1624-9d5c-4206-b2d4-d18cb36c59d6
https://render.logora.fr/synthesis?shortname=demo-app&uid=cc7c1624-9d5c-4206-b2d4-d18cb36c59d6&insertType=amp
```

> The `source_url` parameter must have a domain name identical to one of your application's authorized domains (modifiable in *Configuration > General*), otherwise the source sent will not be considered.

> For performance reasons, sources published more than 18 months ago are not considered.

#### Response

The response is in the following format:

```json
{
  "success": true, // true if a debate is associated, false if no debate or an error
  "debate": {
    "id": 43253,
    "slug": "my-debate",    // Unique identifier of the debate, present in the URL
    "name": "Should proportional representation be introduced in the election of deputies?",     // Debate title
    "type": "Group",
    "direct_url": "https://exemple.com/debate-space/debate/my-debate",      // Link to the debate
    "created_at": "2025-05-12T12:26:20.042Z",
    "image_url": "https://storage.logora.com/uploads/standard_3fd4460e064c8f079db11c12ce522fce.jpg",
    "contributions_count": 77
  },
  "content": CODE_HTML  // HTML code of the debate summary to insert in the page. Attribute not present if success is false, null if noHtml is true
}
```

The returned HTML code has the following root container:

```html
<div id="logoraRoot" class="logoraContainer" data-id="group_embed"><div>
```

### 2. Retrieving the debate space code

The API can also be used to retrieve the code for debate space pages. This allows you to send a complete, server-generated page to search engines. The returned code is static and intended only for search engines. Differentiate calls for search engines and users, to whom you will serve the client-side version.

#### Request

Base URL:
- `https://render.logora.fr/app`

Method: `GET`

Header: `Content-Type: application/json`

URL parameters:
- `shortname` (required): your application name available in your admin space
- `url` (required): URL of the page to retrieve

#### Response

The response is in the following format:

```json
{
	"success": true, // true if everything went well
	"title": "Page title",
	"description": "Page description",
	"content": CODE_HTML // HTML code of the space to insert into your page. Attribute not present if success is false
}
```

The returned HTML code has the following root container:

```html
<div id="logoraRoot" class="logoraContainer" data-vid="view_app" data-shortname="YOUR_SHORTNAME">
```
