---
id: module-commentaires
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
<div id="logora_comments" data-object-id="logora_config"></div>
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

---

## Le titre de mon article a changé, comment mettre à jour l’espace de débat ?

Le titre affiché dans l’espace de débat (question du débat, module en pied d’article) provient de l’article enregistré dans Logora, et non de votre page HTML : il n’est pas modifié automatiquement lorsque vous changez le titre de l’article dans votre CMS. Une synchronisation est nécessaire.

### 1. Vérifier la page de l’article côté site

- Le titre de l’article doit être à jour sur la page elle-même, dans la balise `<title>` et dans les balises Open Graph (`og:title` en particulier).
- C’est à partir de ces balises que Logora alimente l’article lié à votre page : si elles sont correctes, la synchronisation reprendra le bon titre.

### 2. Mettre à jour l’article côté administration Logora

- Connectez-vous à votre espace d’administration Logora et ouvrez l’article concerné.
- Mettez à jour son titre (et, si besoin, son URL de référence) afin qu’il corresponde à la page publiée.
- L’espace de débat lié à cet article affiche ensuite le nouveau titre.

### 3. Dissocier un article de son espace de débat

Vous pouvez dissocier un article d’un débat depuis l’espace d’administration, dans la fiche de l’article ou du débat concerné. Cette dissociation ne supprime ni les commentaires déjà collectés, ni la page de commentaires : le module reste accessible via son URL directe.

### 4. Référencement (Google)

- Google référence la page de l’article publiée par votre CMS, dont vous contrôlez le `<title>` et les balises Open Graph : une fois la page corrigée et recrawlée par Google, c’est le nouveau titre qui apparaît dans les résultats de recherche.
- Le module Logora est chargé côté client (JavaScript) et n’altère ni le titre ni les métadonnées de votre page : il n’a pas d’impact sur le titre référencé par Google.
- Pour vérifier ou accélérer la mise à jour, demandez une nouvelle indexation de l’URL concernée dans la [Google Search Console](https://search.google.com/search-console/about).


