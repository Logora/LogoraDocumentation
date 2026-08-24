---
id: application_settings
title: Advanced settings
description: Customize the appearance, features and behavior of your Logora debate space.
---

This document lists all the settings you can use to customize your debate
space: change colors and fonts, show or hide elements (navbar, footer, buttons,
tabs...), enable or disable features (votes, badges, suggestions...), manage
authentication and avatars, configure advertising, and more.

---

## Appearance (theme)

Settings to change the colors, fonts, borders and visual look of the debate space.

| Parameter | Values | Default | Editable | Description |
|---|---|---|---|---|
| `callPrimaryColor` | HTML color | `#417EC7` | Yes (in the admin) | Main color (buttons, accent elements). |
| `forPrimaryColor` | HTML color | `#C24D50` | Yes (in the admin) | Color associated with the "For" thesis. |
| `againstPrimaryColor` | HTML color | `#7980BB` | Yes (in the admin) | Color associated with the "Against" thesis. |
| `thirdPositionColorPrimary` | HTML color | `#9b9b9b` | No (contact Logora) | Color for position 3 (neutral thesis). |
| `textPrimary` | HTML color | `#222222` | Yes (in the admin) | Main text color. |
| `textSecondary` | HTML color | `#777777` | No (contact Logora) | Secondary text color. |
| `textTertiary` | HTML color | `#fafafa` | No (contact Logora) | Tertiary text color (metadata). |
| `successPrimary` | HTML color | `#4d9e33` | No (contact Logora) | Success message color. |
| `cancelPrimary` | HTML color | `#c73c49` | No (contact Logora) | Error message color. |
| `fontFamily` | Font name | `Montserrat` | Yes (in the admin) | Main font. |
| `titleFontFamily` | Font name | `var(--font-family)` | Yes (in the admin) | Title font. |
| `boxTitleFontFamily` | Font name | `var(--font-family)` | Yes (in the admin) | Font for debate box titles. |
| `fontSizeExtraLarge` | CSS size | `18px` | Yes (in the admin) | Extra large font size. |
| `fontSizeLarge` | CSS size | `18px` | Yes (in the admin) | Large font size for important text. |
| `fontSizeNormal` | CSS size | `16px` | Yes (in the admin) | Default font size. |
| `fontSizeSmall` | CSS size | `14px` | Yes (in the admin) | Small font size for secondary text. |
| `fontSizeExtraSmall` | CSS size | `12px` | Yes (in the admin) | Extra small font size. |
| `fontWeightNormal` | Number | `400` | Yes (in the admin) | Normal font weight. |
| `fontWeightBold` | Number | `700` | Yes (in the admin) | Bold font weight. |
| `useGoogleFonts` | boolean | `true` | Yes (in the admin) | Loads fonts from Google Fonts. If disabled, fonts must be present in your page. |
| `enableDarkMode` | boolean | `true` | Yes (in the admin) | Enables dark mode based on browser preferences. |
| `boxBorderRadius` | CSS size | `6px` | Yes (in the admin) | Box corner radius. |
| `boxBorder` | CSS border | `1px solid rgba(7,42,68, 0.1)` | Yes (in the admin) | Box border. |
| `boxShadow` | CSS shadow | `0px 2px 5px rgba(7,42,68, 0.1)` | Yes (in the admin) | Box shadow. |
| `boxShadowMainContainer` | CSS shadow | `0px 2px 5px` | No (contact Logora) | Main container shadow. |
| `boxBorderMainContainer` | CSS border | — | No (contact Logora) | Main container border. |
| `buttonBorder` | CSS border | `1px solid rgba(7,42,68, 0.1)` | No (contact Logora) | Button border. |
| `buttonBorderRadius` | CSS size | `6px` | No (contact Logora) | Button corner radius. |
| `imgAspectRatio` | Ratio | `16 / 9` | No (contact Logora) | Image width/height ratio. |
| `backgroundColorPrimary` | HTML color | `white` | No (contact Logora) | Main background color. |
| `backgroundColorSecondary` | HTML color | `#E8E8E8` | No (contact Logora) | Secondary background ("wallpaper"). |
| `backgroundColorContainer` | HTML color | `white` | No (contact Logora) | Container background color. |
| `tagTextColor` | HTML color | `var(--call-primary-color)` | No (contact Logora) | Tag text color. |
| `tagBorderColor` | HTML color | `var(--call-primary-color)` | No (contact Logora) | Tag border color. |

