---
id: backchannel-logout
title: Backchannel Logout
description: Backchannel Logout
---

Backchannel logout allows an application to notify an identity provider (IdP) that a user should be logged out from all services connected via OpenID Connect (OIDC).


### 1. Case of an OAuth2/OIDC compatible application

If your application uses OAuth2 and is OIDC compatible, integrating backchannel logout is very simple:

- **Simply send us the OIDC issuer URL** (issuer ID) of your identity provider.
- Add the backchannel logout route URL to your OIDC client : https://app.logora.fr/auth/logout/APPLICATION_NAME.

No additional implementation is required on your side. When a logout is triggered, our API takes care of everything (token verification, session deletion, etc.).

### 2. Case of a non-OIDC compatible application

If your application is not OIDC compatible, you will need to make the API calls yourself.

#### Endpoint to use

- `POST https://app.logora.fr/auth/logout/APPLICATION_NAME`: to notify the logout of a user, where _<application_name>_ should be replaced by your application name.


#### Example API call

The `logout_token` parameter must be passed in the request body (formData):

```bash
curl -X POST https://app.logora.fr/auth/logout/APPLICATION_NAME \
	-H "Content-Type: application/x-www-form-urlencoded" \
	-d "logout_token=<token>"
```

#### How to generate the `logout_token`?

The `logout_token` is a JWT (JSON Web Token) signed with your secret key available in your admin panel. It must contain at least the `sub` claim, which must match the **uid of the user as transmitted to Logora** (i.e., the unique identifier of the user in your system, used when creating the account on Logora).

This token allows our API to verify the identity of the user to be logged out.
Create a JWT with the necessary claims (`sub`, `aud`, `iat`, etc.), sign it with your secret key, and then send it in the `logout_token` field when calling the API.
