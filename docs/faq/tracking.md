---
id: tracking
title: Tracking des données
description: Analysez comment se comportent vos utilisateurs
---

#### Tracking des éléments de l'espace de débat

Vous pouvez suivre le nombre de pages vues, la rétention et d'autres statistiques directement depuis votre système d'analyse (Google Analytics, Matomo, Webtrekk, Parsely).

Pour ce qui est des éléments à l'intérieur de l'espace de débat, nous avons mis en place des éléments "data-tid" sur les principaux appels à l'action pour que vous puissiez suivre ces éléments (à l'affichage ou au clic par exemple).

Par exemple, dans le cas de Google, vous pouvez créer un déclencheur sur chacun des éléments qui vous intéressent depuis Google Tag Manager. 

Ces déclencheurs remontent dans vos statistiques Google Analytics, vous pouvez suivre les parcours / comportements de vos utilisateurs. 

Voici les "data-tid" de ces différents appels à l'action.

### Suivi des performances du bloc en pied d'article

Clic sur "Voir le résultat": `data-tid="show_vote_result"`

Clic sur un des votes du pied d'article: `data-tid="action_vote_embed"`

Clic sur "Débat des lecteurs" : `data-tid="link_debate_index_embed"`

Clic sur le titre du débat de la synthèse : `data-tid="link_debate_title_embed"`

Clic sur "Voir plus" d'un argument : `data-tid="link_argument_read_more"` 

### Suivi des performances sur la page de commentaires

Clic sur "Voir plus" d'un argument : `data-tid="link_read_more"` 

### Suivi d'un utilisateur déconnecté

Clic sur “Connexion” : `data-tid=”action_login_link”`

### Suivi identiques utilisateur déconnecté / connecté

Clic sur un vote sur l'espace de débat : `data-tid=”action_vote”`

Clic sur le suivi du débat : `data-tid="action_follow_debate"`

Clic sur un lien de partage : `data-tid="action_share_debate_facebook"`, `data-tid="action_share_debate_clipboard”`, `data-tid="action_share_debate_twitter"`, `data-tid="action_share_debate_mail"`

Clic sur un tag de débat : `data-tid="action_search_debate_tag"`

Clic sur une image de débat : `data-tid="view_debate_image"`

Clic sur “Sources” : `data-tid="action_add_source"`

Clic sur l’envoi d’argument : `data-tid="action_submit_argument"`

Clic sur “Voir l’article lié au débat” : `data-tid="link_back_source"`

Clic sur le lien vers l’index des débats: `data-tid="view_index"`

Clic sur le profil d'un autre : `data-tid="action_view_argument_author_name"`

Clic sur "Suggerer un débat": `data-tid="action_suggestions_banner"`

Clic sur "Voir plus de suggestions" : `data-tid="action_suggestions_banner_view_more"`

Clic sur la tab "Consultation" : `data-tid="view_consultation"`

Clic sur la tab "Suggestion" : `data-tid="view_suggestions"`

### Suivi spécifique à l’utilisateur connecté

Clic sur “Update” du vote : `data-tid="action_edit_vote"`

Clic sur la cloche “Notifications” : `data-tid=”action_view_notifications"`

Clic sur votre profil : `data-tid="view_user_profile"`

Clic sur "Modifier le profil" : `data-tid="action_edit_profile"`


