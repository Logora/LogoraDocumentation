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

- Enregistrez votre site sur Logora en vous inscrivant : [Inscription](https://logora.fr/signup)
- Munissez-vous de votre **nom d'application** disponible sur votre [espace d'administration](https://admin.logora.fr) dans l'onglet *Configuration > Général*.
- Autorisez les domaines sur lesquels vous désirez installer Logora. Pour cela, rendez-vous sur votre espace d'administration dans l'onglet *Configuration > Général > Sécurité > Domaines autorisés*. Par exemple, si le code inséré sur la page à l'URL https://exemple.com/article/exemple-article, ajoutez le domaine https://exemple.com (attention: ne pas mettre de barre oblique à la fin). Exemple : http://localhost:3000 , http://sous-domaine.exemple.com.  Important : l'ajout des domaines sur l'espace d'administration fonctionne comme un ajout de tag, n'oubliez pas d'appuyer sur "entrer" lors de l'insertion de vos URL.

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



### 2. Installer la synthèse du débat 


Insérez le code Javascript de la synthèse à l'endroit où vous souhaitez voir apparaître la synthèse du débat, en pied d'article. Ceci est un exemple de code Javascript qui charge et affiche la synthèse du débat en cours lié à votre article. Il doit être inséré sur toutes vos pages d'articles. Ce code n'affichera rien tant que vous n'avez pas associé de débat à la page.

> Si vous préférez insérer la synthèse côté serveur, rendez-vous sur la page d'[installation côté serveur](installation/api.md).

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
        s.src = 'https://api.logora.fr/synthese.js'; 
        (d.head || d.body).appendChild(s);
    })();
</script>
```

**debate.identifier (requis)** : identifiant unique lié à la page. Cet identifiant doit être unique pour chaque page où est insérée la synthèse. Il permettra de récupérer le débat correspondant à la page. Par exemple, l'identifiant peut être l'ID dans votre base de données de l'article présent sur la page, ou un slug unique ('exemple-identifiant').


Le débat lié à la page doit ensuite être créé dans l'espace d'administration > créer un débat, en fournissant l'identifiant debate.identifier ou en sélectionnant l'article concerné dans la liste des derniers articles récupérés. 


Il ne reste plus qu'à implémenter l'authentification unique et à personnaliser Logora pour lancer votre premier débat. 