---

## Display (layout)

Settings to show or hide interface elements (navbar, footer, buttons, tabs, tags...).

| Parameter | Values | Default | Editable | Description |
|---|---|---|---|---|
| `hideNav` | boolean | `false` | No (contact Logora) | Hides the navbar and footer. |
| `hideProviderNavbar` | boolean | `true` | No (contact Logora) | Hides the header with the space logo. |
| `hideFooter` | boolean | `true` | No (contact Logora) | Hides the footer. |
| `hideNavbarButton` | boolean | `false` | No (contact Logora) | Hides the mobile menu button. |
| `hideUserDescription` | boolean | `false` | No (contact Logora) | Hides the description on the user profile. |
| `hideIndexSearchBar` | boolean | `false` | No (contact Logora) | Hides the search bar on the debate index. |
| `hideDebatesLink` | boolean | `false` | No (contact Logora) | Hides the "Debates" link in the navbar. |
| `hideRelatedDebates` | boolean | `false` | No (contact Logora) | Hides the "similar debates" block. |
| `hideArgumentsTab` | boolean | `false` | No (contact Logora) | Hides the "Arguments" tab on the user profile. |
| `hideBackLink` | boolean | `false` | No (contact Logora) | Hides the "Back to article" link. |
| `hideLoginButton` | boolean | `false` | No (contact Logora) | Hides the login button. |
| `hideShareButton` | boolean | `false` | No (contact Logora) | Hides the share button on arguments. |
| `hideDownvotes` | boolean | `false` | No (contact Logora) | Hides the number of downvotes. |
| `hideTags` | boolean | `false` | No (contact Logora) | Hides tags on the index and debate page. |
| `hideCodeShare` | boolean | `false` | No (contact Logora) | Hides the iframe embed code. |
| `hideSubtitleHeader` | boolean | `false` | No (contact Logora) | Hides the editorial note title. |
| `hideProposalTitleAndTheme` | boolean | `false` | No (contact Logora) | Hides the title and theme fields of a proposal. |
| `hideReportTab` | boolean | `false` | No (contact Logora) | Hides the report tab on the profile. |
| `hideModalAvatar` | boolean | `false` | No (contact Logora) | Hides the avatar change window. |
| `hideBestUsers` | boolean | `false` | No (contact Logora) | Hides the weekly debaters ranking. |
| `disableProfileLinks` | boolean | `false` | No (contact Logora) | Disables links to user profiles. |
| `showAllArgumentInEmbed` | boolean | `false` | No (contact Logora) | Shows the full argument (no truncation) in embed mode. |
| `showNavbarButtonInDrawer` | boolean | `true` | No (contact Logora) | Shows the navbar button in the side menu. |
| `showProfileNotificationInDrawer` | boolean | `true` | No (contact Logora) | Shows notifications and profile in the side menu. |
| `outlinedVoteButtons` | boolean | `false` | No (contact Logora) | Applies an outline style to vote buttons. |

---

## User actions

Settings to control what users can do (edit, follow, report, limit input...).

| Parameter | Values | Default | Editable | Description |
|---|---|---|---|---|
| `disableUserSources` | boolean | — | No (contact Logora) | Prevents users from adding sources to their arguments. |
| `disableFollowActions` | boolean | — | No (contact Logora) | Hides follow buttons on debates. |
| `disableNameUpdate` | boolean | — | No (contact Logora) | Prevents users from changing their first and last name. |
| `disableOnboardingNameUpdate` | boolean | — | No (contact Logora) | Prevents name changes during onboarding. |
| `disableInputForVisitor` | boolean | — | No (contact Logora) | Prevents unauthenticated visitors from writing arguments. |
| `disableRichText` | boolean | — | No (contact Logora) | Disables the rich text editor. |
| `requireAuthToLoadMore` | boolean | — | No (contact Logora) | Requires users to log in to view more comments. |
| `allowAnonymousReport` | boolean | `false` | No (contact Logora) | Allows unauthenticated users to report content. |
| `allowUserDeletion` | boolean | `false` | No (contact Logora) | Allows users to delete their own account. |
| `allowDebateBranding` | boolean | — | No (contact Logora) | Adds a "brand" field on debates (e.g. "Debate by Ouest-France"). |
| `hideSHowResultButton` | boolean | `false` | No (contact Logora) | Hides the "see result" button on votes. |
| `showDateInscription` | boolean | `false` | No (contact Logora) | Shows the user registration date. |

