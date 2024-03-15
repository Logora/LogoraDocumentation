---
id: iframes
title: Redimensionnement des iframes
description: Redimensionner dynamiquement les iframes de Logora.
---

Dans le cas où vous souhaiteriez utiliser les iframes de Logora dans vos articles et utiliser un redimensionnement dynamique selon la taille du contenu de l'iframe, vous pouvez utiliser un script externe qui utilise la librairie npm [iframe-resizer](https://www.npmjs.com/package/iframe-resizer). 

Il faut ajouter un script qui charge le code minifié permettant le redimensionnement et appeler la fonction correspondante. 

Cela se réalise en 3 temps : 1) insertion du code dans le head de votre page, 2) insertion du code script dans le body de votre page, 3) insertion de l'iframe comme à votre habitude. 

#### Insérer le code minifié de redimensionnement et appeler la fonction.

```html
 <head>
    <!-- Chargement du code minifié -->
    <script src="https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.5/js/iframeResizer.min.js"></script>
  </head>
  <!-- iframe de Logora disponible sur l'espace d'administration -->
<iframe class="logoraIframe" style="border: 0;" src="https://cdn.logora.com/embed.html?shortname=demo&id=14593&resource=group" width="100%" height="285"></iframe>
<script>
    iFrameResize( [{}], ".logoraIframe");
</script>
```
