---
id: server-side-sdk
title: Installation côté serveur
description: Insérez Logora côté serveur grâce à notre API
---

### Récupération du code de la synthèse

Logora fournit une route d'API pour récupérer la synthèse dans vos pages côté serveur. Cette route d'API renvoie le code HTML complet de la synthèse (CSS et scripts inclus), que vous pouvez insérer dans votre modèle de page. Cette méthode remplace l'insertion du script Logora sur vos pages.

Pour accéder à une documentation plus détaillée de l'API de pré-rendu, rendez-vous sur la [Documentation](https://render.logora.fr/docs)

> Cette API est utilisée par ailleurs par le code Javascript Logora pour afficher la synthèse.

#### Requête

URL de base :
- `https://render.logora.fr/synthesis` pour la synthèse, voir documentation pour les autres options

Méthode : `POST`

En-tête : `Content-Type: application/json`


Paramètres d'URL :   
- `shortname` (requis) : nom de votre application disponible dans votre espace d'administration
- `uid` (requis) : identifiant unique de la page
- `device` (optionnel) : indique le type d'appareil de l'utilisateur. Les choix possibles sont : `mobile`, `tablet`, `desktop`. Ce paramètre est utilisé pour adapter le design du module en fonction de la taille de l'écran.
- `language` (optionnel) : indique la langue des textes de la synthèse. Les choix possibles sont : `fr`, `es`, `en`, `de`, `it`.
- `insertType` (optionnel) : mode d'insertion, ne pas ajouter si insertion standard. Indiquer *amp* pour une insertion sur une page AMP ou *iframe* pour une insertion en iframe.  
- `cache` (optionnel) : _true_ ou _false_. Permet de désactiver le cache pour tester en environnement de développement. Par défaut, les requêtes sont mises en cache quelques minutes. Ne pas désactiver le cache en production.
- `noHtml` (optionnel) : _true_. Permet d'éviter la génération du code HTML pour seulement récupérer les informations nécessaires pour intégrer votre propre design. 


Corps de la requête (optionnel) : Le corps de la requête doit contenir des métadonnées sur la page, en format JSON.

> Si vous voulez récupérer des infos sur un débat ou sur les commentaires, sans création d'article, vous pouvez omettre le corps de la requête

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
https://render.logora.fr/synthesis?shortname=demo-app&uid=cc7c1624-9d5c-4206-b2d4-d18cb36c59d6
https://render.logora.fr/synthesis?shortname=demo-app&uid=cc7c1624-9d5c-4206-b2d4-d18cb36c59d6&insertType=amp
```

> Le paramètre `source_url` doit avoir un nom de domaine identique à un des domaines autorisés de votre application (modifiable dans *Configuration > Général*), sinon, la source envoyée ne sera pas prise en compte.

> Pour des raisons de performance, les sources publiées il y a plus de 18 mois ne sont pas prises en compte.


#### Réponse


La réponse renvoyée est sous cette forme :

```json
{
  "success": true, // true si un débat est associé, false si aucun débat ou une erreur
  "debate": {
    "id": 43455,
    "slug": "mon-debat",    // Identifiant unique du débat, présent dans l'URL
    "name": "Faut-il introduire une dose de proportionnelle dans l'élection des députés ?",     // Titre du débat
    "type": "Group",
    "direct_url": "https://exemple.com/espace-debat/debat/mon-debat",      // Lien vers le débat
    "created_at": "2025-05-12T12:26:20.042Z",
    "image_url": "https://storage.logora.com/uploads/standard_3fd4460e064c8f079db11c12ce522fce.jpg",
    "contributions_count": 77
  },
  "content": CODE_HTML // Code HTML de la synthèse à insérer dans la page. Attribut non présent si success à false
}
```


Le code HTML renvoyé a pour racine le conteneur suivant  : 

```html
<div id="logoraRoot" class="logoraContainer" data-id="group_embed"><div>
```
