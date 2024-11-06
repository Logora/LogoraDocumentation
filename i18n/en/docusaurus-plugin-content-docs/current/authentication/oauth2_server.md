---
id: oauth2_server
title: OAuth 2.0 server
---

The OAuth 2.0 protocol allows secure resource recovery while protecting your users' data. Logora offers an OAuth 2.0 compliant authentication service, which allows your users to automatically connect to the Logora application once they are connected to your authentication system.

This authentication mode allows Logora to connect to your OAuth 2.0 server. After retrieving an access token for the user, we retrieve their profile via an access point in your API.

### Set up

To set up this authentication mode, you need to create a client application for Logora on your OAuth 2.0 server, using the following parameter :
  `redirect_uri`: `https://app.logora.fr/auth/callback`

Send us the following information so that we can configure your application :
- `client_id` : the public key of the created application
- `client_secret` : the secret key of the created application
- `login_url`: the URL of the authentication page
- `scope` : the scope of the access tokens
- `token_endpoint` : the URL of the access token recovery route
- `token_endpoint_method` : the method of the token retrieval route ("GET" or "POST")
- `user_profile_endpoint`: the URL of the user profile retrieval route ("GET" method)
- `user_profile_params`: URL parameters to send with this route, in dictionary form
- `user_profile_mapping` : link between the attributes returned by the route and those requested by Logora

Send these parameters to Logora by email (contact@logora.fr), indicating your application name. We will configure this authentication mode for you.
