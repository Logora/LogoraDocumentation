---
id: android-sdk
title: Android SDK
---

Logora peut s'intégrer en natif sur vos applications Android. Voici un guide d'utilisation de notre SDK.
Une application de test est disponible à l'adresse suivante : [https://github.com/Logora/LogoraAndroidTestApp]

#### Installation (Java)

Le SDK est téléchargeable depuis un dépôt maven. Ajoutez le dépôt et la dépendance dans le fichier *build.gradle* de votre application,
en utilisant des identifiants que nous vous fournirons.
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

Le SDK fournit un fragment `WidgetFragment` qui contient le bloc de synthèse en pied d'article. Insérez ce fragment dans votre page d'article, celui-ci
contient des liens vers l'espace de débat qui se lancera dans une nouvelle activité. Il n'y a donc pas besoin d'insérer l'espace de débat mais seulement le bloc
en pied d'article.

Constructeur :
`public WidgetFragment(Context context, String pageUid, String applicationName)`

Paramètres :
- `Context context`: contexte de l'application
- `String pageUid`: identifiant unique de la page, doit être le même que pour l'insertion web.
- `String applicationName`: nom de l'application disponible sur votre espace d'administration Logora.

Exemple d'insertion :

```java
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        WidgetFragment widget = new WidgetFragment(this.getApplicationContext(), "mon-article", "logora-demo");

        getSupportFragmentManager().beginTransaction()
                .add(R.id.logora_widget_container, widget)
                .commit();
    }
```
