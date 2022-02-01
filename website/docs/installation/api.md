---
id: server-side-sdk
title: Installation côté serveur
description: Insérez Logora côté serveur grâce à notre API
---

Logora peut être installé sur n'importe quel site en insérant les pages de débat en code natif JavaScript et en insérant la question en pied d'article (la synthèse) côté serveur. Cette installation permet d'améliorer la performance de vos pages articles et d'indexer les pages de débat sur les moteurs de recherche. 

Cette documentation est à destination des développeurs. Logora propose également une documentation personnalisée pour l'[installation Wordpress](installation/wordpress).

L'installation se fait en deux temps :
1. Insérer l'espace de débat en Javascript
2. Insérer la synthèse du débat sur vos pages côté serveur
	 
### Avant de commencer 

- Si l'équipe Logora ne vous a pas créé d'espace d'administration, créez votre espace d'administration Logora : [Inscription](https://logora.fr/signup)
- Munissez-vous de votre **nom d'application** disponible sur votre [espace d'administration](https://admin.logora.fr) dans l'onglet *Configuration > Général*.
- Autorisez les domaines sur lesquels vous désirez installer Logora. Pour cela, rendez-vous sur votre espace d'administration dans l'onglet *Configuration > Général > Sécurité > Domaines autorisés*. Par exemple, si le code inséré sur la page à l'URL https://exemple.com/article/exemple-article, ajoutez le domaine https://exemple.com. Exemple : http://localhost:3000 , http://sous-domaine.exemple.com.  Important : l'ajout des domaines sur l'espace d'administration fonctionne comme un ajout de tag, n'oubliez pas d'appuyer sur "Entrer" lors de l'insertion de vos URL.

### 1. Installer l'espace de débat 


L'espace de débat est la plateforme principale où vos utilisateurs pourront participer aux débats. L'espace de débat est inséré sur une page dédiée sur votre site. 


Prenons l'exemple d'un site web disponible à l'adresse https://votresite.com. L'éditeur du site web souhaite accéder à l'espace de débat via l'adresse https://votresite.com/espace-debat. Voici les étapes à suivre pour insérer l'espace de débat :

#### 1.1. Ajouter une page pour insérer l'espace de débat


Créez une page dédiée où sera inséré l'espace de débat. Cette page est disponible à l'adresse https://votresite.com/espace-debat. Le préfixe 'espace-debat' est le préfixe par défaut. Il est modifiable dans l'espace d'administration.


#### 1.2. Insérer le code JavaScript et vos variables de configuration


Insérez le code Javascript du débat à l'endroit où vous souhaitez voir apparaître l'espace de débat. 

Le conteneur **logora_app** est l'endroit où l'espace de débat est chargé.

Code standard à copier/coller et compléter : 

```html
<div id="logora_app"></div>
<script>
    // Variables de configuration
    var logora_config = {
        shortname: "NOM_APPLICATION" // Nom d'application présent dans votre espace d'administration
    };

    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://api.logora.fr/debat.js';
        (d.head || d.body).appendChild(s);
    })();
</script>
```

#### 1.3. Réécriture des URLs pour les routes de l'espace de débat


Utilisez la réécriture d'URL sur votre plateforme ou CMS pour que les chemins commençant par 'espace-debat/' (ou le préfixe que vous avez choisi) pointent vers la page où est inséré l'espace de débat.


Accédez à la page https://votresite.com/espace-debat/debats. Vous êtes sur la page d'accueil de l'espace de débat !


Pour modifier le préfixe et les chemins d'URLs des pages de l'espace de débat, rendez-vous sur [la configuration des chemins d'URL](configuration/routes.md).

### 2. Récupération du code de la synthèse

Logora fournit une route d'API pour récupérer la synthèse dans vos pages côté serveur. Cette route d'API renvoie le code HTML complet de la synthèse (CSS et scripts inclus), que vous pouvez insérer dans votre modèle de page. Cette méthode remplace l'insertion du script Logora sur vos pages.

Pour accéder à une documentation plus détaillée de l'API de pré-rendu, rendez-vous sur la [Documentation](https://render.logora.fr/docs)

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
`device` (optionnel) : indique le type d'appareil de l'utilisateur. Les choix possibles sont : `mobile`, `tablet`, `desktop`. Ce paramètre est utilisé pour adapté le design du module en fonction de la taille de l'écran.
`insertType` (optionnel) : mode d'insertion, ne pas ajouter si insertion standard. Indiquer *amp* pour une insertion sur une page AMP ou *iframe* pour une insertion en iframe.  

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

> Le paramètre `source_url` doit avoir un nom de domaine identique à un des domaines autorisés de votre application (modifiable dans *Configuration > Général*), sinon, la source envoyée ne sera pas prise en compte.

> Pour des raisons de performance, les sources publiées avant le 1er janvier 2019 ne sont pas prises en compte.


#### Réponse


La réponse renvoyée est sous cette forme :

```json
{
  "success": true, // true si un débat est associé, false si aucun débat ou une erreur
  "debate": {    
    "slug": "mon-debat",    // Identifiant unique du débat, présent dans l'URL
    "name": "Faut-il introduire une dose de proportionnelle dans l'élection des députés ?",     // Titre du débat
    "direct_url": "https://exemple.com/espace-debat/debat/mon-debat"      // Lien vers le débat
  },
  "content": CODE_HTML, // Code HTML de la synthèse à insérer dans la page. Attribut non présent si success à false
  "config": OBJET_CONFIG, // Objet contenant la configuration de l'application
}
```


Le code HTML renvoyé a pour racine le conteneur suivant  : 

```html
<div id="logoraRoot" class="logoraContainer" lang="fr" data-id="synthesis"><div>
```

### Récupérer la liste des articles (optionnel)

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
