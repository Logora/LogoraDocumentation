---
id: badges
title: Badges et gamification
description: Récompensez vos contributeurs
---

Les badges font partie de la gamification de Logora : ils récompensent les utilisateurs qui participent au débat. Chaque badge est associé à une action (écrire un argument, obtenir des votes, suggérer un débat…) et à une **récompense**, un titre affiché sur le profil de l'utilisateur une fois le badge entièrement débloqué.

Chaque badge possède **plusieurs niveaux**, avec des paliers de plus en plus élevés. La progression vers le badge en cours est affichée sur le profil de l'utilisateur, accompagnée du message « Complété ! » lorsque le palier du niveau courant est atteint.

### Les badges disponibles

Chaque badge possède **3 niveaux**, dont les paliers sont de plus en plus élevés. Le tableau ci-dessous indique, pour chaque badge, le nombre d'actions à réaliser à chaque niveau (colonne « Paliers »). La récompense (titre affiché sur le profil) est débloquée lorsque le **niveau 3** est atteint.

| Badge | Action | Paliers (niveau 1 → 2 → 3) | Récompense |
| --- | --- | --- | --- |
| <img src="https://assets.logora.com/badges/Contributeur.jpg" width="40" /> **Contributeur** | Écrire des arguments | 10 → 30 → 60 | « Débatteur Passionné » |
| <img src="https://assets.logora.com/badges/Orateur.jpg" width="40" /> **Orateur** | Écrire des arguments ayant obtenu un score de pertinence d'au moins 75 | 10 → 30 → 60 | « Plume » |
| <img src="https://assets.logora.com/badges/Influenceur.jpg" width="40" /> **Influenceur** | Voir sa suggestion de débat sélectionnée | 1 → 5 → 10 | « Initiateur » |
| <img src="https://assets.logora.com/badges/Notable.jpg" width="40" /> **Notable** | Ajouter une description dans son profil | 1 | — |
| <img src="https://assets.logora.com/badges/Merci_maman.jpg" width="40" /> **Merci Maman !** | Recevoir des votes sur ses arguments | 10 → 30 → 60 | « Incontournable » |
| <img src="https://assets.logora.com/badges/Critique.jpg" width="40" /> **Opposant** | Prendre position dans le camp « Contre » | 5 → 20 → 50 | « Résistant » |
| <img src="https://assets.logora.com/badges/D%C3%A9put%C3%A9.jpg" width="40" /> **Député** | Prendre part à des débats | non activé par défaut | « Grand Débatteur » |
| <img src="https://assets.logora.com/badges/Adh%C3%A9rent.jpg" width="40" /> **Adhérent** | Prendre position dans le camp « Pour » | 5 → 20 → 50 | « Prolifique » |

Ces paliers correspondent à la configuration par défaut (voir `db/seeds.rb` du backend) ; ils peuvent être ajustés pour chaque application sur demande.

### Complété !

Lorsqu'un objectif est atteint, le badge affiche « Complété ! » et le titre de récompense est débloqué puis affiché sur le profil.

> Par exemple, sur un profil de démonstration, le badge Contributeur affiche « Niveau 3 », une progression de 24/60, et « Obtention au niveau 3 du titre : Débatteur Passionné ».

### Personnalisation

Par défaut, les images des badges sont hébergées par Logora (`https://assets.logora.com/badges/`). Si vous souhaitez personnaliser vos badges, il vous suffit de partager les images des badges à modifier avec votre interlocuteur Logora, et nous nous chargeons de les mettre en place.