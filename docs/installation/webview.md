---
id: webview
title: Webview
description: Intégrer Logora en WebView dans une application mobile (iOS / Android / React Native) avec SSO
---

L'intégration de Logora en WebView permet d'afficher l'espace de débat directement au sein d'une application mobile (iOS / Android / React Native) ou d'un site en mode WebView, tout en conservant la session utilisateur de votre app.

:::tip Exemples en production
- **Der SPIEGEL** ([démo](https://www.loom.com/share/725de75c09d64911ad42fdff7acf07e7?sid=c5d01191-5783-4980-be81-f1a21e162e87))
- **Suedkurier** ([démo](https://www.loom.com/share/b3eabe7ab0d1417f8cbbfd29735c2adf?sid=356bc7c1-559e-4f2e-bece-7cecc328cb6e))
- **BILD iOS App**
- **Cronista** (web app)
:::

Pour une authentification transparente, Logora supporte le SSO via l'injection d'un jeton dans `logora_config.remote_auth`.

:::warning SSO compatible JWT uniquement
L'intégration SSO de Logora en WebView est **uniquement compatible avec la méthode JWT**. Voir [Authentification JWT](/authentication/jwt).
:::

## Architecture recommandée

```
[App native]                [Votre serveur]              [Logora]
     │                              │                       │
     │  1. Login utilisateur        │                       │
     │ ─────────────────────────►   │                       │
     │                              │                       │
     │  2. Demande URL débat        │                       │
     │ ─────────────────────────►   │                       │
     │                              │  3. Génère JWT        │
     │                              │     + URL signée      │
     │ ◄─────────────────────────   │                       │
     │  URL signée                  │                       │
     │                              │                       │
     │  4. Charge dans WebView      │                       │
     │ ────────────────────────────────────────────────►   │
     │                              │                       │
     │  5. Logora valide JWT,       │                       │
     │     ouvre la session         │                       │
     │ ◄────────────────────────────────────────────────   │
```

## 1. Installation de Logora en WebView

L'installation suit la même procédure que l'installation classique en insérant le code JavaScript standard.

### 1.1 Page HTML hébergée par votre serveur

Hébergez sur votre site une page minimale qui charge le widget Logora :

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
      remote_auth: "VOTRE_JETON_JWT"
    };
  </script>
  <script src="https://cdn.logora.com/debat.js"></script>
</head>
<body>
  <div id="logora_app"></div>
</body>
</html>
```

### 1.2 Chargement dans la WebView

#### iOS (Swift)

```swift
import UIKit
import WebKit

class DebateViewController: UIViewController {
    var webView: WKWebView!

    override func loadView() {
        let config = WKWebViewConfiguration()
        config.preferences.javaScriptEnabled = true
        // Persister cookies et stockage entre lancements
        config.websiteDataStore = WKWebsiteDataStore.default()

        webView = WKWebView(frame: .zero, configuration: config)
        view = webView
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        let url = URL(string: "https://votresite.com/espace-debat?token=JWT")!
        webView.load(URLRequest(url: url))
    }
}
```

:::caution iOS — persistance de la session
Sur iOS, sans `WKWebsiteDataStore.default()`, l'utilisateur peut être déconnecté à chaque ouverture de la WebView. Configurez ce paramètre comme dans l'exemple ci-dessus.
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

        // Persister les cookies entre sessions
        CookieManager.getInstance().setAcceptCookie(true)
        CookieManager.getInstance().setAcceptThirdPartyCookies(webView, true)

        webView.loadUrl("https://votresite.com/espace-debat?token=JWT")
        setContentView(webView)
    }
}
```

#### React Native

```javascript
import { WebView } from 'react-native-webview';

<WebView
  source={{ uri: 'https://votresite.com/espace-debat?token=JWT' }}
  javaScriptEnabled={true}
  domStorageEnabled={true}
  sharedCookiesEnabled={true}
/>
```

## 2. Authentification SSO en WebView

Pour que les utilisateurs soient automatiquement authentifiés sur Logora sans ressaisie d'identifiants, injectez un jeton dans `remote_auth` au sein de `logora_config`.

```javascript
var logora_config = {
  shortname: "NOM_APPLICATION",
  remote_auth: "VOTRE_JETON_JWT"
};
```

Voir le guide complet : [Authentification JWT](/authentication/jwt).

### Déconnexion

Pour déconnecter l'utilisateur, retirez la valeur de `remote_auth` ou transmettez une chaîne vide :

```javascript
var logora_config = {
  shortname: "NOM_APPLICATION",
  remote_auth: ""
};
```

## 3. Persistance de la session entre votre app et la WebView

Si votre app utilise un gestionnaire de session natif (Piano, Auth0, OAuth interne), suivez ces étapes :

1. **Récupérez le token de session natif** au moment d'ouvrir la WebView
2. **Régénérez un JWT Logora** à partir des claims natifs (côté serveur)
3. **Passez-le en `remote_auth`** comme ci-dessus

:::danger Ne tentez pas de partager les cookies natifs
Le partage de cookies entre l'app native et la WebView est fragile et bloqué par iOS/Android dans la plupart des cas. Passez **toujours** par un JWT régénéré à chaque ouverture.
:::

## 4. Route initiale

Pour ouvrir la WebView directement sur un débat précis (deep linking), passez `initial_path` :

```javascript
var logora_config = {
  shortname: "NOM_APPLICATION",
  initial_path: "/debat/titre-de-debat"
};
```

## 5. Gérer les liens internes (deep linking)

Logora génère des liens vers d'autres débats, profils utilisateur, etc. Par défaut ils ouvrent dans la WebView, ce qui peut casser votre navigation native.

Pour intercepter ces liens et les ouvrir dans votre routeur natif (cas Cronista) :

```javascript
// Dans votre WebView, écouter les clics sur les liens internes
window.addEventListener("logoraContentLoaded", () => {
  document.querySelectorAll("#logoraRoot a[href]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      // Renvoyer l'URL au routeur natif
      window.ReactNativeWebView?.postMessage(link.href);
      // ou pour iOS / Android natif :
      // window.webkit?.messageHandlers?.linkHandler?.postMessage(link.href);
    });
  });
});
```

Côté natif, écoutez les messages et faites votre navigation custom.

## 6. CSS adapté à la WebView

Si vous voulez que Logora utilise un CSS différent quand affiché en WebView (ex. masquer certains éléments redondants avec votre app), utilisez le paramètre `outputType` :

```
https://render.logora.fr/synthesis?short_name=APP&uid=ID&outputType=webapp-type
```

Logora applique alors le thème *webapp-type* configurable dans *Admin > Configuration > Apparence > Thèmes*.

## 7. Cas particuliers iOS

### Cookies tiers

Sur iOS, certaines versions de WKWebView désactivent les cookies tiers par défaut. Pour la session Logora, cela peut poser problème si votre domaine de WebView diffère de `app.logora.fr`.

**Solution** : utilisez `https://render.logora.fr` (notre domaine) plutôt qu'une iframe sur votre domaine. Logora gère sa session sur son propre domaine, sans dépendance aux cookies tiers.

### Theming dynamique

Le widget Logora supporte le mode sombre via le paramètre :

```javascript
var logora_config = {
  theme: "dark"  // ou "light", ou "auto" (suit les préférences système)
};
```

---

## Voir aussi

- [Authentification JWT](/authentication/jwt)
- [Apparence et thème](/configuration/theme)
- [Dépannage SSO](/faq/troubleshooting-sso)
