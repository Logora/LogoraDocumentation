---
id: comments
title: Commentaires
description: Installez les commentaires sur vos articles grâce à notre code universel Javascript.
---

Dans le cas ou vous souhaiteriez insérer les commentaires et la synthèse de débat sur la même page, vous pouvez utiliser cette méthode d'insertion Javascript pour intégrer les commentaires indépendamment de la synthèse des débats. Si vous souhaitez intégrer soit la synthèse soit les commentaires sur votre article, utilisez l’installation Javascript [/installation/javascript-sdk](installation/javascript-sdk) et activez les commentaires dans la configuration de votre espace d’administration. Les commentaires seront affichés si l’article n’est pas associé à un débat.

#### Insérer le code JavaScript et vos variables de configuration

Le conteneur **logora_embed** est l'endroit où les commentaires sont chargés.

Code standard à copier/coller et compléter :

```html
<div class="logora_embed" data-object-id="logora_config"></div>
<script>
    // Variables de configuration
    var logora_config = {
        shortname: "NOM_APPLICATION", // Nom d'application présent dans votre espace d'administration
        resource: { id: "ID D'ARTICLE", name: "comments" } // Informations de l'article
    };

    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://cdn.logora.com/comments.js';
        (d.head || d.body).appendChild(s);
    })();
</script>
```

**resource.id (requis)** : identifiant unique de l'article à retrouver dans votre espace d'administration dans la rubrique "Articles".
**resource.name (requis)** : "comments", invariable.