---

## Features (modules)

Settings to enable or disable major features of the space (debates, votes, badges, consultations...).

| Parameter | Values | Default | Editable | Description |
|---|---|---|---|---|
| `debateSpace` | boolean | `true` | No (contact Logora) | Enables the debate space. |
| `votes` | boolean | `true` | No (contact Logora) | Enables voting. |
| `badges` | boolean | `true` | No (contact Logora) | Enables gamification badges. |
| `consultation` | boolean | `false` | Yes (in the admin) | Enables the consultation module. |
| `comments` | boolean | — | Yes (in the admin) | Enables comments on articles without a debate. |
| `sources` | boolean | `true` | No (contact Logora) | Enables the link between articles and debates. |
| `announcement` | text | — | No (contact Logora) | Message displayed in the alert box below the navbar. |
| `suggestions` | object | — | Yes (in the admin) | Enables debate suggestions by users. |
| `debate_summary` | boolean | `false` | Yes (in the admin) | Shows an AI-generated argument summary. |

---

## Synthesis

Settings to control the display of the synthesis block at the bottom of the article.

| Parameter | Values | Default | Editable | Description |
|---|---|---|---|---|
| `newDesign` | boolean | `false` | No (contact Logora) | New synthesis (one argument instead of two). |
| `onlyShowTopArgument` | boolean | `false` | No (contact Logora) | Shows only the best argument on mobile. |
| `hideArguments` | boolean | `false` | No (contact Logora) | Hides the best arguments in the synthesis. |
| `showFallbackGroup` | boolean | `false` | No (contact Logora) | Shows a default debate on articles without one. |
| `showComments` | boolean | — | No (contact Logora) | Shows comments in the synthesis. |
| `defaultGroup` | boolean | `false` | No (contact Logora) | Pins a debate on the homepage. |
| `allowWidget` | boolean | `false` | No (contact Logora) | Shows the iframe widget code in the admin. |
| `embedFileName` | string | — | No (contact Logora) | Replaces the CDN file name for the embed. |
| `pageExpirationDate` | date | — | No (contact Logora) | Expiration date of the synthesis page. |
| `withLogo` | boolean | — | No (contact Logora) | Shows the logo in the synthesis embed. |

---

## URLs (routes)

Settings to customize the URL paths of your debate space.

| Parameter | Values | Default | Editable | Description |
|---|---|---|---|---|
| `prefixPath` | text | `espace-debat` | Yes (in the admin) | Prefix for all URLs of your space. |
| `indexPath` | text | `debats` | Yes (in the admin) | Path to the debate list. |
| `debatePath` | text | `debat` | Yes (in the admin) | Path to a debate page. |
| `userPath` | text | `utilisateur` | Yes (in the admin) | Path to the user profile page. |
| `informationPath` | text | `informations` | Yes (in the admin) | Path to the information page. |
| `commentPath` | text | `commentaires` | No (contact Logora) | Path to comment links. |
| `consultationPath` | text | `consultation` | No (contact Logora) | Path to the consultation page. |
| `consultationIndexPath` | text | `consultations` | No (contact Logora) | Path to the consultation list. |
| `suggestionPath` | text | `suggestions` | No (contact Logora) | Path to the debate suggestions page. |

---

## Site information (provider)

Settings to fill in your site information and legal links.

| Parameter | Values | Default | Editable | Description |
|---|---|---|---|---|
| `name` | text | — | Yes (in the admin) | Website name. |
| `url` | URL | — | Yes (in the admin) | Your website URL. |
| `companyName` | text | — | Yes (in the admin) | Company name (email legal notices). |
| `cguUrl` | URL | — | Yes (in the admin) | Terms of service URL. |
| `privacyUrl` | URL | — | Yes (in the admin) | Privacy policy URL. |
| `userGuideUrl` | URL | — | No (contact Logora) | User charter URL. |
| `hideUserGuideLink` | boolean | `false` | Yes (in the admin) | Hides the link to the user charter. |

