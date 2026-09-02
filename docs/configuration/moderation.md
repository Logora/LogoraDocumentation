---
id: moderation
title: Modération
description: Logora s'occupe de la modération de votre espace de débat. Personnalisez le type de modération et le responsable de la modération depuis votre espace d'administration.
---

Vous pouvez choisir votre système de modération depuis l'espace d'administration, dans *Configuration > Modération*.

![Configuration de la modération](/img/moderation.png)

Deux réglages sont disponibles : le **type de modération** (moment où les contributions sont contrôlées) et le **responsable de la modération** (qui effectue le contrôle).

## Type de modération

`Avant publication du contenu` - **recommandé** : les contributions passeront par la modération avant leur publication (modération *a priori*). Les contenus non conformes ne sont jamais visibles par vos lecteurs.

`Après publication du contenu` : les contributions seront publiées puis passeront par la modération (modération *a posteriori*). Les contributions apparaissent immédiatement, mais peuvent être retirées après contrôle.

Dans les deux cas, les contributions rejetées ne sont pas supprimées pour leurs auteurs : elles restent visibles par leur auteur uniquement, qui peut les corriger et les soumettre à nouveau.

## Responsable de la modération

### Manuelle

Vous gérez vous-même la modération. Les contributions en attente apparaissent dans l'[interface de modération](#interface-de-modération) de votre espace d'administration, où vous pouvez accepter ou rejeter chaque contribution.

### Intelligente (Logora) - **recommandé**

L'équipe Logora s'occupe de la modération. Nous avons construit un algorithme de modération en labellisant plus de 45 000 contributions, qui accepte automatiquement les arguments considérés comme lisibles, bien écrits et non haineux. Lorsque l'algorithme n'est pas sûr de la qualité de l'argument (source inconnue, nouvelles tournures de phrases, nouveaux concepts), l'argument est envoyé à un membre de notre équipe pour modération manuelle. Cela concerne 15 à 20 % des arguments.

Nous réalisons la modération toutes les 24h en semaine. Les messages en attente sont vus comme publiés par leurs auteurs pour fluidifier leur expérience.

Tous nos modérateurs sont natifs et diplômés du supérieur. Nous avons traité plus de deux millions d'arguments pour l'ensemble de nos partenaires avec un taux de réussite de 100 % de détection de messages haineux, illisibles et illégaux.

Pour comprendre en détail le fonctionnement de l'algorithme, consultez la page [Qualité des contenus](/faq/quality).

### Externe

Nous sous-traitons la modération à vos services externes de modération (Nétino, Bodyguard, ou d'autres). Si votre prestataire de modération n'est pas renseigné sur l'espace d'administration, envoyez-nous un mail à [contact@logora.fr](mailto:contact@logora.fr), nous nous brancherons à eux dans les plus brefs délais.

## Fonctionnement de la modération

Le fonctionnement est le suivant :

1. Les arguments postés sont envoyés au responsable de la modération (l'équipe Logora dans la grande majorité des cas). Ils sont modérés *a priori* : 80 à 85 % des arguments sont traités automatiquement, donc instantanément. Les 15 à 20 % restants sont traités manuellement, toutes les 24h en semaine.
2. Les arguments validés par la modération sont publiés. Notre algorithme de pertinence note chacune des contributions et met en avant celles qui paraissent les plus travaillées.

Chaque argument reçoit un **score de modération** :

- Un score bas signifie que l'algorithme juge l'argument comme sûr : plusieurs arguments de ce type ont été acceptés par le passé, il peut donc l'accepter automatiquement.
- Un score haut signifie que ce genre d'argument est inconnu ou a été rejeté par le passé. L'argument est alors mis en attente d'une analyse humaine.

## Interface de modération

L'interface de modération est visible depuis votre espace d'administration. Notre travail est transparent et vous avez la possibilité d'intervenir (accepter / rejeter des contributions) si vous le souhaitez.

Sur cet exemple, vous pouvez voir une liste d'arguments passés par l'algorithme de modération : certains sont acceptés automatiquement, d'autres refusés ou en attente.

![Interface de modération](/img/moderationtab.png)

## Pour aller plus loin

- [Qualité des contenus](/faq/quality) : fonctionnement détaillé de la modération et de la hiérarchisation des arguments.
- [Modération des réseaux sociaux](/installation/social-moderation) : modération des contenus importés depuis les réseaux sociaux.
- [RGPD](/legal/rgpd) : traitement des données à caractère personnel dans le cadre de la modération.

En cas de question, écrivez-nous à [contact@logora.fr](mailto:contact@logora.fr).
