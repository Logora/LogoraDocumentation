---
id: server-side-sdk
title: API côté serveur
description: Insérez Logora côté serveur grâce à notre API
---


### Retrieving the code of the synthesis

Logora provides an API route to retrieve the summary in your server-side pages. This API route returns the full HTML code of the synthesis (including CSS and scripts), which you can insert into your page template. This method replaces the insertion of the Logora script on your pages.

> This API is also used by the Logora Javascript code to display the synthesis.

#### Query

Base URL :
- `https://render.logora.fr/synthesis` for the synthesis
- `https://render.logora.fr/widget` for the widget

Method : `POST`  
Header : `Content-Type: application/json`

URL parameters :   
`shortname` (required): name of your application available in your administration space  
`uid` (required): unique identifier of the page (the same identifier as the one inserted on the client side) 
`insertType` (optional) : insertion mode, do not add if standard insertion. Indicate *amp* for an insertion on an AMP page or *iframe* for an insertion in iframe.  

Request body: The request body must contain metadata about the page, in JSON format.
```json
{
  "source": 
  {
    "source_url": "https://votresite.com/article", // (Requis) URL canonique de la page
    "uid": "a3f4e033-9e13-4abb-be11-2d87a2294013", // (Requis) Identifiant unique de la page
    "title": "Titre de l'article", // (Requis) Titre de la page
    "description": "Description de la page", // (Optionnel) Description de la page
    "origin_image_url": "https://image.com/image.png", // (Optionnel) URL de l'image de la page
    "published_date": "2020-12-01T12:00:00+01:00", // (Requis) Date de publication de la page au format ISO_8601
    "publisher": "Mon site", // (Optionnel) Nom du site
    "tag_objects": [  // (Optionnel) Étiquettes de l'article sous forme de tableau d'objets
        { 
          "name": "politique",  // (Requis) Nom affiché de l'étiquette
          "uid": "politique-001" // (Optionnel) Identifiant unique de l'étiquette. Peut être omis si les noms sont déjà uniques
        }, 
        { 
          "name": "santé", 
          "uid": "sante-003" 
        },
    ]
  }
}
```


Examples of query URLs:
```
https://render.logora.fr/app?shortname=demo-app&uid=cc7c1624-9d5c-4206-b2d4-d18cb36c59d6
https://render.logora.fr/app?shortname=demo-app&uid=cc7c1624-9d5c-4206-b2d4-d18cb36c59d6&insertType=amp
```

> The `source_url` parameter must have a domain name identical to one of the authorized domains of your application (editable in *Configuration > General*), otherwise the source sent will not be taken into account.

> For performance reasons, sources published before January 1st 2019 are not taken into account.


#### Response


The response returned is in this form:

```json
{
  "success": true, // true si un débat est associé, false si aucun débat ou une erreur
  "debate": {    
    "slug": "mon-debat",    // Identifiant unique du débat, présent dans l'URL
    "name": "Faut-il introduire une dose de proportionnelle dans l'élection des députés ?",     // Titre du débat
    "direct_url": "https://exemple.com/espace-debat/debat/mon-debat"      // Lien vers le débat
  },
  "content": CODE_HTML, // Code HTML de la synthèse à insérer dans la page. Attribut non présent si success à false
  "source": OBJET_SOURCE, // Objet contenant les métadonnées de la page
  "config": OBJET_CONFIG, // Objet contenant la configuration de l'application
}
```


The returned HTML code has the following container as its root: 

```html
<div id="logoraRoot" class="logoraContainer" lang="fr" data-id="synthesis"><div>
```

### Retrieve the list of articles

To avoid making unnecessary calls and loading the synthesis only on the article pages where a debate is linked, you can use the route provided by the Logora API to retrieve the list of your articles linked to a debate.

#### Query

Base URL : 
`https://app.logora.fr/api/v1/updated_sources`

Method : `GET`
Header : `Content-Type: application/json`
URL parameters : 
- `shortname` (required): name of your application available in your administration space
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
        "identifier": 1, // Identifiant unique de l'article que vous fournissez lors de l'insertion de la synthèse
        "title": "Exemple d’Article – Démo", // Titre de l'article
        "source_url": "https://demo.logora.fr/article-demo", // URL de l'article
        "has_debate": false, // Indique si l'article est associé à un débat
        "debate_updated_at": "2021-01-06T16:01:19.717Z" // Dernière modification de l'association à un débat (association à un débat ou suppression de l'association)
      },
      {
        "identifier": 2,
        "title": "Exemple d'article #2 - Démo",
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
