---
id: data
title: User management
---

In accordance with regulations on personal data, users can request the deletion or recovery of their data from the debate space.

Our API allows you to recover user data, as well as to anonymise or to delete users registered on your application. 

Here is a manual for using these endpoints, which you can test using our [API documentation](https://app.logora.fr/docs), in the `Users` section.

#### Before you start

- Go to your [Administration Panel](https://admin.logora.fr) (tab *Configuration > General*).
- Get your API key and your secret key which will be used for authentication.

#### 1. Retrieving an access token

An OAuth 2.0 access token is generated using your API key and your secret key, through a POST request to our authorization route. The scope to use is `authentication`.

Example using Curl :
```bash
curl -d grant_type=client_credentials -d client_id=API_KEY -d client_secret=API_SECRET -d scopes=authentication https://app.logora.fr/oauth/token

// Response  
=> {"access_token":"Av9wbEK-0QTOdxhzB4S3-B1ZFKj1Z4y8Xcl17iVcHsg","token_type":"Bearer","expires_in":7200,"created_at":1579688184}
```

If the request is successful, it returns an access token in the `access_token` attribute. This access token is valid for two hours. The `expires_in` and `created_at` attributes are used to calculate the expiry date of the token.
This Bearer token must be added to the `Authentication` header of requests.

#### 2. Calling the API

For all the endpoints described below :

**Base URL**: `https://app.logora.fr/api/v1/`

**Header**: Content-Type: application/json

**Authentication**: Bearer token with `authentication` scope

##### 2.1. Anonymising a user

This endpoint anonymises all personal data related to the user: first name, surname, email, unique identifier, image, while retaining their contributions and activity.
> :warning: This operation is not reversible. Please be careful when using this API endpoint.

**URL**: `https://app.logora.fr/api/v1/users/{uid}/anonymize`

**Method**: `POST`

**Parameters**:
- `uid`: unique user ID that you pass to Logora when the user registers.

**Response**: Code 200 if anonymisation was successful.


##### 2.2. Deleting a user

This endpoint deletes the user and all associated data, including all contributions.
> :warning: This operation is not reversible. Please be careful when using this API endpoint.

**URL**: `https://app.logora.fr/api/v1/users/{uid}`

**Method**: `DELETE`

**Parameters**:
- `uid`: unique user ID that you pass to Logora when the user registers.

**Response**: Code 200 if deletion was successful.


##### 2.3. Retrieving data from a list of users

This route returns a list of users with their associated data.

**URL**: `https://app.logora.fr/api/v1/users`

**Method**: `GET`

**URL Parameters**:
- `page` (integer): page number of the list
- `per_page` (integer): number of elements per page
- other fields are described in our [API documentation](https://app.logora.fr/docs)

A sample response is available in our API documentation.

