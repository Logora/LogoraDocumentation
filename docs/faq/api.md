---
id: api
title: Utiliser l'API Logora
description: Récupérer débats, messages, utilisateurs et statistiques via l'API REST Logora.
sidebar_label: API publique
---

L'API Logora expose 51 endpoints REST permettant d'accéder programmatiquement à vos débats, messages, utilisateurs, votes, statistiques, etc.

La documentation interactive complète (Swagger UI) est disponible ici : **[https://app.logora.fr/docs](https://app.logora.fr/docs)**.

## Authentification

L'API supporte deux schémas d'authentification (source : `securitySchemes` dans la spec OpenAPI) :

| Schéma | Type | Transport |
|---|---|---|
| `bearer_auth` | HTTP Bearer | Header `Authorization: Bearer ...` |
| `api_key` | API key | **Paramètre de query string** : `?api_key=...` |

:::caution Le paramètre `api_key` est en query string
Contrairement à beaucoup d'API, `api_key` n'est **pas** un header — c'est un paramètre d'URL. Cela signifie qu'il peut apparaître dans vos logs serveur et HTTP referer. Pour les usages serveur-à-serveur, préférez le bearer token OAuth (voir ci-dessous).
:::

### Récupérer un access token OAuth

```bash
curl -d grant_type=client_credentials \
     -d client_id=YOUR_API_KEY \
     -d client_secret=YOUR_CLIENT_SECRET \
     -d scope=public \
     https://app.logora.fr/oauth/token
```

Le scope `public` est celui mentionné dans la documentation officielle de l'API.

Une fois le token obtenu, ajoutez-le à vos requêtes :

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
     "https://app.logora.fr/api/v1/groups"
```

## Conventions communes

### Pagination

Les endpoints de liste renvoient les en-têtes HTTP suivants :

| Header | Description |
|---|---|
| `total` | Nombre total d'éléments |
| `total-pages` | Nombre total de pages |
| `current-page` | Page courante |
| `next-page` | Numéro de la page suivante |
| `page-items` | Éléments par page |
| `link` | Liens RFC 5988 vers les pages adjacentes |

Paramètres de query string standards sur les endpoints de liste :

- `page` : numéro de page (défaut 1)
- `per_page` : taille de page
- `cursor_pagination` (booléen) : pour basculer en pagination par curseur
- `countless` (booléen) : ne pas calculer le total (plus rapide)
- `sort` : tri (string, dépend de l'endpoint)

### Filtres temporels

Les endpoints de liste supportent les filtres temporels suivants (dates ISO 8601) :

```
?created_at.gte=2026-01-01T00:00:00Z
?created_at.lte=2026-01-31T23:59:59Z
```

## Endpoints principaux

### Lister les débats

```http
GET /api/v1/groups
Authorization: Bearer YOUR_TOKEN
```

Paramètres : `page`, `per_page`, `countless`, `sort`, `cursor_pagination`.

### Lister les messages (arguments et commentaires)

```http
GET /api/v1/messages?group_id=123
Authorization: Bearer YOUR_TOKEN
```

:::note Vocabulaire
Dans la nomenclature de l'API, les **arguments d'un débat** et les **commentaires** sont tous deux des `messages`. Le tag OpenAPI « Messages » est explicitement décrit comme *« Debate arguments and comments »*. Pour récupérer les arguments d'un débat, filtrez par `group_id`.
:::

Filtres disponibles : `page`, `per_page`, `sort`, `created_at.gte`/`.lte`, `is_edited`, `status`, `is_reply`, `moderation_score`, `score`, `user_id`, `group_id`, `position_id`, `language`, `is_deleted`, `is_selected`.

### Récupérer un utilisateur

```http
GET /api/v1/users/{user_hash_id}
Authorization: Bearer YOUR_TOKEN
```

:::warning Trois identifiants utilisateur différents
Selon l'endpoint, l'API utilise trois identifiants différents :

| Identifiant | Endpoints |
|---|---|
| `user_uid` (UUID que vous fournissez via SSO) | `POST /users/{user_uid}/anonymize`, `DELETE /users/{user_uid}` |
| `user_slug` | `PATCH /users/{user_slug}`, `/users/{user_slug}/messages`, `/users/{user_slug}/badges`, etc. |
| `user_hash_id` | `GET /users/{user_hash_id}` (show) |

Référez-vous toujours au paramètre attendu par chaque endpoint dans le [Swagger](https://app.logora.fr/docs).
:::

### Anonymiser un utilisateur

```http
POST /api/v1/users/{user_uid}/anonymize
Authorization: Bearer YOUR_TOKEN
```

Anonymise toutes les données personnelles tout en conservant les contributions.

### Supprimer un utilisateur

```http
DELETE /api/v1/users/{user_uid}
Authorization: Bearer YOUR_TOKEN
```

### Statistiques

```http
GET /api/v1/stats/{resource}?filter=day&from_date=2026-01-01&to_date=2026-01-31
Authorization: Bearer YOUR_TOKEN
```

Le segment `{resource}` doit valoir : `users`, `groups`, `consultations`, `messages`, `proposals`, ou `votes`.

| Paramètre | Description |
|---|---|
| `filter` | Dimension d'agrégation. Défaut `day`. Exemples : `day`, `week`, `month`. |
| `from_date` | Date de début (objets créés après cette date). |
| `to_date` | Date de fin. |

Réponse type :

```json
[
  { "dimension": "2026-04-30", "value": 3 },
  { "dimension": "2026-04-29", "value": 7 }
]
```

:::tip Granularité quotidienne
Pour des statistiques quotidiennes (et non un total agrégé), passez `filter=day`.
:::

## Modération via API

L'admin Logora gère la modération en interne, mais si vous avez votre propre file de modération externe vous pouvez aussi consommer ces endpoints :

```http
GET /api/v1/moderation_entries
PATCH /api/v1/moderation_entries/{id}
GET /api/v1/moderation_entries/lock
```

Le PATCH accepte un body avec `status`, `moderation_reason`, `is_moderated`.

## Voir aussi

- **[Swagger interactif](https://app.logora.fr/docs)** — la liste complète des 51 endpoints, avec « Try it out »
- [API de pré-rendu (`render.logora.fr`)](/faq/render-api) — pour récupérer du HTML pré-rendu pour newsletters et homepages
- [Suppression et anonymisation d'utilisateurs](/faq/account-deletion)
