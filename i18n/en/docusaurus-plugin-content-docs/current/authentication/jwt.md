---
id: jwt
title: JWT
description: Authentication via JWT — generation, transmission, lifecycle, avatar format
---

This authentication mode automatically logs users into Logora once they're authenticated through your login system. It uses a **JWT** (JSON Web Token), signed (JWS) or encrypted (JWE), to transmit user data to Logora.

:::tip When to use JWT?
JWT is the **simplest SSO method** to set up and the most widely used at Logora. If you need stricter security (token-by-token revocation, scopes), look at the [OAuth 2.0 server](/authentication/oauth2_server) instead.
:::

## Before you start

- Go to your [admin space](https://admin.logora.fr), tab *Configuration > Authentication*, to choose the `JWT` authentication mode.
- Have your **API secret key** ready. This secret will be used to create the JWT. It must remain confidential.

## Authentication flow

```
[Your server]                  [Browser]                  [Logora]
       │                              │                         │
       │  1. User login               │                         │
       │ ◄────────────────────────── │                         │
       │                              │                         │
       │  2. Generates signed JWT     │                         │
       │ ──────────────────────────►  │                         │
       │                              │                         │
       │                              │  3. logora_config       │
       │                              │     contains JWT        │
       │                              │ ──────────────────────► │
       │                              │                         │
       │                              │  4. Logora validates,   │
       │                              │     opens session       │
       │                              │ ◄────────────────────── │
```

1. When the user logs in on your site, you generate the JWT containing the user info on your server.
2. When the user reaches a page where Logora code is embedded, the JWT is injected into the JavaScript config via the `remote_auth` parameter.
3. The Logora app detects the token, decodes, verifies, and signs the user in or registers them.

## Setup

:::warning Cached pages
The JWT must always reflect the user's current state, logged in or not. If your pages are behind a cache (especially pages containing the debate synthesis), the token may not be refreshed.

If caching prevents fresh token generation, use a different authentication method.
:::

### 1. Generate the JWT

The JWT lets you transmit existing user data to Logora to provide a seamless authenticated session. The token must be generated on **your servers** and transmitted via JavaScript config. It can be signed or encrypted depending on your confidentiality needs.

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

Supported fields (case-sensitive):

| Field | Type | Description |
|---|---|---|
| `uid` | string, **required** | Unique user identifier in your database |
| `first_name` | string, **required** | First name, or username if `last_name` is empty |
| `last_name` | string, optional | Last name |
| `email` | string, **required** | Email address |
| `image_url` | string, optional | Avatar URL (see [required format](#format-required-for-image_url)) |
| `iat` | number, **required** | Token issued-at timestamp (Unix) |
| `exp` | number, optional | Expiration timestamp. If present, **expired tokens won't start a session** |

:::note Customizable field names
If your system uses a different format (e.g. `userId` instead of `uid`), you can map the names in the admin (*Configuration > Authentication*).
:::

#### Signed JWT (JWS) — easiest

:::caution If your secret key is Base64-encoded
Enable the corresponding option in your admin, otherwise the signature won't validate.
:::

The token has three parts: header, payload, and signature.

```
header = { "alg": "HS256", "typ": "JWT" }

payload = {
  uid: "123abc",
  first_name: "John",
  email: "john@example.com",
  iat: 1516239022
}

signature = HMACSHA256(
   base64UrlEncode(header) + "." + base64UrlEncode(payload),
   SECRET_KEY
)

jwtToken = base64UrlEncode(header) + "." + base64UrlEncode(payload) + "." + signature
```

Before moving to step 2, validate the token at **[https://jwt.io/](https://jwt.io/)**.

#### Encrypted JWT (JWE) — more confidentiality

Encryption prevents reading user info if the token is intercepted. Choose the **JWE** option in admin settings. We only support **RSA** keys (RSA-OAEP and RSA1_5).

Tutorial: [Using JSON Web Encryption (JWE)](https://dzone.com/articles/using-json-web-encryption-jwe).

Validate at **[https://dinochiesa.github.io/jwt/](https://dinochiesa.github.io/jwt/)**.

### 2. Send the token to Logora

Once generated, transmit the token via the `remote_auth` JavaScript variable:

```javascript
var logora_config = {
  remote_auth: jwt_token
}
```

Also fill in the admin interface:

![JWT admin](/img/jwtadmin.png)

### 3. User logout

To log the user out, remove `remote_auth` or send an empty string. Logora then considers the user logged out.

```javascript
var logora_config = {
  remote_auth: ""  // logout
}
```

For real-time **server-side logout**, use [Backchannel Logout](/authentication/backchannel-logout).

### 4. Redirect after login

When an unauthenticated user tries an action on the debate space, they're redirected to your login or signup page. Set these URLs via `auth.login_url` and `auth.registration_url`.

On redirect, a `logora_redirect` query parameter is passed, containing the URL of the page before redirect. Use it to bring the user back. The parameter name is customizable (e.g. `redirect_to`).

These settings are in *Admin > Configuration > Authentication*.

---

## Session lifecycle

### Logora session duration

Once the JWT is validated, Logora opens **its own session**, independent from yours. This session:

- expires **2 hours** after creation (default)
- can be explicitly revoked via [Backchannel Logout](/authentication/backchannel-logout)
- can include an `exp` claim on the JWT — if present, **expired tokens won't start a session**

:::warning Common question: can a stolen token be replayed forever?
No, provided you use the `exp` claim correctly. To mitigate token replay:

1. **Always include a short `exp` claim** (≤ 5 minutes recommended)
2. **Refresh the `remote_auth` on every page render** (no HTML cache freezing the token)
3. **Call backchannel logout server-side** when the user logs out on your site
:::

### Update user info on every login (`updateUserOnLogin`)

Enable *Update user info on every login* in *Admin > Configuration > Authentication* to have Logora refresh `first_name`, `last_name`, `email`, `image_url` on each login.

:::caution Edge case
If you enable this option **and** send `image_url`, the avatar chosen by the user in Logora will be **overwritten on every login**. To let users pick their own avatar, **don't send** `image_url`.
:::

### Format required for `image_url`

For the SSO avatar to display, your URL must serve an image with:

| Criterion | Value |
|---|---|
| **Extension** | `.png`, `.jpg`, or `.jpeg` |
| **HTTP Content-Type** | `image/png`, `image/jpeg` |
| **Accessibility** | Public, **without authentication** (no cookies, no token in URL) |
| **Recommended size** | 200×200 px minimum, 1:1 ratio |

:::danger Frequent error (Krone, Bild)
A URL returning a binary with `Content-Type: application/octet-stream` or requiring authentication cookies will **not be processed**. This is the #1 cause of "avatars not showing up" we see in support.
:::

---

## Troubleshooting

Hitting an SSO issue (Cloudflare blocking, Google/SSO conflict, rejected token)? See the dedicated page: **[SSO troubleshooting](/faq/troubleshooting-sso)**.
