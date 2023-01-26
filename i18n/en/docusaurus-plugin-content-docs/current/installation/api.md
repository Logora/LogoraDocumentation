---
id: server-side-sdk
title:  Server side API
description: Insert Logora server side with our API
---


### Retrieving the debate summary code

Logora provides an API route to retrieve the debate summary server side. This API route returns the full HTML code of the debate summary (including CSS and scripts), that you can insert into your page template. This method replaces the insertion of the Logora script in your pages.

To get a more detailed documentation of this API, go to the [Documentation](https://render.logora.fr/docs) page.

> This API is also used by the Logora Javascript code to display the debate summary.

#### Query

Base URL :
- `https://render.logora.fr/synthesis` for the debate summary
- `https://render.logora.fr/widget` for the widget

Method : `POST`  
Header : `Content-Type: application/json`

URL parameters :   
`shortname` (required): name of your application available in your administration panel

`uid` (required): unique page identifier (it is the same identifier that is inserted on the client side)

`device` (optional) : user screen size. Possible choices are : `mobile`, `tablet`, `desktop`. This parameter is used to make the module responsive.

`insertType` (optional) : insertion mode, do not add in case of standard insertion. Indicate *amp* for an insertion on an AMP page or *iframe* for an insertion in iframe. 

`cache` (optional) : _true_ or _false_. By default, requests are cached for a few minutes. If this parameter is false, will disable request cache. Useful during development or for debugging purposes. Do not set to _false_ in production.

`noHtml` (optional) : _true_. Skip HTML code generation. You only retrieve necessary information to implement your own design.


Request body: The request body must contain metadata about the page, in JSON format.
```json
{
  "source": 
  {
    "source_url": "https://yourwebsite.com/article", // (Required) Canonical URL of the page
    "uid": "a3f4e033-9e13-4abb-be11-2d87a2294013", // (Required) Unique identifier of the page
    "title": Title of the article", // (Required) Title of the page
    "description": "Page description", // (Optional) Page description
    "origin_image_url": "https://image.com/image.png", // (Optional) URL of the page image
    "published_date": "2020-12-01T12:00:00+01:00", // ((Required) Date of publication of the page in ISO_8601 format
    "publisher": "Your website", // (Optional) Site name
    "tag_objects": [  // (Optional) Tags of the article as an array of objects
        { 
          "name": "politique",  // (Required) Displayed name of the tag
          "uid": "politique-001" // (Optional) Unique identifier of the label. Can be omitted if the names are already unique
        }, 
        { 
          "name": "health", 
          "uid": "health-003" 
        },
    ]
  }
}
```


Examples of query URLs:
```
https://render.logora.fr/synthesis?shortname=demo-app&uid=cc7c1624-9d5c-4206-b2d4-d18cb36c59d6
https://render.logora.fr/synthesis?shortname=demo-app&uid=cc7c1624-9d5c-4206-b2d4-d18cb36c59d6&insertType=amp
```

> The `source_url` parameter must have a domain name identical to one of the authorized domains of your application (editable in *Configuration > General*), otherwise the source sent will not be taken into account.

> For performance reasons, sources published more than 18 months ago are not taken into account.


#### Response


The response returned follows this format:

```json
{
  "success": true, // true if a debate is associated, false if no debate or an error
  "debate": {    
    "slug": "my-debate",    // Unique identifier of the debate, present in the URL
    "name": "Should proportional representation be introduced in the election of deputies?",     // Debate title
    "direct_url": "https://exemple.com/debate-space/debate/my-debate"      // Link to the debate
  },
  "content": CODE_HTML  // HTML code of the debate summary to insert in the page. Attribute not present if success is false
}
```


The returned HTML code has the following container at its root: 

```html
<div id="logoraRoot" class="logoraContainer" lang="fr" data-id="synthesis"><div>
```


### Retrieving the list of articles (advanced usage)

In order to avoid making unnecessary calls and to load the debate summary only on the pages where a debate is linked, you can use the route provided by the Logora API to retrieve the list of articles linked to a debate.

#### Query

Base URL : 
`https://app.logora.fr/api/v1/updated_sources`

Method : `GET`
Header : `Content-Type: application/json`
URL parameters : 
- `shortname` (required): name of your application available in your administration panel
- `timestamp` required): date from which you want to retrieve article updates (if a debate is associated or not), in Unix timestamp format (seconds).
- `page` (optional): page number
- `per_page` (optional) : number of items per page, by default 10

The route returns the set of items that have had an association change to a debate since the date passed in parameter.

#### Response

```json
{
  "success": true,
  "data": {
      {
        "identifier": 1, //  Unique identifier of the article that you provide when inserting the debate summary
        "title": "Sample Article – Demo", // Title of the article
        "source_url": "https://demo.logora.fr/article-demo", // URL of the article
        "has_debate": false, //  Indicates if the article is associated with a debate
        "debate_updated_at": "2021-01-06T16:01:19.717Z" // Last modification of the association to a debate (association to a debate or removal of the association)
      },
      {
        "identifier": 2,
        "title": "Sample Article 2 – Demo",
        "source_url": "https://demo.logora.fr/article2-demo",
        "has_debate": true,
        "debate_updated_at": "2021-01-06T15:22:32.630Z"
      }, 
      ...
  }
}
```

Response headers:
- `total` : total number of items (not including pagination)
- `total-pages` : number of pages in the response
