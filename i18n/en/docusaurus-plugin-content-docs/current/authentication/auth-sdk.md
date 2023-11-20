---
id: auth-sdk
title: Authentication library
description: Use our autonomous authentication library
---

Our authentication library can be used independently of the debate space. If you want to integrate our user system into your own platform, use this library.

The library is written in React, and the code for the main component is available  [here](https://bit.cloud/logora/debate/auth/auth_initializer).

### Before you start

- If the Logora team has not created an administration space for you, create your Logora administration space: [Sign up](https://logora.fr/signup)
- Make sure you have your **application name** available on your [administration space](https://admin.logora.fr) in the tab *Settings > General* .

### 1. Installing the library


The library is supplied in the form of a Javascript file that you can insert on your website.

Insert this script into your page, along with a container **logora_app**. 

The **logora_app** container is where the registration path will be displayed. Registration and login are displayed as a popup, so it won't affect the layout of the page.
Standard code to copy/paste and complete: 

```html
<!-- Insert the following scripts in the <head> tag, as high up in the page as possible -->
<script>
    // Configuration variables, the application name is present in your administration space
    var logora_config = {
        shortname: "APPLICATION_NAME"
    };
</script>
<script src="https://cdn.logora.com/auth.js"></script>
```

```html
<!-- Insert this tag anywhere on the page -->
<div id="logora_app"></div>
```

#### 2. Using the library

Once the library has been inserted, authentication can be triggered using a Javascript event named `logora:authentication:require` :

Here is an example of the code used to trigger the event:

```js
window.dispatchEvent(new Event("logora:authentication:require"));
```

The user will then be presented with a window in which to log in or begin the registration process. The authentication method depends on the settings chosen in your administration area.

Once authentication is complete, the user will be redirected to the page on which they started the process.

#### 3. Login event

An event is triggered when the user is successfully logged in. This event returns information about the logged-in user.

```js
window.addEventListener("logora:authentication:success", event => console.log(event.detail.user));
```

Here is a preview of the `user` object:

```json
{ "first_name": "Jean", "last_name": "Dupont", "image_url": "https://image.com/my-image", "points": 100 }
```
