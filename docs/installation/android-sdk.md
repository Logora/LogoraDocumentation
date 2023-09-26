---
id: android-sdk
title: Android SDK
---

Logora peut s'intégrer en natif sur vos applications Android. Voici un guide d'utilisation de notre SDK.
Une application de test est disponible à l'adresse suivante : [https://github.com/Logora/LogoraAndroidTestApp](https://github.com/Logora/LogoraAndroidTestApp)

#### Installation (Java)

Le SDK est téléchargeable depuis un [dépôt maven sur Github Packages](https://github.com/Logora/LogoraAndroidSDK/packages/1952809). Ajoutez le dépôt et la dépendance dans le fichier *build.gradle* de votre application, en indiquant le numéro de la dernière version. Utilisez des identifiants Github pour vous authentifier (voir: [https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-gradle-registry#using-a-published-package]).
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
