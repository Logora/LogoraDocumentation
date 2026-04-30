---
id: jwt
title: JWT
description: Authentication via JWT — generation, transmission, session lifecycle.
---

This authentication mode automatically logs users into Logora once they're authenticated through your login system. It uses a **JWT** (JSON Web Token), signed (JWS) or encrypted (JWE), to transmit user data to Logora.

## Before you start

- Go to your [admin space](https://admin.logora.fr), tab *Configuration > Authentication*, to choose the `JWT` authentication mode.
- Have your **API secret key** ready. This secret will be used to create the JWT. It must remain confidential.

## Authentication flow

1. When the user logs in on your site, you generate the JWT containing the user info on your server. It is then transmitted to Logora.
2. When the user reaches a page where Logora code is embedded, the JWT is injected into the JavaScript config via the `remote_auth` parameter.
3. The Logora app detects the token, decodes, verifies, and signs the user in or registers them.

## Setup

:::warning Cached pages
The JWT must always reflect the user's current state, logged in or not. If your pages are behind a cache (especially pages containing the debate synthesis), the token may not be refreshed. If caching prevents fresh token generation, use a different authentication method.
:::

### 1. Generate the JWT

Through [JSON Web Token serialization](https://jwt.io/), publishers can transmit existing user data to provide a seamless authenticated session on Logora. The token must be generated on **your servers** and transmitted via JavaScript config. It can be signed or encrypted, depending on your confidentiality needs.

#### Token body

The body contains user info as JSON:

```json
{
  "uid": "12345abc",
  "email": "john@logora.fr",
  "first_name": "John",
  "last_name": "Doe",
  "iat": 1755007651,
  "exp": 1755011251
}
```

It must include the following fields, case-sensitive:

- `uid`: unique user identifier in your database.
- `first_name`: first name (or username if `last_name` is empty).
- `last_name` (optional): last name.
- `email`: registered email address.
- `image_url` (optional): avatar URL.
- `iat`: token issued-at timestamp.
- `exp` (optional): expiration timestamp. If present, **expired tokens won't start a session**.

Field names are customizable in the admin if your system uses a different format.

You can now create the token, either as JWS or JWE. If unsure, use the signed version (most common, simplest).

#### Signed JWT (JWS)

:::note Base64-encoded secret key
If your secret key is Base64-encoded, enable the corresponding option in your admin.
:::

The token has three parts: header, payload, and signature.

Header:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

Signature:

```
HMACSHA256(
   base64UrlEncode(header) + "." +
   base64UrlEncode(payload),
   SECRET_KEY
)
```

Pseudo-code example:

```javascript
header = {
  "alg": "HS256",
  "typ": "JWT"
}
payload = {
  uid: "123abc",
  first_name: "John",
  last_name: "Doe",
  email: "johndoe@example.com",
  iat: 1516239022
}
signature = HMACSHA256(
   base64UrlEncode(header) + "." +
   base64UrlEncode(payload),
   SECRET_KEY
)

// Variable transmitted to Logora
jwtToken = base64UrlEncode(header) + "." + base64UrlEncode(payload) + "." + signature
```

Before moving to step 2, validate the token at [https://jwt.io/](https://jwt.io/).

#### Encrypted JWT (JWE)

To use this token type, choose "JWE" in admin settings. Encryption prevents leaking user info if the token is intercepted. We only support **RSA** keys (RSA-OAEP and RSA1_5).

Tutorial: [https://dzone.com/articles/using-json-web-encryption-jwe](https://dzone.com/articles/using-json-web-encryption-jwe).

Validate at: [https://dinochiesa.github.io/jwt/](https://dinochiesa.github.io/jwt/).

### 2. Transmit the token to Logora

Once generated, transmit the token via the `remote_auth` JavaScript variable:

```javascript
var logora_config = {
  remote_auth: jwt_token
}
```

Also fill in the admin interface.

### 3. User logout

To log the user out, remove the `remote_auth` parameter or pass an empty string. Logora then considers the user logged out.

For real-time **server-side logout**, use [Backchannel Logout](/authentication/backchannel-logout).

### 4. Redirect after login

When an unauthenticated user tries an action on the debate space, they're redirected to your login or signup page. Set these URLs via `auth.login_url` and `auth.registration_url`.

On redirect, a `logora_redirect` query parameter is passed, containing the URL of the page before redirect. Use it to bring the user back. The parameter name is customizable (e.g. `redirect_to`).

These settings are in *Admin > Configuration > Authentication*.

---

## Session lifecycle

### Logora session duration

Once the JWT is validated, Logora opens **its own session**, independent from yours. By default, this session expires **2 hours** after creation.

To force an earlier logout, use [Backchannel Logout](/authentication/backchannel-logout).

### `exp` claim validation

If the `exp` claim is present in the JWT, Logora checks that it is not expired. An expired token will not start a session.

:::tip Best practice to limit replay
If you're concerned about a token being replayed:

1. **Always include a short `exp` claim** in the JWT
2. **Refresh the `remote_auth` on every page render** (no HTML cache freezing the token)
3. **Call backchannel logout server-side** when the user logs out on your site
:::
