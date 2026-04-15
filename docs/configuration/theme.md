---
id: theme
title: Apparence et thème
description: Personnalisez l'apparence de l'espace contributif Logora.

---

Logora se fond à votre identité visuelle depuis l'espace d'administration via l'onglet "Configuration".
Vous pouvez effectuer les essais que vous souhaitez pour que cela corresponde à votre charte graphique. 
Vous pouvez revenir en arrière en retrouvant la configuration par défaut si besoin. 

### 1. Personnaliser les couleurs, les polices, le visuel des boîtes, les urls et les textes

Les couleurs, les polices, le visuel des boîtes et les urls de votre espace sont personnalisables depuis l'onglet "Configuration" > "Personnalisation".
Les textes sont modifiables depuis l'onglet "Configuration" > "Textes".

#### a) Couleurs : thèses, appel à l'actions et étiquettes

Toutes les couleurs sont disponibles. Vous pouvez modifier les couleurs des thèses (pour / contre / neutre), des appels à l'action (couleur principale), et du texte et des bordures des étiquettes (catégorisant les débats). 

#### b) Polices : type, taille et épaisseur

Une dizaine de polices sont disponibles, si la votre est manquante, vous pouvez l'ajoutez en cliquant sur "Créer". Si la police que vous créez est déjà chargée dans votre page, elle sera récupérée pour l'espace contributif. 

La taille de la police des titres, de la police par défaut et des textes plus petits (explications) est également modifiable.  

L'épaisseur des textes est aussi modifiable. 

#### c) Visuel des boites : bordures, ombres et rayons

Vous pouvez modifier l'ensemble des visuels des boites en modifiant l'apparence des bordures, des ombres de ces bordures ainsi que leur rayon (plus ou moins arrondi). 

#### d) Textes : changer le wording

La plupart des textes de l'espace de débat ("Suivre le débat", "Tous les débats" etc ) sont modifiables depuis l'onglet "Textes". Si un des textes que vous souhaitez modifier est manquant, merci de nous l'indiquer pour que nous l'ajoutions sur votre espace. 
Vous pouvez par exemple modifier l'ensemble des textes proposer au niveau de la synthèse, c'est à dire à au sein du bloc de pied d'article. 

### 2. Personnaliser via des variables CSS

L'ensemble des valeurs visuelles de l'espace contributif sont exposées sous forme de variables CSS, ce qui permet de les surcharger directement depuis votre page sans passer par l'administration.

Il suffit d'ajouter un bloc `<style>` dans votre page en ciblant l'élément `#logoraRoot` :

```html
<style>
  #logoraRoot {
    /* Couleurs des positions */
    --for-primary-color: #cc6a6d;
    --against-primary-color: #7980bb;
    --third-position-color-primary: #9b9b9b;
    --call-primary-color: #434343;
    --source-primary: #4485C3;
    --success-primary: #4d9e33;
    --cancel-primary: #c73c49;

    /* Arrière-plans */
    --background-color-container: white;
    --background-color-primary: white;
    --background-color-secondary: #E8E8E8;

    /* Texte */
    --text-primary: #222222;
    --text-secondary: #5F5F5F;
    --text-tertiary: #fafafa;
    --text-light: white;
    --darken-text-tertiary: #F1EFED;
    --darkest-text-tertiary: #c7c7c7;

    /* Boîtes */
    --box-shadow: 0px 2px 5px rgba(7, 42, 68, 0.1);
    --box-shadow-main-container: 0px 2px 5px rgba(7, 42, 68, 0.1);
    --box-border: 1px solid rgba(7, 42, 68, 0.1);
    --box-border-main-container: 1px solid rgba(7, 42, 68, 0.1);
    --box-border-radius: 6px;

    /* Boutons */
    --button-shadow: 0px 2px 5px rgba(7, 42, 68, 0.1);
    --button-border: 1px solid rgba(7, 42, 68, 0.1);
    --button-border-radius: 6px;

    /* Typographie */
    --font-family: 'Montserrat';
    --title-font-family: 'Montserrat';
    --box-title-font-family: 'Montserrat';
    --font-size-extra-large: 22px;
    --font-size-large: 20px;
    --font-size-medium: 18px;
    --font-size-normal: 16px;
    --font-size-small: 16px;
    --font-size-extra-small: 14px;
    --font-weight-normal: 400;
    --font-weight-bold: 700;

    /* Interlignage */
    --line-height-none: 1em;
    --line-height-tight: 1.08em;
    --line-height-normal: 1.26em;
    --line-height-loose: 1.38em;

    /* Étiquettes */
    --tag-border-color: #434343;
    --tag-text-color: #434343;
    --tag-text-color-active: white;

    /* Mise en page */
    --layout-horizontal-margin: 0;

    /* Modal */
    --modal-margin-top: 0.5em;
    --modal-margin-bottom: 0.5em;

    /* Images */
    --img-aspect-ratio: 16/9;
  }
</style>
```

### 3. Mode sombre

#### Activation

Le mode sombre s'active sur votre espace d'administration, ou en passant `theme.enableDarkMode: true` dans la configuration. La classe `logoraDarkMode` est alors automatiquement ajoutée sur l'élément `#logoraRoot`.

```js
var logora_config = {
  shortname: "your-shortname",
  theme: {
    enableDarkMode: true
  }
};
```

Le mode sombre ne s'applique que lorsque le système de l'utilisateur est lui-même en mode sombre (`prefers-color-scheme: dark`). Si l'appareil est en mode clair, la classe `logoraDarkMode` n'a aucun effet.

Vous pouvez aussi ajouter ou retirer la classe manuellement sur l'élément `#logoraRoot` pour forcer le mode sans passer par la configuration.

#### Variables CSS du mode sombre

Les valeurs par défaut du mode sombre peuvent être surchargées via des variables CSS dédiées, à suffixe `-dark`, toujours sur `#logoraRoot` :

```html
<style>
  #logoraRoot {
    --background-color-container-dark: #0a0a0a;
    --background-color-primary-dark: #1a1a1a;
    --background-color-secondary-dark: #5a5a5a;
    --text-primary-dark: #f5f5f5;
    --text-secondary-dark: #cccccc;
    --text-tertiary-dark: #444444;
    --box-border-dark: 1px solid #666666;
    --darken-text-tertiary-dark: #4a4a4a;
    --darkest-text-tertiary-dark: #707070;
    --tag-text-color-dark: #f5f5f5;
    --box-border-main-container-dark: 0;
  }
</style>
```

