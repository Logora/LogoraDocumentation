---
id: account-deletion
title: Suppression et anonymisation d'un utilisateur
description: Comment anonymiser ou supprimer un utilisateur via l'API Logora, et comment notifier Logora d'une suppression côté SSO.
sidebar_label: Suppression d'utilisateur
---

L'API Logora propose deux opérations pour gérer la suppression d'un utilisateur, selon votre besoin :

| Opération | Effet sur les contributions | Endpoint |
|---|---|---|
| **Anonymiser** | ✅ Conservées (auteur masqué) | `POST /api/v1/users/{user_uid}/anonymize` |
| **Supprimer** | ❌ Supprimées | `DELETE /api/v1/users/{user_uid}` |

Choisissez selon le contexte :

- **Demande RGPD d'effacement** → anonymisation suffit dans la plupart des cas (équilibre entre droit à l'oubli et préservation du contenu public).
- **Suppression définitive** (compte test, doublon, fraude avérée) → suppression complète.

## Anonymiser un utilisateur

```http
POST https://app.logora.fr/api/v1/users/{user_uid}/anonymize
Authorization: Bearer YOUR_TOKEN
```

Le `user_uid` est l'identifiant unique que **vous** transmettez à Logora via le SSO (champ `uid` du JWT).

Réponse `200` en cas de succès.

## Supprimer un utilisateur

```http
DELETE https://app.logora.fr/api/v1/users/{user_uid}
Authorization: Bearer YOUR_TOKEN
```

:::caution Action irréversible
La suppression efface l'utilisateur **et toutes ses contributions associées**. Cette opération n'est pas réversible.
:::

## Notifier Logora d'une suppression côté votre système (Backchannel Logout)

Si votre système d'authentification gère la suppression des comptes côté serveur (ex. RGPD via votre back-office), vous pouvez notifier Logora en temps réel via le [Backchannel Logout](/authentication/backchannel-logout).

L'endpoint accepte un JWT signé contenant les informations de la suppression.

```http
POST https://app.logora.fr/auth/logout/{shortname}
Content-Type: application/x-www-form-urlencoded

logout_token=YOUR_SIGNED_JWT
```

Voir la page dédiée pour le détail des claims attendus.

## Test via Swagger

Les deux endpoints `anonymize` et `delete` sont testables directement depuis le **[Swagger interactif](https://app.logora.fr/docs)**, section *Users*.

## Voir aussi

- [API publique Logora](/faq/api)
- [Backchannel Logout](/authentication/backchannel-logout)
- [Gestion des utilisateurs (FAQ)](/faq/data) — vue d'ensemble RGPD
