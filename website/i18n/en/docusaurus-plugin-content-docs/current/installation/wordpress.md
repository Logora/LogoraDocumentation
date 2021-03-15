---
id: wordpress
title: Installation Wordpress
---

### Avant de commencer 

- Enregistrez votre site sur Logora en vous inscrivant : [Inscription](https://logora.fr/signup)
- Munissez-vous de votre nom d'application disponible sur votre [espace d'administration](https://admin.logora.fr) dans l'onglet *Configuration > Général*.
- Autorisez les domaines sur lesquels vous désirez installer Logora. Pour cela, rendez-vous sur votre espace d'administration dans l'onglet *Configuration > Général > Sécurité > Domaines autorisés*. Par exemple, si le code inséré sur la page à l'URL https://exemple.com/article/exemple-article, ajoutez le domaine https://exemple.com (attention: ne pas mettre de barre oblique à la fin). Exemple : http://localhost:3000 , http://sous-domaine.exemple.com.  Important : l'ajout des domaines sur l'espace d'administration fonctionne comme un ajout de tag, n'oubliez pas d'appuyer sur "entrer" lors de l'insertion de vos URL.

### Installation

- Logora est disponible sur le catalogue Wordpress (https://wordpress.org/plugins/logora/). Sur votre interface Wordpress, téléchargez le plugin via Extensions en recherchant "Logora". Activez l'extension après son téléchargement.
- Ajoutez votre nom d'application et votre clé secrète dans l'onglet de réglages Logora.

### Utilisation

- Accédez à votre espace de débat sur le chemin `/espace-debat`. 
- La synthèse de débat est disponible via le shortcode `[logora-synthese]`. Insérez ce shortcode dans votre template d'article pour qu'il soit présent sur toutes les pages. 
