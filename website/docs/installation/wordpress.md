---
id: wordpress
title: Installation Wordpress
---

### Avant de commencer 

- Enregistrez votre site sur Logora en vous inscrivant : [Inscription](https://logora.fr/signup)
- Autorisez les domaines sur lesquels vous désirez installer Logora. Pour cela, rendez-vous sur votre espace d'administration dans l'onglet *Configuration > Général > Sécurité > Domaines autorisés*. Par exemple, si le code est inséré sur la page à l'URL https://exemple.com/article/exemple-article, ajoutez le domaine https://exemple.com. Exemple : http://localhost:3000 , http://sous-domaine.exemple.com.  Important : l'ajout des domaines sur l'espace d'administration fonctionne comme un ajout de tag, n'oubliez pas d'appuyer sur "entrer" lors de l'insertion de vos URL.

### Installation

- Logora est disponible sur le catalogue Wordpress (https://wordpress.org/plugins/logora/). Sur votre interface Wordpress, téléchargez l'extension via Plugins en recherchant "Logora". Activez l'extension après son téléchargement.
- Ajoutez votre nom d'application et votre clé secrète dans l'onglet de réglages Logora. Votre nom d'application et votre clé secréte sont disponibles sur votre [espace d'administration](https://admin.logora.fr) dans l'onglet *Configuration > Général*.


### Utilisation

- Accédez à votre espace de débat sur le chemin `/espace-debat`. L'espace de débat apparait vide, vous pouvez le peupler en créant un débat depuis votre espace d'administration. 
- La synthèse de débat est disponible via le shortcode `[logora-synthese]`. Insérez-la en tapant `/` et en choissisant `shortcode`. Disposez le shortcode dans votre template d'article pour qu'il soit présent sur toutes les pages. Pour que la synthèse apparait en pied d'un article, il faut que l'article (au format `Post`) en question soit lié à un débat. Il vous faut donc créer un débat depuis votre [espace d'administration](https://admin.logora.fr) et sélectionner l'article à lier au débat. 
 
