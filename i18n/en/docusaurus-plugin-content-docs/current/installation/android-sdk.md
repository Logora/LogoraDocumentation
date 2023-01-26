---
id: android-sdk
title: Android SDK
---

Logora can be integrated natively into your Android applications. Here is a guide to using our SDK. 

#### Installation (Java)

The SDK can be downloaded from a maven repository. Add the repository and the dependency to the build.gradle file of your application, using the credentials we will provide you.

```
repositories {
    maven {
        url = "https://maven.pkg.github.com/Logora/LogoraAndroidSDK"
        credentials {
            username = "LOGORA_USERNAME"
            password = "LOGORA_PASSWORD"
        }
    }
}

dependencies {
    implementation 'com.logora:logora-sdk:0.1.4'
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

Integration example :

```java
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        WidgetFragment widget = new WidgetFragment(this.getApplicationContext(), "my-article", "logora-demo");

        getSupportFragmentManager().beginTransaction()
                .add(R.id.logora_widget_container, widget)
                .commit();
    }
```

