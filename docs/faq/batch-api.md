---
id: batch-api
title: Récupération des données par lot (API)
description: Récupérez vos données Logora en batch via l'API et les exports CSV
---

> 📖 **Référence complète de l'API** : la liste de toutes les routes, paramètres et réponses est disponible sur **[https://app.logora.fr/docs/index.html](https://app.logora.fr/docs/index.html)**.

L'API Logora vous permet de récupérer automatiquement les données de votre espace de débat (commentaires, votes, débats, utilisateurs…) par requêtes programmées, puis de les traiter selon vos besoins (sauvegarde, analyse, croisement avec vos systèmes).

Il existe deux approches complémentaires :

- **L'API REST** : interrogez les ressources directement par requêtes HTTP (idéal pour du contact régulier et ciblé).
- **Les exports CSV** : depuis votre espace d'administration, générez un fichier complet des données, à télécharger ensuite (idéal pour une extraction complète en une fois).

#### Avant de commencer

- Rendez-vous sur votre [Espace d'administration](https://admin.logora.fr) (onglet *Configuration > Général*).
- Récupérez votre **clé d'API** (`API_KEY`) et votre **clé secrète** (`API_SECRET`) : elles servent à l'authentification.

---

### 1. Authentification

Deux méthodes sont disponibles.

#### 1.1. Par clé d'API (la plus simple)

Transmettez votre clé d'API en paramètre `api_key` à chaque requête :

```
GET https://app.logora.fr/api/v1/messages?api_key=API_KEY
```

#### 1.2. Par jeton OAuth 2.0

Demandez un jeton avec le scope souhaité :

```bash
curl -d grant_type=client_credentials -d client_id=API_KEY -d client_secret=API_SECRET -d scope=public \
  https://app.logora.fr/oauth/token

// Réponse
=> {"access_token":"...","token_type":"Bearer","expires_in":7200}
```

Le jeton `Bearer` est valable 2 heures et doit être ajouté à l'en-tête `Authorization` de vos requêtes :

```
Authorization: Bearer ACCESS_TOKEN
```

> Les routes de récupération de données (`messages`, `groups`, `consultations`, `votes`, `users`, etc.) acceptent soit le jeton OAuth, soit la clé d'API (`api_key`). Pour la gestion des comptes utilisateurs (anonymisation, suppression), consultez l'article [Gestion des utilisateurs](./data).

---

### 2. Récupérer les données par requêtes

**URL de base** : `https://app.logora.fr/api/v1/`

Les principales ressources consultables :

| Ressource | Route | Contenu |
| --- | --- | --- |
| Commentaires | `GET /messages` | messages, réponses, scores, auteurs |
| Débats | `GET /groups` | débats et leurs métadonnées |
| Consultations | `GET /consultations` | consultations ouvertes |
| Votes | `GET /votes` | votes des participants |
| Utilisateurs | `GET /users` | profils des inscrits |
| Propositions | `GET /proposals` | propositions (consultations) |
| Signalements | `GET /reports` | signalements et actions de modération |

**Filtrer** : chaque ressource accepte des filtres, par exemple `created_at_gte` / `created_at_lte` pour limiter à une période :

```
GET /api/v1/messages?created_at_gte=2026-01-01&created_at_lte=2026-12-31&api_key=API_KEY
```

**Paginer** : utilisez `page` et `per_page` pour parcourir l'ensemble des résultats (par défaut `page=1`, `per_page=10`) :

```
GET /api/v1/messages?page=1&per_page=100&api_key=API_KEY
```

Pour récupérer *toutes* les données, bouclez sur les pages jusqu'à épuisement. Le nombre total d'éléments et de pages est renvoyé dans les en-têtes de réponse `total` et `total-pages`. Les filtres et paramètres disponibles dépendent de chaque route : la liste complète est détaillée dans la [documentation de l'API](https://app.logora.fr/docs/index.html).

> **Astuce** : certaines routes exposent des statistiques agrégées via `GET /stats/{resource}` (par jour, semaine ou mois), utiles pour un tableau de bord sans reconstruire les totaux côté client.

---

### 3. Exporter l'ensemble des données en CSV

> :warning: L'export CSV n'est **pas disponible via l'API** : il se lance uniquement depuis votre **espace d'administration**.

Pour une extraction complète et ponctuelle, rendez-vous dans votre [espace d'administration](https://admin.logora.fr) et utilisez la fonction d'export :

- Choisissez la ressource à exporter, parmi `Message`, `User`, `Consultation`, `Proposal`, `Group`, `DebateSuggestion`, `Moderator::Report`.
- Appliquez éventuellement des filtres (par exemple une période avec `created_at_gte`).
- Lancez l'export : le fichier CSV est généré en arrière-plan puis téléchargeable depuis la même page. Le lien de téléchargement est valable deux semaines.

Pour une récupération *régulière* et automatisée, privilégiez plutôt l'API REST (section 2) ; l'export CSV de l'espace d'administration convient aux extractions complètes ponctuelles.

---

### 4. Bonnes pratiques

- **Programmez vos appels** : pour une récupération régulière (quotidienne, hebdomadaire), lancez vos requêtes depuis votre propre serveur, en filtrant sur la période écoulée (`created_at_gte`) plutôt qu'en re-téléchargeant tout.
- **Respectez les quotas** : espacez les appels ; en cas de gros volume, préférez l'export CSV de l'espace d'administration à de nombreuses requêtes paginées.
- **Sécurité** : conservez vos clés d'API et secrets côté serveur, ne les exposez jamais dans le navigateur.

Pour plus de détails, consultez la [documentation de notre API](https://app.logora.fr/docs/index.html).