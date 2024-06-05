---
id: drawer
title: Intégration en tiroir
---

L'espace de débat peut être intégré sous forme de tiroir qui s'ouvre par la droite de l'écran [(démo)](https://demo.logora.fr/drawer.html).

#### Installation

Insérez le script qui gère l'intégration en tiroir dans la page, dans la balise <head>, ainsi qu'une balise ayant l'identifiant *logora_app*, et les paramètres de configuration Logora.

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
  
#### Utilisation

Pour ouvrir le tiroir, utilisez l'événement *logora:drawer:display* avec en argument le chemin de la page de l'espace de débat :

```js
  const event = new CustomEvent("logora:drawer:display", { detail: { initialPath: "/debat/mon-debat" }});
  window.dispatchEvent(event);
```
