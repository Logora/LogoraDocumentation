---
id: performance
title: Performance
description: Logora optimise ses scripts pour minimiser leur impact sur le chargement de vos pages.
---

Logora met tout en œuvre pour que le code inséré ait le moins d'impact sur le chargement de vos pages. Voici quelques détails sur le fonctionnement de Logora pour mieux évaluer la performance des scripts insérés.

## 1) Synthèse en pied d'article

Le script de la synthèse est servi depuis :

```
https://api.logora.fr/synthese.js
```

Le code de la synthèse inséré dans vos articles procède en quatre étapes :

1. **Téléchargement du script** `synthese.js`
2. **Appel API Logora** pour vérifier si un débat correspond à la page en question. Cet appel renvoie le code HTML de la synthèse s'il y a un débat associé. Le code est pré-rendu par le serveur.
3. **Insertion du code dans la page** sans traitement supplémentaire côté client.
4. **(Optionnel)** Pour le premier appel de la page seulement, le script envoie les métadonnées de la page (titre, étiquettes, description) à nos serveurs pour faciliter l'association article/débat.

:::tip Contraintes de performance élevées ?
Utilisez l'[insertion côté serveur](/installation/server-side-sdk) pour récupérer le HTML directement dans votre template, sans appel client. Voir aussi [API de pré-rendu](/faq/render-api).
:::

## 2) Espace de débat

Le script de l'espace de débat est servi depuis :

```
https://api.logora.fr/debat.js
```

Le code procède de la même manière que celui de la synthèse, mais télécharge plus de scripts et fait plus d'appels à notre API en fonction des actions et de la navigation de l'utilisateur.

## 3) Précharger les domaines Logora

Pour accélérer le premier chargement, vous pouvez précharger les domaines Logora dans le `<head>` de votre page :

```html
<link rel="preconnect" href="https://api.logora.fr" />
<link rel="preconnect" href="https://app.logora.fr" />
<link rel="preconnect" href="https://render.logora.fr" />
<link rel="dns-prefetch" href="https://api.logora.fr" />
```

Ces directives signalent au navigateur d'établir les connexions TCP/TLS en parallèle du parsing HTML.

## 4) Mesurer l'impact réel

Pour mesurer l'impact de Logora sur vos pages :

1. **Pagespeed Insights** : [pagespeed.web.dev](https://pagespeed.web.dev/) — comparez vos pages avec et sans Logora
2. **Chrome DevTools > Performance** : enregistrement de session pour voir le coût en CPU
3. **Real User Monitoring** : si vous utilisez Datadog, New Relic ou Contentsquare, vous pouvez tagger les pages Logora pour suivre leur impact dans le temps

---

## Voir aussi

- [Installation côté serveur](/installation/server-side-sdk) (sans appel client)
- [Module de commentaires](/installation/module-commentaires)
- [Installation Javascript](/installation/javascript-sdk)
- [API de pré-rendu (`render.logora.fr`)](/faq/render-api)
