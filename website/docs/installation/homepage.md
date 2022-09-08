---
id: homepage
title: Module de page d'accueil
---

Logora vous fournit un module présentant le dernier débat créé à intégrer sur votre page d'accueil. Il se met automatiquement à jour avec votre dernier débat.

#### Installation

Insérez le code Javascript du module de page d'accueil à l'endroit où vous souhaitez voir apparaître le module. Ceci est un exemple de code Javascript qui charge et affiche le module du dernier débat débat créé.


Le conteneur **logora_embed** est l'endroit où le module est chargé.

Code standard à copier/coller et compléter :

```html
<div class="logora_embed" data-object-id="logora_config"></div>
<script>
    // Variables de configuration
    var logora_config = {
        shortname: "NOM_APPLICATION", // Nom d'application présent dans votre espace d'administration
        debate: {
            id: "vote_embed", // Paramètres non variables
            name: "vote_embed" // Paramètres non variables
        }
    };

    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://api.logora.fr/embed.js';
        (d.head || d.body).appendChild(s);
    })();
</script>
```
