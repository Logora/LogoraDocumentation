---
id: render-api
title: API de pré-rendu (render.logora.fr)
description: Récupérez le HTML pré-rendu des débats, commentaires et widgets Logora pour les insérer dans une newsletter, une page d'accueil custom ou un CMS.
sidebar_label: API de pré-rendu
---

`render.logora.fr` est l'**API de pré-rendu** de Logora. Elle vous permet de récupérer directement le HTML d'un widget (débat, commentaires, vote, consultation…) sans charger le script JavaScript côté client.

:::tip Cas d'usage typiques
- Insérer les **commentaires d'un article** dans une newsletter
- Construire une **page d'accueil custom** mettant en avant les débats les plus actifs
- Pré-rendre côté serveur pour le **SEO** (le HTML sert directement les crawlers)
- Brancher un **CMS tiers** (Livingdocs, Drupal, etc.) qui consomme du HTML
:::

Documentation interactive complète : **[https://render.logora.fr/docs](https://render.logora.fr/docs)**.

## Authentification

Aucune. Les endpoints render acceptent les requêtes anonymes — le contrôle d'accès se fait via le `shortname` de votre application.

## Paramètres communs

Tous les endpoints partagent ces paramètres en query string :

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `shortname` | string | ✅ | Le shortname de votre application (visible dans l'admin Logora) |
| `language` | string | optionnel | Langue d'affichage : `fr`, `en`, `es`, ou `de`. Défaut `fr`. |
| `noHtml` | boolean | optionnel | Si `true`, ne renvoie que les métadonnées (sans le HTML compilé) |

## Endpoints

### `POST /synthesis` — synthèse d'un débat

Renvoie le HTML de la synthèse d'un débat lié à une page de votre site.

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `shortname` | string | ✅ | |
| `uid` | string | ✅ | Identifiant de la page (le `uid` de votre source) |
| `device` | string | optionnel | `mobile`, `tablet` ou `desktop` (pour adapter le responsive) |
| `language` | string | optionnel | |
| `noHtml` | boolean | optionnel | |

**Réponse** :

```json
{
  "success": true,
  "debate": {
    "id": 123,
    "slug": "my-debate",
    "name": "My debate ?",
    "direct_url": "https://example.com/debate/my-debate",
    "type": "Group"
  },
  "content": "<div id=\"logoraRoot\">...</div>"
}
```

**Exemple réel (production)** :

```
POST https://render.logora.fr/synthesis?shortname=milenio-4e7a57&uid=2050434
```

### `POST /embed/comments` — module de commentaires

Renvoie le HTML du module de commentaires associé à une source.

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `shortname` | string | ✅ | |
| `uid` | string | ✅ | Identifiant unique de la source |
| `language` | string | optionnel | |
| `noHtml` | boolean | optionnel | |

**Exemple réel (production)** :

```
POST https://render.logora.fr/embed/comments?shortname=krone-f8d02e&uid=3930450&device=tablet
```

### `GET /app` — page complète d'espace de débat

Renvoie le HTML d'une page complète d'espace de débat (ex. landing page débat).

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `shortname` | string | ✅ | |
| `url` | string | ✅ | URL de la page à rendre |

### `POST /widget` — widget de débat (par `uid`)

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `shortname` | string | ✅ | |
| `uid` | string | optionnel | |
| `language` | string | optionnel | |
| `noHtml` | boolean | optionnel | |

### `POST /embed/argument` — widget d'un argument particulier

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `shortname` | string | ✅ | |
| `id` | string | ✅ | Identifiant de l'argument |
| `language` | string | optionnel | |
| `noHtml` | boolean | optionnel | |

### `POST /embed/group` — widget d'un débat (par `id`)

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `shortname` | string | ✅ | |
| `id` | string | ✅ | Identifiant du débat (group) |
| `language` | string | optionnel | |
| `noHtml` | boolean | optionnel | |

### `POST /embed/proposal` — widget d'une proposition

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `shortname` | string | ✅ | |
| `id` | string | ✅ | Identifiant de la proposition |
| `language` | string | optionnel | |
| `noHtml` | boolean | optionnel | |

### `POST /embed/consultation` — widget d'une consultation

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `shortname` | string | ✅ | |
| `id` | string | ✅ | Slug de la consultation |
| `language` | string | optionnel | |
| `noHtml` | boolean | optionnel | |

### `POST /embed/vote` — widget de vote

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `shortname` | string | ✅ | |
| `id` | string | ✅ | Identifiant du vote |
| `language` | string | optionnel | |
| `noHtml` | boolean | optionnel | |

## Réponse type

La plupart des endpoints `/embed/*` renvoient :

```json
{
  "success": true,
  "resource": { "id": 1234 },
  "html": "<div id=\"logoraRoot\">...</div>"
}
```

`/synthesis` et `/widget` renvoient un payload légèrement différent (avec une clé `debate` plutôt que `resource`, et `content` plutôt que `html`).

## Erreurs

En cas d'échec, la réponse est de la forme :

```json
{
  "success": false,
  "error": "Data fetching error"
}
```

## Exemple complet : top débats dans une newsletter

```javascript
// Côté serveur de votre newsletter (Node.js par exemple)

// 1. Récupérer la liste des débats récents via l'API publique
const groupsRes = await fetch(
  'https://app.logora.fr/api/v1/groups?per_page=3',
  { headers: { 'Authorization': `Bearer ${accessToken}` } }
);
const { data: debates } = await groupsRes.json();

// 2. Pour chaque débat, récupérer la synthèse pré-rendue
const blocks = await Promise.all(debates.map(async (d) => {
  const res = await fetch(
    `https://render.logora.fr/synthesis?shortname=YOUR_APP&uid=${d.uid}`,
    { method: 'POST' }
  );
  const { content } = await res.json();
  return content;
}));

// 3. Insérer dans votre template d'email
const newsletterHtml = template.replace('{{debates}}', blocks.join(''));
```

## Voir aussi

- **[Swagger interactif du Render API](https://render.logora.fr/docs)**
- [API publique Logora](/faq/api) — pour les endpoints REST classiques
- [Installation côté serveur](/installation/server-side-sdk) — alternative pour intégrer le HTML dans vos pages d'articles
