---
id: external-moderation
title: Prestataire de modération externe
description: Connectez votre prestataire de modération à Logora pour qu'il récupère les contenus en attente et renvoie ses décisions
---

Cette page s'adresse aux prestataires de modération qui modèrent un espace
Logora pour le compte d'un client. Votre outil interroge l'API Logora pour
récupérer les contenus en attente de modération, puis renvoie une décision pour
chacun d'eux.

La référence complète de l'API est disponible sur la
[documentation de l'API Logora](https://app.logora.fr/docs).

### Fonctionnement

Chaque contenu publié sur l'espace suit les étapes suivantes :

1. Un utilisateur publie un commentaire. En modération avant publication, il
   reste invisible jusqu'à la décision.
2. La modération automatique de Logora analyse le contenu. Elle accepte ou
   rejette les cas clairs et laisse les cas ambigus en attente.
3. Votre outil récupère les contenus en attente.
4. Votre outil envoie la décision : `accepted` publie le contenu, `rejected` le
   masque.
5. Votre outil peut revenir sur une décision à tout moment (postmodération).

:::note

Les contenus qui vous parviennent dépendent de la configuration de l'espace. Si
l'espace utilise la modération automatique de Logora, vous ne recevez que les
contenus qu'elle laisse en attente. Si l'espace est en modération manuelle,
vous recevez tous les contenus.

:::

### Prérequis : un compte modérateur

Votre outil s'authentifie avec un compte de l'espace d'administration Logora.
Pour obtenir ce compte :

1. L'administrateur de l'espace vous invite depuis **Équipe > Inviter un
   nouveau membre**, avec le rôle **Modérateur**. Voir
   [Invitations et gestion des rôles](../faq/invitation.md).
2. Créez votre compte sur l'[espace d'administration](https://admin.logora.fr)
   avec l'adresse e-mail invitée, puis acceptez l'invitation.

Nous recommandons un compte technique dédié plutôt qu'un compte personnel :
chaque décision est attribuée à ce compte dans l'historique de modération de
l'espace. Les rôles **Journaliste** et **Administrateur** donnent aussi accès à
la modération, mais le rôle **Modérateur** suffit.

Si votre compte est membre de plusieurs espaces, ajoutez à chaque requête
l'en-tête `current-application` avec le nom de l'application visée (visible
dans *Configuration > Général*). Sans cet en-tête, l'API utilise le premier
espace du compte.

### 1. Obtenir un jeton d'accès

Échangez l'identifiant et le mot de passe du compte contre un jeton d'accès :

```bash
curl -X POST https://app.logora.fr/oauth/token \
  -d grant_type=password \
  -d username=moderation@prestataire.example \
  -d password=MOT_DE_PASSE
```

Réponse :

```json
{
  "access_token": "JETON_D_ACCES",
  "token_type": "Bearer",
  "expires_in": 7200,
  "refresh_token": "JETON_DE_RAFRAICHISSEMENT",
  "scope": "public",
  "created_at": 1795770381
}
```

Le jeton d'accès est valable 2 heures (`expires_in`, en secondes). Avant son
expiration, demandez-en un nouveau avec le jeton de rafraîchissement :

```bash
curl -X POST https://app.logora.fr/oauth/token \
  -d grant_type=refresh_token \
  -d refresh_token=JETON_DE_RAFRAICHISSEMENT
```

Envoyez ensuite le jeton d'accès dans l'en-tête `Authorization` de chaque
requête : `Authorization: Bearer JETON_D_ACCES`.

### 2. Récupérer les contenus en attente

```bash
curl -H "Authorization: Bearer JETON_D_ACCES" \
  "https://app.logora.fr/api/v1/moderation_entries?status=pending&is_moderated=true&moderable_type=Message&sort=%2Bid&per_page=100&page=1"
```

Paramètres :

| Paramètre | Valeur | Description |
|---|---|---|
| `status` | `pending` | Requis. Contenus en attente de décision. |
| `is_moderated` | `true` | Contenus déjà analysés par la modération automatique de Logora. Omettez ce paramètre si l'espace est en modération manuelle. |
| `moderable_type` | `Message` | Commentaires et arguments uniquement. |
| `sort` | `+id` | Du plus ancien au plus récent. Encodez `+` en `%2B` dans l'URL. |
| `per_page` | `1` à `1000` | Nombre de contenus par page. `10` par défaut. |
| `page` | entier | Numéro de page, à partir de `1`. |

La pagination est renvoyée dans les en-têtes de la réponse : `total`,
`total-pages`, `current-page`, `page-items` et `next-page`. L'en-tête
`next-page` est absent sur la dernière page.

Exemple de réponse, réduit aux champs utiles à la modération :

```json
{
  "success": true,
  "data": [
    {
      "id": 81,
      "status": "pending",
      "moderation_reason": "ambiguous",
      "moderable_type": "Message",
      "moderable": {
        "id": 78,
        "content": "Texte du commentaire",
        "created_at": "2026-11-27T09:06:21.227Z",
        "edited_at": "2026-11-27T09:06:21.227Z",
        "is_reply": false,
        "reply_to_id": null,
        "direct_url": "https://www.example.com/article#commentaire-78",
        "language": "fr",
        "author_email": "auteur@example.com",
        "author": {
          "id": 223,
          "full_name": "Nestor Howe",
          "created_at": "2026-11-02T10:12:00.000Z",
          "moderation_status": "default"
        },
        "group": {
          "uid": "7546908e-98b0-4aaf-9e8a-4dc780f60627",
          "title": "Titre de l'article",
          "subtitle": "Sous-titre de l'article",
          "source_url": "https://www.example.com/article",
          "publisher": "Nom du média"
        }
      }
    }
  ]
}
```

Champs principaux :

| Champ | Description |
|---|---|
| `id` | Identifiant de l'entrée de modération. Utilisez-le pour envoyer la décision. |
| `moderation_reason` | Motif laissé par la modération automatique, si elle a analysé le contenu. |
| `moderable.content` | Texte à modérer. |
| `moderable.edited_at` | Date de la dernière modification du texte par son auteur. |
| `moderable.reply_to_id` | Identifiant du commentaire parent si le contenu est une réponse. |
| `moderable.direct_url` | Lien vers le contenu sur le site. |
| `moderable.author.id` | Identifiant unique et stable de l'auteur. |
| `moderable.author.full_name` | Nom affiché publiquement. |
| `moderable.author_email` | Adresse e-mail de l'auteur (donnée personnelle). |
| `moderable.group` | Article commenté : titre, sous-titre, URL et identifiant. |

Nous recommandons d'interroger l'API une fois par minute. Un contenu reste dans
la liste tant qu'aucune décision n'est enregistrée. Pour ne pas l'envoyer deux
fois à vos modérateurs, mémorisez les contenus en cours de traitement avec la
paire `id` et `moderable.edited_at`. Si l'auteur modifie son texte, le contenu
revient en attente avec le même `id` et une nouvelle valeur de `edited_at` :
traitez-le comme un nouveau contenu.

### 3. Envoyer une décision

```bash
curl -X PATCH https://app.logora.fr/api/v1/moderation_entries/81 \
  -H "Authorization: Bearer JETON_D_ACCES" \
  -H "Content-Type: application/json" \
  -d '{"status": "rejected", "moderation_reason": "insulte"}'
```

Corps de la requête :

| Champ | Description |
|---|---|
| `status` | Requis. `accepted` publie le contenu, `rejected` le masque. |
| `moderation_reason` | Optionnel. Motif de la décision, affiché dans l'espace d'administration. |
| `moderator_notes` | Optionnel. Note interne visible par l'équipe de l'espace. |

L'API répond `200` avec l'entrée mise à jour. Un contenu rejeté est masqué mais
pas supprimé : vous pouvez toujours le publier plus tard.

### Postmodération

Pour revenir sur une décision, envoyez une nouvelle requête `PATCH` sur le même
`id`. La dernière décision reçue s'applique, dans les deux sens.

Le champ `moderation_reason` n'est pas effacé automatiquement. Renvoyez-le avec
chaque nouvelle décision, vide si besoin.

L'équipe de l'espace peut aussi modérer un contenu depuis l'espace
d'administration. Là encore, la dernière décision s'applique. Un contenu déjà
traité par l'équipe disparaît de la liste des contenus en attente. Pour un
contenu resté longtemps chez vos modérateurs, vérifiez son statut avec
`GET /api/v1/moderation_entries/{id}` avant d'envoyer la décision.

### Erreurs

Les erreurs sont renvoyées au format suivant :

```json
{
  "success": false,
  "error": {
    "title": "Objet non trouvé",
    "detail": "Impossible de trouver l'objet demandé.",
    "code": "NOT_FOUND"
  }
}
```

| Code HTTP | Cause | Action |
|---|---|---|
| `400` | Paramètre invalide, par exemple un `status` inconnu. | Corrigez la requête. |
| `401` | Jeton absent, invalide ou expiré, ou compte sans rôle de modération sur l'espace. | Renouvelez le jeton. Si l'erreur persiste, vérifiez le rôle du compte avec l'administrateur de l'espace. |
| `404` | Entrée introuvable dans cet espace, par exemple parce que le contenu a été supprimé. | Ignorez le contenu. |
| `5xx` | Erreur temporaire. | Réessayez plus tard, avec un délai croissant. |

### Données personnelles

Les contenus transmis contiennent des données personnelles des auteurs,
notamment leur adresse e-mail. Traitez-les conformément au contrat qui vous lie
au client, et ne les conservez pas au-delà de ce qui est nécessaire à la
modération.
