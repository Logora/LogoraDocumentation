---
id: performance
title: Performance
description: Logora optimizes its scripts to minimize their impact on your page load.
---

Logora does everything to minimize the impact of embedded code on your page load. Here are the technical details to evaluate the performance of the embedded scripts.

## 1) Article footer synthesis

The synthesis script is served from:

```
https://api.logora.fr/synthese.js
```

The synthesis code embedded in your articles works in four steps:

1. **Download the script** `synthese.js`
2. **Logora API call** to check if a debate matches the page. The response includes the synthesis HTML if a debate is associated. The HTML is pre-rendered by the server.
3. **Insert the code into the page** without further client-side processing.
4. **(Optional)** On the first call only, the script sends page metadata (title, tags, description) to ease article/debate matching.

:::tip High performance constraints?
Use [server-side install](/installation/server-side-sdk) to fetch the HTML directly into your template, with no client call. See also [Pre-render API](/faq/render-api).
:::

## 2) Debate space

The debate space script is served from:

```
https://api.logora.fr/debat.js
```

The code follows the same principle but downloads more scripts and makes more API calls based on user actions.

## 3) Preconnect to Logora domains

To speed up first load, preconnect to Logora domains in your `<head>`:

```html
<link rel="preconnect" href="https://api.logora.fr" />
<link rel="preconnect" href="https://app.logora.fr" />
<link rel="preconnect" href="https://render.logora.fr" />
<link rel="dns-prefetch" href="https://api.logora.fr" />
```

These directives tell the browser to establish TCP/TLS connections in parallel with HTML parsing.

## 4) Measure real impact

To measure Logora's impact on your pages:

1. **Pagespeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev/) — compare with and without Logora
2. **Chrome DevTools > Performance**: session recording to see CPU cost
3. **Real User Monitoring**: tag Logora pages in Datadog, New Relic, or Contentsquare

---

## See also

- [Server-side install](/installation/server-side-sdk) (no client call)
- [Comments module](/installation/module-commentaires)
- [Javascript install](/installation/javascript-sdk)
- [Pre-render API (`render.logora.fr`)](/faq/render-api)
