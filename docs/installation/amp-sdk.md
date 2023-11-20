---
id: amp-sdk
title: Google AMP SDK
description: Insérez Logora sur vos pages Google AMP
---

L'intégration Google AMP SDK permet d'afficher la synthèse de débat dans vos pages AMP.

Pour cela, utilisez le composant [*amp-iframe*](https://amp.dev/documentation/components/amp-iframe) en utilisant le format de lien défini ci-dessous.


#### Schéma d'URL

URL de base : 
`https://cdn.logora.com/synthese-amp.html`

Paramètres dynamiques à spécifier dans l'URL :
- `shortname` : nom de l'application
- `id` : identifiant de la page

Exemple d'URL :
`https://cdn.logora.com/synthese-amp.html?shortname=logora-demo&id=1881`


#### Insertion

Ajoutez le script suivant dans le conteneur `<head>` en plus de tous les pré-requis de l'intégration AMP :
```html
<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
```

Intégrez l'amp-iframe dans votre page afin de charger la synthèse en format AMP (la balise `<div overflow placeholder>` est requise pour que l'iframe soit chargée). L'iframe se redimensionne automatiquement au chargement, c'est pourquoi il faut mettre une hauteur de 10 pixels.

```html
<amp-iframe
width="200"
height="10"
sandbox="allow-scripts allow-same-origin allow-top-navigation"
layout="responsive"
resizable
frameborder="0"
src="https://cdn.logora.com/synthese-amp.html?shortname=NOM_APPLICATION&id=PAGE_IDENTIFIER"
>
    <div overflow placeholder></div>
</amp-iframe>
```
