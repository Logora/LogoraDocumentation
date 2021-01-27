---
id: oauth2
title: OAuth 2.0
---

Le protocole OAuth 2.0 permet la récupération sécurisée des ressources tout en protégeant les données de vos utilisateurs. Logora propose un service authentification conforme OAuth 2.0, qui permet de connecter automatiquement vos utilisateurs à l'application Logora une fois qu'ils sont connectés à votre système d'authentification.


### Avant de commencer

- Rendez-vous sur votre [Espace d'administration](https://admin.logora.fr) onglet *Configuration > Authentification* pour choisir le mode d'authentification `OAuth2.0`.
- Munissez-vous de votre clé d'API et de votre clé secrète .

### Processus d'authentification

1. Lorsqu'un utilisateur se connecte sur votre site web, récupérez un jeton temporaire d'accès en demandant une autorisation à notre serveur OAuth 2.0.
2. Envoyez les informations de l'utilisateur à notre serveur en passant le jeton d'accès, et récupérez un identifiant de session liée à l'utilisateur connecté. Si Logora ne connaît pas cet utilisateur, celui-ci est inscrit chez nous.
3. Transmettez l'identifiant de session à l'application Logora, qui l'utilise pour identifier l'utilisateur.
4. Lorsque l'utilisateur se déconnecte de votre système, vous appelez la route de déconnexion de Logora.

### Mise en place

#### 1. Récupérer un jeton d'accès


Un jeton d'accès OAuth 2.0 est généré en utilisant votre clé d'API et votre clé secrète, grâce à une requête POST vers notre route d'autorisation. Exemple utilisant Curl :

```bash
curl -d grant_type=client_credentials -d client_id=API_KEY -d client_secret=API_SECRET -d scope=authentication https://app.logora.fr/oauth/token

// Réponse  
=> {"access_token":"Av9wbEK-0QTOdxhzB4S3-B1ZFKj1Z4y8Xcl17iVcHsg","token_type":"Bearer","expires_in":7200,"created_at":1579688184}
```

Si la requête est réussie, elle retourne un jeton d'accès dans l'attribut `access_token`. Ce jeton d'accès est valide deux heures. Les attributes `expires_in` et `created_at` permettent de calculer la date d'expiration du jeton.


#### 2. Connecter l'utilisateur sur Logora


Grâce au jeton d'accès, vous pouvez transmettre les informations de l'utilisateur à Logora. Lorsqu'un utilisateur se connecte à travers votre système d'authentification, appelez la route de connexion de Logora. Cette route renvoie un identifiant de session lié à l'utilisateur.

Le jeton d'accès Bearer OAuth 2.0 récupéré à l'étape 1 doit être transmis via l'en-tête `HTTP Authorization`.

Les informations utilisateur sont composées de :  
- `uid` (requis) : identifiant unique de l'utilisateur dans votre système, par exemple son ID dans votre base de données.  
- `first_name` (requis) : prénom de l'utilisateur ou pseudo.  
- `last_name` (optionnel) : nom de l'utilisateur.  
- `email` (requis) : email de l'utilisateur.

Voici un exemple de connexion avec CURL :

```bash
curl -H "Authorization: Bearer Av9wbEK-0QTOdxhzB4S3-B1ZFKj1Z4y8Xcl17iVcHsg" -d uid=12 -d first_name=Jean -d last_name=Dupont -d email=jean.dupont@exemple.com -X POST https://app.logora.fr/api/v1/users/login
 
// Réponse
=> {"success": "true","session_id": "14c98398-08c7-42ae-b1f7-e435920fccec"}
```

#### 3. Transmettre l'identifiant de session

Pour identifier l'utilisateur connecté, l'application Logora doit connaître son identifiant de session. Transmettez cet identifiant via le paramètre `remote_auth` dans les variables de configuration Javascript de l'espace de débat.

> ATTENTION : vérifiez que les paramètres transmis ne sont pas derrière un cache. L'identifiant de session doit toujours être à jour, quel que soit l'état de l'utilisateur, connecté ou non.

```javascript
var logora_config = {
    remote_auth: "14c98398-08c7-42ae-b1f7-e435920fccec",
    //... Autres paramètres
}
```

#### 4. Déconnecter l'utilisateur

Lorsque l'utilisateur se déconnecte de votre système d'authentification, appelez la route de déconnexion de Logora en passant l'identifiant de session, ou retirez le paramètre `remote_auth`.

Voici un exemple de requête de déconnexion :

```
curl -H "Authorization: Bearer Av9wbEK-0QTOdxhzB4S3-B1ZFKj1Z4y8Xcl17iVcHsg" -d session_id=14c98398-08c7-42ae-b1f7-e435920fccec -X POST https://app.logora.fr/api/v1/users/logout 

// Réponse
=> {"success": "true"}
```

#### 5. Rediriger vers l'espace de débat après connexion de l'utilisateur

Lorsqu'un utilisateur non connecté veut effectuer une action sur l'espace de débat ou la synthèse, il est redirigé vers votre page de connexion ou d'inscription. Lors de l'insertion de l'espace de débat ou de la synthèse, vous pouvez définir les URLs de connexion et d'inscription, respectivement via les variables auth.login_url et auth.registration_url :

```html
<div id="logora_app"></div>
<script>
    // Variables de configuration
    var logora_config = {
        shortname: "exemple-identifiant", // Nom d'application présent dans votre espace d'administration
        auth: {
          login_url: "Votre URL de connexion", // Insérer ici votre url de connexion
          registration_url: "Votre URL de redirection" // Insérer ici votre url d'inscription
        }
    };


    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://api.logora.fr/debat.js';
        (d.head || d.body).appendChild(s);
    })();
</script>
```

Lors de la redirection, un paramètre de requête logora_redirect est transmis, contenant l'URL de la page avant redirection. Utilisez ce paramètre pour rediriger l'utilisateur après sa connexion ou son inscription. Le nom du paramètre transmis peut être modifié, il peut être par exemple défini à redirect_to (https://votresite.fr/login?redirect_to=URL_ORIGINE). Pour changer le nom du paramètre, utilisez la variable auth.redirectParameter.
