---
id: performance
title: Performance
description: Logora optimizes its scripts to minimize impact on your page load and Core Web Vitals.
---

Logora does everything to minimize the impact of embedded code on your page load. Here are the technical details to evaluate the performance of the embedded scripts.

## 1) Article footer synthesis

The synthesis code embedded in your articles works in four steps:

1. **Download `embed.js`** (8 KB, served from CDN)
2. **Logora API call** to check if a debate matches the page (9 KB response, **10 ms** median latency)
3. **Insert pre-rendered HTML** from the server (no client-side processing)
4. **(Optional)** On first load, send page metadata to ease article/debate matching

| Metric | Value |
|---|---|
| `embed.js` size | 8 KB |
| API median latency | 10 ms |
| API 95th percentile | 50 ms |
| Server location | Paris |

:::tip High performance constraints?
Use [server-side install](/installation/server-side-sdk) to fetch the HTML directly in your template, no client call.
:::

## 2) Debate space

The debate space code follows the same principle but downloads more scripts and makes more API calls based on user actions.

| Metric | Value |
|---|---|
| Initial `debat.js` size | 60 KB |
| API median latency | 15 ms |
| API 95th percentile | 50 ms |
| Volume processed | Several million requests / day |

---

## 3) Avoid layout shift (Cumulative Layout Shift)

:::warning SEO impact
Layout shift on widget load hurts your **Core Web Vitals** (CLS), a Google ranking factor. Reserve space in the initial HTML to minimize this score.
:::

The Logora widget loads asynchronously after the initial HTML. To prevent it from shifting your page content, reserve a **minimum height** in the initial HTML.

### Debate space (synthesis)

```css
#logora_debate_block {
  min-height: 480px;  /* median synthesis widget height */
}
```

### Comments module

```css
#logora_comments {
  min-height: 320px;  /* 2-3 visible comments */
}
```

### Homepage module

```css
#logora_homepage {
  min-height: 240px;
}
```

:::tip Tune these values to your design
These are estimates based on median heights observed in production. Adjust to minimize shift **without** creating a visible blank gap. Measure your CLS on Pagespeed Insights after tuning.
:::

## 4) Lazy-loading

The Logora script supports deferred loading. For articles where the debate is at the bottom, enable lazy-loading:

```html
<script src="https://cdn.logora.com/debat.js" data-lazy="true" defer></script>
```

The script only fires **200 px from the viewport**, saving mobile bandwidth and improving Time-to-Interactive on the initial fold.

## 5) Optimize Core Web Vitals

| CWV metric | Logora recommendation |
|---|---|
| **LCP** (Largest Contentful Paint) | Don't place the widget above-the-fold of the LCP. Keep it at article footer. |
| **FID / INP** (Interactivity) | Logora script is non-blocking, runs `defer`. No measurable impact. |
| **CLS** (Layout Shift) | Reserve `min-height` (see section 3 above). |

## 6) Preconnect to Logora domains (optional)

To speed up first load, preconnect to Logora domains in your `<head>`:

```html
<link rel="preconnect" href="https://app.logora.fr" />
<link rel="preconnect" href="https://render.logora.fr" />
<link rel="preconnect" href="https://cdn.logora.com" />
<link rel="dns-prefetch" href="https://app.logora.fr" />
```

These directives tell the browser to establish TCP/TLS connections in parallel with HTML parsing, saving 50–150 ms on widget load.

## 7) Measure real impact

To measure Logora's impact on your pages:

1. **Pagespeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev/) — compare with/without Logora
2. **Chrome DevTools > Performance**: session recording to see CPU cost
3. **Real User Monitoring**: tag Logora pages in Datadog, New Relic, or Contentsquare

:::note Real-world cases: Beymedias, FAZ, Burda
Several clients reported Core Web Vitals drops after integrating Logora. In 100% of cases, applying the recommendations above (space reservation + lazy-loading) restored the original scores.
:::

---

## See also

- [Server-side install](/installation/server-side-sdk) (no client call)
- [Comments module](/installation/module-commentaires)
- [Javascript install](/installation/javascript-sdk)
