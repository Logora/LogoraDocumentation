---
id: webview
title: Webview
---

# Logora Integration in WebView with SSO

## Introduction

Integrating Logora in a WebView allows you to display the debate space directly within a mobile application or a website in WebView mode. This approach ensures a seamless user experience while maintaining Logora's interactive features.

Two applications have already successfully integrated Logora: **Der SPIEGEL** and **Suedkurier**. You can see these integrations in action at the following links:
- [Der SPIEGEL](https://www.loom.com/share/725de75c09d64911ad42fdff7acf07e7?sid=c5d01191-5783-4980-be81-f1a21e162e87)
- [Suedkurier](https://www.loom.com/share/b3eabe7ab0d1417f8cbbfd29735c2adf?sid=356bc7c1-559e-4f2e-bece-7cecc328cb6e)

For seamless user authentication, Logora supports Single Sign-On (SSO) through the injection of a token into the `logora_config` object under the `remote_auth` parameter. **Logora's SSO integration is only compatible with the JWT authentication method.**

## 1. Installing Logora in WebView

Installing Logora in a WebView follows the same procedure as the standard installation by inserting the standard JavaScript code. Here are the steps to follow:

### 1.1 Creating the WebView

In your mobile application or WebView site, create a web view that loads the URL of the debate space. Example in HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logora Debate</title>
    <script>
      var logora_config = {
        shortname: "APPLICATION_NAME",
        remote_auth: "YOUR_JWT_SSO_TOKEN"
      };
    </script>
    <script src="https://cdn.logora.com/debat.js"></script>
</head>
<body>
    <div id="logora_app"></div>
</body>
</html>
```

### 1.2 Loading in a Mobile WebView

**Example in Swift (iOS)**

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

**Example in Kotlin (Android)**

```kotlin
import android.os.Bundle
import android.webkit.WebSettings
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

## 2. Single Sign-On (SSO) in WebView

For users to be automatically authenticated on Logora without re-entering their credentials, it is necessary to inject a token into `remote_auth` within `logora_config`.

**Logora's SSO integration is only compatible with JWT authentication.**

You can check the detailed guide on authentication in our [JWT documentation](../../authentication/jwt).

Example configuration:

```javascript
var logora_config = {
  shortname: "APPLICATION_NAME",
  remote_auth: "YOUR_JWT_SSO_TOKEN"
};
```

### User Logout

To log out a user, simply remove the `remote_auth` value or pass an empty string:

```javascript
var logora_config = {
  shortname: "APPLICATION_NAME",
  remote_auth: ""
};
```

## Conclusion

With this integration, your users can interact on Logora without friction, directly from your application or WebView site while benefiting from secure and seamless authentication through JWT-based SSO.
