---
id: webview
title: Webview
---

# Intégration en WebView (avec SSO)

## Introduction

L'intégration de Logora en WebView permet d'afficher l'espace de débat directement au sein d'une application mobile ou d'un site en mode WebView. Cette approche garantit une expérience utilisateur fluide tout en conservant les fonctionnalités interactives de Logora.

Deux applications ont déjà intégré Logora avec succès : **Der SPIEGEL** et **Suedkurier**. Vous pouvez voir ces intégrations en action aux liens suivants :
- [Der SPIEGEL](https://www.loom.com/share/725de75c09d64911ad42fdff7acf07e7?sid=c5d01191-5783-4980-be81-f1a21e162e87)
- [Suedkurier](https://www.loom.com/share/b3eabe7ab0d1417f8cbbfd29735c2adf?sid=356bc7c1-559e-4f2e-bece-7cecc328cb6e)

Pour une authentification transparente des utilisateurs, Logora supporte l'Authentification Unique (SSO) via l'injection d'un jeton dans l'objet `logora_config` sous le paramètre `remote_auth`. 

## 1. Installation de Logora en WebView

L'installation de Logora en WebView suit la même procédure que l'installation classique en insérant le code JavaScript standard. Voici les étapes à suivre :

### 1.1 Création de la WebView

Dans votre application mobile ou site WebView, créez une vue Web qui charge l'URL de l'espace de débat. Exemple en HTML :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Débat Logora</title>
    <script>
      var logora_config = {
        shortname: "NOM_APPLICATION",
        remote_auth: "VOTRE_JETON_SSO"
      };
    </script>
    <script src="https://cdn.logora.com/debat.js"></script>
</head>
<body>
    <div id="logora_app"></div>
</body>
</html>
```

### 1.2 Chargement dans une WebView mobile

**Exemple en Swift (iOS)**

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
        let url = URL(string: "https://votresite.com/espace-debat")!
        webView.load(URLRequest(url: url))
    }
}
```

**Exemple en Kotlin (Android)**

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
        webView.loadUrl("https://votresite.com/espace-debat")
        setContentView(webView)
    }
}
```

## 2. Authentification Unique (SSO) en WebView

Pour que les utilisateurs soient automatiquement authentifiés sur Logora sans ressaisie de leurs identifiants, il est nécessaire d’injecter un jeton dans `remote_auth` au sein de `logora_config`.

Logora prend en charge plusieurs méthodes d'authentification SSO : **JWT** et **OAuth 2.0**. Vous pouvez consulter les guides détaillés sur l’authentification dans notre [documentation JWT](../../authentication/jwt) et [documentation OAuth 2.0](../../authentication/oauth2_server).

Exemple de configuration :

```javascript
var logora_config = {
  shortname: "NOM_APPLICATION",
  remote_auth: "VOTRE_JETON_SSO"
};
```

### Déconnexion de l'utilisateur

Pour déconnecter un utilisateur, il suffit de retirer la valeur de `remote_auth` ou de transmettre une chaîne vide :

```javascript
var logora_config = {
  shortname: "NOM_APPLICATION",
  remote_auth: ""
};
```

## Conclusion

Avec cette intégration, vos utilisateurs peuvent interagir sur Logora sans friction, directement depuis votre application ou site WebView, tout en bénéficiant d'une authentification sécurisée et transparente.
