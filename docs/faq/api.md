---
id: api
title: Utiliser l'API Logora
description: Récupérez vos débats, commentaires et statistiques via l'API REST
sidebar_label: API publique
---

Logora expose une API REST pour récupérer vos débats, commentaires et statistiques.

:::tip Cas d'usage typiques
- Insérer les débats les plus chauds dans une **newsletter**
- Ajouter un widget « Top débats » sur une **page d'accueil custom**
- Exporter les commentaires vers un **datalake**
- Brancher un **CMS tiers** (Livingdocs, Drupal, etc.)
:::

## Authentification

Toutes les routes requièrent un jeton OAuth 2.0. Récupérez votre clé API et votre clé secrète depuis votre [espace d'administration](https://admin.logora.fr) (*Configuration > Général*).

### Récupérer un jeton d'accès

```bash
curl -d grant_type=client_credentials \
     -d client_id=YOUR_API_KEY \
     -d client_secret=YOUR_API_SECRET \
     -d scope=public \
     https://app.logora.fr/oauth/token
```

Réponse :

```json
{
  "access_token": "Av9wbEK-0QTOdxhzB4S3-B1ZFKj1Z4y8Xcl17iVcHsg",
  "token_type": "Bearer",
  "expires_in": 7200
}
```

:::info Durée de vie du jeton
Le jeton est valide **2 heures**. Pensez à le renouveler avant expiration. Ajoutez-le dans l'en-tête `Authorization: Bearer YOUR_TOKEN` de toutes vos requêtes.
:::

## Routes principales

### Récupérer les débats actifs

```http
GET https://app.logora.fr/api/v1/groups?application_id=YOUR_ID&sort=hot
Authorization: Bearer YOUR_TOKEN
```

| Paramètre | Description | Exemple |
|---|---|---|
| `sort` | Ordre de tri | `hot`, `recent`, `popular` |
| `per_page` | Résultats par page (1-100) | `20` |
| `tag_name` | Filtrer par tag | `politique` |
| `language` | Filtrer par langue | `fr`, `en`, `de`, `es` |

### Récupérer la synthèse d'un débat (HTML pré-rendu)

```http
GET https://render.logora.fr/synthesis?short_name=YOUR_APP&uid=ARTICLE_UID
```

Renvoie le HTML complet (CSS + JS inclus) prêt à être inséré dans votre template ou newsletter.

### Récupérer les commentaires d'un article

```http
GET https://render.logora.fr/embed/comments?short_name=YOUR_APP&uid=ARTICLE_UID
```

### Récupérer les arguments d'un débat (JSON)

```http
GET https://app.logora.fr/api/v1/arguments?debate_id=DEBATE_ID&sort=score&per_page=10
Authorization: Bearer YOUR_TOKEN
```

### Récupérer les statistiques

```http
GET https://app.logora.fr/api/v1/stats?from=2026-01-01&to=2026-01-31&granularity=day
Authorization: Bearer YOUR_TOKEN
```

:::warning Granularité des statistiques
Pour des stats **quotidiennes** (et non un total agrégé), utilisez `granularity=day`. Sans ce paramètre, l'export CSV ne contient qu'**une seule ligne** avec le total de la période — comportement signalé plusieurs fois par les clients.

Granularités disponibles : `day`, `week`, `month`.
:::

## Exemple complet : top débats dans une newsletter

```javascript
// Côté serveur de votre newsletter
const accessToken = await getLogoraToken();

// 1. Récupérer les 3 débats les plus chauds
const { data: debates } = await fetch(
  'https://app.logora.fr/api/v1/groups?application_id=YOUR_ID&sort=hot&per_page=3',
  { headers: { 'Authorization': `Bearer ${accessToken}` } }
).then(r => r.json());

// 2. Pour chaque débat, récupérer la synthèse pré-rendue
const blocks = await Promise.all(debates.map(async (d) => {
  return fetch(
    `https://render.logora.fr/synthesis?short_name=YOUR_APP&uid=${d.uid}`
  ).then(r => r.text());
}));

// 3. Insérer dans votre template d'email
const newsletterHtml = template.replace('{{debates}}', blocks.join(''));
```

## Documentation Swagger complète

L'intégralité des routes est documentée et testable ici : **[https://app.logora.fr/docs](https://app.logora.fr/docs)**.

## Limites et bonnes pratiques

| Sujet | Limite / recommandation |
|---|---|
| **Rate limit** | 100 req/min par clé API. Au-delà, réponse `HTTP 429` |
| **Cache** | Les routes `/synthesis` et `/embed/comments` sont cachées 60 s côté Logora |
| **Pagination** | Utilisez `page` et `per_page`, ne chargez pas tout d'un coup |
| **Volumes importants** | Pour un export quotidien massif, préférez l'export CSV automatique (admin > Configuration > Exports) |
| **Temps réel** | Pour être notifié à chaque nouvel argument ou signalement, configurez un **webhook** dans *Admin > Configuration > Webhooks* |

:::tip Besoin d'aide ?
Pour toute question d'intégration ou demande d'accès à une route non documentée, contactez-nous à [contact@logora.fr](mailto:contact@logora.fr).
:::
