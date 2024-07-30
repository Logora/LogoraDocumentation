---
id: drawer
title: Intégration en tiroir
---

Cet article de documentation est complémentaire à l'installation "classique" via Javascript ou côté serveur. 

L'espace de débat peut être intégré sous forme de tiroir qui s'ouvre par la droite de l'écran ([démo](https://demo.logora.fr/drawer.html)).

Il faut quoi qu'il en soit d'abord installer l'espace de débat de manière "classique". 

#### Activation depuis votre espace d'administration

Depuis votre espace d'administration, allez dans "Configuration" > "Modules" et activez l'installation du mode tiroir. 

static/img/drawernavigation.png
![Drawer navigation](/img/drawernavigation.png)

#### Installation

Insérez le script qui gère l'intégration en tiroir dans vos pages, dans la balise head.

```html
  <!DOCTYPE html>
  <html>
    <head>
      <script src="https://cdn.logora.com/drawer.js"></script>
    </head>
  </html>
```
  
#### Utilisation avancée (optionnel)

Si nécessaire, pour ouvrir le tiroir, vous pouvez utiliser l'événement *logora:drawer:display* avec en argument le chemin de la page de l'espace de débat :

```js
  const event = new CustomEvent("logora:drawer:display", { detail: { initialPath: "/debat/mon-debat" }});
  window.dispatchEvent(event);
```
