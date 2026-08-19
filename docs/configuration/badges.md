---
id: badges
title: Badges et gamification
description: Récompensez vos contributeurs
---

Les badges font partie de la gamification de Logora : ils récompensent les utilisateurs qui participent au débat. Chaque badge est associé à une action (écrire un argument, obtenir des votes, suggérer un débat…) et à une **récompense**, un titre affiché sur le profil de l'utilisateur une fois le badge entièrement débloqué.

Chaque badge possède **plusieurs niveaux**, avec des paliers de plus en plus élevés. La progression vers le badge en cours est affichée sur le profil de l'utilisateur, accompagnée du message « Complété ! » lorsque le palier du niveau courant est atteint.

### Les badges disponibles

| Badge | Action | Récompense |
| --- | --- | --- |
| ![Contributeur](https://assets.logora.com/badges/Contributeur.jpg) **Contributeur** | Écrire N arguments | « Débatteur Passionné » |
| ![Orateur](https://assets.logora.com/badges/Orateur.jpg) **Orateur** | Écrire N arguments avec un score de pertinence d'au moins 75 | « Plume » |
| ![Influenceur](https://assets.logora.com/badges/Influenceur.jpg) **Influenceur** | Avoir sa suggestion sélectionnée N fois | « Initiateur » |
| ![Notable](https://assets.logora.com/badges/Notable.jpg) **Notable** | Ajouter une description dans son profil | — |
| ![Merci Maman !](https://assets.logora.com/badges/Merci_maman.jpg) **Merci Maman !** | Obtenir N votes | « Incontournable » |
| ![Opposant](https://assets.logora.com/badges/Critique.jpg) **Opposant** | Soutenir le camp « Contre » sur N débats | « Résistant » |
| ![Député](https://assets.logora.com/badges/D%C3%A9put%C3%A9.jpg) **Député** | Participer à N débats | « Grand Débatteur » |
| ![Adhérent](https://assets.logora.com/badges/Adh%C3%A9rent.jpg) **Adhérent** | Soutenir le camp « Pour » sur N débats | « Prolifique » |

### Complété !

Lorsqu'un objectif est atteint, le badge affiche « Complété ! » et le titre de récompense est débloqué puis affiché sur le profil.

> Par exemple, sur un profil de démonstration, le badge Contributeur affiche « Niveau 3 », une progression de 24/60, et « Obtention au niveau 3 du titre : Débatteur Passionné ».

### Personnalisation

Par défaut, les images des badges sont hébergées par Logora (`https://assets.logora.com/badges/`). Vous pouvez personnaliser le nom de domaine et l'extension des images via les variables de configuration `badges.baseUrl` et `badges.fileExtension` du SDK.