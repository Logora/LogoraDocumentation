---
id: jwt
title: Signature JWT
---

Ce mode d'authentification permet de connecter automatiquement les utilisateurs à Logora une fois qu'il sont authentifiés à travers votre système de connexion. Cette méthode utilise un jeton JWT (JSON Web Token) par votre clé secrète pour transmettre les données de l'utilisateur à Logora.

### Avant de commencer

- Rendez-vous sur votre [Espace d'administration](https://admin.logora.fr) onglet *Configuration > Authentification* pour choisir le mode d'authentification `Signature JWT`.  
- Munissez-vous de votre clé secrète d'API. Cette clé secrète vous servira à créer le jeton JWT. Elle doit rester confidentielle. 

### Processus d'authentification

1. Lorsque l'utilisateur se connecte sur votre site web, vous devez créer jeton JWT contenant les informations de l'utilisateur. Il sera transmis à Logora. 
2. Lorsque l'utilisateur se rend sur une page où est inséré le code Logora, le jeton JWT est inséré dans les variables de configuration Javascript, via le paramètre `remote_auth`.
3. L'application Logora détecte le jeton JWT, le décode, le vérifie et inscrit ou connecte l'utilisateur.

### Mise en place

> ATTENTION : le jeton JWT transmis à Logora doit toujours être mis à jour selon l'état de l'utilisateur, qu'il soit connecté ou non. Si les pages de votre site web sont derrière un cache, notamment les pages qui contiennent la synthèse du débat, il est possible que le jeton JWT ne soit pas mis à jour. Si la mise en cache gêne la création du jeton JWT, utilisez une autre méthode d'authentification.

#### 1. Génération du jeton JWT

Grâce à la [sérialisation JSON Web Token](https://jwt.io/), les éditeurs peuvent transmettre les données utilisateurs existantes pour fournir aux utilisateurs une session authentifiée transparente sur Logora. Le jeton JWT doit être généré sur vos serveurs puis transmis à Logora via les variables de configuration javascript. Voici la composition du jeton, constitué des trois parties suivantes :

En-tête du jeton
``` 
{ 
  "alg": "HS256", 
  "typ": "JWT" 
}
```

Corps du jeton
```json
{
  "uid": "12345abc",
  "email": "jean@logora.fr",
  "first_name": "Jean",
  "last_name": "Dupont",
  "iat": 1516239022
}
```

Il doit inclure les attributs suivants, sensibles à la casse :
- `uid` : identifiant unique associé à l'utilisateur dans votre base de données.
- `first_name` : prénom de l'utilisateur, ou nom d'utilisateur si `last_name` est vide.
- `last_name` (optionnel) : nom de famille de l'utilisateur.
- `email` : l'adresse email enregistrée pour ce compte.
- `avatar` (optionnel) : lien vers l'avatar de l'utilisateur.
- `iat` : date de génération du jeton JWT

Signature  
```
HMACSHA256(
   base64UrlEncode(header) + "." +
   base64UrlEncode(payload),
   SECRET_KEY
)
```

Exemple en pseudo-code
```
header = { 
  "alg": "HS256", 
  "typ": "JWT" 
}
payload = {
  uid: "123abc",
  first_name: "Jean",
  last_name: "Dupont",
  email: "jeandupont@exemple.com",
  iat: 1516239022
}
signature = HMACSHA256(
   base64UrlEncode(header) + "." +
   base64UrlEncode(payload),
   SECRET_KEY
)

// Variable transmise à Logora
jetonJWT = base64UrlEncode(header) + "." + base64UrlEncode(payload) + "." + signature
=> "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMjNhYmMiLCJmaXJzdF9uYW1lIjoiSmVhbiIsImxhc3RfbmFtZSI6IkR1cG9udCIsImVtYWlsIjoiamVhbmR1cG9udEBleGVtcGxlLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.ITnJo8VwbP4PkVTANSt651C0olsrdRNCNmvTHkanuYk"
```

#### 2. Transmission du jeton à Logora

Une fois que le message a été généré, il doit être transmis via la variable de configuration Javascript, `remote_auth`, dans le code de l'espace de débat.

```javascript
var logora_config = {
	remote_auth: jeton_JWT
}
```

#### 3. Déconnexion de l'utilisateur

Pour déconnecter l'utilisateur, retirez le paramètre `remote_auth` ou transmettez une chaîne de caractères vide. Si le paramètre est vide, Logora considère que l'utilisateur est déconnecté.

#### 4. Redirection vers l'espace de débat après connexion de l'utilisateur

Lorsqu'un utilisateur non connecté veut effectuer une action sur l'espace de débat, il est redirigé vers votre page de connexion ou d'inscription. Lors de l'insertion de l'espace de débat et de la synthèse, vous devez définir les URLs de connexion et d'inscription, respectivement via les variables auth.login_url et auth.registration_url.

Lors de la redirection, un paramètre de requête logora_redirect est transmis, contenant l'URL de la page avant redirection. Utilisez ce paramètre pour rediriger l'utilisateur après sa connexion ou son inscription. Le nom du paramètre transmis peut être modifié, il peut être par exemple défini à redirect_to. Pour changer le nom du paramètre, utilisez la variable auth.redirectParameter.

```javascript
var logora_config = {
    remote_auth: jeton_JWT,
    auth: {
        login_url: "Votre URL de connexion",
        registration_url: "Votre URL d'inscription",
        redirectParameter: "redirectTo"
}
```


