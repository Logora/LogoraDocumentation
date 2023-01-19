---
id: rgpd
title: RGPD
description: Traitement des données  
---

### Protection des données personnelles 

## 1. Résumé du présent document 

**Les données de votre espace de débat vous appartiennent**.

Logora agit en tant que sous-traitant des données pour votre compte. Nous faisons une copie du prénom, nom et mail du débatteur pour les afficher sur l'espace de débat et notifier les utilisateurs par email des derniers débats tendances sur votre espace. 

Nous ne plaçons pas de cookies publicitaires ni de suivi d'audience sur l'espace de débat.

Vous pouvez récupérer vos données automatiquement en appelant notre API. Pour cela contactez-nous (contact@logora.fr). 
Vous pouvez également les récupérer manuellement depuis votre espace d'administration. Elles sont récupérées sous format CSV. 

## 2. Description du traitement faisant l'objet de la sous-traitance 

Le sous-traitant est autorisé à traiter pour le compte du responsable de traitement les données à caractère personnel nécessaires pour permettre aux internautes ayant un compte, de donner un avis et de répondre à des questions sous forme de débat et de commenter leurs réponses. 

##### La nature des opérations réalisées sur les données est :

La réception et l'utilisation des données pour créer le profil de la personne concernée via une déduplication du compte dans le système du sous-traitant;

L'utilisation des données pour permettre aux internautes de donner leur avis ;

Le stockage des données pour conserver la progression des internautes ; 

Destruction des données. 

##### Les finalités du traitement sont :

1) La prise en compte de la participation à un débat; 

2) La prise en compte du dépôt des contributions ;

3) La gestion de l'espace de débats; 

4) La modération; 

5) L'envoi de [notifications par email](faq/mailing.md); 

6) La suggestion des débats par les internautes; 

7) La proposition d'un débat à un utilisateur lié à son activité. 

8) L'amélioration des services via un test avec des utilisateurs acceptant d'évaluer l'outil ; 

Nos contrats ont été créé avec l'aide de quelques unes des références de l'édition (Ouest-France, Prisma Media, Bayard Presse). 

Si vous souhaitez en recevoir une copie complète contactez à contact@logora.fr

## 3. Anonymisation des données utilisateur

Conformément au RGPD, les utilisateurs peuvent demander la suppression de leurs données de l'espace de débat. 

Nous fournissons une API pour que vous procédiez à l'anonymisation des données d'un utilisateur.

Cette route anonymise toutes les données personnelles liées à l'utilisateur : prénom, nom, email, identifiant unique, image, tout en gardant ses contributions et son activité.

**URL** : https://app.logora.fr/api/v1/users/{uid}/anonymize

**Méthode**: POST

**Paramètres**:
    
- uid: identifiant unique de l'utilisateur que vous passez à Logora lors de l'inscription de l'utilisateur

**Autorisation**: Bearer token avec le scope `authentication`

L'autorisation utilise le standard OAuth2.0. Voilà comment obtenir un jeton d'accès :
```
curl -d grant_type=client_credentials -d client_id=API_KEY -d client_secret=API_SECRET -d scope=authentication https://app.logora.fr/oauth/token
```

Les clé d'API et clé secrète sont disponibles dans votre espace d'administration.

Cette opération n'est pas réversible. Veuillez prendre des précautions lorsque vous utilisez cette route d'API.




