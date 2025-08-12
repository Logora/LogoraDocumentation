---
id: jwt
title: JWT
---

This authentication mode automatically connects users to Logora once they have been authenticated through your login system. This method uses a signed (JWS) or encrypted (JWE) JSON Web Token (JWT) to transmit user data to Logora.

### Before you start

- Go to your [Administration space](https://admin.logora.fr) (*Configuration > Authentication*) to choose the authentication mode `JWT signature`.  
- Get your API secret key. This secret key will be used to create the JWT token. It must be kept confidential.

### Authentication process

1. When the user connects to your website, you must create a JWT token containing the user's information. It will be transmitted to Logora. 
2. When the user goes to a page where the Logora code is inserted, the JWT token is inserted in the Javascript configuration variables, via the `remote_auth` parameter.
3. The Logora application detects the JWT token, decodes it, verifies it and signs in or signs up the user.

### Set up

> WARNING : the JWT token transmitted to Logora must always be updated according to the state of the user, whether they are connected or not. If the pages of your website are behind a cache, especially the pages that contain the debate summary, it is possible that the JWT token is not updated. If caching is interfering with the creation of the JWT token, use another authentication method.

#### 1. Generation of the JWT token

Using [JSON Web Token serialization](https://jwt.io/), editors can pass on existing user data to provide users with a seamless, authenticated session on Logora. The JWT token must be generated on your servers and then transmitted to Logora via javascript configuration variables. The token can be signed or encrypted, depending on the degree of confidentiality you require for user information.

##### Creating the token payload

The token payload contains user information in JSON format:

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

It must include the following case-sensitive attributes:
- `uid`: unique identifier associated with the user in your database.
- `first_name`: user's first name, or username if `last_name` is empty.
- `last_name` (optional): user's surname.
- email`: the email address registered for this account.
- image_url` (optional): link to the user's avatar.
- `iat`: token generation date.
- `exp` (optional) : token expiration date. If present, session will not start if the token is expired

Field names can be customized in the administration area if you have a different format.

You can now create the token in either JWS (by default) or JWE format. If you're not sure which solution to choose, choose the signed version, which is the most widely used and easiest to set up.

##### Signed JWT (JWS)

> **Important** : If your secret key is encoded in Base64, enable the corresponding option in your administration interface.

The token is made up of three parts: the header, the payload you generated earlier, and the signature.

Token header
``` 
{ 
  "alg": "HS256", 
  "typ": "JWT 
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

Pseudo-code example
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

// Variable transmitted to Logora
tokenJWT = base64UrlEncode(header) + "." + base64UrlEncode(payload) + "." + signature
=> "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMjNhYmMiLCJmaXJzdF9uYW1lIjoiSmVhbiIsImxhc3RfbmFtZSI6IkR1cG9udCIsImVtYWlsIjoiamVhbmR1cG9udEBleGVtcGxlmNvbSIsImlhdCI6MTUxNjIzOTAyMn0. ITnJo8VwbP4PkVTANSt651C0olsrdRNCNmvTHkanuYk"
```
Before proceeding to the second step, check that the token works properly on the website: https://jwt.io/

##### Encrypted JWT (JWE)

To use this type of token, select the "JWE" option in the administration settings.
Encrypting the token ensures that user information is not divulged. We only support RSA keys (RSA-OAEP and RSA1_5).

To generate the token, we suggest you read this article, which explains the process: https://dzone.com/articles/using-json-web-encryption-jwe

Here's an example of a token generated with the body generated above, and which will be transmitted to Logora:
```
eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkExMjhHQ00ifQ. FuNsYUYJzh294MQZ_71zOxBLiiOkU8UKF4b-wwhCKNKCm1452jnyxzljNTCkTGVhZui6CnBctUByqdvVugMzIlWxNA4hSXWvQUKxm-QJlJyqbdeL6URM2mxeqBxk3iEA7TIbLCd30pnFo8KkSbbHmkDVrVElJ403t0bNKPlvJkjU_Dc71tP3Zun- Nc_3PK9azldEZ7IEPYvd--leYPBBTThNZ--SHSWx_C8rF5a3PHaniVttguHX4EJ39V36xz_7FWFXh4ZNCCFp_kqa05_ixD0EEH11kpxdOv-wm_MgOyt9XODoIWqZUrcDywCkhNy_gIHP8LHbHFhyHR3o8qQvhQ. s_bngM9ad5tmrkQH.GJUshscvO9ZtspkyH-emLbbgyczh_uzFTbv_QEWM3iryARl0UrvYzaBjyBIr3o16bw4PfUCK-4TXTRzV4C56s63BNIwL7fY0AQXrBfRifg8AtaIg0NJyJXbnUzqB7Gx23KruL9g.zSNCxobkIFdAY82DRf1Qdw
```

Before proceeding to the second step, check that the token works properly on the website: https://dinochiesa.github.io/jwt/

#### 2. Transmission of the token to Logora

Once the message has been generated, it must be transmitted via the Javascript configuration variable, `remote_auth`, in the debate space code.

```javascript
var logora_config = {
	remote_auth: jeton_JWT
}
```

#### 3. Disconnecting the user

To disconnect the user, remove the `remote_auth` parameter or transmit an empty string. If the parameter is empty, Logora considers that the user is disconnected.

#### 4. Redirection to the debate speace after user log-in

When a user who is not logged in wants to perform an action in the discussion forum, they are redirected to your login or registration page. When inserting the discussion forum and the overview, you must define the login and registration URLs, via the auth.login_url and auth.registration_url variables respectively.

When redirecting, a logora_redirect request parameter is passed, containing the URL of the page before redirection. Use this parameter to redirect the user after login or registration. The name of the parameter passed can be changed, for example to `redirect_to`.

These parameters can be changed in the administration area, in the *Configuration > Authentication* tab.
