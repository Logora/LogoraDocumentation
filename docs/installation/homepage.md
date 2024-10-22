---
id: homepage
title: Module de page d'accueil
---

Logora vous fournit un module présentant un débat à intégrer sur votre page d'accueil. Par défaut, le module se met automatiquement à jour avec votre dernier débat créé. Vous pouvez aussi choisir d'épingler un débat depuis votre espace d'administration, cela remplacera le comportement par défaut du module (vous pourrez dé-épingler le débat a tout moment et revenir au comportement par défaut ou épingler un autre débat de votre choix).

Un exemple sur Ouest-France : 

![Ouest-France homepage](/img/ouest-france-homepage.png)

#### Installation

##### A) Installer un module de page d'accueil unique


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

Après avoir installé le code, prévenez l'équipe Logora (contact@logora.fr) pour qu'elle active la possibilité d'épingler un débat depuis votre espace d'administration. 

Vous pourrez ensuite choisir d'épingler un débat depuis l'onglet "Avancé". 

![Ouest-France homepage](/img/pin-advanced.png)

Cela se matérialisera par un épingle dans votre liste de débats. 

![Pin debate](/img/pin_debate.png)


##### B) Installer un module de page d'accueil différent sur chaque rubrique

Si vous souhaitez installer différentes questions sur différentes rubriques, il vous faut installer le conteneur **logora_synthese** commme décrit dans l'article "Installation Javascript" sur chaque des pages rubriques concernés, en ajoutant l'information 

```html
synthesis: {
            hideArguments: true
       }
```

Le code entier revient à ceci : 

```html
<div class="logora_synthese" data-object-id="logora_config"></div>
<script>
    // Variables de configuration
    var logora_config = {
        shortname: "NOM_APPLICATION", // Nom d'application présent dans votre espace d'administration
        debate: {
            identifier: "PAGE_IDENTIFIER" // Identifiant unique de la page
        }
        synthesis: {
            hideArguments: true
       }
    };

    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://cdn.logora.com/synthese.js'; // 'https://cdn.logora.com/widget.js' pour le widget
        (d.head || d.body).appendChild(s);
    })();
```

Vous pourrez ainsi insérer des questions de débats sous forme de vote sur vos pages rubriques concernés. 
