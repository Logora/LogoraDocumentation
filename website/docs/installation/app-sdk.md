---
id: app-sdk
title: App SDK
---

#### Installation

#### Utilisation

Afin d'intégrer le SDK android de Logora dans votre application, sélectionner l'`Activity` contenant votre article et insérez le _widget_ Logora menant à l'espace de débat en passant ces paramètres : 

```java 
Context context
```
> Le context de votre application
```java 
String pageUid
``` 
> L'identifiant unique de la page contenant l'article
```java
String applicationName
```
> Le nom de votre application


```java
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        String applicationName = "logora-demo";
        WidgetFragment widget = new WidgetFragment(this.getApplicationContext(), "1162254885", applicationName);

        getSupportFragmentManager().beginTransaction()
                .add(R.id.logora_widget_container, widget)
                .commit();
    }
```

Le widget fera le lien entre votre article et l'espace de débat.