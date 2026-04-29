---
id: moderation
title: Modération
description: Logora s'occupe de la modération de votre espace de débat. Configurez l'algorithme, la blacklist, les raisons de rejet et l'équipe responsable.
---

Logora propose plusieurs niveaux de modération combinables, configurables depuis votre [espace d'administration](https://admin.logora.fr) (*Configuration > Modération*).

![Configuration de la modération](/img/moderation.png)

## Type de modération

| Type | Description | Recommandation |
|---|---|---|
| **Avant publication** | Modération *a priori* : la contribution n'apparaît qu'une fois validée. Les messages en attente sont vus comme publiés par leurs auteurs pour fluidifier l'expérience. | ✅ Recommandé |
| **Après publication** | Modération *a posteriori* : la contribution apparaît immédiatement, puis passe en file de modération. | Pour communautés à très haute confiance |

## Responsable de la modération

### Manuelle

Vous gérez la modération depuis l'admin Logora. La file de modération est accessible dans *Modération > File d'attente*.

### Intelligente — Logora ✅ recommandé

Notre algorithme propriétaire (entraîné sur **45 000+ contributions labellisées**, **2M+ traitées en production**) accepte automatiquement les messages clairement conformes.

Les cas incertains (15-20%) sont traités sous **24h en semaine** par notre équipe de modérateurs natifs et diplômés du supérieur.

:::info Performance
Taux de réussite de **100 %** sur la détection de messages haineux, illisibles ou illégaux selon nos évaluations internes (échantillon 5 000 contributions, 2025).
:::

### Moteurs IA tiers

Vous pouvez aussi activer l'un des moteurs IA suivants depuis l'admin :

| Moteur | Provider | Spécificité |
|---|---|---|
| **Logora IA** | Logora (par défaut) | Modèle entraîné sur nos données |
| **OpenAI** | OpenAI | GPT pour la modération de contenu |
| **Azure Content Safety** | Microsoft | Catégorisation fine (haine, sexuel, violence) |
| **Mistral** | Mistral AI | Modèle européen, RGPD-friendly |
| **Perspective AI** | Google Jigsaw | En bêta dans Logora |

Chaque moteur a ses propres seuils ajustables dans *Modération > Seuils* (toxicité, attaque personnelle, contenu sexuel, etc.).

### Externe

Si vous travaillez déjà avec un prestataire (Nétino, Bodyguard, Ferret Go, Etoeo, etc.), nous nous branchons à leurs API.

:::tip Prestataire absent de la liste ?
Pour ajouter un prestataire absent de l'admin, écrivez à [contact@logora.fr](mailto:contact@logora.fr). Délai de mise en place : généralement **5 jours ouvrés**.
:::

## Blacklist et liste de mots suspects

Dans *Modération > Blacklist* vous pouvez ajouter :

| Liste | Effet |
|---|---|
| **Blacklist** (bloquant) | La contribution est **rejetée automatiquement** |
| **Liste suspecte** (signalement) | La contribution passe en **modération manuelle** |

Ces listes s'appliquent aux **contributions** mais aussi aux **pseudos** si vous activez l'option *Appliquer aux noms d'utilisateur* dans la même page.

:::note Cas vécu
Cutowl/Robin (Italie) souhaitait empêcher les pseudos contenant des insultes : option activée, blacklist appliquée à l'inscription et à chaque modification de pseudo. Les utilisateurs reçoivent un message d'erreur clair s'ils tentent un mot bloqué.
:::

## E-mail de rejet et raisons de modération

Lorsqu'une contribution est rejetée, l'auteur reçoit un mail explicatif. Vous pouvez :

- **Choisir parmi les raisons préenregistrées** (insulte, hors-sujet, source non vérifiée, propos haineux, etc.)
- **Ajouter une note libre** affichée à l'auteur — les notes sont sauvegardées automatiquement et persistent même si vous fermez l'onglet
- **Personnaliser l'objet et le corps du mail** dans *Configuration > E-mails > Mail de rejet*

Voir aussi [Personnaliser les e-mails de notification](/faq/notification-emails).

## API de modération (intégration custom)

Si vous avez votre propre outil interne ou un workflow particulier, nous exposons un webhook bidirectionnel :

1. Logora vous envoie chaque contribution sur votre webhook
2. Vous nous renvoyez `accepted` / `rejected` + raison

Voir la [documentation Swagger](https://app.logora.fr/docs) section `Moderation`.

## Tableau de bord modération

L'admin propose un dashboard avec :

- **Volume** : nombre de contributions modérées par jour
- **Taux de rejet** : par catégorie de raison
- **Temps de traitement médian**
- **Top contributeurs signalés**

Export CSV disponible dans *Modération > Statistiques*.

## Bonnes pratiques

:::tip Recommandations issues de notre expérience
- **Commencez en modération avant publication** sur les sujets sensibles (politique, société). Vous pourrez basculer après publication une fois la communauté stabilisée.
- **Personnalisez le mail de rejet** avec un message empathique : un utilisateur qui comprend pourquoi son message est rejeté est 3× moins susceptible de récidiver.
- **Combinez plusieurs niveaux** : blacklist (bloquant) + IA (signalement) + équipe humaine (validation finale) = pipeline robuste.
- **Surveillez les seuils IA** la première semaine : ajustez-les selon votre tolérance éditoriale.
:::
