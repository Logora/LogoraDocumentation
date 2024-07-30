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
![Drawer navigation](static/img/drawernavigation.png)

#### Installation du code

Insérez le script qui gère l'intégration en tiroir dans la page, dans la balise head, ainsi qu'une balise ayant l'identifiant *logora_app*, et les paramètres de configuration Logora.

```html
  <!DOCTYPE html>
  <html>
    <head>
      <script>
        var logora_config = {
          "shortname": "demo"
        };
      </script>
      <script src="https://cdn.logora.com/drawer.js"></script>
    </head>
    <body>
      <div id="logora_app"></div>
    </body>
  </html>
```

La balise avec l'identifiant *logora_app* peut être placée n'importe où, car le tiroir s'ouvre par-dessus la page.
  
#### Utilisation (optionnelle et avancée)

Pour ouvrir le tiroir, utilisez l'événement *logora:drawer:display* avec en argument le chemin de la page de l'espace de débat :

```js
  const event = new CustomEvent("logora:drawer:display", { detail: { initialPath: "/debat/mon-debat" }});
  window.dispatchEvent(event);
```
