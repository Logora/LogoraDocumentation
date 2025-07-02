---
id: drawer
title: Intégration en tiroir
description: Intégrer Logora en format tiroir pour rester sur la même page
---

Cet article de documentation est complémentaire à l'installation "classique" via Javascript ou côté serveur. 

L'espace de débat peut être intégré sous forme de tiroir qui s'ouvre par la droite de l'écran ([démo](https://demo.logora.fr/drawer.html)).

Il faut quoi qu'il en soit d'abord installer l'espace de débat de manière [classique](javascript-sdk).

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

Deux événements sont disponibles pour gérer le tiroir :

- *logora:drawer:display* qui prend en argument le chemin de la page de l'espace de débat :

```js
  const event = new CustomEvent("logora:drawer:display", { detail: { initialPath: "/debat/mon-debat" }});
  window.dispatchEvent(event);
```

- *logora:drawer:close* qui permet de fermer le tiroir
```js
  const event = new CustomEvent("logora:drawer:close");
  window.dispatchEvent(event);
```
#### Désactiver l’affichage du tiroir pour un embed Logora spécifique
Si vous souhaitez désactiver l’affichage du tiroir pour un embed Logora spécifique, vous pouvez ajouter l’attribut data-disable-drawer directement sur la balise ``` <div> ``` de l’embed. Cela permet d’empêcher le chargement du tiroir pour ce composant uniquement. Par exemple :
```html
<div class="logora_embed" data-object-id="logora_config" data-disable-drawer></div>
```
Cet attribut désactive le tiroir pour cet embed, tout en laissant le comportement par défaut actif sur les autres instances. Cela peut être utile si, par exemple, vous souhaitez afficher les commentaires avec la navigation en tiroir sur la page article, mais préférez montrer d’autres modules comme les débats sur une page dédiée plutôt que dans le tiroir.
