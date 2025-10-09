---
id: smtp
title: Envoi d'e-mails depuis votre domaine
description: Configurez un serveur SMTP personnalisé pour envoyer les e-mails automatiques depuis votre propre adresse e-mail.
---

Vous pouvez configurer un **serveur SMTP personnalisé** pour envoyer les e-mails automatiques (notifications, réponses dans un débat, newsletters, etc.) directement depuis **votre propre adresse e-mail** au lieu de l’adresse par défaut de Logora.

Cette option permet :
- d’envoyer vos messages avec votre identité de domaine,
- d’améliorer la délivrabilité des e-mails,
- de renforcer la confiance auprès de vos utilisateurs.

![Configuration SMTP](/img/smtp-config.png)

### 1. Activer l’envoi via SMTP personnalisé

1. Accédez à votre interface d’administration Logora.  
2. Ouvrez le menu **Configuration > Emails**.  
3. Activez l’option **Activer le SMTP personnalisé**.  

Un formulaire de configuration SMTP s’affichera alors.

### 2. Renseigner les paramètres SMTP

| Champ | Exemple | Description |
|--------|----------|-------------|
| **Adresse de l’expéditeur** | `contact@votredomaine.com` | Adresse e-mail qui apparaîtra comme expéditeur |
| **Adresse de réponse** | `contact@votredomaine.com` | Adresse à laquelle les réponses seront envoyées |
| **Serveur SMTP** | `smtp.gmail.com` | Serveur SMTP de votre fournisseur de messagerie |
| **Port SMTP** | `587` | Port de connexion (souvent `587` pour STARTTLS ou `465` pour SSL) |
| **Nom d’utilisateur SMTP** | `contact@votredomaine.com` | Généralement votre adresse e-mail complète |
| **Mot de passe SMTP** | Mot de passe ou mot de passe d’application | Identifiant d’accès au serveur SMTP |
| **Méthode d’authentification** | `Login` | Laissez la valeur par défaut |
| **STARTTLS automatique** | Activé | Recommandé pour la sécurité |

### 3. Utilisateurs Gmail ou Google Workspace

Si vous utilisez Gmail ou Google Workspace, vous devez créer un **mot de passe d’application** (et non utiliser votre mot de passe habituel) :

1. Ouvrez votre [compte Google → Sécurité](https://myaccount.google.com/security).  
2. Activez la **validation en deux étapes** si ce n’est pas déjà fait.  
3. Dans la section **Mots de passe d’application**, créez un mot de passe pour « Mail ».  
4. Copiez le mot de passe généré (16 caractères) et saisissez-le dans le champ **Mot de passe SMTP**.

### 4. Enregistrer et tester la configuration

1. Cliquez sur **Enregistrer**.  
2. Pour tester la configuration, vous pouvez demander à un collègue ou à un utilisateur de **vous répondre dans un débat** afin de recevoir un e-mail automatique de notification.  
   Si le message arrive correctement depuis votre adresse personnalisée, la configuration est opérationnelle.

Une fois la configuration validée, tous les e-mails automatiques (notifications, newsletters, etc.) seront envoyés depuis votre propre adresse.

### 5. Points importants

- Si vous utilisez un autre fournisseur (Outlook, Exchange, OVH, etc.), remplacez `smtp.gmail.com` par l’adresse de leur serveur SMTP.  
- Vérifiez que vos enregistrements DNS (SPF, DKIM, DMARC) sont configurés pour votre domaine afin d’éviter que vos e-mails soient considérés comme du spam.  
- Si vous rencontrez une erreur de connexion, vérifiez les identifiants et les ports utilisés.  
- En cas de doute, contactez l’équipe Logora pour assistance.
