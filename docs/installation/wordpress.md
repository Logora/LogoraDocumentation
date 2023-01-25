---
id: wordpress
title: Installation Wordpress
---

### Avant de commencer 

- Enregistrez votre site sur Logora en vous inscrivant : [Inscription](https://logora.fr/signup)
- Après l'inscription, vous êtes redirigés vers [votre espace d'administration Logora](https://admin.logora.fr). Cette espace permet de gérer les contenus de votre espace de débat et de le personnaliser.
- Autorisez les domaines sur lesquels vous désirez installer Logora. Pour cela, rendez-vous sur votre espace d'administration dans l'onglet *Configuration > Général > Sécurité > Domaines autorisés*. Par exemple, si votre site Wordpress est accessible https://example.com, ajoutez le domaine https://exemple.com. Exemple : http://localhost:3000 , http://sous-domaine.exemple.com.  
> Important : l'ajout des domaines sur l'espace d'administration fonctionne comme un ajout de tag, n'oubliez pas d'appuyer sur "Entrée" lors de l'insertion de vos URL.

### Installation

- Logora est disponible sur le catalogue Wordpress (https://wordpress.org/plugins/logora/). Sur votre interface Wordpress, téléchargez l'extension via Plugins en recherchant "Logora". Activez l'extension après son téléchargement.
- Ajoutez votre nom d'application dans l'onglet de réglages Logora. Votre nom d'application et votre clé secréte sont disponibles sur votre [espace d'administration](https://admin.logora.fr) dans l'onglet *Configuration > Général*.
- Si vous souhaitez que vos utilisateurs puissent débattre avec leur compte Wordpress, vérifiez que la case "Activer l'authentification unique (SSO)" est bien cochée et renseignez votre clé secrète, disponible sur votre espace d'administration Logora.

### Utilisation

- Accédez à votre espace de débat sur le chemin `/espace-debat`. L'espace de débat apparait vide, vous pouvez commencer à créer des débats depuis votre espace d'administration ou directement depuis vos articles Wordpress. 
- La synthèse de débat s'insère automatiquement sur vos pages articles (au format `Post`). Pour faire apparaitre un débat sous un article, vous pouvez soit le lier depuis votre espace d'administration Logora, soit indiquer le débat dans votre article Wordpress.
 
