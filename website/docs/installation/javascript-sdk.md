---
id: javascript-sdk
title: Installation Javascript
description: Installez Logora grâce à notre code universel Javascript.
---

Logora peut être installé sur n'importe quel site en insérant le code natif JavaScript. Cette documentation est à destination des développeurs. Logora propose également une documentation personnalisée pour l'[installation Wordpress](installation/wordpress).

L'installation en Javascript se fait en deux temps :
1. Insérer l'espace de débat 
2. Insérer la synthèse du débat sur vos pages
	 
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


Insérez les scripts nécessaires à l'espace de débat ainsi qu'un conteneur **logora_app**. 

Le conteneur **logora_app** est l'endroit où l'espace de débat est affiché.

Code standard à copier/coller et compléter : 

```html
<!-- Insérer les scripts suivants dans la balise <head>, le plus haut possible dans la page -->
<script>
    // Variables de configuration, le nom d'application est présent dans votre espace d'administration
    var logora_config = {
        shortname: "NOM_APPLICATION"
    };
</script>
<script src="https://api.logora.fr/debat.js"></script>
```

```html
<!-- Insérer cette balise là où l'espace de débat doit être affiché -->
<div id="logora_app"></div>
```

#### 1.3. Réécriture des URLs pour les routes de l'espace de débat

Cette étape permet aux utilisateurs d'accéder à l'espace de débat directement depuis leur navigateur. 
Par exemple, si un utilisateur souhaite accéder directement à son profil via l'URL https://www.votresite.com/espace-debat/utilisateur/votre-profil, sans procéder à la réécriture des URLs, il sera redirigé vers une page d'erreur. 

La réécriture des URLs permet également à l'équipe Logora de rajouter directement de nouveaux modules sur de nouvelles URLs de votre site sans vous demander d'intervenir. 

Utilisez la réécriture d'URL sur votre plateforme ou CMS pour que les chemins commençant par 'espace-debat/' (ou le préfixe que vous avez choisi) pointent vers la page où est inséré l'espace de débat.

Accédez à la page https://votresite.com/espace-debat/debats. Vous êtes sur la page d'accueil de l'espace de débat !

Pour modifier le préfixe et les chemins d'URLs des pages de l'espace de débat, rendez-vous sur [la configuration des chemins d'URL](configuration/routes.md).


### 2. Installer la synthèse du débat 

> Si avez des contraintes de performance élevé et que vous souhaitez indexer les pages de débat sur les moteurs de recherche, il est nécessaire d'insérer la synthèse côté serveur. Dans ce cas rendez-vous sur la page d'[installation côté serveur](installation/api.md).

Insérez le code Javascript de la synthèse à l'endroit où vous souhaitez voir apparaître la synthèse du débat, en pied d'article. Ceci est un exemple de code Javascript qui charge et affiche la synthèse du débat en cours lié à votre article. Il doit être inséré sur toutes vos pages d'articles. Ce code n'affichera rien tant que vous n'avez pas associé de débat à la page.

#### 2.1 Insérer le code JavaScript et vos variables de configuration

> Si vous souhaitez utiliser le widget, utilisez l'autre lien indiqué dans le code Javascript exemple

Le conteneur **logora_synthese** est l'endroit où la synthèse est chargée.

Code standard à copier/coller et compléter :

```html
<div class="logora_synthese" data-object-id="logora_config"></div>
<script>
    // Variables de configuration
    var logora_config = {
        shortname: "NOM_APPLICATION", // Nom d'application présent dans votre espace d'administration
        debate: {
            identifier: "PAGE_IDENTIFIER" // Identifiant unique de la page
        }
    };

    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://api.logora.fr/synthese.js'; // 'https://api.logora.fr/widget.js' pour le widget
        (d.head || d.body).appendChild(s);
    })();
</script>
```

**debate.identifier (requis)** : identifiant unique lié à la page. Cet identifiant doit être unique pour chaque page où est insérée la synthèse. Il permettra de récupérer le débat correspondant à la page. Par exemple, l'identifiant peut être l'ID dans votre base de données de l'article présent sur la page, ou un slug unique ('exemple-identifiant').

Le débat lié à la page doit ensuite être créé dans l'espace d'administration > créer un débat, en fournissant l'identifiant debate.identifier ou en sélectionnant l'article concerné dans la liste des derniers articles récupérés. 

#### 2.2 Envoyer les méta-données des articles manuellement (optionnel)

Par défaut, Logora récupère les méta-données des articles automatiquement :
- via les balises html _meta_
- via le format JSON-LD

Cependant vous pouvez choisir de les envoyer manuellement avec les variables de configuration.

Voici un exemple de meta-données envoyées depuis les variables de configuration :

```javascript
    // Variables de configuration
    var logora_config = {
	shortname: "NOM_APPLICATION", // Nom d'application présent dans votre espace d'administration
	debate: {
	    identifier: "PAGE_IDENTIFIER" // Identifiant unique de la page
	},
	source: {
	    source_url: "https://votresite.com/article", // URL canonique de la page
	    uid: "a3f4e033-9e13-4abb-be11-2d87a2294013", // Identifiant unique de la page
	    title: "Titre de l'article", // Titre de la page
	    description: "Description de la page", // Description de la page
	    origin_image_url: "https://image.com/image.png", // URL de l'image de la page
	    published_date: "2020-12-01T12:00:00+01:00", // Date de publication de la page au format ISO_8601
	    publisher: "Mon site", // Nom du site
	    tag_objects: [  // Étiquettes de l'article sous forme de tableau d'objets
		{ 
		  name: "politique",  // Nom affiché de l'étiquette
		  uid: "politique-001" // Identifiant unique de l'étiquette. Peut être omis si les noms sont déjà uniques
		}, 
		{ 
		  name: "santé", 
		  uid: "sante-003" 
		},
	    ]
	  }
    };
```

Il n'est pas obligatoire d'envoyer toutes les méta-données manuellement, les champs manquants seront récupérés automatiquement. Les métadonnées envoyées manuellement ont la priorité sur les données récupérées automatiquement.


#### Écouter le chargement de la synthèse (optionnel)

Pour détecter le chargement de la synthèse, un événement _logoraContentLoaded_ est déclenché sur l'objet _window_.
Cet événement permet de récupérer des informations sur le débat qui s'affiche sur la page.

```javascript
window.addEventListener('logoraContentLoaded', event => console.log(event.detail));
```
Format de l'objet _event.detail_ :
```
debate: {
  direct_url: "https://www.exemple.fr/espace-debat/debat/mon-debat",
  id: 1000
  name: "Faut-il changer la constitution ?"
  slug: "mon-debat"
}
```
Si aucun débat n'est associé à la page, l'objet _debate_ sera _null_.


Il ne reste plus qu'à implémenter l'authentification unique et à personnaliser Logora pour lancer votre premier débat. 

