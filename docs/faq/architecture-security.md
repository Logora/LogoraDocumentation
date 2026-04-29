---
id: architecture-security
title: Architecture et sécurité
description: Réponses aux questionnaires de sécurité (RFI/RFP) — hébergement, multi-tenant, données, conformité
sidebar_label: Architecture & sécurité
---

Cette page rassemble les réponses aux questions fréquentes des questionnaires de sécurité (RFI/RFP) que nous recevons de nos clients enterprise.

:::tip Vous préparez un appel d'offres ?
Si vous avez besoin d'un questionnaire RFI rempli ou d'un document plus détaillé sous NDA (rapport de pentest, ISO 27001), contactez [security@logora.fr](mailto:security@logora.fr) — réponse sous 48h.
:::

## Architecture multi-tenant

Logora est une **plateforme SaaS multi-tenant**. Chaque client est isolé par un `application_id` au niveau base de données. Pas d'instance dédiée par défaut.

:::note Instances dédiées
Pour les clients sensibles (ex. Sanoma, certains acteurs santé/défense), nous proposons en option une **instance dédiée** dans une région UE choisie, avec un coût mensuel additionnel. Contactez Pierre Laburthe pour les conditions.
:::

## Hébergement

| Critère | Valeur |
|---|---|
| **Hébergeur** | Scaleway |
| **Région principale** | Paris, France |
| **Conformité hébergeur** | ISO 27001, SOC 2 Type II |
| **Disaster Recovery** | Backup quotidien chiffré |
| **RTO** | 4h |
| **RPO** | 24h |
| **Transfert hors UE** | ❌ Aucun par défaut |

## Données collectées

Strict minimum :

- `uid`, `email`, `first_name`, `last_name`, `image_url` (envoyés par votre SSO)
- Contributions textuelles écrites sur Logora
- Votes
- Adresse IP (anonymisée après 13 mois — RGPD)
- User-agent

:::info Pas de tracking publicitaire
- Pas de cookie tiers
- Pas de revente de données
- Pas de profilage publicitaire
:::

## Données envoyées aux moteurs de modération externes

**Uniquement le contenu textuel** de la contribution est transmis aux moteurs de modération IA (Logora IA, OpenAI, Mistral, Azure Content Safety).

Aucune donnée d'auteur n'est transmise :

- ❌ Pas d'email
- ❌ Pas d'IP
- ❌ Pas de nom

Les moteurs renvoient un score de toxicité que nous stockons.

:::caution Si votre politique interdit l'envoi à un LLM tiers
Désactivez la modération IA et utilisez la modération Logora native uniquement (équipe humaine + algorithme propriétaire entraîné en interne). Voir [Modération](/configuration/moderation).
:::

## Authentification admin

- Login/password + **2FA (TOTP) obligatoire**
- **SSO Google Workspace** disponible
- **Logs d'accès** conservés 12 mois
- **Révocation manuelle** des comptes (un employé qui part doit être désactivé manuellement — voir [Gestion des admins](/faq/invitation))

:::warning Révocation lors d'un départ
La révocation n'est pas automatique au départ d'un employé. Pensez à désactiver son compte admin manuellement à la fin de son contrat. Pour les organisations qui veulent automatiser ce flow, contactez-nous pour brancher votre IDP (Okta, Azure AD).
:::

## Durées de rétention

| Donnée | Rétention |
|---|---|
| Compte utilisateur | Tant que l'utilisateur ne demande pas suppression |
| Adresse IP | 13 mois (anonymisation après) |
| Contributions modérées (rejetées) | 5 ans |
| Logs serveur | 90 jours |
| Backup | 30 jours roulants |

## Réponse aux droits RGPD

Voir [/legal/rgpd](/legal/rgpd) pour le détail.

| Droit | Délai |
|---|---|
| Accès aux données | 1 mois max |
| Suppression | 1 mois max |
| Portabilité | 1 mois max |
| Coût | Gratuit |

## Tests de sécurité

- **Pentest annuel** par un cabinet indépendant
- **Rapport disponible sous NDA** pour les clients enterprise
- **Bug bounty privé** sur invitation
- **Code review systématique** sur toutes les PR de l'API

:::tip Vous avez identifié une vulnérabilité ?
Reportez-la en privé à [security@logora.fr](mailto:security@logora.fr). Nous accusons réception sous 24h et publions un patch sous 7 jours pour les vulnérabilités critiques.
:::

## Chiffrement

| Couche | Protocole |
|---|---|
| **En transit** | TLS 1.2+ partout |
| **Au repos** | AES-256 (base de données + backups) |
| **Mots de passe** | bcrypt avec salt |
| **JWT signature** | HMAC-SHA256 (HS256) ou RSA (RS256) selon votre choix |

## Disponibilité

- Statut en temps réel : **[https://status.logora.fr](https://status.logora.fr)**
- SLA contractuel : **99.9 %** (4h d'indisponibilité par mois max)
- Astreinte 24/7 pour les incidents critiques

## Contact sécurité

Pour toute question de sécurité, audit, conformité ou demande de RFI :

- **E-mail** : [security@logora.fr](mailto:security@logora.fr)
- **Délai de réponse** : 48h ouvrées
- **Confidentialité** : NDA disponible sur demande
