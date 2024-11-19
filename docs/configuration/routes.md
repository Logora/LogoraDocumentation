---
id: routes
title: Chemins d'URL
description: Configurez les URLs de l'espace de discussion
---

L'espace de débat comprend plusieurs pages qui sont accessibles sur votre site via des URLs différentes. Si vous utilisez l'[Installation en Javascript](installation/javascript-sdk.md), ces URLs doivent pointer vers la page de votre site web où est inséré l'espace de débat. Si vous utilisez notre [plugin Wordpress](installation/wordpress.md), les routes sont gérées automatiquement.

### Chemin préfixe de l'espace de débat


Les routes de l'espace de débat sont préfixées par le paramètre préfixe défini dans l'espace d'administration à l'onglet *Configuration > Personnalisation > Chemins d'URL*. Ce préfixe vous permet d'avoir le même chemin racine pour toutes les pages de l'espace de débat. Par défaut, le préfixe est *'espace-debat'*.


### Pages de l'espace de débat


Voici les différentes pages de l'espace de débat avec leurs liens et leurs paramètres :


- **Page d'accueil** => :prefix_path/:index_path  
   *:prefix_path* : le préfixe défini dans les paramètres (par défaut: 'espace-debat')  
   *:index_path* : chemin de la page d'accueil (par défaut: 'debats')


- **Page de débat** => :prefix_path/:debate_path/:debate_label  
	*:prefix_path* : le préfixe défini dans les paramètres (par défaut: 'espace-debat')  
	*:debate_path* : chemin de la page de débat (par défaut: 'debat')  
	*:debate_label* : identifiant texte du débat, exemple: "faut-il-faire-confiance-aux-robots"


- **Page de profil de l'utilisateur** => :prefix_path/:user_path/:user_label  
	*:prefix_path* : le préfixe défini dans les paramètres (par défaut: 'espace-debat')  
	*:user_path* : chemin de la page utilisateur (par défaut: 'utilisateur')  
	*:user_label* : identifiant texte de l'utilisateur, exemple: "jean-dupont"


- **Modification du profil de l'utilisateur** => :prefix_path/:user_path/edit  
	*:prefix_path* : le préfixe défini dans les paramètres (par défaut: 'espace-debat')  
	*:user_path* : chemin de la page utilisateur (par défaut: 'utilisateur')  

- **Page de recherche** => :prefix_path/:search_path  
	*:prefix_path* : le préfixe défini dans les paramètres (par défaut: 'espace-debat')  
	*:search_path* : chemin de la page de recherche (par défaut: 'recherche')


#### Exemple

Avec les paramètres par défaut, la page d'accueil de l'espace de débat est accessible par le lien : https://votresite.com/espace-debat/debats.


Les noms de ces chemins sont paramétrables dans l'espace d'administration à l'onglet *Configuration > Personnalisation > Chemins d'URL*.



