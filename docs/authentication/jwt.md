---
id: jwt
title: JWT
description: Authentification via le jeton JWT — génération, transmission, cycle de vie, format de l'avatar
---

Ce mode d'authentification permet de connecter automatiquement les utilisateurs à Logora une fois qu'ils sont authentifiés à travers votre système de connexion. Cette méthode utilise un jeton **JWT** (JSON Web Token) signé (JWS) ou chiffré (JWE) pour transmettre les données utilisateur à Logora.

:::tip Quand utiliser JWT ?
JWT est la méthode SSO **la plus simple à mettre en place** et la plus utilisée chez Logora. Si vous cherchez une alternative plus stricte côté sécurité (révocation token-by-token, scopes), regardez plutôt le [serveur OAuth 2.0](/authentication/oauth2_server).
:::

## Avant de commencer

- Rendez-vous sur votre [Espace d'administration](https://admin.logora.fr) onglet *Configuration > Authentification* pour choisir le mode d'authentification `JWT`.
- Munissez-vous de votre **clé secrète d'API**. Cette clé secrète vous servira à créer le jeton JWT. Elle doit rester confidentielle.

## Processus d'authentification

```
[Votre serveur]                [Navigateur]                 [Logora]
       │                              │                         │
       │  1. Login utilisateur        │                         │
       │ ◄────────────────────────── │                         │
       │                              │                         │
       │  2. Génère JWT signé         │                         │
       │ ──────────────────────────►  │                         │
       │                              │                         │
       │                              │  3. logora_config       │
       │                              │     contient JWT        │
       │                              │ ──────────────────────► │
       │                              │                         │
       │                              │  4. Logora valide,      │
       │                              │     ouvre une session   │
       │                              │ ◄────────────────────── │
```

1. Lorsque l'utilisateur se connecte sur votre site web, vous créez le jeton JWT contenant les informations de l'utilisateur côté serveur.
2. Lorsque l'utilisateur se rend sur une page où est inséré le code Logora, le jeton JWT est inséré dans les variables de configuration JavaScript, via le paramètre `remote_auth`.
3. L'application Logora détecte le jeton, le décode, le vérifie et inscrit ou connecte l'utilisateur.

## Mise en place

:::warning Pages mises en cache
Le jeton JWT transmis à Logora doit toujours être mis à jour selon l'état de l'utilisateur, qu'il soit connecté ou non. Si les pages de votre site web sont derrière un cache (notamment les pages contenant la synthèse du débat), il est possible que le jeton ne soit pas mis à jour.

Si la mise en cache empêche la création d'un jeton frais, utilisez une autre méthode d'authentification.
:::

### 1. Génération du jeton JWT

Le jeton JWT permet de transmettre les données utilisateurs existantes pour fournir une session authentifiée transparente sur Logora. Le jeton doit être généré sur **vos serveurs** puis transmis à Logora via les variables de configuration JavaScript. Il peut être signé ou chiffré, en fonction du degré de confidentialité que vous souhaitez.

#### Création du corps du jeton

Le corps du jeton contient les informations utilisateur sous format JSON :

```json
{
  "uid": "12345abc",
  "email": "jean@logora.fr",
  "first_name": "Jean",
  "last_name": "Dupont",
  "iat": 1755007651,
  "exp": 1755011251
}
```

Champs supportés (sensibles à la casse) :

| Champ | Type | Description |
|---|---|---|
| `uid` | string, **requis** | Identifiant unique associé à l'utilisateur dans votre base de données |
| `first_name` | string, **requis** | Prénom de l'utilisateur, ou nom d'utilisateur si `last_name` est vide |
| `last_name` | string, optionnel | Nom de famille |
| `email` | string, **requis** | Adresse email |
| `image_url` | string, optionnel | Lien vers l'avatar de l'utilisateur (voir [Format requis](#format-requis-pour-image_url)) |
| `iat` | number, **requis** | Date de génération du jeton (timestamp Unix) |
| `exp` | number, optionnel | Date d'expiration du jeton. Si présent, **la session ne démarrera pas si le jeton est expiré** |

:::note Noms de champs personnalisables
Si votre système utilise un format différent (ex. `userId` au lieu de `uid`), vous pouvez mapper les noms dans l'admin (*Configuration > Authentification*).
:::

#### JWT signé (JWS) — le plus simple

:::caution Si votre clé secrète est encodée en Base64
Activez l'option correspondante dans votre espace d'administration, sinon la signature ne sera pas valide.
:::

Le jeton est composé de trois parties : l'en-tête, le corps (payload) et la signature.

```
header = { "alg": "HS256", "typ": "JWT" }

payload = {
  uid: "123abc",
  first_name: "Jean",
  email: "jean@example.com",
  iat: 1516239022
}

signature = HMACSHA256(
   base64UrlEncode(header) + "." + base64UrlEncode(payload),
   SECRET_KEY
)

jetonJWT = base64UrlEncode(header) + "." + base64UrlEncode(payload) + "." + signature
```

Avant de passer à l'étape 2, vérifiez le bon fonctionnement du jeton sur **[https://jwt.io/](https://jwt.io/)**.

#### JWT chiffré (JWE) — plus de confidentialité

Le chiffrement empêche la lecture des informations utilisateur en cas d'interception. Pour utiliser ce type de jeton, choisissez l'option **JWE** dans les paramètres de l'admin. Nous ne supportons que les clés de type **RSA** (RSA-OAEP et RSA1_5).

Voir le tutoriel : [Using JSON Web Encryption (JWE)](https://dzone.com/articles/using-json-web-encryption-jwe).

Vérifiez le jeton sur **[https://dinochiesa.github.io/jwt/](https://dinochiesa.github.io/jwt/)**.

### 2. Transmission du jeton à Logora

Une fois le jeton généré, transmettez-le via la variable de configuration JavaScript `remote_auth` :

```javascript
var logora_config = {
  remote_auth: jeton_JWT
}
```

Il faut également remplir l'interface dans l'admin :

![Admin JWT](/img/jwtadmin.png)

### 3. Déconnexion de l'utilisateur

Pour déconnecter l'utilisateur, retirez le paramètre `remote_auth` ou transmettez une chaîne vide. Logora considère alors que l'utilisateur est déconnecté.

```javascript
var logora_config = {
  remote_auth: ""  // déconnexion
}
```

Pour une déconnexion **côté serveur en temps réel**, utilisez le [Backchannel Logout](/authentication/backchannel-logout).

### 4. Redirection vers l'espace de débat après connexion

Lorsqu'un utilisateur non connecté tente une action sur l'espace de débat, il est redirigé vers votre page de connexion ou d'inscription. Définissez ces URLs via les variables `auth.login_url` et `auth.registration_url`.

Lors de la redirection, un paramètre `logora_redirect` est transmis, contenant l'URL de la page avant redirection. Utilisez-le pour ramener l'utilisateur après connexion. Le nom du paramètre est personnalisable (par exemple `redirect_to`).

Ces paramètres se changent dans *Admin > Configuration > Authentification*.

---

## Cycle de vie de la session

### Durée d'une session Logora

Une fois le JWT validé, Logora ouvre **sa propre session** indépendamment de la vôtre. Cette session :

- expire **2 heures après** sa création (par défaut)
- peut être révoquée explicitement via le [Backchannel Logout](/authentication/backchannel-logout)
- peut inclure un claim `exp` côté JWT — si présent, **le token expiré ne démarre pas de session**

:::warning Question fréquente : un token volé peut-il être réutilisé indéfiniment ?
Non, à condition d'utiliser correctement le claim `exp`. Si vous craignez qu'un token volé soit rejoué :

1. **Toujours inclure un claim `exp` court** (≤ 5 minutes recommandé)
2. **Mettre à jour le `remote_auth` à chaque rendu de page** (pas de cache HTML qui fige le token)
3. **Appeler le backchannel logout côté serveur** lors de la déconnexion utilisateur sur votre site
:::

### Mettre à jour les infos utilisateur (`updateUserOnLogin`)

Activez l'option *Mettre à jour les informations utilisateur à chaque connexion* dans *Admin > Configuration > Authentification* pour que Logora rafraîchisse `first_name`, `last_name`, `email`, `image_url` à chaque login.

:::caution Cas particulier
Si vous activez cette option **et** que vous envoyez un `image_url`, l'avatar choisi par l'utilisateur dans Logora sera **écrasé à chaque login**. Si vous voulez laisser l'utilisateur choisir son avatar, n'envoyez **pas** `image_url`.
:::

### Format requis pour `image_url`

Pour que l'avatar SSO s'affiche dans Logora, votre URL doit servir une image avec :

| Critère | Valeur |
|---|---|
| **Extension** | `.png`, `.jpg` ou `.jpeg` |
| **Content-Type HTTP** | `image/png`, `image/jpeg` |
| **Accessibilité** | Publique, **sans authentification** (pas de cookies, pas de token dans l'URL) |
| **Taille recommandée** | 200×200 px minimum, ratio 1:1 |

:::danger Erreur fréquente (Krone, Bild)
Une URL qui retourne un binaire avec `Content-Type: application/octet-stream` ou nécessite des cookies d'authentification ne sera **pas prise en compte**. C'est la cause #1 des « avatars qui ne s'affichent pas » qu'on remonte.
:::

---

## Dépannage

Vous rencontrez un problème SSO (Cloudflare bloquant, conflit Google/SSO, token rejeté) ? Voir la page dédiée : **[Dépannage SSO](/faq/troubleshooting-sso)**.
