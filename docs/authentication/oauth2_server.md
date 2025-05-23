---
id: oauth2_server
title: Serveur OAuth 2.0
description: Authentification via OAuth 2.0
---

Le protocole OAuth 2.0 permet la récupération sécurisée des ressources tout en protégeant les données de vos utilisateurs. Logora propose un service authentification conforme OAuth 2.0, qui permet de connecter automatiquement vos utilisateurs à l'application Logora une fois qu'ils sont connectés à votre système d'authentification.

Ce mode d'authentification permet à Logora de se connecter à votre serveur OAuth 2.0. Après récupération d'un jeton d'accès pour l'utilisateur, nous récupérons son profil via un point d'accès de votre API.

### Mise en place

Pour mettre en place ce mode d'authentification, vous devez créer une application cliente pour Logora sur votre serveur OAuth 2.0, avec le paramètre suivant :
   `redirect_uri`: `https://app.logora.fr/auth/callback`

Récupérez les informations suivantes depuis votre fournisseur OAuth2 :
- `client_id` : la clé publique de l'application créée
- `client_secret` : la clé secrète de l'application créée
- `login_url`: l'URL de la page d'authentification
- `scope` : la portée des jetons d'accès
- `token_endpoint` : l'URL de la route de récupération de jeton d'accès
- `token_endpoint_method` : la méthode de la route de récupération de jeton d'accès ("GET" ou "POST").
- `user_profile_endpoint`: l'URL de la route de récupération du profil utilisateur (méthode "GET")
- `user_profile_params`: paramètres d'URL à envoyer avec cette route, sous forme de dictionnaire (optionnel)
- `user_profile_mapping` : liaison entre les attributs renvoyés par la route et ceux demandés par Logora

Entrez ces informations dans votre espace d'administration Logora, onglet Configuration > Authentification.
Une fois que c'est fait, vos utilisateurs pourront directement se connecter.
