---
id: webview
title: Webview
description: Embed Logora in a WebView inside a mobile app (iOS / Android / React Native) with SSO
---

Embedding Logora in a WebView lets you display the debate space directly inside a mobile app (iOS / Android / React Native) or a website in WebView mode, while preserving your app's user session.

:::tip Production examples
- **Der SPIEGEL** ([demo](https://www.loom.com/share/725de75c09d64911ad42fdff7acf07e7?sid=c5d01191-5783-4980-be81-f1a21e162e87))
- **Suedkurier** ([demo](https://www.loom.com/share/b3eabe7ab0d1417f8cbbfd29735c2adf?sid=356bc7c1-559e-4f2e-bece-7cecc328cb6e))
- **BILD iOS App**
- **Cronista** (web app)
:::

For seamless authentication, Logora supports SSO via a token injected into `logora_config.remote_auth`.

:::warning JWT-only SSO
Logora's SSO integration in WebView is **only compatible with JWT**. See [JWT Authentication](/authentication/jwt).
:::

## Recommended architecture

```
[Native app]                [Your server]                [Logora]
     │                              │                       │
     │  1. User login               │                       │
     │ ─────────────────────────►   │                       │
     │                              │                       │
     │  2. Request debate URL       │                       │
     │ ─────────────────────────►   │                       │
     │                              │  3. Generate JWT      │
     │                              │     + signed URL      │
     │ ◄─────────────────────────   │                       │
     │  Signed URL                  │                       │
     │                              │                       │
     │  4. Load in WebView          │                       │
     │ ────────────────────────────────────────────────►   │
     │                              │                       │
     │  5. Logora validates JWT,    │                       │
     │     opens session            │                       │
     │ ◄────────────────────────────────────────────────   │
```

## 1. Installing Logora in a WebView

Installation follows the same procedure as standard JS install.

### 1.1 HTML page hosted on your server

Host on your site a minimal page that loads the Logora widget:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Logora Debate</title>
  <script>
    var logora_config = {
      shortname: "APP_NAME",
      remote_auth: "YOUR_JWT_TOKEN"
    };
  </script>
  <script src="https://cdn.logora.com/debat.js"></script>
</head>
<body>
  <div id="logora_app"></div>
</body>
</html>
```

### 1.2 Loading the WebView

#### iOS (Swift)

```swift
import UIKit
import WebKit

class DebateViewController: UIViewController {
    var webView: WKWebView!

    override func loadView() {
        let config = WKWebViewConfiguration()
        config.preferences.javaScriptEnabled = true
        // Persist cookies and storage between app launches
        config.websiteDataStore = WKWebsiteDataStore.default()

        webView = WKWebView(frame: .zero, configuration: config)
        view = webView
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        let url = URL(string: "https://yoursite.com/debate-space?token=JWT")!
        webView.load(URLRequest(url: url))
    }
}
```

:::caution iOS — session persistence
On iOS, without `WKWebsiteDataStore.default()`, the user may be logged out every time the WebView opens. Configure this parameter as in the example above.
:::

#### Android (Kotlin)

```kotlin
import android.os.Bundle
import android.webkit.WebView
import android.webkit.CookieManager
import androidx.appcompat.app.AppCompatActivity

class DebateActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val webView = WebView(this)
        webView.settings.javaScriptEnabled = true
        webView.settings.domStorageEnabled = true

        // Persist cookies between sessions
        CookieManager.getInstance().setAcceptCookie(true)
        CookieManager.getInstance().setAcceptThirdPartyCookies(webView, true)

        webView.loadUrl("https://yoursite.com/debate-space?token=JWT")
        setContentView(webView)
    }
}
```

#### React Native

```javascript
import { WebView } from 'react-native-webview';

<WebView
  source={{ uri: 'https://yoursite.com/debate-space?token=JWT' }}
  javaScriptEnabled={true}
  domStorageEnabled={true}
  sharedCookiesEnabled={true}
/>
```

## 2. SSO authentication in WebView

For users to be automatically authenticated on Logora without re-entering credentials, inject a token into `remote_auth` within `logora_config`.

```javascript
var logora_config = {
  shortname: "APP_NAME",
  remote_auth: "YOUR_JWT_TOKEN"
};
```

See the full guide: [JWT Authentication](/authentication/jwt).

### Logout

To log the user out, remove `remote_auth` or send an empty string:

```javascript
var logora_config = {
  shortname: "APP_NAME",
  remote_auth: ""
};
```

## 3. Session persistence between your app and the WebView

If your app uses a native session manager (Piano, Auth0, internal OAuth), follow these steps:

1. **Get the native session token** when opening the WebView
2. **Regenerate a Logora JWT** from the native claims (server-side)
3. **Pass it as `remote_auth`** as above

:::danger Don't try to share native cookies
Cookie sharing between the native app and WebView is fragile and blocked by iOS/Android in most cases. **Always** use a freshly regenerated JWT on each WebView open.
:::

## 4. Initial route

To open the WebView directly on a specific debate (deep linking), pass `initial_path`:

```javascript
var logora_config = {
  shortname: "APP_NAME",
  initial_path: "/debate/debate-title"
};
```

## 5. Handle internal links (deep linking)

Logora generates links to other debates, user profiles, etc. By default they open in the WebView, which can break your native navigation.

To intercept these links and open them in your native router (Cronista pattern):

```javascript
// In your WebView, listen for clicks on internal links
window.addEventListener("logoraContentLoaded", () => {
  document.querySelectorAll("#logoraRoot a[href]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      // Forward URL to native router
      window.ReactNativeWebView?.postMessage(link.href);
      // or for native iOS / Android:
      // window.webkit?.messageHandlers?.linkHandler?.postMessage(link.href);
    });
  });
});
```

On the native side, listen for messages and run your custom navigation.

## 6. CSS adapted to WebView

To use a different CSS when displayed in WebView (e.g. hide elements redundant with your app), use the `outputType` parameter:

```
https://render.logora.fr/synthesis?short_name=APP&uid=ID&outputType=webapp-type
```

Logora then applies the *webapp-type* theme configurable in *Admin > Configuration > Appearance > Themes*.

## 7. iOS specifics

### Third-party cookies

On iOS, some WKWebView versions disable third-party cookies by default. For the Logora session, this can cause issues if your WebView domain differs from `app.logora.fr`.

**Solution**: use `https://render.logora.fr` (our domain) rather than an iframe on your domain. Logora manages its session on its own domain, no third-party cookie dependency.

### Dynamic theming

The Logora widget supports dark mode via:

```javascript
var logora_config = {
  theme: "dark"  // or "light", or "auto" (follows system preferences)
};
```

---

## See also

- [JWT Authentication](/authentication/jwt)
- [Appearance and theme](/configuration/theme)
- [SSO Troubleshooting](/faq/troubleshooting-sso)
