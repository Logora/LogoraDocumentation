---
id: server-side-sdk
title: API côté serveur
description: Insérez Logora côté serveur grâce à notre API
---


### Récupération du code de la synthèse

Logora fournit une route d'API pour récupérer pour insérer la synthèse dans vos pages côté serveur. Cette route d'API renvoie le code HTML complet de la synthèse (CSS et scrips inclus), que vous pouvez insérer dans votre modèle de page.

> Cette API est utilisée par ailleurs par le code Javascript Logora pour afficher la synthèse.

#### Requête

URL de base :
- `https://render.logora.fr/synthesis` pour la synthèse  
- `https://render.logora.fr/widget` pour le widget  

Méthode : `POST`  
En-tête : `Content-Type: application/json`

Paramètres d'URL :   
`shortname` (requis) : nom de votre application disponible dans votre espace d'administration  
`uid` (requis) : identifiant unique de la page (le même identifiant que celui inséré côté client)    
`insertType` (optionnel) : mode d'insertion, ne pas ajouter si insertion standard. Indiquer *iframe* ou *amp* si insertion en iframe ou sur une page AMP.  

Corps de la requête : Le corps de la requête doit contenir des métadonnées sur la page, en format JSON.
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


Exemples d'URL de requête :
```
https://render.logora.fr/app?shortname=demo-app&uid=cc7c1624-9d5c-4206-b2d4-d18cb36c59d6
https://render.logora.fr/app?shortname=demo-app&uid=cc7c1624-9d5c-4206-b2d4-d18cb36c59d6&insertType=amp
```

> Le paramètre `source_url` doit avoir un nom de domaine identique à l'URL de votre site ("URL du site web" dans Configuration > Général), sinon, la source envoyée ne sera pas prise en compte.

> Pour des raisons de performance, les sources publiées avant le 1er janvier 2019 ne sont pas prises en compte.


#### Réponse


La réponse renvoyée est sous cette forme :

```json
{
  "success": true, // true si un débat est associé, false si aucun débat ou une erreur
  "content": CODE_HTML, // Code HTML de la synthèse à insérer dans la page. Attribut non présent si success à false
  "source": OBJET_SOURCE, // Objet contenant les métadonnées de la page
  "config": OBJET_CONFIG, // Objet contenant la configuration de l'application
}
```


Le code HTML renvoyé a pour racine le conteneur suivant  : 

```html
<div class="logoraContainer" lang="fr" data-id="synthesis"><div>
```

### Récupérer la liste des articles

Pour éviter de faire des appels inutiles et charger la synthèse uniquement sur les pages article où un débat est lié, vous pouvez utiliser la route prévue par l'API de Logora pour récupérer la liste de vos articles liés à un débat.

#### Requête

URL de base : 
`https://app.logora.fr/api/v1/updated_sources`

Méthode : `GET`
En-tête : `Content-Type: application/json`
Paramètres d'URL : 
- `shortname` (requis) : nom de votre application disponible dans votre espace d'administration
- `timestamp` (requis) : date depuis laquelle vous souhaitez récupérer les mises à jour des articles (si un débat est associé ou non), en format timestamp Unix (secondes).
- `page` (optionnel) : numéro de page
- `per_page` (optionnel) : nombre d'éléments par page, par défaut 10

La route renvoie l'ensemble des articles qui ont eu une modification d'association à un débat depuis la date passée en paramètre.

#### Réponse

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

En-têtes de la réponse :
- `total` : nombre total d'éléments (sans inclure la pagination)
- `total-pages` : nombre de pages de la réponse
