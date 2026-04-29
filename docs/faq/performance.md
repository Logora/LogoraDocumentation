---
id: performance
title: Performance
description: Logora optimise ses scripts pour un impact minimal sur le chargement de vos pages et vos Core Web Vitals.
---

Logora met tout en œuvre pour que le code inséré ait le moins d'impact possible sur le chargement de vos pages. Voici les détails techniques pour évaluer la performance des scripts insérés.

## 1) Synthèse en pied d'article

Le code de la synthèse inséré dans vos articles procède en quatre étapes :

1. **Téléchargement du script** `embed.js` (8 Ko, servi depuis le CDN)
2. **Appel API Logora** pour vérifier si un débat correspond à la page (réponse 9 Ko, latence médiane **10 ms**)
3. **Insertion du HTML pré-rendu** par le serveur (pas de traitement supplémentaire côté client)
4. **(Optionnel)** Au premier chargement, envoi des métadonnées de la page pour faciliter l'association article/débat

| Métrique | Valeur |
|---|---|
| Taille `embed.js` | 8 Ko |
| Latence API médiane | 10 ms |
| Latence API 95e centile | 50 ms |
| Localisation serveur | Paris |

:::tip Contraintes de performance élevées ?
Utilisez l'[insertion côté serveur](/installation/server-side-sdk) pour récupérer le HTML directement dans votre template, sans appel client.
:::

## 2) Espace de débat

Le code de l'espace de débat fonctionne sur le même principe mais télécharge plus de scripts et fait plus d'appels API en fonction des actions de l'utilisateur.

| Métrique | Valeur |
|---|---|
| Taille `debat.js` initial | 60 Ko |
| Latence API médiane | 15 ms |
| Latence API 95e centile | 50 ms |
| Volume traité | Plusieurs millions de requêtes / jour |

---

## 3) Éviter le layout shift (Cumulative Layout Shift)

:::warning Impact SEO
Le layout shift au chargement du module pénalise vos **Core Web Vitals** (CLS), qui sont un facteur de classement Google. Réservez l'espace dès le HTML initial pour minimiser ce score.
:::

Le module Logora se charge en asynchrone après l'HTML initial. Pour éviter qu'il ne décale le contenu de votre page, réservez une **hauteur minimum** dès le HTML initial.

### Espace de débat (synthesis)

```css
#logora_debate_block {
  min-height: 480px;  /* hauteur médiane d'un widget de synthèse */
}
```

### Module de commentaires

```css
#logora_comments {
  min-height: 320px;  /* 2-3 commentaires visibles */
}
```

### Module de page d'accueil

```css
#logora_homepage {
  min-height: 240px;
}
```

:::tip Adaptez ces valeurs à votre design
Ces valeurs sont des estimations basées sur les hauteurs médianes constatées en production. Ajustez-les pour minimiser le décalage **sans** créer un trou blanc visible. Mesurez votre CLS sur Pagespeed Insights après ajustement.
:::

## 4) Lazy-loading

Le script Logora supporte le chargement différé. Pour les articles dont le débat est en bas de page, activez le lazy-loading :

```html
<script src="https://cdn.logora.com/debat.js" data-lazy="true" defer></script>
```

Le script ne se déclenche qu'à **200 px du viewport**, économisant la bande passante mobile et améliorant le Time-to-Interactive sur la fold initiale.

## 5) Optimiser les Core Web Vitals

| Métrique CWV | Recommandation Logora |
|---|---|
| **LCP** (Largest Contentful Paint) | Ne placez pas le widget en above-the-fold du LCP. Mettez-le en pied d'article. |
| **FID / INP** (Interactivité) | Le script Logora est non-bloquant, exécuté en `defer`. Aucun impact mesurable. |
| **CLS** (Layout Shift) | Réservez `min-height` (voir section 3 ci-dessus). |

## 6) Précharger les domaines Logora (optionnel)

Pour accélérer le premier chargement, vous pouvez précharger les domaines Logora dans le `<head>` :

```html
<link rel="preconnect" href="https://app.logora.fr" />
<link rel="preconnect" href="https://render.logora.fr" />
<link rel="preconnect" href="https://cdn.logora.com" />
<link rel="dns-prefetch" href="https://app.logora.fr" />
```

Ces directives signalent au navigateur d'établir les connexions TCP/TLS en parallèle du parsing HTML, gagnant 50-150 ms sur le chargement du widget.

## 7) Mesurer l'impact réel

Pour mesurer l'impact de Logora sur vos pages :

1. **Pagespeed Insights** : [pagespeed.web.dev](https://pagespeed.web.dev/) — comparez page avec/sans Logora
2. **Chrome DevTools > Performance** : enregistrement de session pour voir le coût en CPU
3. **Real User Monitoring** : si vous utilisez Datadog, New Relic ou Contentsquare, vous pouvez tagger les pages Logora

:::note Cas vécu : Beymedias, FAZ, Burda
Plusieurs clients ont remonté des chutes de Core Web Vitals suite à l'intégration Logora. Dans 100 % des cas, l'application des recommandations ci-dessus (réservation d'espace + lazy-loading) a restauré les scores initiaux.
:::

---

## Voir aussi

- [Installation côté serveur](/installation/server-side-sdk) (sans appel client)
- [Module de commentaires](/installation/module-commentaires)
- [Installation Javascript](/installation/javascript-sdk)
