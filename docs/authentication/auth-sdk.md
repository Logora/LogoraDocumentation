---
id: auth-sdk
title: Librairie d'authentification
description: Utilisez notre librairie d'authentification autonome
---

Notre librairie d'authentification peut être utilisée indépendamment de l'espace de débat. Si vous souhaitez intégrer notre système d'utilisateurs à votre propre plateforme, utilisez cette librairie.

La librairie est écrite en React, et le code du composant principal est disponible [ici](https://bit.cloud/logora/debate/auth/auth_initializer).

### Avant de commencer 

- Si l'équipe Logora ne vous a pas créé d'espace d'administration, créez votre espace d'administration Logora : [Inscription](https://logora.fr/signup)
- Munissez-vous de votre **nom d'application** disponible sur votre [espace d'administration](https://admin.logora.fr) dans l'onglet *Configuration > Général*.

### 1. Installer la librairie


La librairie est fournie sous forme de fichier Javascript que vous pouvez insérer sur votre site web.

Insérez ce script dans votre page ainsi qu'un conteneur **logora_app**. 

Le conteneur **logora_app** est l'endroit où le parcours d'inscription sera affiché. L'inscription et la connexion s'affichent en popup, ainsi cela n'affectera pas la disposition de la page.

Code standard à copier/coller et compléter : 

```html
<!-- Insérer les scripts suivants dans la balise <head>, le plus haut possible dans la page -->
<script>
    // Variables de configuration, le nom d'application est présent dans votre espace d'administration
    var logora_config = {
        shortname: "NOM_APPLICATION"
    };
</script>
<script src="https://api.logora.fr/auth.js"></script>
```

```html
<!-- Insérer cette balise n'importe où dans la page -->
<div id="logora_app"></div>
```

#### 2. Utiliser la librairie

Une fois la librairie insérée, l'authentification peut être déclenchée à l'aide d'un événement Javascript nommé `logora:authentication:require` :

Voici un exemple de code qui permet de déclencher l'événement :

```js
window.dispatchEvent(new Event("logora:authentication:require"));
```

Une fenêtre sera alors présentée à l'utilisateur pour qu'il se connecte ou commence le processus d'inscription. La méthode d'authentification dépend des paramètres choisis sur votre espace d'administration.

Une fois l'authentification terminée, l'utilisateur sera redirigé vers la page sur laquelle il a commencé le processus.

