---
id: amp-sdk
title: Google AMP SDK
description: Insérez Logora sur vos pages Google AMP
---

The Google AMP SDK integration allows you to display the debate summary in your AMP pages.

To do this, use the [*amp-iframe*](https://amp.dev/documentation/components/amp-iframe)component using the link format defined below.


#### URL scheme

Base URL: 
`https://api.logora.fr/synthese-amp.html`

Dynamic parameters to specify in the URL:
- `shortname` : name of the application
- `id` : page identifier

Example of URL :
`https://api.logora.fr/synthese-amp.html?shortname=logora-demo&id=1881`


#### Insertion

Add the following script in the `<head>` container in addition to all the AMP integration prerequisites:

```html
<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
```

Embed the amp-iframe in your page to load the summary in AMP format (the `<div placeholder>` tag is required for the iframe to load):

```html
<amp-iframe
width="200"
height="850"
sandbox="allow-scripts allow-same-origin allow-top-navigation"
layout="responsive"
frameborder="0"
src="https://api.logora.fr/synthese-amp.html?shortname=NOM_APPLICATION&id=PAGE_IDENTIFIER"
>
    <div placeholder></div>
</amp-iframe>
```
