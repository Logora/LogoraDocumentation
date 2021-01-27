---
id: server-side-sdk
title: API côté serveur
description: Insérez Logora côté serveur grâce à notre API
---

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


