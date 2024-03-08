---
id: ios-sdk
title: iOS SDK
---

Logora can be integrated natively on your iOS applications. Here is a guide to using our SDK.
A test application is available at the following address: [https://github.com/Logora/LogoraiOSTestApp](https://github.com/Logora/LogoraiOSTestApp)

#### Installation (Swift)

The SDK is downloadable as a Swift Package. Add the repository link by referencing the _master_ branch : [https://github.com/Logora/LogoraiOSSDK.git](https://github.com/Logora/LogoraiOSSDK.git).


#### Usage (Swift)

The SDK provides a `WidgetView` which contains the summary block in the footer. Insert this view into your article page, it contains links to the discussion area which will launch in a new ViewController. There is therefore no need to insert the debate area, only the footer block.

Insert `WidgetView` in your article page :

Parameters :
- `String pageUid`: page unique identifier, must be the same as for the web insertion.
- `String applicationName`: application name available on your Logora administration panel.
- `String assertion`: JWT (JSON Web Token) to authenticate user.

Insert this code into the `scene` function of the `SceneDelegate.swift` class.

```
guard let windowScene = (scene as? UIWindowScene) else { return }
        let window = UIWindow(windowScene: windowScene)
        let navigationController = UINavigationController()
        navigationController.viewControllers = [ViewController()]
        window.rootViewController = navigationController
        self.window = window
        window.makeKeyAndVisible()
```



Integration example :

```swift
import LogoraSDK

class ViewController: UIViewController {
    override func viewDidLoad() {
      super.viewDidLoad()
      title = "Article page"
      initLayout()
    }
    
    func initLayout() {
      let widget: WidgetView! = WidgetView(applicationName: "logora-demo", pageUid: "my-article", null)
      self.view.addSubview(widget)
    }
}
```
