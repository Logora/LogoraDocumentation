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
- `id` : identifiant unique de la page utilisé par Logora pour retrouver la synthèse associée

Exemple d'URL :
`https://cdn.logora.com/synthese-amp.html?shortname=logora-demo&id=1881`


#### Insertion

Ajoutez le script suivant dans le conteneur `<head>` en plus de tous les pré-requis de l'intégration AMP :
```html
<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
```

Intégrez l'amp-iframe dans votre page afin de charger la synthèse en format AMP (la balise `<div overflow placeholder>` est requise pour que l'iframe soit chargée). L'iframe se redimensionne automatiquement via les messages AMP `embed-size`, c'est pourquoi il faut mettre une hauteur initiale de 10 pixels.

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


#### Débat (iframe d'intégration)

L'iframe d'intégration standard, utilisée pour insérer un débat dans un article, fonctionne aussi dans une page AMP : elle envoie au parent un message de redimensionnement au format AMP (`sentinel: 'amp'`, `type: 'embed-size'`, `height`) que le runtime `amp-iframe` accepte.

URL de base :
`https://cdn.logora.com/embed.html`

Paramètres dynamiques à spécifier dans l'URL :
- `shortname` : nom de l'application
- `id` : identifiant de l'objet à afficher
- `resource` : type d'objet (`group`, `consultation`, …)

Exemple d'URL :
`https://cdn.logora.com/embed.html?shortname=logora-demo&id=14593&resource=group`

Insertion : mêmes pré-requis que la synthèse (script `amp-iframe` dans le `<head>`, hauteur initiale de 10 pixels, balise `<div overflow placeholder>`).

```html
<amp-iframe
width="600"
height="10"
sandbox="allow-scripts allow-same-origin allow-top-navigation"
layout="responsive"
resizable
frameborder="0"
src="https://cdn.logora.com/embed.html?shortname=NOM_APPLICATION&id=IDENTIFIANT&resource=group"
>
    <div overflow placeholder></div>
</amp-iframe>
```

La hauteur n'est transmise qu'une seule fois, lorsque le contenu est chargé, et AMP ignore toute demande inférieure à 100 pixels. Pour un contenu dont la hauteur évolue après le premier chargement, utilisez une page non AMP avec le [redimensionnement dynamique des iframes](../faq/iframes.md).
