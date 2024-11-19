---
id: ads
title: Insertions publicitaires
description: Monétisez votre espace de discussion
---

Les pages du plugin Logora sont fournies en marque blanche et hébergées sur votre site.

Logora permet l'insertion d'espaces publicitaires sur vos nouvelles pages générées par l'espace de débat, via votre régie publicitaire. 

Les publicités peuvent s'afficher autour mais aussi entre les éléments de l'espace de débat. 

Si vous avez contractualisé avec un modèle de partage de revenu, il vous est demandé de remplir l'ensemble des espaces publicitaires proposés par Logora.

Logora est compatible avec Google Adsense et Google Ad Manager.

## Format desktop

L'espace de débat est un widget qui génére de nouvelles pages sur votre site. 

Vous contrôlez les insertions d'éléments autour de l'espace. 

Sur desktop, vous pouvez directement insérer des formats publicitaires autour de l'espace comme sur les autres pages de votre site. 

**Vous n'avez pas à passer par le système Logora pour insérer des publicités au format desktop puisqu'elles sont affichées autour de l'espace.**

Par exemple, voici l'écran de chargement de l'espace de débat sur Capital.fr :

![Desktop ads](/img/desktop_ads.png)

Des publicités en bannière haute, droite et basse sont chargées en même temps que l'espace de débat. 

## Format mobile

Sur mobile, il s'agit d'insérer des pavés dans l'espace de débat. 

**En format mobile, il vous faut passer par la configuration Logora pour servir vos publicités dans notre espace**.

Vous pouvez insérer une publicité sur votre page article, au niveau de la question de débat comme ici : 

<img src="/img/article_ad.png" alt="Ad on mobile" width="200"/>

Vous pouvez également insérer une publicité tous les trois arguments à l'intérieur des débats, disposés sur vos nouvelles pages. 

Pour celà, nous avons créé des espaces que vous pouvez remplir avec en créant des blocs aux formats définis ci-dessous : 

`1) Pavé entre le sondage et les contributions mises en avant en pied d’article : (300 * 250)`

`2) Pavé haut au début de la liste d'arguments : (300 * 250)`                        

`3) Pavé bas tous les trois d'arguments : (300 * 250)`

Pour insérer les publicités, allez sur votre espace d'administration dans `Configuration` puis dans `Publicité`.

![Configure ads](/img/configure_ads.png)

Il vous faut cocher la case `Autoriser les publicités`

Les titres des publicités correspondent au positionnement de la publicité. 

- **Publicité en pied d'article** correspond au `1) Pavé entre le sondage et les contributions mises en avant en pied d’article`
- **Pavé haut** correspond au `2) Pavé haut au début de la liste d'arguments`
- **Pavé haut secondaire** correspond au `3) Pavé bas tous les trois d'arguments`
- **Pavé haut terciaire** correspond également au `3) Pavé bas tous les trois d'arguments`

:::note 

Les formats des publicités sont tous les mêmes, vous pouvez mettre les mêmes valeurs partout ou des valeurs différentes pour analyser les performances des emplacements. 

:::

- La valeur `path`correspond au chemin de l'ad slot de votre publicité.
- La valeur `id` est l'ID unique du conteneur de votre publicité, également définie à la création de votre ad slot.
- La valeur `targeting key` est le nom de clé du ciblage personnalisé, elle n'a pas à être unique.
- La valeur `targeting value` est le nom de valeur du ciblage personnalisé, elle n'a pas à être unique.

:::note 

Si vous choisissez le modèle de partage de revenus publicitaires, Logora doit avoir accès aux performances de ces publicités. 
Vous pouvez choisir le format de support qui vous convient (rapport excel automatique, Google Data Studio...) pour nous transmettre cette vue. 

:::
