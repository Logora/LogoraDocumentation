---
id: backchannel-logout
title: Déconnexion automatique (Backchannel Logout)
description: Déconnexion automatique (Backchannel Logout)
---

La déconnexion automatique (ou "backchannel logout") permet à une application de notifier un fournisseur d'identité (IdP) qu'un utilisateur doit être déconnecté sur tous les services connectés via OpenID Connect (OIDC).

### 1. Cas d'une application compatible OAuth2/OIDC

Si votre application utilise OAuth2 et est compatible OIDC, l'intégration de la déconnexion backchannel est très simple :

- **Envoyez-nous simplement l'URL de l'issuer OIDC** (issuer ID) de votre fournisseur d'identité.
- Ajoutez l'URL de la route de déconnexion à votre client OIDC : https://app.logora.fr/auth/logout/NOM_APPLICATION.

Aucune implémentation supplémentaire n'est nécessaire de votre côté. Lorsqu'une déconnexion est déclenchée, notre API s'occupe de tout (vérification du token, suppression des sessions, etc.).

### 2. Cas d'une application non compatible OIDC

Si votre application n'est pas compatible OIDC, vous devrez effectuer les appels à notre API vous-même.

#### Route à utiliser

- `POST https://app.logora.fr/auth/logout/NOM_APPLICATION` : pour notifier la déconnexion d'un utilisateur, en remplaçant <NOM_APPLICATION> par votre nom d'application.

#### Exemple d'appel API

Le paramètre `logout_token` doit être passé dans le corps de la requête (formData) :

```bash
curl -X POST https://app.logora.fr/auth/logout/NOM_APPLICATION \
	-H "Content-Type: application/x-www-form-urlencoded" \
	-d "logout_token=<token>"
```

#### Comment générer le `logout_token` ?

Le `logout_token` est un JWT (JSON Web Token) signé par votre clé secrète disponible dans votre espace d'administration. Il doit contenir au minimum le claim `sub`, qui doit correspondre au **uid de l'utilisateur tel qu'il est transmis à Logora** (c'est-à-dire l'identifiant unique de l'utilisateur dans votre système, utilisé lors de la création du compte sur Logora).

Ce jeton permet à notre API de vérifier l’identité de l’utilisateur à déconnecter.
Créez un JWT avec les claims nécessaires (`sub`, `aud`, `iat`, etc.), signez-le avec votre clé secrète, puis transmettez-le dans le champ `logout_token` lors de l’appel à l’API.
