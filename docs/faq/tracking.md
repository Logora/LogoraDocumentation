---
id: tracking
title: Tracking des données
---

#### Tracking des éléments de l'espace de débat

Vous pouvez suivre le nombre de pages vues, la rétention et d'autres statistiques directement depuis votre système d'analyse (Google Analytics, Matomo, Webtrekk, Parsely).
Pour ce qui est des éléments à l'intérieur de l'espace de débat, nous avons mis en place des éléments "data-tid" sur les principaux appels à l'action pour que vous puissiez suivre ces éléments (à l'affichage ou au clic par exemple).
Voici les "data-tid" de ces différents appels à l'action.

## I. Suivi d'un utilisateur déconnecté

Clic sur “Connexion” : `data-tid=”action_login_link”`

## II. Suivi identiques utilisateur déconnecté / connecté

Clic sur un vote : `data-tid=”action_vote”`

Clic sur le suivi du débat : `data-tid="action_follow_debate"`

Clic sur un lien de partage : `data-tid="action_share_debate_facebook"`, `data-tid="action_share_debate_clipboard”`, `data-tid="action_share_debate_twitter"`, `data-tid="action_share_debate_mail"`

Clic sur un tag de débat : `data-tid="action_search_debate_tag"`

Clic sur “Sources” : `data-tid="action_add_source"`

Clic sur l’envoi d’argument : `data-tid="action_submit_argument"`

Clic sur “Voir l’article lié au débat” : `data-tid="link_back_source"`

Clic sur le lien vers l’index des débats: `data-tid="view_index"`

## III. Suivi spécifique à l’utilisateur connecté

Clic sur “Update” du vote : `data-tid="action_edit_vote"`

Clic sur la cloche “Notifications” : `data-tid=”action_view_notifications"`

Clic sur l’avatar du profil Logora : `data-tid="view_user_profile"`