---

## Authentication

Settings to manage login, the login window display and user anonymity.

| Parameter | Values | Default | Editable | Description |
|---|---|---|---|---|
| `showEmailConsent` | boolean | `true` | No (contact Logora) | Shows an email consent checkbox on login. |
| `hideModalActions` | boolean | `false` | No (contact Logora) | Hides the login window actions. |
| `hideModalLoginButton` | boolean | `false` | No (contact Logora) | Hides the login link. |
| `hideCgu` | boolean | — | No (contact Logora) | Hides the terms of service in SSO login. |
| `disableLoginModal` | boolean | `false` | No (contact Logora) | Disables automatic opening of the login window. |
| `showOnboarding` | boolean | `false` | Yes (in the admin) | Shows the onboarding window (first name, last name, avatar) to new users. |
| `shortenLastName` | boolean | `false` | No (contact Logora) | Shows only the first letter of the last name. |
| `allowBlankLastName` | boolean | `false` | No (contact Logora) | Allows an empty last name. |
| `anonymousName` | boolean | `false` | No (contact Logora) | Replaces the name with "Anonymous Debater". |
| `anonymousFirstName` | text | `Débatteur` | No (contact Logora) | First name for anonymous users. |
| `anonymousLastName` | text | `Anonyme` | No (contact Logora) | Last name for anonymous users. |
| `randomAnonymousName` | boolean | `false` | Yes (in the admin) | Assigns a random name if the name is empty. |
| `updateUserOnLogin` | boolean | `false` | No (contact Logora) | Updates the name, first name and avatar on each login. Warning: overwrites changes made in the debate space. |
| `hideLogoutButton` | boolean | `false` | No (contact Logora) | Hides the logout button. |

---

## Avatars

Settings to configure the avatars offered to users during onboarding.

| Parameter | Values | Default | Editable | Description |
|---|---|---|---|---|
| `baseUrl` | URL | `https://d3m10rkpbtflzf.cloudfront.net` | Yes (in the admin) | Base URL for predefined avatar images. |
| `maxFileName` | number | `119` | Yes (in the admin) | Number of available predefined avatars. |
| `fileExtension` | string | `jpg` | Yes (in the admin) | Avatar file extension. |
| `allowUserImage` | boolean | `true` | Yes (in the admin) | Allows users to upload their own avatar. |

---

## Advertising

Settings to enable and configure ad spaces in the debate space.

| Parameter | Values | Default | Editable | Description |
|---|---|---|---|---|
| `display` | boolean | `false` | Yes (in the admin) | Enables ad blocks display. |
| `threadFrequency` | number | `3` | No (contact Logora) | Ad insertion frequency in lists (every 3 items). |
| `disableGoogleAdManager` | boolean | `false` | No (contact Logora) | Disables Google Ad Manager even if ads are enabled. |

---

## Translation

Settings to enable automatic content translation.

| Parameter | Values | Default | Editable | Description |
|---|---|---|---|---|
| `enable` | boolean | `false` | No (contact Logora) | Enables automatic content translation. |
| `dialect` | string | — | No (contact Logora) | Regional variant (e.g. `"CH"` for Swiss). |
| `translationMethods` | object | — | Yes (in the admin) | Translation method per language pair (e.g. `{fr: {en: "deepl", es: "deepl"}}`). |

---

## Other

Settings to manage notifications, comments, neutral voting and custom text.

| Parameter | Group | Values | Default | Editable | Description |
|---|---|---|---|---|---|
| `email` | notifications | boolean | `true` | Yes (in the admin) | Enables notification emails. |
| `newsletter` | notifications | boolean | `false` | Yes (in the admin) | Enables the weekly newsletter. |
| `showTopComments` | comments | boolean | `false` | Yes (in the admin) | Shows the top 3 comments in the synthesis. |
| `neutralThesis` | vote | boolean | `true` | No (contact Logora) | Enables the "No opinion" thesis. |
| `neutralThesisName` | vote | text | — | No (contact Logora) | Text for the neutral thesis. |
| `text` | text | object | — | No (contact Logora) | Allows you to customize all interface text. |
| `badges` | badges | — | — | No (contact Logora) | Allows you to customize badge names and images. |