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
- `id` : unique page identifier used by Logora to retrieve the associated synthesis

Example URL :
`https://cdn.logora.com/synthese-amp.html?shortname=logora-demo&id=1881`


#### Insertion

Add the following script in the `<head>` container in addition to all the AMP integration prerequisites:

```html
<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
```

Embed the amp-iframe in your page to load the summary in AMP format (the `<div overflow placeholder>` tag is required for the iframe to load). The iframe resizes automatically through AMP `embed-size` messages, which is why an initial height of 10 pixels is required.

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


#### Debate (embed iframe)

The standard embed iframe, used to insert a debate into an article, also works in an AMP page: it sends the parent a resize message in AMP format (`sentinel: 'amp'`, `type: 'embed-size'`, `height`) that the `amp-iframe` runtime accepts.

Base URL:
`https://cdn.logora.com/embed.html`

Dynamic parameters that must be specified in the URL:
- `shortname`: name of your application
- `id`: identifier of the object to display
- `resource`: object type (`group`, `consultation`, …)

Example URL:
`https://cdn.logora.com/embed.html?shortname=logora-demo&id=14593&resource=group`

Insertion: same prerequisites as the summary (the `amp-iframe` script in the `<head>`, an initial height of 10 pixels, the `<div overflow placeholder>` tag).

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

The height is sent only once, when the content is loaded, and AMP ignores any request below 100 pixels. For content whose height changes after the first load, use a non-AMP page with the [dynamic iframe resizing](../faq/iframes.md).
