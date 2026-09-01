---
id: legal-data-retention
title: Conservation des données et exigences légales
description: Données de connexion conservées, durées de conservation et conformité du système de signalements
---

Cette page résume les éléments dont vous avez besoin pour répondre à vos obligations légales
lorsque vous exploitez un espace de débat Logora : quelles données sont conservées, pendant
combien de temps, et comment le système de signalements s'inscrit dans le cadre applicable.

### Le partage des responsabilités

En tant qu'éditeur du site, vous êtes responsable du traitement des données à caractère
personnel de vos utilisateurs. Logora agit en qualité de **sous-traitant** au sens de
l'article 28 du RGPD : il traite ces données pour votre compte et selon vos instructions.
Les traitements mis en œuvre pour votre compte sont décrits dans la page
[Protection des données à caractère personnelles](rgpd.md), et Logora tient un registre des
traitements tant en qualité de responsable de traitement (relations clients et prospects) qu'en
qualité de sous-traitant (espace de débat). Votre contrat avec Logora comporte les clauses de
sous-traitance prévues par l'article 28 du RGPD ; vous pouvez en obtenir un exemple en écrivant
à contact@logora.fr.

### Catégories de données de connexion traitées

Pour permettre le fonctionnement, la sécurité et la modération de l'espace de débat, les
traitements réalisés pour votre compte couvrent notamment :

- **Données d'identification du compte** : identifiant (nom d'utilisateur), prénom et nom si
  renseignés, adresse email, image de profil ;
- **Contenu des contributions** : arguments, votes, sources et autres participations ;
- **Données de connexion** : adresse IP, données d'accès et logs techniques (date, heure,
  journal des requêtes sur l'espace de débat).

Ces données sont stockées sur des serveurs hébergés en Union européenne. Le journal technique
associé à une session permet, en cas de besoin (modération, réponse à une réquisition), de
rattacher les requêtes émises pendant cette session au compte utilisateur concerné.

### Durée de conservation

Les durées de conservation applicables à votre espace de débat sont fixées par votre contrat
avec Logora. Le modèle de politique de confidentialité fourni dans la documentation retient la
durée de référence suivante :

- Les données des utilisateurs sont conservées pendant la vie du compte, puis pendant
  **3 ans à compter de la fin du contrat**, sauf exception nécessaire à des fins journalistiques.

Les **données de connexion** (adresse IP, logs d'accès) ne sont pas conservées au-delà de ce qui
est nécessaire au fonctionnement, à la sécurité et à la modération de l'espace de débat ; la
durée exacte applicable à votre espace est celle prévue par votre contrat. Certains cadres
nationaux imposent des durées ou des enregistrements spécifiques (par exemple la conservation
des adresses IP et identifiants de connexion pendant une durée définie par la loi locale). Dans
ce cas, contactez-nous à contact@logora.fr afin que les exigences applicables soient intégrées
à votre contrat et mises en œuvre sur votre espace de débat.

### Exercice des droits des utilisateurs

Les utilisateurs peuvent demander l'accès, la rectification ou la suppression de leurs données.
Trois outils sont à votre disposition :

- L'**anonymisation** d'un utilisateur : les données personnelles (prénom, nom, email,
  identifiant unique, image) sont remplacées et ses contributions et son activité sont
  conservées. Voir la page [Gestion des utilisateurs](data.md) pour l'appel d'API correspondant.
- La **suppression** d'un utilisateur et de l'ensemble de ses contributions.
- La **récupération des données** d'un utilisateur, pour répondre à une demande d'accès ou de
  portabilité.

### Le système de signalements et la modération

Le système de signalements de l'espace de débat vous permet de répondre aux exigences de
transparence prévues notamment par le règlement sur les services numériques (DSA) :

- Les utilisateurs disposent d'un bouton « Signaler » avec des **raisons de signalement**
  prédéfinies, et peuvent préciser leur signalement ;
- Dans l'administration, la liste des signalements affiche pour chaque signalement la raison,
  la description éventuelle, l'**auteur de la contribution** signalée et le **rapporteur**, et
  permet de contacter chacun d'eux ;
- Selon votre configuration, la modération s'effectue **avant** ou **après** publication (voir
  la page [Modération](configuration/moderation.md)) : les contributions signalées ou à
  risque sont retirées le temps de leur examen ;
- Les décisions de modération sont tracées, et les utilisateurs peuvent être informés et
  contactés à la suite d'un rejet de leur contribution.

Pour toute question sur l'adaptation de ces éléments à votre cadre légal local, écrivez à
contact@logora.fr.