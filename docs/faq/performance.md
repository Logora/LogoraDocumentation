---
id: performance
title: Performance
description: Nous optimisons la performance de nos scripts pour un meilleur référencement.
---

Logora met tout en oeuvre pour que le code inséré aie le moins d'impact sur le chargement de vos pages. Voici quelques détails sur le fonctionnement de Logora pour mieux évaluer la performance des scripts insérés.


### 1) Synthèse en pied d'article


Le code de la synthèse inséré dans vos articles procède en quatre étapes :
1. Téléchargement du script **synthese.js**. Ce fichier, servi depuis AWS Cloudfront, a une taille de **8 Ko**. Il permet de lancer les fonctionnalités de Logora et gère les appels vers notre API.
2. Appel vers l'API Logora pour vérifier si un débat correspond à la page en question. Cet appel renvoie le code HTML de la synthèse s'il y a un débat associé. La réponse a une taille de **9 Ko**, et le temps de réponse médian est de **10ms**. Nos serveurs sont situés à Paris.
3. Insertion du code dans la page. Le code est pré-rendu par le serveur, il peut donc être inséré directement sans traitement supplémentaire.
4. (Optionnel) Pour le premier appel de la page seulement, le script envoie les métadonnées de la page (titre, étiquettes, description) à nos serveurs pour associer ensuite plus facilement des débats aux articles.

> Si vous avez des contraintes élevées en terme de performance, utilisez l'[insertion côté serveur de la synthèse](installation/api.md)

### 2) Espace de débat

Le code de l'espace de débat procède de la même manière que celui de la synthèse, mais télécharge plus de scripts et fait plus d'appels à notre API en fonction des actions et de la navigation de l'utilisateur. Le fichier initial **debat.js** a une taille de **60 Ko**.

Notre API a un temps de réponse médian de **15ms** (95è centile 50ms) et compte plusieurs millions de requêtes par jour.
