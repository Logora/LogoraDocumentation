---
id: Module-de-commentaires
title: Module de commentaires
description: Installez les commentaires en pied d’article grâce à notre code JavaScript.
---

L’intégration décrite ci-dessous vous permet de charger et d’afficher le module de commentaires Logora à l’aide de JavaScript.

Ce bloc est généralement inséré après le contenu de l’article, mais il peut également être placé à l’intérieur de l’article si vos contraintes techniques l’exigent.

Ce code doit être ajouté à toutes les pages d’articles sur lesquelles vous souhaitez activer les commentaires.

####  Insérer le code JavaScript et vos variables de configuration

Le conteneur logora_comments correspond à l’emplacement où le module de commentaires sera affiché.

Code standard à copier/coller et compléter :

```javascript
<div class="logora_comments" data-object-id="logora_config"></div>
<script>
    // Variables de configuration
    var logora_config = {
        shortname: "NOM_APPLICATION", // Nom d'application présent dans votre espace d'administration
        resource: {
            id: "PAGE_IDENTIFIER", // Identifiant unique de la page
            name: "comments"
        }
    };

    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://cdn.logora.com/comments.js';
        (d.head || d.body).appendChild(s);
    })();
</script>
```

  
#### Les variables de configuration

- **shortname**  
  Nom de l’application Logora associée à votre site.  
  Ce nom est disponible dans votre espace d’administration Logora  
  (_Configuration > Général_).

- **resource.name**  
  Type de ressource affichée.  
  Cette valeur doit obligatoirement être définie sur `comments`.

- **resource.id**  
  Identifiant unique et stable de l’article.  
  Il permet d’associer correctement les commentaires au contenu concerné.


