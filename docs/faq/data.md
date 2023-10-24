---
id: data
title: Gestion des utilisateurs
---

Conformément aux règlements sur les données personnelles, les utilisateurs peuvent demander la suppression ou la récupération de leurs données de l'espace de débat. 

Notre API permet de récupérer les données utilisateurs, ainsi que d'anonymiser ou de supprimer des utilisateurs inscrits sur votre application.
Voici un manuel pour utiliser ces routes, que vous pouvez tester à l'aide de la [documentation de notre API](https://app.logora.fr/docs), section `Users`.


#### Avant de commencer

- Rendez-vous sur votre [Espace d'administration](https://admin.logora.fr) (onglet *Configuration > Général*).
- Récupérez votre clé d'API et votre clé secrète qui serviront pour l'authentification.


#### 1. Récupérer un jeton d'accès

Un jeton d'accès OAuth 2.0 est généré en utilisant votre clé d'API et votre clé secrète, grâce à une requête POST vers notre route d'autorisation. Le scope à demander est le scope `authentication`. 

Exemple utilisant Curl :

```bash
curl -d grant_type=client_credentials -d client_id=API_KEY -d client_secret=API_SECRET -d scope=authentication https://app.logora.fr/oauth/token

// Réponse  
=> {"access_token":"Av9wbEK-0QTOdxhzB4S3-B1ZFKj1Z4y8Xcl17iVcHsg","token_type":"Bearer","expires_in":7200,"created_at":1579688184}
```

Si la requête est réussie, elle retourne un jeton d'accès dans l'attribut `access_token`. Ce jeton d'accès est valide deux heures. Les attributes `expires_in` et `created_at` permettent de calculer la date d'expiration du jeton.
Ce jeton `Bearer` doit être ajouté dans l'en-tête `Authentication` des requêtes.



#### 2. Appeler l'API

Pour toutes les routes décrites ci-dessous :

**URL de base**: `https://app.logora.fr/api/v1/`

**En-tête**: `Content-Type: application/json`

**Authentification**: jeton `Bearer` avec le scope `authentication`


##### 2.1. Anonymiser un utilisateur

Cette route anonymise toutes les données personnelles liées à l'utilisateur : prénom, nom, email, identifiant unique, image, tout en gardant ses contributions et son activité.
> :warning: Cette opération n'est pas réversible. Veuillez prendre des précautions lorsque vous utilisez cette route d'API.

**URL**: `https://app.logora.fr/api/v1/users/{uid}/anonymize`

**Méthode**: `POST`

**Paramètres**:
- `uid`: identifiant unique de l'utilisateur que vous passez à Logora lors de l'inscription de l'utilisateur

**Réponse**: Code 200 si l'anonymisation est réussie.


##### 2.2. Supprimer un utilisateur

Cette route supprime l'utilisateur ainsi que toutes ces données associées, c'est-à-dire l'ensemble de ces contributions.
> :warning: Cette opération n'est pas réversible. Veuillez prendre des précautions lorsque vous utilisez cette route d'API.

**URL**: `https://app.logora.fr/api/v1/users/{uid}`

**Méthode**: `DELETE`

**Paramètres**:
- `uid`: identifiant unique de l'utilisateur que vous passez à Logora lors de l'inscription de l'utilisateur

**Réponse**: Code 200 si la suppression est réussie.


##### 2.3. Récupérer les données d'une liste d'utilisateurs

Cette route renvoie une liste d'utilisateurs avec leurs données associées.
Pour cette route, utilisez un jeton avec le scope `public`, ou utilisez l'autorisation par clé d'API.

**URL**: `https://app.logora.fr/api/v1/users`

**Méthode**: `GET`

**Paramètres**:
- `page` (entier) : numéro de page de la liste d'utilisateurs
- `per_page` (entier) : nombre d'éléments par page
- d'autres champs sont décrits dans la [documentation de notre API](https://app.logora.fr/docs)
- api_key : clé d'API, si autorisation par clé d'API

Exemple de requête :
`https://app.logora.fr/api/v1/users?page=1&per_page=10`

Un exemple de réponse est disponible sur la documentation de notre API.
