---
id: onboarding
title: User creation
description: How Logora creates user profiles, handles aliases, and resolves edge cases
---

## How it works

When a user participates for the first time on your discussion space, a profile is created. This happens automatically when they're registered in your system as described in the [Single Sign On](/authentication/introduction) articles.

You send us the following information:

- **First name** (`first_name`)
- **Last name** (`last_name`, optional)
- **Email** (`email`)
- **Avatar** (`image_url`, optional)

so we can create the user's profile.

## Aliases and onboarding

If you don't send any first/last name, we automatically generate **aliases** for your users.

If you wish, we can add an **onboarding popup** asking the user to set their first name / last name and avatar:

<img src="/img/onboardingbox.png" alt="User onboarding" width="400"/>

:::tip Enable the onboarding popup
Ask Logora to enable this parameter in your admin (*Configuration > Onboarding > Welcome popup*).
:::

The default avatar library can also be replaced with your own images. Contact Logora.

---

## Edge cases

This section lists production-identified edge cases and their solutions.

### Name too short

:::warning Real-world cases: Bild, RTL
Logora requires `first_name` ≥ **2 characters**. When your SSO sends just an initial ("D"), the user gets stuck on onboarding and cannot participate.
:::

**Solutions**:

| Solution | When to use it |
|---|---|
| Enable **Free username** | User picks a Logora username independent of their SSO name |
| Enable `updateUserOnLogin` | You fix the name on your side, Logora picks it up on next login |
| **Admin bypass** | For an isolated case: *Moderation > Users > [user] > Force onboarding* |

### Email duplicate across systems

If the user has a Google account `marie@x.com` (created directly in Logora) then an SSO account `marie@x.com`, Logora considers them as the **same user** by default.

To enforce uniqueness by `uid` (your internal ID) rather than email, see [SSO Troubleshooting > Google login / SSO conflict](/faq/troubleshooting-sso#google-login--sso-conflict-on-same-email).

### User without email

Some operators (RTL, certain telcos, phone-based social login) don't provide an email. In this case:

- Logora generates a fake email: `{uid}@noemail.logora.fr`
- The user **receives no notifications**
- To still collect the email, enable *Configuration > Onboarding > Ask for email at onboarding*

:::note
This popup doesn't block the user: they can continue without providing an email but lose notifications.
:::

### First name auto-capitalized

Logora applies title-case to `first_name` by default ("peter" becomes "Peter"). To disable and keep the exact case from your SSO:

> *Admin > Configuration > Authentication > Auto-capitalize first name → disabled*

:::tip Real-world case: Krone
Krone (Kronen Zeitung) wanted to preserve the exact case. Once the option was disabled, `first_name` was passed through unchanged.
:::

### User without avatar

If you don't provide `image_url`, Logora assigns a default avatar from its library (algorithmically generated face from initials).

If your `image_url` doesn't display, check it meets the [required format](/authentication/jwt#format-required-for-image_url).

### Custom avatar library

To replace our library with your own (avatars matching your brand), send us your images at [contact@logora.fr](mailto:contact@logora.fr).

Required format:

- 50 transparent PNG images
- 200×200 px
- Visual consistency (same style)

---

## See also

- [SSO Authentication — Introduction](/authentication/introduction)
- [JWT Authentication — image_url format](/authentication/jwt#format-required-for-image_url)
- [SSO Troubleshooting](/faq/troubleshooting-sso)
