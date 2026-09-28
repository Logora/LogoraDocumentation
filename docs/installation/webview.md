---
id: webview
title: Webview
description: Intégrer Logora en WebView dans une application mobile (iOS / Android / React Native) avec SSO.
---

L'intégration de Logora en WebView permet d'afficher l'espace de débat directement au sein d'une application mobile ou d'un site en mode WebView. Cette approche garantit une expérience utilisateur fluide tout en conservant les fonctionnalités interactives de Logora.

Deux applications ont déjà intégré Logora avec succès : **Der SPIEGEL** et **Suedkurier**. Vous pouvez voir ces intégrations en action aux liens suivants :
- [Der SPIEGEL](https://www.loom.com/share/725de75c09d64911ad42fdff7acf07e7?sid=c5d01191-5783-4980-be81-f1a21e162e87)
- [Suedkurier](https://www.loom.com/share/b3eabe7ab0d1417f8cbbfd29735c2adf?sid=356bc7c1-559e-4f2e-bece-7cecc328cb6e)

:::warning SSO compatible JWT uniquement
L'intégration SSO de Logora en WebView est **uniquement compatible avec la méthode JWT**. Voir [Authentification JWT](/authentication/jwt).
:::

## 1. Installation de Logora en WebView

L'installation de Logora en WebView suit la même procédure que l'installation classique en insérant le code JavaScript standard.

### 1.1 Création de la WebView

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
    <script src="https://api.logora.fr/debat.js"></script>
</head>
<body>
    <div id="logora_app"></div>
</body>
</html>
```

### 1.2 Chargement dans une WebView mobile

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
        let url = URL(string: "https://votresite.com/espace-debat")!
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
        webView.loadUrl("https://votresite.com/espace-debat")
        setContentView(webView)
    }
}
```

#### React Native

```javascript
import { WebView } from 'react-native-webview';

<WebView
  source={{ uri: 'https://votresite.com/espace-debat' }}
  javaScriptEnabled={true}
/>
```

## 2. Authentification SSO en WebView

Pour que les utilisateurs soient automatiquement authentifiés sur Logora sans ressaisie de leurs identifiants, il est nécessaire d'injecter un jeton dans `remote_auth` au sein de `logora_config`.

```javascript
var logora_config = {
  shortname: "NOM_APPLICATION",
  remote_auth: "VOTRE_JETON_JWT"
};
```

Voir le guide complet : [Authentification JWT](/authentication/jwt).

### Déconnexion de l'utilisateur

Pour déconnecter un utilisateur, il suffit de retirer la valeur de `remote_auth` ou de transmettre une chaîne vide :

```javascript
var logora_config = {
  shortname: "NOM_APPLICATION",
  remote_auth: ""
};
```

## 3. Adapter l'affichage à la WebView via un paramètre d'URL

Pour différencier le comportement de votre WebView de votre vue web responsive, une convention courante (utilisée par exemple par Cronista) consiste à ajouter un paramètre dans l'URL de la page hôte de la WebView :

```
https://votresite.com/espace-debat?outputType=webapp-type
```

Logora ne traite pas ce paramètre directement — c'est à votre intégration de le détecter et d'adapter le comportement (CSS custom, interception de liens, etc.).

### Exemple : intercepter les liens internes pour les renvoyer au routeur natif

Logora émet un événement DOM `logoraContentLoaded` une fois que le widget est rendu. Vous pouvez l'utiliser pour modifier le comportement des liens :

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
      // Renvoyer l'URL au routeur natif
      window.ReactNativeWebView?.postMessage(link.href);
      // ou pour iOS/Android natif :
      // window.webkit?.messageHandlers?.linkHandler?.postMessage(link.href);
    });
  });
});
```

Côté natif, écoutez les messages et déclenchez votre navigation custom.

## 4. Persistance de la session

Si votre app utilise un gestionnaire de session natif (Piano, Auth0, OAuth interne) :

1. Récupérez le token de session natif au moment d'ouvrir la WebView
2. Régénérez un JWT Logora à partir des claims natifs (côté serveur)
3. Passez-le en `remote_auth` comme ci-dessus

:::caution Ne tentez pas de partager les cookies natifs
Le partage de cookies entre l'app native et la WebView est fragile et bloqué par iOS/Android dans la plupart des cas. Passez **toujours** par un JWT régénéré à chaque ouverture de WebView.
:::

---

## Voir aussi

- [Authentification JWT](/authentication/jwt)
- [Apparence et thème](/configuration/theme)
- [API de pré-rendu](/faq/render-api) — alternative pour récupérer le HTML pré-rendu côté serveur
