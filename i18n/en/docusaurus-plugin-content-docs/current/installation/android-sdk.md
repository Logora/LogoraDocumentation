---
id: android-sdk
title: Android SDK
---

Logora can be integrated natively into your Android applications. Here is a guide to using our SDK. A test is available here : https://github.com/Logora/LogoraAndroidTestApp

#### Installation (Java)

The SDK can be downloaded from a [maven repository on Github Packages](https://github.com/Logora/LogoraAndroidSDK/packages/1952809). Add the repository and the dependency to the *build.gradle* file of your application, using the latest version number. Use Github credentials to authenticate (see [here](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-gradle-registry#using-a-published-package])).

```
repositories {
    maven {
        url = uri("https://maven.pkg.github.com/Logora/LogoraAndroidSDK")
        credentials {
            username = "GITHUB_USERNAME"
            password = "GITHUB_TOKEN"
        }
    }
}

dependencies {
    implementation 'com.logora:logora-sdk:VERSION_NAME'
}
```

#### Utilisation (Java)

The SDK provides a `WidgetFragment` that contains the summary block in the footer of the article. Insert this fragment into your article page, and it contains links to the discussion area which will launch a new activity. So there is no need to insert the debate area, just the footer block.

Constructor :
`public WidgetFragment(Context context, String pageUid, String applicationName)`

Parameters :
- `Context context`: app context
- `String pageUid`: page unique identifier, needs to be the same as the web integration one.
- `String applicationName`: app name available on your Logora administration panel.
- `String assertion`: JWT (JSON Web Token) to authenticate user.

Integration example :

```java
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        WidgetFragment widget = new WidgetFragment(this.getApplicationContext(), "my-article", "logora-demo", null);

        getSupportFragmentManager().beginTransaction()
                .add(R.id.logora_widget_container, widget)
                .commit();
    }
```

