---
id: ios-sdk
title: iOS SDK
---

Logora peut s'intégrer en natif sur vos applications iOS. Voici un guide d'utilisation de notre SDK.
Une application de test est disponible à l'adresse suivante : [https://github.com/Logora/LogoraiOSTestApp](https://github.com/Logora/LogoraiOSTestApp)

#### Installation (Swift)

Le SDK est téléchargeable en tant que Swift Package. Ajoutez le lien du dépôt en référencant la branche _master_.


#### Utilisation (Swift)

Le SDK fournit une vue `WidgetView` qui contient le bloc de synthèse en pied d'article. Insérez cette vue dans votre page d'article, celui-ci
contient des liens vers l'espace de débat qui se lancera dans un nouveau _ViewController_. Il n'y a donc pas besoin d'insérer l'espace de débat mais seulement le bloc
en pied d'article.

Insérer le `WidgetView` dans votre page article :

Constructeur : ` WidgetFragment(String pageUid, String applicationName, String assertion)`

Paramètres :
- `String pageUid`: identifiant unique de la page, doit être le même que pour l'insertion web.
- `String applicationName`: nom de l'application disponible sur votre espace d'administration Logora.
- `String assertion`: jeton JWT (JSON Web Token) pour l'authentification de l'utilisateur.


Exemple d'insertion :

```swift
import LogoraSDK

class ViewController: UIViewController {
    override func viewDidLoad() {
      super.viewDidLoad()
      title = "Page article"
      initLayout()
    }
    
    func initLayout() {
      let widget: WidgetView! = WidgetView(applicationName: "logora-demo", pageUid: "mon-article", null)
      self.view.addSubview(widget)
    }
}
```
