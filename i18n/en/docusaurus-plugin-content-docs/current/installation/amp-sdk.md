---
id: amp-sdk
title: Google AMP SDK
description: Insert Logora on your Google AMP pages
---

The Google AMP SDK integration allows you to display the debate summary in your AMP pages.

To do this, use the [*amp-iframe*](https://amp.dev/documentation/components/amp-iframe) component using the link format defined below.


#### URL scheme

Base URL: 
`https://cdn.logora.com/synthese-amp.html`

Dynamic parameters that must be specified in the URL:
- `shortname` : name of your application
- `id` : unique page identifier

Example URL :
`https://cdn.logora.com/synthese-amp.html?shortname=logora-demo&id=1881`


#### Insertion

Add the following script in the `<head>` container in addition to all the AMP integration prerequisites:

```html
<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
```

Embed the amp-iframe in your page to load the summary in AMP format (the `<div overflow placeholder>` tag is required for the iframe to load). The iframe will resize automatically on load, that's why the height of 10 pixels is required.

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
