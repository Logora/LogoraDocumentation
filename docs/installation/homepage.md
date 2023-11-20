---
id: homepage
title: Module de page d'accueil
---

Logora vous fournit un module présentant un débat à intégrer sur votre page d'accueil. Par défaut, le module se met automatiquement à jour avec votre dernier débat créé. Vous pouvez aussi choisir d'épingler un débat depuis votre espace d'administration, cela remplacera le comportement par défaut du module (vous pourrez dé-épingler le débat a tout moment et revenir au comportement par défaut ou épingler un autre débat de votre choix).

Un exemple en format mobile : 

<img src="/img/widget_instance.png" alt="Home widget" width="200"/>

#### Installation

Insérez le code Javascript du module de page d'accueil à l'endroit où vous souhaitez voir apparaître le module. Ceci est un exemple de code Javascript qui intègre le module :


Le conteneur **logora_embed** est l'endroit où le module est chargé.

Code standard à copier/coller et compléter :

```html
<div class="logora_embed" data-object-id="logora_config"></div>
<script>
    // Variables de configuration
    var logora_config = {
        shortname: "NOM_APPLICATION", // Nom d'application présent dans votre espace d'administration
        resource: {
            id: "vote", // Paramètres non variables
            name: "vote" // Paramètres non variables
        }
    };

    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://cdn.logora.com/embed.js';
        (d.head || d.body).appendChild(s);
    })();
</script>
```
