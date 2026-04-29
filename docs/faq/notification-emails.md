---
id: notification-emails
title: Personnaliser les e-mails de notification
description: Branding, template, contenu — adaptez les e-mails Logora à votre marque
sidebar_label: E-mails de notification
---

Logora envoie plusieurs types d'e-mails aux utilisateurs (notification de réponse, validation, modération, hebdo). Vous pouvez personnaliser leur **expéditeur**, leur **template** et leur **contenu**.

:::tip Pourquoi c'est important
Les utilisateurs marquent souvent les notifications comme spam quand l'expéditeur est `noreply@logora.fr`. Configurer votre propre SMTP et un branding cohérent peut **multiplier par 3 ou 4 le taux d'ouverture** de vos notifications.
:::

## Expéditeur (envoi depuis votre domaine)

Pour que les mails partent depuis `noreply@kronen-zeitung.at` (ou équivalent chez vous) plutôt que de chez nous, voir [Envoi d'e-mails depuis votre domaine](/configuration/smtp).

## Types d'e-mails envoyés

| Type | Déclencheur | Personnalisable |
|---|---|---|
| **Validation d'inscription** | Création de compte sans SSO | ✅ |
| **Réponse à un argument** | Quelqu'un répond à votre contribution | ✅ |
| **Mention** | Quelqu'un vous tague | ✅ |
| **Modération — rejet** | Votre contribution est rejetée | ✅ (raison + note) |
| **Hebdomadaire** | Récap des débats les plus chauds | ✅ |
| **Notification admin** | Signalement, contribution à valider | ❌ |

## Personnaliser le template global

Dans *Admin > Configuration > E-mails > Template* :

| Élément | Format |
|---|---|
| **Logo** | PNG/SVG, max 200×80 px |
| **Couleur principale** (header) | Hex code |
| **Couleur du bouton CTA** | Hex code |
| **Pied de page** | Mentions légales, lien désinscription |
| **Police** | Inter, Roboto, ou personnalisée via webfont |

Un **aperçu en temps réel** est disponible dans l'admin : modifiez les paramètres et voyez le rendu directement.

## Personnaliser le texte de chaque mail

Dans *Admin > Configuration > E-mails > Textes*, par langue (FR, EN, DE, ES, IT, FI, PL...) :

- **Objet**
- **Corps** (HTML autorisé)
- **Texte du bouton CTA**

### Variables disponibles

```
{{user.first_name}}      Prénom de l'utilisateur
{{user.last_name}}       Nom
{{user.email}}           Email
{{argument.content}}     Contenu de l'argument
{{argument.url}}         URL directe vers l'argument
{{debate.title}}         Titre du débat
{{debate.url}}           URL du débat
{{publisher.name}}       Nom de votre publication
```

### Exemple personnalisé

```html
<h1>Bonjour {{user.first_name}},</h1>

<p>Une nouvelle réponse a été postée sur votre argument du débat
   « <strong>{{debate.title}}</strong> ».</p>

<blockquote>{{argument.content}}</blockquote>

<a href="{{argument.url}}" class="cta">Lire la réponse</a>

<footer>
  Cordialement, l'équipe {{publisher.name}}
</footer>
```

## Ajouter votre propre template HTML

Si vous voulez un template entièrement custom (matching parfait avec votre charte) :

1. Préparez votre template **MJML** ou **HTML**
2. Envoyez-le à [contact@logora.fr](mailto:contact@logora.fr)
3. Nous l'intégrons sous **48h** en gardant les variables Logora actives

:::note Cas vécu
Krone (Kronen Zeitung) nous a fourni un template Axel Springer Group complet. Une fois intégré, leurs notifications avaient le même look que les autres mails du groupe — délivrabilité multipliée par 4.
:::

## Désactiver des éléments visuels

### Masquer la box rouge de pied de page

Plusieurs clients (RTL, Krone) nous ont demandé de retirer la box rouge des notifications. Pour la masquer, ajoutez dans *Admin > Configuration > E-mails > CSS additionnel* :

```css
.logora-email-warning {
  display: none !important;
}
```

### Masquer un type de notification entier

Dans *Admin > Configuration > E-mails > Activation* vous pouvez désactiver complètement l'envoi d'un type (ex. couper l'hebdomadaire si vous avez votre propre newsletter).

## Tester avant d'envoyer

:::warning Toujours tester en staging
Avant de pousser un nouveau template en production, envoyez-vous un mail de test depuis l'admin :

> *Admin > Configuration > E-mails > Template > **Envoyer un test***

Vérifiez le rendu sur :
- Gmail (web et app mobile)
- Outlook
- Apple Mail
- Un client de webmail français (Free, Orange, Laposte) — ce sont les plus restrictifs sur le HTML
:::

## Désinscription (opt-out)

Le lien de désinscription est **obligatoire** dans tous les mails (RGPD + lois anti-spam). Logora l'ajoute automatiquement, mais vous pouvez personnaliser :

- Le **texte** du lien
- La **page de destination** (page interne Logora ou page de votre site)
- Le **comportement par défaut** : opt-out de toutes les notifications, ou opt-out par catégorie

Voir [Gestion des mails](/faq/mailing) pour le détail.
