---
id: application_settings
title: Paramètres de configuration
description: Personnalisez l'apparence, les fonctionnalités et le comportement de votre espace de débat Logora.
---

Ce document regroupe l'ensemble des paramètres qui vous permettent de
personnaliser votre espace de débat : modifier les couleurs et les polices,
afficher ou masquer des éléments (navbar, footer, boutons, onglets...),
activer ou désactiver des fonctionnalités (votes, badges, suggestions...),
gérer l'authentification et les avatars, configurer la publicité, et bien
plus encore.

---

## Apparence (thème)

Paramètres pour modifier les couleurs, les polices, les bordures et l'aspect visuel de l'espace de débat.

| Paramètre | Valeurs | Défaut | Modifiable | Description |
|---|---|---|---|---|
| `callPrimaryColor` | Couleur HTML | `#417EC7` | Oui (dans l'admin) | Couleur principale (boutons, éléments d'accentuation). |
| `forPrimaryColor` | Couleur HTML | `#C24D50` | Oui (dans l'admin) | Couleur associée à la thèse "Pour". |
| `againstPrimaryColor` | Couleur HTML | `#7980BB` | Oui (dans l'admin) | Couleur associée à la thèse "Contre". |
| `thirdPositionColorPrimary` | Couleur HTML | `#9b9b9b` | Non (contacter Logora) | Couleur de la position 3 (thèse neutre). |
| `textPrimary` | Couleur HTML | `#222222` | Oui (dans l'admin) | Couleur du texte principal. |
| `textSecondary` | Couleur HTML | `#777777` | Non (contacter Logora) | Couleur du texte secondaire. |
| `textTertiary` | Couleur HTML | `#fafafa` | Non (contacter Logora) | Couleur du texte tertiaire (métadonnées). |
| `successPrimary` | Couleur HTML | `#4d9e33` | Non (contacter Logora) | Couleur des messages de succès. |
| `cancelPrimary` | Couleur HTML | `#c73c49` | Non (contacter Logora) | Couleur des messages d'erreur. |
| `fontFamily` | Nom de police | `Montserrat` | Oui (dans l'admin) | Police principale de l'application. |
| `titleFontFamily` | Nom de police | `var(--font-family)` | Oui (dans l'admin) | Police des titres. |
| `boxTitleFontFamily` | Nom de police | `var(--font-family)` | Oui (dans l'admin) | Police des titres des boîtes de débat. |
| `fontSizeExtraLarge` | Taille CSS | `18px` | Oui (dans l'admin) | Taille de police extra large. |
| `fontSizeLarge` | Taille CSS | `18px` | Oui (dans l'admin) | Taille de police des textes importants. |
| `fontSizeNormal` | Taille CSS | `16px` | Oui (dans l'admin) | Taille de police du texte courant. |
| `fontSizeSmall` | Taille CSS | `14px` | Oui (dans l'admin) | Taille de police des textes secondaires. |
| `fontSizeExtraSmall` | Taille CSS | `12px` | Oui (dans l'admin) | Taille de police des très petits textes. |
| `fontWeightNormal` | Nombre | `400` | Oui (dans l'admin) | Graisse de police normale. |
| `fontWeightBold` | Nombre | `700` | Oui (dans l'admin) | Graisse de police en gras. |
| `useGoogleFonts` | booléen | `true` | Oui (dans l'admin) | Charge les polices depuis Google Fonts. Si désactivé, les polices doivent être présentes dans votre page. |
| `enableDarkMode` | booléen | `true` | Oui (dans l'admin) | Active le mode sombre selon les préférences du navigateur. |
| `boxBorderRadius` | Taille CSS | `6px` | Oui (dans l'admin) | Rayon d'arrondi des boîtes. |
| `boxBorder` | Couleur / bordure CSS | `1px solid rgba(7,42,68, 0.1)` | Oui (dans l'admin) | Bordure des boîtes. |
| `boxShadow` | Ombre CSS | `0px 2px 5px rgba(7,42,68, 0.1)` | Oui (dans l'admin) | Ombre des boîtes. |
| `boxShadowMainContainer` | Ombre CSS | `0px 2px 5px` | Non (contacter Logora) | Ombre des conteneurs principaux. |
| `boxBorderMainContainer` | Bordure CSS | — | Non (contacter Logora) | Bordure des conteneurs principaux. |
| `buttonBorder` | Bordure CSS | `1px solid rgba(7,42,68, 0.1)` | Non (contacter Logora) | Bordure des boutons. |
| `buttonBorderRadius` | Taille CSS | `6px` | Non (contacter Logora) | Rayon d'arrondi des boutons. |
| `imgAspectRatio` | Ratio | `16 / 9` | Non (contacter Logora) | Rapport largeur/hauteur des images. |
| `backgroundColorPrimary` | Couleur HTML | `white` | Non (contacter Logora) | Fond principal. |
| `backgroundColorSecondary` | Couleur HTML | `#E8E8E8` | Non (contacter Logora) | Fond secondaire (le "wallpaper"). |
| `backgroundColorContainer` | Couleur HTML | `white` | Non (contacter Logora) | Fond des conteneurs. |
| `tagTextColor` | Couleur HTML | `var(--call-primary-color)` | Non (contacter Logora) | Couleur du texte des étiquettes. |
| `tagBorderColor` | Couleur HTML | `var(--call-primary-color)` | Non (contacter Logora) | Couleur de la bordure des étiquettes. |

---

## Affichage (layout)

Paramètres pour afficher ou masquer des éléments de l'interface (navbar, footer, boutons, onglets, tags...).

| Paramètre | Valeurs | Défaut | Modifiable | Description |
|---|---|---|---|---|
| `hideNav` | booléen | `false` | Non (contacter Logora) | Cache la navbar et le footer. |
| `hideProviderNavbar` | booléen | `true` | Non (contacter Logora) | Cache l'en-tête avec le logo de l'espace. |
| `hideFooter` | booléen | `true` | Non (contacter Logora) | Cache le footer. |
| `hideNavbarButton` | booléen | `false` | Non (contacter Logora) | Cache le bouton du menu mobile. |
| `hideUserDescription` | booléen | `false` | Non (contacter Logora) | Cache la description sur le profil utilisateur. |
| `hideIndexSearchBar` | booléen | `false` | Non (contacter Logora) | Cache la barre de recherche sur l'index des débats. |
| `hideDebatesLink` | booléen | `false` | Non (contacter Logora) | Masque le lien "Débats" dans la navbar. |
| `hideRelatedDebates` | booléen | `false` | Non (contacter Logora) | Masque le bloc "débats similaires". |
| `hideArgumentsTab` | booléen | `false` | Non (contacter Logora) | Masque l'onglet "Arguments" sur le profil utilisateur. |
| `hideBackLink` | booléen | `false` | Non (contacter Logora) | Cache le lien "Retour à l'article". |
| `hideLoginButton` | booléen | `false` | Non (contacter Logora) | Cache le bouton de connexion. |
| `hideShareButton` | booléen | `false` | Non (contacter Logora) | Cache le bouton de partage des arguments. |
| `hideDownvotes` | booléen | `false` | Non (contacter Logora) | Cache le nombre de votes négatifs. |
| `hideTags` | booléen | `false` | Non (contacter Logora) | Masque les tags sur l'index et la page débat. |
| `hideCodeShare` | booléen | `false` | Non (contacter Logora) | Cache le code d'intégration iframe (partage embed). |
| `hideSubtitleHeader` | booléen | `false` | Non (contacter Logora) | Cache le titre de la note de rédaction. |
| `hideProposalTitleAndTheme` | booléen | `false` | Non (contacter Logora) | Cache les champs titre et thème d'une proposition. |
| `hideReportTab` | booléen | `false` | Non (contacter Logora) | Cache l'onglet signalement sur le profil. |
| `hideModalAvatar` | booléen | `false` | Non (contacter Logora) | Cache la fenêtre de changement d'avatar. |
| `hideBestUsers` | booléen | `false` | Non (contacter Logora) | Masque le classement des débatteurs de la semaine. |
| `disableProfileLinks` | booléen | `false` | Non (contacter Logora) | Désactive les liens vers les profils utilisateurs. |
| `showAllArgumentInEmbed` | booléen | `false` | Non (contacter Logora) | Affiche l'argument en entier (sans troncature) en mode embed. |
| `showNavbarButtonInDrawer` | booléen | `true` | Non (contacter Logora) | Affiche le bouton navbar dans le menu latéral. |
| `showProfileNotificationInDrawer` | booléen | `true` | Non (contacter Logora) | Affiche les notifications et le profil dans le menu latéral. |
| `outlinedVoteButtons` | booléen | `false` | Non (contacter Logora) | Style "contour" (outline) pour les boutons de vote. |

---

## Actions utilisateur

Paramètres pour contrôler ce que les utilisateurs peuvent faire (modifier, suivre, signaler, limiter la saisie...).

| Paramètre | Valeurs | Défaut | Modifiable | Description |
|---|---|---|---|---|
| `disableUserSources` | booléen | — | Non (contacter Logora) | Empêche les utilisateurs d'ajouter des sources à leurs arguments. |
| `disableFollowActions` | booléen | — | Non (contacter Logora) | Cache les boutons de suivi sur les débats. |
| `disableNameUpdate` | booléen | — | Non (contacter Logora) | Empêche l'utilisateur de modifier son nom et prénom. |
| `disableOnboardingNameUpdate` | booléen | — | Non (contacter Logora) | Empêche la modification du nom/prénom pendant l'onboarding. |
| `disableInputForVisitor` | booléen | — | Non (contacter Logora) | Empêche les visiteurs non connectés d'écrire des arguments. |
| `disableRichText` | booléen | — | Non (contacter Logora) | Désactive l'éditeur de texte riche (mise en forme). |
| `requireAuthToLoadMore` | booléen | — | Non (contacter Logora) | Oblige les utilisateurs non connectés à se connecter pour voir plus de commentaires. |
| `allowAnonymousReport` | booléen | `false` | Non (contacter Logora) | Autorise les utilisateurs non connectés à signaler des contenus. |
| `allowUserDeletion` | booléen | `false` | Non (contacter Logora) | Autorise l'utilisateur à supprimer son propre compte. |
| `allowDebateBranding` | booléen | — | Non (contacter Logora) | Ajoute un champ "marque" sur les débats (ex : "Débat Ouest-France"). |
| `hideSHowResultButton` | booléen | `false` | Non (contacter Logora) | Cache le bouton "voir le résultat" du vote. |
| `showDateInscription` | booléen | `false` | Non (contacter Logora) | Affiche la date d'inscription de l'utilisateur. |

---

## Fonctionnalités (modules)

Paramètres pour activer ou désactiver les grandes fonctionnalités de l'espace (débats, votes, badges, consultations...).

| Paramètre | Valeurs | Défaut | Modifiable | Description |
|---|---|---|---|---|
| `debateSpace` | booléen | `true` | Non (contacter Logora) | Active l'espace de débat. |
| `votes` | booléen | `true` | Non (contacter Logora) | Active les votes. |
| `badges` | booléen | `true` | Non (contacter Logora) | Active les badges de gamification. |
| `consultation` | booléen | `false` | Oui (dans l'admin) | Active le module de consultation. |
| `comments` | booléen | — | Oui (dans l'admin) | Active les commentaires sur les articles sans débat. |
| `sources` | booléen | `true` | Non (contacter Logora) | Active le lien entre articles et débats. |
| `announcement` | texte | — | Non (contacter Logora) | Message affiché dans la boîte d'alerte sous la navbar. |
| `suggestions` | objet | — | Oui (dans l'admin) | Active les suggestions de débat par les utilisateurs. |
| `debate_summary` | booléen | `false` | Oui (dans l'admin) | Affiche un résumé des arguments généré par IA. |

---

## Synthèse

Paramètres pour contrôler l'affichage du bloc de synthèse en pied d'article.

| Paramètre | Valeurs | Défaut | Modifiable | Description |
|---|---|---|---|---|
| `newDesign` | booléen | `false` | Non (contacter Logora) | Nouvelle synthèse (un argument en pied d'article au lieu de deux). |
| `onlyShowTopArgument` | booléen | `false` | Non (contacter Logora) | N'affiche que le meilleur argument sur mobile. |
| `hideArguments` | booléen | `false` | Non (contacter Logora) | Cache les meilleurs arguments dans la synthèse. |
| `showFallbackGroup` | booléen | `false` | Non (contacter Logora) | Affiche un débat par défaut sur les articles sans débat associé. |
| `showComments` | booléen | — | Non (contacter Logora) | Affiche les commentaires dans la synthèse. |
| `defaultGroup` | booléen | `false` | Non (contacter Logora) | Épingle un débat sur la page d'accueil. |
| `allowWidget` | booléen | `false` | Non (contacter Logora) | Affiche le code widget iframe dans l'administration. |
| `embedFileName` | string | — | Non (contacter Logora) | Remplace le nom du fichier CDN de l'embed. |
| `pageExpirationDate` | date | — | Non (contacter Logora) | Date d'expiration de la page de synthèse. |
| `withLogo` | booléen | — | Non (contacter Logora) | Affiche le logo dans l'embed de synthèse. |

---

## URLs (routes)

Paramètres pour personnaliser les chemins d'URL de votre espace de débat.

| Paramètre | Valeurs | Défaut | Modifiable | Description |
|---|---|---|---|---|
| `prefixPath` | texte | `espace-debat` | Oui (dans l'admin) | Préfixe de toutes les URLs de votre espace. |
| `indexPath` | texte | `debats` | Oui (dans l'admin) | Chemin de la liste des débats. |
| `debatePath` | texte | `debat` | Oui (dans l'admin) | Chemin de la page d'un débat. |
| `userPath` | texte | `utilisateur` | Oui (dans l'admin) | Chemin de la page profil utilisateur. |
| `informationPath` | texte | `informations` | Oui (dans l'admin) | Chemin de la page d'informations. |
| `commentPath` | texte | `commentaires` | Non (contacter Logora) | Chemin des liens vers un commentaire. |
| `consultationPath` | texte | `consultation` | Non (contacter Logora) | Chemin de la page consultation. |
| `consultationIndexPath` | texte | `consultations` | Non (contacter Logora) | Chemin de la liste des consultations. |
| `suggestionPath` | texte | `suggestions` | Non (contacter Logora) | Chemin de la page suggestions de débat. |

---

## Informations du site (provider)

Paramètres pour renseigner les informations de votre site et vos liens légaux.

| Paramètre | Valeurs | Défaut | Modifiable | Description |
|---|---|---|---|---|
| `name` | texte | — | Oui (dans l'admin) | Nom du site web. |
| `url` | URL | — | Oui (dans l'admin) | URL de votre site. |
| `companyName` | texte | — | Oui (dans l'admin) | Nom de l'entreprise (mentions légales des emails). |
| `cguUrl` | URL | — | Oui (dans l'admin) | URL des CGU. |
| `privacyUrl` | URL | — | Oui (dans l'admin) | URL de la politique de confidentialité. |
| `userGuideUrl` | URL | — | Non (contacter Logora) | URL de la charte utilisateur. |
| `hideUserGuideLink` | booléen | `false` | Oui (dans l'admin) | Masque le lien vers la charte utilisateur. |

---

## Authentification

Paramètres pour gérer la connexion, l'affichage de la fenêtre de connexion et l'anonymat des utilisateurs.

| Paramètre | Valeurs | Défaut | Modifiable | Description |
|---|---|---|---|---|
| `showEmailConsent` | booléen | `true` | Non (contacter Logora) | Affiche une case de consentement email sur la connexion. |
| `hideModalActions` | booléen | `false` | Non (contacter Logora) | Cache les actions de la fenêtre de connexion. |
| `hideModalLoginButton` | booléen | `false` | Non (contacter Logora) | Cache le lien de connexion. |
| `hideCgu` | booléen | — | Non (contacter Logora) | Masque les CGU dans la connexion SSO. |
| `disableLoginModal` | booléen | `false` | Non (contacter Logora) | Désactive l'ouverture automatique de la fenêtre de connexion. |
| `showOnboarding` | booléen | `false` | Oui (dans l'admin) | Affiche la fenêtre d'onboarding (choix du prénom, nom, avatar) aux nouveaux utilisateurs. |
| `shortenLastName` | booléen | `false` | Non (contacter Logora) | N'affiche que l'initiale du nom de famille. |
| `allowBlankLastName` | booléen | `false` | Non (contacter Logora) | Autorise un nom de famille vide. |
| `anonymousName` | booléen | `false` | Non (contacter Logora) | Remplace le nom par "Débatteur Anonyme". |
| `anonymousFirstName` | texte | `Débatteur` | Non (contacter Logora) | Prénom des utilisateurs anonymes. |
| `anonymousLastName` | texte | `Anonyme` | Non (contacter Logora) | Nom des utilisateurs anonymes. |
| `randomAnonymousName` | booléen | `false` | Oui (dans l'admin) | Attribue un nom aléatoire si le nom est vide. |
| `updateUserOnLogin` | booléen | `false` | Non (contacter Logora) | Met à jour le nom, prénom et image à chaque connexion. Attention : écrase les modifications faites sur l'espace de débat. |
| `hideLogoutButton` | booléen | `false` | Non (contacter Logora) | Cache le bouton de déconnexion. |

---

## Avatars

Paramètres pour configurer les avatars proposés aux utilisateurs lors de l'onboarding.

| Paramètre | Valeurs | Défaut | Modifiable | Description |
|---|---|---|---|---|
| `baseUrl` | URL | `https://d3m10rkpbtflzf.cloudfront.net` | Oui (dans l'admin) | URL de base des images d'avatars prédéfinis. |
| `maxFileName` | nombre | `119` | Oui (dans l'admin) | Nombre d'avatars prédéfinis disponibles. |
| `fileExtension` | string | `jpg` | Oui (dans l'admin) | Extension des fichiers d'avatars. |
| `allowUserImage` | booléen | `true` | Oui (dans l'admin) | Autorise l'utilisateur à uploader son propre avatar. |

---

## Publicité

Paramètres pour activer et configurer les espaces publicitaires dans l'espace de débat.

| Paramètre | Valeurs | Défaut | Modifiable | Description |
|---|---|---|---|---|
| `display` | booléen | `false` | Oui (dans l'admin) | Active l'affichage des blocs publicitaires. |
| `threadFrequency` | nombre | `3` | Non (contacter Logora) | Fréquence d'insertion d'une pub dans les listes (tous les 3 contenus). |
| `disableGoogleAdManager` | booléen | `false` | Non (contacter Logora) | Désactive Google Ad Manager même si les pubs sont activées. |

---

## Traduction

Paramètres pour activer la traduction automatique du contenu.

| Paramètre | Valeurs | Défaut | Modifiable | Description |
|---|---|---|---|---|
| `enable` | booléen | `false` | Non (contacter Logora) | Active la traduction automatique du contenu. |
| `dialect` | string | — | Non (contacter Logora) | Variante régionale (ex : `"CH"` pour le suisse). |
| `translationMethods` | objet | — | Oui (dans l'admin) | Méthode de traduction par paire de langues (ex: `{fr: {en: "deepl", es: "deepl"}}`). |

---

## Autres

Paramètres pour gérer les notifications, les commentaires, le vote neutre et les textes personnalisés.

| Paramètre | Groupe | Valeurs | Défaut | Modifiable | Description |
|---|---|---|---|---|---|
| `email` | notifications | booléen | `true` | Oui (dans l'admin) | Active l'envoi d'emails de notification. |
| `newsletter` | notifications | booléen | `false` | Oui (dans l'admin) | Active la newsletter hebdomadaire. |
| `showTopComments` | comments | booléen | `false` | Oui (dans l'admin) | Affiche les 3 meilleurs commentaires en synthèse. |
| `neutralThesis` | vote | booléen | `true` | Non (contacter Logora) | Active la thèse "Sans opinion". |
| `neutralThesisName` | vote | texte | — | Non (contacter Logora) | Texte de la thèse neutre. |
| `text` | text | objet | — | Non (contacter Logora) | Permet de modifier tous les textes de l'interface. |
| `badges` | badges | — | — | Non (contacter Logora) | Permet de personnaliser les noms et images des badges. |