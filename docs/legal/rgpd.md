---
id: rgpd
title: RGPD
description: Traitement des données  
---

### Protection des données à caractère personnelles

## 1. Conformité au RGPD de Logora

Lorsque Logora échange avec vous en votre qualité de client ou prospect, Logora traite vos données à caractère personnel en qualité de responsable de traitement. Dans le cadre de la fourniture de votre espace de débat, Logora agit en tant que sous-traitant des données pour votre compte et selon les instructions que vous lui donnez en qualité de responsable de traitement. 

Dans tous les cas, Logora s’engage à se conformer à la règlementation applicable, soit à date le Règlement n°2016/679 (UE) du 27 avril 2016 dit règlement général sur la protection des données (le « RGPD ») et la Loi Informatique et Libertés du 6 janvier 1978 dans sa version actualisée.  

À ce titre, Logora a mis en place les mesures suivantes :
- Adoption d’une politique de confidentialité à destination de ses clients et prospects,
- Mise à votre disposition d’un modèle de politique de confidentialité visant les utilisateurs des espaces de débat mis à votre disposition ;
- Mise à jour de ses contrats clients pour tenir compte des obligations prévues par l’article 28 du RGPD relatif à la sous-traitance ;
- Tenue d’un registre des traitements mis en œuvre en sa qualité de responsable de traitement et de sous-traitant,
- Coopération étroite avec vous sur toutes les questions liées à la sous-traitance des données à caractère personnel ;
- Inscription dans une procédures d’accountability et adoption de procédures à suivre en cas de réception d’une demande d’exercice de ses droits par une personne concernée ou d’exposition à une violation de données.

Nous ne plaçons pas de cookies publicitaires ni de suivi d'audience sur l'espace de débat.

## 2. Description du traitement faisant l'objet de la sous-traitance 

En sa qualité de sous-traitant, Logora est autorisée à traiter les données à caractère personnel des utilisateurs des espaces de débat pour permettre à ces derniers de contribuer à l'Espace de débats. Les traitements de données effectués dans le cadre de cette sous-traitance sont décrits dans le modèle de politique de confidentialité des utilisateurs de l'Espace de débats, accessible et mis à votre disposition dans la documentation afin que vous puissiez le personnaliser avant de le porter à la connaissance des utilisateurs de l’espace de débat.

## 3. Anonymisation des données utilisateur

Conformément au RGPD, les utilisateurs peuvent demander la suppression de leurs données de l'espace de débat.
Nous fournissons une API pour que vous procédiez à l'anonymisation des données d'un utilisateur.

Cette route anonymise toutes les données personnelles liées à l'utilisateur : prénom, nom, email, identifiant unique, image, tout en gardant ses contributions et son activité.

**URL** : https://app.logora.fr/api/v1/users/{uid}/anonymize

**Méthode**: POST

**Paramètres**:
- `uid`: identifiant unique de l'utilisateur que vous passez à Logora lors de l'inscription de l'utilisateur
  
**Autorisation**: Bearer token avec le scope authentication

L'autorisation utilise le standard OAuth2.0. Voilà comment obtenir un jeton d'accès :

```html
curl -d grant_type=client_credentials -d client_id=API_KEY -d
client_secret=API_SECRET -d scope=authentication
https://app.logora.fr/oauth/token
```

Les clé d'API et clé secrète sont disponibles dans votre espace d'administration.
Cette opération n'est pas réversible. Veuillez prendre des précautions lorsque vous utilisez cette route d'API.
