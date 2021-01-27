---
id: cookie
title: Cookie
---

Ce mode d'authentification permet de connecter automatiquement les utilisateurs à Logora une fois qu'il sont authentifiés à travers votre système de connexion. La flexibilité de cette approche lui permet d'être compatible avec de nombreux types de systèmes de connexion.

### Avant de commencer

- Rendez-vous sur votre [Espace d'administration](https://admin.logora.fr) onglet *Configuration > Authentification* pour choisir le mode d'authentification `Cookie`.  

### Processus d'authentification

1. L'utilisateur se connecte sur votre site web; vous créez un cookie dans le navigateur de l'utilisateur pour identifier sa session.
2. L'application Logora détecte ce cookie, et utilise sa valeur pour faire une requête vers une route d'authentification sous votre contrôle.
3. Votre route valide la session de l'utilisateur, et si elle valide, renvoie des informations liées à l'utilisateur, sous format JSON.
4. Après réception de ces informations, Logora connecte ou inscrit l'utilisateur.

### Mise en place

#### 1. Définition des paramètres

Définissez les paramètres de l'authentification via les variables de configuration Javascript
```javascript
var logora_config = {
	//... Autres paramètres
	"auth": {
		"cookieName": "sessionCookie", // Nom du cookie qui identifie la session de l'utilisateur
		"endpoint": "https://auth.votresite.com/userInfo", // URL de la route de vérification
		"tokenName": "sessionId", // Nom du paramètre passé à la route de vérification
	}
}
```

Avec ces paramètres, le code Logora récupérera l'identifiant de session dans le cookie `sessionCookie`.

#### 1. Appel vers la route de vérification

La route de vérification doit avoir les caractéristiques suivantes :

Méthode : `POST`  
URL : `auth.endpoint`  
Corps de la requête :
- `auth.tokenName`: le nom du paramètre est défini par *auth.tokenName* (par exemple ici, `sessionId`). L'identifiant de session récupéré dans le cookie sera transmis via ce paramètre.

Forme de la réponse :  
```json
{
	"uid": "1234",
	"first_name": "Jean",
	"last_name": "Dupont",
	"email": "jeandupont@exemple.com",
	"avatar_url": "https://exemple.com/image.jpg"
}
```

- `uid` (requis) : identifiant unique de l'utilisateur dans votre base de données
- `first_name` (requis) : prénom ou pseudo de l'utilisateur
- `last_name` (optionnel) : nom de famille de l'utilisateur
- `email` (requis) : email de l'utilisateur
- `avatar_url` (optionnel) : URL de l'image de profil de l'utilisateur

> Il est possible de définir des noms de champs personnalisés dans l'espace d'administration.

#### 2. Déconnexion de l'utilisateur

Pour déconnecter l'utilisateur, retirez le paramètre `remote_auth` ou transmettez une chaîne de caractères vide. Si le paramètre est vide, Logora considère que l'utilisateur est déconnecté.

#### 3. Redirection vers l'espace de débat après connexion de l'utilisateur

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