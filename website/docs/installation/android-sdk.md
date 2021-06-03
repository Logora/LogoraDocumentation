---
id: android-sdk
title: Android SDK
---

#### Installation

#### Utilisation

Afin d'intégrer le SDK android de Logora dans votre application, sélectionner l'`Activity` contenant votre article et insérez le _widget_ Logora menant à l'espace de débat en passant ces paramètres : 

Paramètres à spécifier :
- `Context context` : contexte de l'application
- `String pageUid` : identifiant unique de la page
- `String applicationName` : nom de l'application


Exemple d'insertion :

```java
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        String applicationName = "logora-demo";
        WidgetFragment widget = new WidgetFragment(this.getApplicationContext(), "1111111111", applicationName);

        getSupportFragmentManager().beginTransaction()
                .add(R.id.logora_widget_container, widget)
                .commit();
    }
```

Le widget fera le lien entre votre article et l'espace de débat.