---
id: webview
title: Webview
description: Embed Logora in a WebView inside a mobile app (iOS / Android / React Native) with SSO.
---

Embedding Logora in a WebView lets you display the debate space directly inside a mobile app or a website in WebView mode, while preserving Logora's interactive features.

Two apps have already integrated Logora successfully: **Der SPIEGEL** and **Suedkurier**. See them in action:
- [Der SPIEGEL](https://www.loom.com/share/725de75c09d64911ad42fdff7acf07e7?sid=c5d01191-5783-4980-be81-f1a21e162e87)
- [Suedkurier](https://www.loom.com/share/b3eabe7ab0d1417f8cbbfd29735c2adf?sid=356bc7c1-559e-4f2e-bece-7cecc328cb6e)

:::warning JWT-only SSO
Logora's SSO integration in WebView is **only compatible with JWT**. See [JWT Authentication](/authentication/jwt).
:::

## 1. Installing Logora in a WebView

Installation follows the same procedure as the standard JavaScript install.

### 1.1 Create the WebView page

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
    <script src="https://api.logora.fr/debat.js"></script>
</head>
<body>
    <div id="logora_app"></div>
</body>
</html>
```

### 1.2 Load in a mobile WebView

#### iOS (Swift)

```swift
import UIKit
import WebKit

class DebateViewController: UIViewController {
    var webView: WKWebView!

    override func loadView() {
        webView = WKWebView()
        webView.configuration.preferences.javaScriptEnabled = true
        view = webView
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        let url = URL(string: "https://yoursite.com/debate-space")!
        webView.load(URLRequest(url: url))
    }
}
```

#### Android (Kotlin)

```kotlin
import android.os.Bundle
import android.webkit.WebView
import androidx.appcompat.app.AppCompatActivity

class DebateActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val webView = WebView(this)
        webView.settings.javaScriptEnabled = true
        webView.loadUrl("https://yoursite.com/debate-space")
        setContentView(webView)
    }
}
```

#### React Native

```javascript
import { WebView } from 'react-native-webview';

<WebView
  source={{ uri: 'https://yoursite.com/debate-space' }}
  javaScriptEnabled={true}
/>
```

## 2. SSO authentication in WebView

For users to be authenticated automatically on Logora without re-entering credentials, inject a token into `remote_auth` within `logora_config`.

```javascript
var logora_config = {
  shortname: "APP_NAME",
  remote_auth: "YOUR_JWT_TOKEN"
};
```

See the full guide: [JWT Authentication](/authentication/jwt).

### Logout

To log the user out, remove `remote_auth` or pass an empty string:

```javascript
var logora_config = {
  shortname: "APP_NAME",
  remote_auth: ""
};
```

## 3. Adapt the rendering to WebView via a URL parameter

To distinguish your WebView from your responsive web view, a common convention (used for example by Cronista) is to add a parameter to the URL of the page hosting the WebView:

```
https://yoursite.com/debate-space?outputType=webapp-type
```

Logora does not process this parameter directly — it's up to your integration to detect it and adapt behavior (custom CSS, link interception, etc.).

### Example: intercept internal links and forward them to the native router

Logora dispatches a `logoraContentLoaded` DOM event once the widget is rendered. You can use it to adjust link behavior:

```javascript
window.addEventListener("logoraContentLoaded", () => {
  const currentUrl = new URL(window.location.href);
  if (currentUrl.searchParams.get("outputType") !== "webapp-type") return;

  const root = document.querySelector("#logoraRoot");
  if (!root) return;

  const links = root.querySelectorAll("a[href]");
  links.forEach((link) => {
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

## 4. Session persistence

If your app uses a native session manager (Piano, Auth0, internal OAuth):

1. Get the native session token when opening the WebView
2. Regenerate a Logora JWT from the native claims (server-side)
3. Pass it as `remote_auth` as above

:::caution Don't try to share native cookies
Cookie sharing between the native app and WebView is fragile and blocked by iOS/Android in most cases. **Always** use a freshly regenerated JWT each time the WebView opens.
:::

---

## See also

- [JWT Authentication](/authentication/jwt)
- [Appearance and theme](/configuration/theme)
- [Pre-render API](/faq/render-api) — alternative to fetch pre-rendered HTML server-side
