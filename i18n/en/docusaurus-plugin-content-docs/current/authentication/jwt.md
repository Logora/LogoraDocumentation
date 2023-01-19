---
id: jwt
title: JWT Signature
---

This authentication mode allows to automatically connect users to Logora once they are authenticated through your login system. This method uses a JWT token (JSON Web Token) with your secret key to convey the user's data to Logora.

### Before you start

- Go to your [Administration space](https://admin.logora.fr) (*Configuration > Authentication*) to choose the authentication mode `JWT signature`.  
- Get your API secret key. This secret key will be used to create the JWT token. It must be kept confidential.

### Authentication process

1. When the user connects to your website, you must create a JWT token containing the user's information. It will be transmitted to Logora. 
2. When the user goes to a page where the Logora code is inserted, the JWT token is inserted in the Javascript configuration variables, via the `remote_auth` parameter.
3. The Logora application detects the JWT token, decodes it, verifies it and registers or connects the user.

### Set up

> WARNING : the JWT token transmitted to Logora must always be updated according to the state of the user, whether they are connected or not. If the pages of your website are behind a cache, especially the pages that contain the debate summary, it is possible that the JWT token is not updated. If caching is interfering with the creation of the JWT token, use another authentication method.

#### 1. Generation of the JWT token

Using [JSON Web Token serialization](https://jwt.io/), publishers can pass existing user data to provide users with a seamless authenticated session on Logora. The JWT token must be generated on your servers and then transmitted to Logora via javascript configuration variables. Here is the composition of the token, consisting of the following three parts:

Token header
``` 
{ 
  "alg": "HS256", 
  "typ": "JWT" 
}
```

Token body
```json
{
  "uid": "12345abc",
  "email": "jean@logora.fr",
  "first_name": "Jean",
  "last_name": "Dupont",
  "iat": 1516239022
}
```
It must include the following case-sensitive attributes:
- `uid`: unique identifier associated with the user in your database.
- `first_name`: user's first name, or username if `last_name` is empty.
- `last_name` (optional): the user's last name.
- `email`: the email address registered for this account.
- `image_url` (optional): link to the user's avatar.
- `iat`: date of generation of the JWT token

Signature  
```
HMACSHA256(
   base64UrlEncode(header) + "." +
   base64UrlEncode(payload),
   SECRET_KEY
)
```

Example in pseudo-code
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

// Variable conveyed to Logora
tokenJWT = base64UrlEncode(header) + "." + base64UrlEncode(payload) + "." + signature
=> "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMjNhYmMiLCJmaXJzdF9uYW1lIjoiSmVhbiIsImxhc3RfbmFtZSI6IkR1cG9udCIsImVtYWlsIjoiamVhbmR1cG9udEBleGVtcGxlLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.ITnJo8VwbP4PkVTANSt651C0olsrdRNCNmvTHkanuYk"
```

#### 2. Transmission of the token to Logora

Once the message has been generated, it must be transmitted via the Javascript configuration variable, `remote_auth`, in the debate space code.

```javascript
var logora_config = {
	remote_auth: jeton_JWT
}
```

#### 3. Disconnecting the user

To disconnect the user, remove the `remote_auth` parameter or transmit an empty string. If the parameter is empty, Logora considers that the user is disconnected.

#### 4. Redirection to the debate space after user login

When a user who is not logged in wants to perform an action on the debate space, they are redirected to your login or registration page. When inserting the debate space and the overview, you must define the login and registration URLs via the auth.login_url and auth.registration_url variables respectively.

When redirecting, a logora_redirect request parameter is passed, containing the URL of the page before redirection. Use this parameter to redirect the user after their login or registration. The name of the parameter passed can be changed, it can be for example set to redirect_to. To change the parameter name, use the auth.redirectParameter variable.

```javascript
var logora_config = {
    remote_auth: jeton_JWT,
    auth: {
        login_url: "Your login URL",
        registration_url: "You registration URL",
        redirectParameter: "redirectTo"
}
```
