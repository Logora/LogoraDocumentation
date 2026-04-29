---
id: account-deletion
title: Suppression et bannissement
description: Différences entre suppression de compte (RGPD), bannissement, et empêcher la recréation
sidebar_label: Suppression de compte
---

Plusieurs scénarios de suppression de compte sont possibles selon votre intention. Cette page clarifie les différences et les comportements associés.

:::info À retenir
- **Suppression volontaire (RGPD)** : l'utilisateur efface son propre compte, ses données personnelles sont anonymisées mais ses contributions restent visibles.
- **Bannissement** : sanction administrative, l'utilisateur ne peut plus contribuer mais son compte reste visible.
- **Bannissement avec blocage** : empêche aussi la recréation d'un compte avec la même adresse.
:::

## 1. L'utilisateur supprime son compte (RGPD)

L'utilisateur clique sur *Mon profil → Supprimer mon compte* (option à activer dans *Configuration > Onboarding*).

### Ce qui est supprimé

- Adresse email
- Prénom, nom
- Avatar
- Biographie
- Notifications

### Ce qui est conservé (anonymisé)

- **Arguments et commentaires** — auteur affiché : « Utilisateur supprimé »
- **Votes** — l'impact statistique est conservé

:::note Conformité RGPD
Cette anonymisation est conforme au RGPD : la donnée personnelle est supprimée, mais le contenu public reste lisible. Référence : article L. 122-7 du Code de la propriété intellectuelle français.
:::

## 2. Vous bannissez un utilisateur (sanction)

Dans *Modération > Utilisateurs > [user] > Bannir* :

- L'utilisateur ne peut **plus écrire ni voter**
- Son compte reste **visible** avec son nom (pour traçabilité de la modération)
- Vous pouvez fixer une **durée** (ban temporaire) ou un ban permanent

## 3. Empêcher la recréation d'un compte

Si vous bannissez **et** souhaitez empêcher l'utilisateur de revenir avec un nouveau compte sur la même adresse mail, activez :

> *Modération > Bannissement > Bloquer la recréation*

:::caution Attention
Cette option **ne s'applique pas aux suppressions volontaires**. Un utilisateur qui supprime son compte de lui-même peut toujours en recréer un avec la même adresse. Si vous voulez bloquer ce cas aussi, contactez Logora pour activer l'option étendue.
:::

## 4. SSO et suppression : que se passe-t-il si l'utilisateur revient ?

Si votre SSO renvoie un `uid` que Logora ne reconnaît plus (compte supprimé) :

| Cas | Comportement Logora |
|---|---|
| Vous renvoyez le **même `uid`** | Logora **refuse la connexion** — le `uid` est marqué supprimé |
| Vous renvoyez un **nouveau `uid`** | Un **nouveau compte** est créé, sans lien avec l'ancien |

Pour qu'un utilisateur retrouve son ancien historique 6 mois plus tard, deux options :

1. Ne pas utiliser la suppression mais le **bannissement temporaire**
2. Relier le nouveau `uid` au `uid` historique via la route API `/users/merge`

## 5. Notification automatique via Backchannel Logout

Si votre système annonce une suppression de compte côté serveur (event `DELETED`), vous pouvez nous notifier en temps réel via le [Backchannel Logout](/authentication/backchannel-logout). Logora supprimera alors le compte de son côté automatiquement.

```http
POST https://app.logora.fr/auth/logout/YOUR_APP
Content-Type: application/x-www-form-urlencoded

logout_token=YOUR_SIGNED_JWT
```

:::tip Pour les développeurs
Le `logout_token` doit être un JWT signé contenant un claim `events` avec l'événement de suppression. Voir la doc complète sur [Backchannel Logout](/authentication/backchannel-logout).
:::

## 6. Récupérer ou exporter les données d'un utilisateur

Voir la page [Gestion des utilisateurs](/faq/data) pour les routes API permettant de récupérer ou anonymiser les données d'un utilisateur sur demande RGPD.
