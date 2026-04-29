---
id: troubleshooting-sso
title: Dépannage SSO
description: Erreurs courantes lors de la mise en place du SSO et leurs solutions
sidebar_label: Dépannage SSO
---

Cette page recense les erreurs SSO les plus fréquemment remontées et leurs résolutions, avec les vrais cas clients qui les ont signalées.

## « Cloudflare is blocking your server-to-server OAuth requests »

:::danger Symptôme
Votre serveur d'authentification renvoie `HTTP 1020` ou `403` quand Logora appelle votre route `/oauth/token` (visible dans nos logs Datadog).
:::

**Cause** : votre WAF (Cloudflare, Akamai, AWS WAF, etc.) bloque les appels venant de notre IP serveur, considérée comme un bot.

**Solution** :

1. Ajoutez nos plages IP à la liste blanche de votre WAF :
   - `52.59.0.0/16` (Scaleway Paris)
   - `163.172.0.0/16`
2. Ou créez une **exception** sur la route `/oauth/token` (pas de challenge bot, pas de rate-limit)

:::tip Cas vécu
Sudkurier nous a remonté ce problème en 2025 : leur déploiement Cloudflare bloquait nos appels de validation de subscription. Une fois la route mise en exception, la mise en production a été immédiate.
:::

## « Failed to process backchannel logout: Connection refused »

**Symptôme** : `HTTP 422` au moment d'appeler `/auth/logout/YOUR_APP`.

**Cause** : votre `logout_token` ne contient pas l'`audience` attendue, ou pointe vers un domaine non joignable.

**Solution** : vérifiez que :

- Le claim `aud` du JWT de logout est `https://app.logora.fr`
- Votre URL de back-channel (configurée dans l'admin) est joignable depuis l'extérieur (pas de localhost, pas de port non standard)

## L'utilisateur reste sur la pop-up de login alors qu'il est connecté

:::warning Symptôme
L'utilisateur est authentifié sur votre site mais Logora lui demande quand même de se connecter en cliquant sur « Voter » ou « Commenter ».
:::

**Cause** : le JWT n'est pas régénéré côté serveur quand l'utilisateur est déjà loggé sur votre site.

**Solution** : votre backend doit générer le JWT pour **tout utilisateur authentifié**, pas seulement au moment du login. Le JWT doit être présent dans `logora_config.remote_auth` à **chaque rendu de page**.

```javascript
// ❌ Mauvais : JWT généré uniquement au login
var logora_config = {
  remote_auth: window.justLoggedIn ? generateJWT() : ''
};

// ✅ Bon : JWT généré pour tout user authentifié
var logora_config = {
  remote_auth: currentUser ? generateJWT(currentUser) : ''
};
```

## Première lettre du prénom mise en majuscule automatiquement

**Cause** : Logora applique un title-case par défaut sur `first_name`.

**Solution** : désactivez l'option *Auto-capitalize first name* dans *Admin > Configuration > Authentification*.

:::tip Cas vécu
Krone (Kronen Zeitung) a signalé ce comportement en août 2025 : leurs utilisateurs préféraient garder la casse exacte de leur nom (par ex. « peter » en minuscules pour respecter leur identité). Une fois l'option désactivée, le `first_name` est passé tel quel.
:::

## L'avatar SSO ne s'affiche pas

Cause habituelle : l'URL renvoie un `Content-Type` non standard ou nécessite une authentification.

Vérifiez les prérequis sur la page [JWT > Format requis pour `image_url`](/authentication/jwt#format-requis-pour-image_url) :

- **Extension** : `.png`, `.jpg` ou `.jpeg`
- **Content-Type** HTTP : `image/png` ou `image/jpeg`
- **Public** : pas de cookies, pas de token dans l'URL
- **Taille** : 200×200 px minimum recommandé

## Conflit Google login / SSO sur le même email

:::warning Symptôme
L'utilisateur a un compte Google `marie@example.com` (créé sur Logora directement). Vous lui passez ensuite un JWT pour `marie@example.com`. Logora bloque ou crée deux comptes distincts.
:::

**Solution** : forcez l'unicité par `uid` (votre identifiant interne) **et non par email**. Activez :

> *Admin > Configuration > Authentification > Identifier les utilisateurs par uid uniquement*

## L'utilisateur est bloqué sur l'onboarding (nom trop court)

Logora exige `first_name` ≥ 2 caractères. Si votre utilisateur a juste « D », deux options :

1. **Activer le pseudo libre** : *Configuration > Onboarding > Permettre le pseudo libre* — l'utilisateur peut choisir un pseudo Logora indépendant de son nom SSO
2. **Activer `updateUserOnLogin`** et demander à votre côté de corriger le nom

Voir aussi la page [Création des utilisateurs](/configuration/onboarding) section *Cas limites*.

## Token JWT considéré comme expiré sans raison

**Cause** : décalage horaire (clock skew) entre votre serveur et le nôtre, ou claim `iat` dans le futur.

**Solution** :

- Synchronisez votre serveur en NTP
- Si vous avez un `exp` court (< 30 s), pensez que le token doit voyager jusqu'au navigateur de l'utilisateur — prévoyez **au moins 60 s** entre `iat` et `exp`

## L'utilisateur perd sa session toutes les 2 heures

C'est **normal** : la session Logora expire après 2 heures par défaut. Si l'utilisateur reste authentifié sur votre site, le JWT régénéré à chaque rendu de page recrée automatiquement une session — sans qu'il s'en aperçoive.

Voir [JWT > Cycle de vie de la session](/authentication/jwt#cycle-de-vie-de-la-session).

## L'utilisateur ne peut pas se déconnecter

**Cause** : Logora ne sait pas que l'utilisateur s'est déconnecté de votre côté.

**Solution** : à la déconnexion sur votre site, faites une de ces deux choses :

1. **Côté client** : retirer le paramètre `remote_auth` ou le passer à chaîne vide
2. **Côté serveur** : appeler le [Backchannel Logout](/authentication/backchannel-logout) pour invalider la session immédiatement

## Besoin d'aide supplémentaire ?

:::tip Support technique
Si votre problème n'est pas listé ici, contactez-nous à [contact@logora.fr](mailto:contact@logora.fr) avec :

- L'URL de la page concernée
- L'`uid` de l'utilisateur impacté
- Un payload JWT d'exemple (anonymisé)
- Une capture de la console réseau du navigateur

Nous traitons ces demandes en priorité.
:::
