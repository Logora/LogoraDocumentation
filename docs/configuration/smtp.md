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

### 3. Relais sans authentification (Microsoft 365, relais d'entreprise)

Si votre serveur de messagerie n'accepte plus l'authentification SMTP — Microsoft déprécie SMTP AUTH sur Exchange Online — utilisez un **relais autorisé par adresse IP** : Logora s'y connecte sans identifiants.

| Champ | Valeur |
|--------|----------|
| **Serveur SMTP** | hôte du relais fourni par votre équipe informatique |
| **Port SMTP** | `587` (STARTTLS) ou `465` (TLS implicite) |
| **Méthode d'authentification** | `Aucune (relais autorisé par IP)` |
| **Nom d'utilisateur / mot de passe** | vides : les champs sont désactivés |
| **STARTTLS automatique** | activé pour le port `587` |
| **Connexion TLS implicite** | coché pour le port `465` |

Demandez à l'équipe Logora les **adresses IP de sortie** à autoriser sur votre relais, puis limitez ce relais aux expéditeurs de votre domaine.

#### Microsoft 365 / Exchange Online

1. Dans le [centre d'administration Exchange](https://admin.exchange.microsoft.com), ouvrez **Messagerie > Connecteurs**, puis **Ajouter un connecteur**.
2. Choisissez **De votre serveur de messagerie de l'organisation** vers **Office 365**, avec l'usage **Boîte aux lettres de l'organisation**.
3. Nommez-le (par exemple `Logora`), puis choisissez **En vérifiant l'adresse IP du serveur de messagerie de l'organisation** et ajoutez les IP communiquées par Logora.
4. Laissez **TLS** activé et l'authentification désactivée : ce connecteur n'utilise pas SMTP AUTH et n'exige donc pas de réactiver le protocole déprécié.
5. Vérifiez que l'adresse d'expéditeur saisie dans Logora appartient à un domaine accepté de votre locataire.

#### SPF, DKIM et DMARC

Ces enregistrements relèvent de votre domaine, pas du code de Logora :

- **SPF** : votre relais doit être autorisé dans l'enregistrement SPF de votre domaine.
- **DKIM** : la signature est ajoutée par votre relais ; activez la signature DKIM de votre domaine (Microsoft 365 : **Protection > DKIM**, ou votre fournisseur).
- **DMARC** : publiez une politique alignée sur votre domaine d'expéditeur.

Logora ne peut pas signer ces emails à votre place ni les tester à distance : un rejet pour SPF, DKIM ou DMARC se corrige dans votre DNS.

### 4. Utilisateurs Gmail ou Google Workspace

Si vous utilisez Gmail ou Google Workspace, vous devez créer un **mot de passe d’application** (et non utiliser votre mot de passe habituel) :

1. Ouvrez votre [compte Google → Sécurité](https://myaccount.google.com/security).  
2. Activez la **validation en deux étapes** si ce n’est pas déjà fait.  
3. Dans la section **Mots de passe d’application**, créez un mot de passe pour « Mail ».  
4. Copiez le mot de passe généré (16 caractères) et saisissez-le dans le champ **Mot de passe SMTP**.

### 5. Enregistrer et tester la configuration

1. Cliquez sur **Enregistrer**.  
2. Pour tester la configuration, vous pouvez demander à un collègue ou à un utilisateur de **vous répondre dans un débat** afin de recevoir un e-mail automatique de notification.  
   Si le message arrive correctement depuis votre adresse personnalisée, la configuration est opérationnelle.

Une fois la configuration validée, tous les e-mails automatiques (notifications, newsletters, etc.) seront envoyés depuis votre propre adresse.

### 6. Points importants

- Si vous utilisez un autre fournisseur (Outlook, Exchange, OVH, etc.), remplacez `smtp.gmail.com` par l’adresse de leur serveur SMTP.  
- Vérifiez que vos enregistrements DNS (SPF, DKIM, DMARC) sont configurés pour votre domaine afin d’éviter que vos e-mails soient considérés comme du spam.  
- Si vous rencontrez une erreur de connexion, vérifiez les identifiants et les ports utilisés.  
- En cas de doute, contactez l’équipe Logora pour assistance.
