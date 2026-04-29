---
id: onboarding
title: Création des utilisateurs
description: Comment Logora crée les profils utilisateurs, gère les alias, et résout les cas limites
---

## Fonctionnement

L'utilisateur, lorsqu'il participe pour la première fois sur votre espace de discussion, se crée un profil. Cette création se fait automatiquement lorsqu'il est inscrit dans votre système comme décrit dans les articles liés au [Single Sign On](/authentication/introduction).

Vous nous envoyez les informations suivantes :

- **Prénom** (`first_name`)
- **Nom** (`last_name`, optionnel)
- **Email** (`email`)
- **Avatar** (`image_url`, optionnel)

pour que nous puissions créer le profil de l'utilisateur.

## Alias et onboarding

Si vous ne nous transmettez **aucun prénom / nom**, nous générons automatiquement des **alias** pour vos utilisateurs.

Si vous le souhaitez, nous pouvons ajouter une **pop-up d'onboarding** pour demander à l'utilisateur de changer de prénom / nom et d'avatar :

<img src="/img/onboardingbox.png" alt="Onboarding utilisateur" width="400"/>

:::tip Activer la pop-up d'onboarding
Demandez à Logora d'activer ce paramètre dans votre admin (*Configuration > Onboarding > Pop-up de bienvenue*).
:::

La bibliothèque d'avatars par défaut peut aussi être remplacée par vos propres images. Contactez Logora pour le faire.

---

## Cas limites courants

Cette section recense les cas limites identifiés en production et leurs solutions.

### Nom trop court

:::warning Cas vécu : Bild, RTL
Logora exige `first_name` ≥ **2 caractères**. Quand votre SSO envoie une initiale (« D »), l'utilisateur reste bloqué sur l'onboarding et ne peut pas participer.
:::

**Solutions** :

| Solution | Quand l'utiliser |
|---|---|
| Activer **Pseudo libre** | L'utilisateur choisit un pseudo Logora indépendant de son nom SSO |
| Activer `updateUserOnLogin` | Vous corrigez le nom de votre côté, Logora le récupère au prochain login |
| **Bypass admin** | Pour un cas isolé : *Modération > Utilisateurs > [user] > Forcer l'onboarding* |

### Doublon d'email entre vos systèmes

Si l'utilisateur a un compte Google `marie@x.com` (créé directement dans Logora) puis un compte SSO `marie@x.com`, Logora considère par défaut qu'il s'agit du **même utilisateur**.

Pour forcer l'unicité par `uid` (votre identifiant interne) plutôt que par email, voir [Dépannage SSO > Conflit Google login / SSO](/faq/troubleshooting-sso#conflit-google-login--sso-sur-le-même-email).

### Utilisateur sans email

Certains opérateurs (RTL, certains telcos, login social via téléphone) ne fournissent pas d'email. Dans ce cas :

- Logora génère automatiquement un email factice : `{uid}@noemail.logora.fr`
- L'utilisateur **ne recevra aucune notification**
- Pour collecter quand même l'email, activez *Configuration > Onboarding > Demander l'email à l'onboarding*

:::note
Cette pop-up ne bloque pas l'utilisateur : il peut continuer sans renseigner d'email, mais perdra les notifications.
:::

### Première lettre du prénom mise en majuscule

Logora applique un title-case par défaut sur `first_name` (« peter » devient « Peter »). Pour désactiver et garder la casse exacte de votre SSO :

> *Admin > Configuration > Authentification > Auto-capitalize first name → désactivé*

:::tip Cas vécu : Krone
Krone (Kronen Zeitung) souhaitait préserver la casse exacte. Une fois l'option désactivée, le `first_name` est passé tel quel.
:::

### Utilisateur sans avatar

Si vous ne fournissez pas d'`image_url`, Logora attribue automatiquement un avatar par défaut depuis sa bibliothèque (visage généré algorithmiquement par initiales).

Si votre `image_url` ne s'affiche pas, vérifiez qu'elle respecte le [format requis](/authentication/jwt#format-requis-pour-image_url).

### Bibliothèque d'avatars custom

Pour remplacer notre bibliothèque par la vôtre (avatars matching votre charte graphique), envoyez-nous vos images à [contact@logora.fr](mailto:contact@logora.fr).

Format requis :

- 50 images PNG transparentes
- 200×200 px
- Cohérence visuelle (même style)

---

## Voir aussi

- [Authentification SSO — Introduction](/authentication/introduction)
- [Authentification JWT — Format de l'image_url](/authentication/jwt#format-requis-pour-image_url)
- [Dépannage SSO](/faq/troubleshooting-sso)
