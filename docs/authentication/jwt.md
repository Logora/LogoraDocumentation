---
id: jwt
title: JWT
---

Ce mode d'authentification permet de connecter automatiquement les utilisateurs à Logora une fois qu'il sont authentifiés à travers votre système de connexion. Cette méthode utilise un jeton JWT (JSON Web Token) signé (JWS) ou chiffré (JWE) pour transmettre les données de l'utilisateur à Logora.

### Avant de commencer

- Rendez-vous sur votre [Espace d'administration](https://admin.logora.fr) onglet *Configuration > Authentification* pour choisir le mode d'authentification `JWT`.  
- Munissez-vous de votre clé secrète d'API. Cette clé secrète vous servira à créer le jeton JWT. Elle doit rester confidentielle. 

### Processus d'authentification

1. Lorsque l'utilisateur se connecte sur votre site web, vous devez créer le jeton JWT contenant les informations de l'utilisateur. Il sera transmis à Logora. 
2. Lorsque l'utilisateur se rend sur une page où est inséré le code Logora, le jeton JWT est inséré dans les variables de configuration Javascript, via le paramètre `remote_auth`.
3. L'application Logora détecte le jeton JWT, le décode, le vérifie et inscrit ou connecte l'utilisateur.

### Mise en place

> ATTENTION : le jeton JWT transmis à Logora doit toujours être mis à jour selon l'état de l'utilisateur, qu'il soit connecté ou non. Si les pages de votre site web sont derrière un cache, notamment les pages qui contiennent la synthèse du débat, il est possible que le jeton JWT ne soit pas mis à jour. Si la mise en cache gêne la création du jeton JWT, utilisez une autre méthode d'authentification.

#### 1. Génération du jeton JWT

Grâce à la [sérialisation JSON Web Token](https://jwt.io/), les éditeurs peuvent transmettre les données utilisateurs existantes pour fournir aux utilisateurs une session authentifiée transparente sur Logora. Le jeton JWT doit être généré sur vos serveurs puis transmis à Logora via les variables de configuration javascript. Le jeton peut être signé ou chiffré, en fonction du degré de confidentialité que vous souhaitez obtenir pour les informations utilisateur.

##### Création du corps du jeton

Le corps du jeton contient les informations de l'utilisateur sous format JSON :

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
- `image_url` (optionnel) : lien vers l'avatar de l'utilisateur.
- `iat` : date de génération du jeton JWT

Le nom des champs est personnalisable sur l'espace d'administration si vous avez un format différent.

Vous pouvez maintenant créer le jeton, soit en format JWS, ou soit sous format JWE. Si vous n'êtes pas sûr de quelle solution choisir, choisissez la version signée qui est la plus utilisée et la plus simple à mettre en place.

##### JWT signé (JWS)

Le jeton est composée de trois parties, l'en-tête, le corps (payload) que vous avez généré précédemment et la signature.

En-tête du jeton
``` 
{ 
  "alg": "HS256", 
  "typ": "JWT" 
}
```

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
Avant de passer à la deuxième étape, vérifiez le bon fonctionnement du jeton sur le site web : https://jwt.io/

##### JWT chiffré (JWE)

Pour utiliser ce type de jeton, choisissez l'option "JWE" dans les paramètres de l'espace d'administration.
Le chiffrement du jeton permet de ne pas divulguer les informations utilisateur. Nous ne supportons que les clés de type RSA (RSA-OAEP et RSA1_5).

Pour générer le jeton, nous vous proposons de lire cet article qui explique le processus : https://dzone.com/articles/using-json-web-encryption-jwe

Voici un exemple de jeton généré avec le corps généré précédemment, et qui sera transmis à Logora :
```
eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkExMjhHQ00ifQ.FuNsYUYJzh294MQZ_71zOxBLiiOkU8UKF4b-wwhCKNKCm1452jnyxzljNTCkTGVhZui6CnBctUByqdvVugMzIlWxNA4hSXWvQUKxm-QJlJyqbdeL6URM2mxeqBxk3iEA7TIbLCd30pnFo8KkSbbHmkDVrVElJ403t0bNKPlvJkjU_Dc71tP3Zun-Nc_3PK9azldEZ7IEPYvd--leYPBBTThNZ--SHSWx_C8rF5a3PHaniVttguHX4EJ39V36xz_7FWFXh4ZNCCFp_kqa05_ixD0EEH11kpxdOv-wm_MgOyt9XODoIWqZUrcDywCkhNy_gIHP8LHbHFhyHR3o8qQvhQ.s_bngM9ad5tmrkQH.GJUshscvO9ZtspkyH-emLbbgyczh_uzFTbv_QEWM3iryARl0UrvYzaBjyBIr3o16bw4PfUCK-4TXTRzV4C56s63BNIwL7fY0AQXrBfRifg8AtaIg0NJyJXbnUzqB7Gx23KruL9g.zSNCxobkIFdAY82DRf1Qdw
```

Avant de passer à la deuxième étape, vérifiez le bon fonctionnement du jeton sur le site web : https://dinochiesa.github.io/jwt/

### 2. Transmission du jeton à Logora

Une fois que le message a été généré, il doit être transmis via la variable de configuration Javascript, `remote_auth`, dans le code de l'espace de débat.

```javascript
var logora_config = {
	remote_auth: jeton_JWT
}
```

Il faut également remplir l'interface sur l'espace d'administration :

![Admin JWT](/img/jwtadmin.png)

### 3. Déconnexion de l'utilisateur

Pour déconnecter l'utilisateur, retirez le paramètre `remote_auth` ou transmettez une chaîne de caractères vide. Si le paramètre est vide, Logora considère que l'utilisateur est déconnecté.

### 4. Redirection vers l'espace de débat après connexion de l'utilisateur

Lorsqu'un utilisateur non connecté veut effectuer une action sur l'espace de débat, il est redirigé vers votre page de connexion ou d'inscription. Lors de l'insertion de l'espace de débat et de la synthèse, vous devez définir les URLs de connexion et d'inscription, respectivement via les variables auth.login_url et auth.registration_url.

Lors de la redirection, un paramètre de requête logora_redirect est transmis, contenant l'URL de la page avant redirection. Utilisez ce paramètre pour rediriger l'utilisateur après sa connexion ou son inscription. Le nom du paramètre transmis peut être modifié, il peut être par exemple défini à redirect_to.

Ces paramètres peuvent être changés dans l'espace d'administration, dans l'onglet *Configuration > Authentification*

