---
id: oauth2
title: OAuth 2.0 client
---

The OAuth 2.0 protocol allows secure resource recovery while protecting your users' data. Logora offers an OAuth 2.0 compliant authentication service, which allows you to automatically connect your users to the Logora application once they are connected to your authentication system.

### Before you start

- Go to your [Administration Space](https://admin.logora.fr) (*Configuration > Authentication* tab) to choose the authentication mode `OAuth2.0`.
- Get your API key and your secret key.

### Authentication process

1. When a user logs into your website, get a temporary access token by requesting authorization from our OAuth 2.0 server.
2. Send the user's information to our server by passing the access token, and retrieve a session ID linked to the connected user. If Logora does not know this user, this user is registered with us.
3. Pass the session ID to the Logora application, which uses it to identify the user.
4. When the user logs out of your system, you call the Logora logout route.

### Set up

#### 1. Recover an access token

An OAuth 2.0 access token is generated using your API key and secret key, through a POST request to our authorization route. Example using Curl:

```bash
curl -d grant_type=client_credentials -d client_id=API_KEY -d client_secret=API_SECRET -d scope=authentication https://app.logora.fr/oauth/token

// Response  
=> {"access_token":"Av9wbEK-0QTOdxhzB4S3-B1ZFKj1Z4y8Xcl17iVcHsg","token_type":"Bearer","expires_in":7200,"created_at":1579688184}
```

If the request is successful, it returns an access token in the `access_token` attribute. This access token is valid for two hours. The `expires_in` and `created_at` attributes are used to calculate the expiration date of the token.

#### 2. Connect the user to Logora


With the access token, you can pass the user's information to Logora. When a user logs in through your authentication system, call the Logora login route. This route returns a session ID related to the user.

The Bearer OAuth 2.0 access token retrieved in step 1 must be transmitted via the `HTTP Authorization` header.

The user informations consists of:  

- `uid` (required): unique identifier of the user in your system, e.g. their ID in your database.  
- `first_name` (required): the user's first name or nickname.  
- `last_name` (optional): user's last name.  
- `email` (required): user's email address.

Here is an example of a connection with CURL:

```bash
curl -H "Authorization: Bearer Av9wbEK-0QTOdxhzB4S3-B1ZFKj1Z4y8Xcl17iVcHsg" -d uid=12 -d first_name=Jean -d last_name=Dupont -d email=jean.dupont@exemple.com -X POST https://app.logora.fr/api/v1/users/login
 
// Response
=> {"success": "true","session_id": "14c98398-08c7-42ae-b1f7-e435920fccec"}
```

#### 3. Transmit the session ID

To identify the connected user, the Logora application must know his session identifier. Transmit this identifier via the `remote_auth` parameter in the Javascript configuration variables of the debate space.

> WARNING: check that the transmited parameters are not behind a cache. The session id must always be up to date, regardless of the user's state, logged in or not.

```javascript
var logora_config = {
    remote_auth: "14c98398-08c7-42ae-b1f7-e435920fccec",
    //... Other parameters
}
```

#### 4. Logging out the user

When the user disconnects from your authentication system, call Logora's logout route by passing the session ID, or remove the `remote_auth` parameter.

Here is an example of a logout request:

```
curl -H "Authorization: Bearer Av9wbEK-0QTOdxhzB4S3-B1ZFKj1Z4y8Xcl17iVcHsg" -d session_id=14c98398-08c7-42ae-b1f7-e435920fccec -X POST https://app.logora.fr/api/v1/users/logout 

// Response
=> {"success": "true"}
```

#### 5. Redirect to the debate space after user login

When a user who is not logged in wants to perform an action on the debate space or overview, they are redirected to your login or registration page. When inserting the debate space or overview, you can set the login and registration URLs via the auth.login_url and auth.registration_url variables respectively:

```html
<div id="logora_app"></div>
<script>
    // Configuration Variables
    var logora_config = {
        shortname: "example-identifiant", // Application name available in your administration space
        auth: {
          login_url: "Your login URL", // Insert here your login url
          registration_url: "Your redirection URL" // Insert your registration url here
        }
    };


    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://api.logora.fr/debat.js';
        (d.head || d.body).appendChild(s);
    })();
</script>
```

When redirecting, a logora_redirect request parameter is passed, containing the URL of the page before redirection. Use this parameter to redirect the user after login or registration. The name of the parameter passed can be changed, it can be set for example to redirect_to (https://yourwebsite.fr/login?redirect_to=URL_ORIGINE). To change the parameter name, use the auth.redirectParameter variable.
