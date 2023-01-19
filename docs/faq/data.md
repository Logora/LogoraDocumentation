---
id: data
title: Données utilisateurs
---

L'API Logora vous permet de récupérer les utilisateurs inscrits sur votre application.

#### Avant de commencer

- Rendez-vous sur votre [Espace d'administration](https://admin.logora.fr) (onglet *Configuration > Général*).
- Récupérez votre clé d'API et de votre clé secrète qui serviront pour l'authentification.

#### 1. Récupérer un jeton d'accès

Un jeton d'accès OAuth 2.0 est généré en utilisant votre clé d'API et votre clé secrète, grâce à une requête POST vers notre route d'autorisation. Exemple utilisant Curl :

```bash
curl -d grant_type=client_credentials -d client_id=API_KEY -d client_secret=API_SECRET -d scopes=admin https://app.logora.fr/oauth/token

// Réponse  
=> {"access_token":"Av9wbEK-0QTOdxhzB4S3-B1ZFKj1Z4y8Xcl17iVcHsg","token_type":"Bearer","expires_in":7200,"created_at":1579688184}
```

Si la requête est réussie, elle retourne un jeton d'accès dans l'attribut `access_token`. Ce jeton d'accès est valide deux heures. Les attributes `expires_in` et `created_at` permettent de calculer la date d'expiration du jeton.
Ce jeton Bearer doit être ajouté dans l'en-tête `Authentication` des requêtes.

#### 2. Récupérer les données

URL : `https://app.logora.fr/api/v1/users`

Méthode : `GET`

En-tête : `Content-Type: application/json`

Authentification : `Bearer`

Paramètres d'URL (optionnels) :

`page` (entier) : numéro de page de la liste d'utilisateurs

`per_page` (entier) : nombre d'éléments par page

`is_expert` (booléen) : sélectionne seulement les utilisateurs dits "experts"

`is_selected` (booléen) : sélectionne les utilisateurs mis en avant

`sub_application_name` (chaîne de caractères) : nom de la sous-application à laquelle appartient l'utilisateur

Exemple de requête :
`https://app.logora.fr/api/v1/users?page=1&per_page=10&is_expert=false&is_selected=false&sub_application_name=app-test`

```
// Exemple de réponse
{
  "success": true,
  "data": [
      {
        "id": 21,
        "uid": "02b3a18e-be9c-4f47-a2b3-a5867278cdc7",
        "image_url": "https://dfrx2oay1w3r9.cloudfront.net/uploads/standard_69835d290a622014fa921df8287b7fd7.jpg",
        "full_name": "Jean Dupont",
        "level": {
          "id": 1,
          "name": "Novice du débat",
          "icon_url": "https://d2vtyvk9fq7442.cloudfront.net/level_1.png"
        },
        "score": 0,
        "slug": "jean-dupont",
        "points": 0,
        "description": null,
        "created_at": "2021-11-25T16:15:38.874Z",
        "messages_count": 10,
        "votes_count": 123,
        "email": "jean.dupont@exemple.fr",
        "age": 58,
        "city": "Strasbourg",
        "occupation": "Jardinier",
        "interests": "nature,économie"
      },
      {
        "id": 26,
        "uid": "dd976c14-bf88-4a94-835d-eb09f1074048",
        "image_url": "https://dfrx2oay1w3r9.cloudfront.net/uploads/standard_9b71d3b9c6c06959dbc58ea3f0a128d0.jpg",
        "full_name": "Martine Durand",
        "level": {
          "id": 1,
          "name": "Novice du débat",
          "icon_url": "https://d2vtyvk9fq7442.cloudfront.net/level_1.png"
        },
        "score": 0,
        "slug": "martine-durand",
        "points": 1,
        "description": null,
        "created_at": "2021-02-15T14:09:48.619Z",
        "messages_count": 4,
        "votes_count": 1,
        "email": "martine.durand@exemple.fr",
        "age": 23,
        "city": "Nice",
        "occupation": "Médecin",
        "interests": "politique,économie"
      }
  ]
}
```
