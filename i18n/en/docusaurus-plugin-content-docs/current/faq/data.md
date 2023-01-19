---
id: data
title: User data
---

The Logora API allows you to retrieve the users registered on your application.

#### Before you start

- Go to your [Administration Area](https://admin.logora.fr) (tab *Configuration > General*).
- Get your API key and your secret key which will be used for authentication.

#### 1. Retrieving an access token

An OAuth 2.0 access token is generated using your API key and your secret key, through a POST request to our authorization route. Example using Curl :

```bash
curl -d grant_type=client_credentials -d client_id=API_KEY -d client_secret=API_SECRET -d scopes=admin https://app.logora.fr/oauth/token

// Response  
=> {"access_token":"Av9wbEK-0QTOdxhzB4S3-B1ZFKj1Z4y8Xcl17iVcHsg","token_type":"Bearer","expires_in":7200,"created_at":1579688184}
```

If the request is successful, it returns an access token in the `access_token` attribute. This access token is valid for two hours. The `expires_in` and `created_at` attributes are used to calculate the expiry date of the token.
This Bearer token must be added to the `Authentication` header of requests.

#### 2. Retrieve the data

URL : `https://app.logora.fr/api/v1/users`

Method : `GET`

Header : `Content-Type: application/json`

Authentification : `Bearer`

URL parameters (optional) :

`page` (integer): page number of the user list

`per_page` (integer): number of items per page

`is_expert` (boolean): selects only the so-called "expert" users

`is_selected` (boolean): selects users to be highlighted

`sub_application_name` (string): name of the sub-application to which the user belongs

Example query:
`https://app.logora.fr/api/v1/users?page=1&per_page=10&is_expert=false&is_selected=false&sub_application_name=app-test`

```
// Example of a response
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
          "name": "New to the debate",
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
        "occupation": "Gardener",
        "interests": "nature,economy"
      },
      {
        "id": 26,
        "uid": "dd976c14-bf88-4a94-835d-eb09f1074048",
        "image_url": "https://dfrx2oay1w3r9.cloudfront.net/uploads/standard_9b71d3b9c6c06959dbc58ea3f0a128d0.jpg",
        "full_name": "Martine Durand",
        "level": {
          "id": 1,
          "name": "New to the debate",
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
        "occupation": "Doctor",
        "interests": "politics,economy"
      }
  ]
}
```
