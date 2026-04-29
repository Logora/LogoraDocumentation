---
id: account-deletion
title: Account deletion and banning
description: Differences between voluntary deletion (GDPR), banning, and preventing account recreation
sidebar_label: Account deletion
---

Several deletion scenarios are possible depending on your intent. This page clarifies the differences and associated behaviors.

:::info Quick reference
- **Voluntary deletion (GDPR)**: the user deletes their own account; personal data is anonymized but their contributions remain visible.
- **Banning**: administrative sanction; the user can no longer contribute, but their account remains visible.
- **Banning with block**: also prevents recreating an account with the same email address.
:::

## 1. The user deletes their account (GDPR)

The user clicks *My profile → Delete my account* (option to enable in *Configuration > Onboarding*).

### What is deleted

- Email address
- First name, last name
- Avatar
- Bio
- Notifications

### What is kept (anonymized)

- **Arguments and comments** — author shown as "Deleted user"
- **Votes** — statistical impact preserved

:::note GDPR compliance
This anonymization complies with GDPR: personal data is removed, but public content remains readable. Reference: article L. 122-7 of the French Intellectual Property Code.
:::

## 2. You ban a user (sanction)

In *Moderation > Users > [user] > Ban*:

- The user can **no longer write or vote**
- Their account remains **visible** with their name (for moderation traceability)
- You can set a **duration** (temporary ban) or a permanent ban

## 3. Prevent account recreation

If you ban **and** want to prevent the user from coming back with a new account on the same email, enable:

> *Moderation > Banning > Block recreation*

:::caution Heads up
This option **does not apply to voluntary deletions**. A user who deletes their own account can still recreate one with the same email. To block this case too, contact Logora to enable the extended option.
:::

## 4. SSO and deletion: what happens if the user comes back?

If your SSO sends a `uid` Logora no longer recognizes (deleted account):

| Case | Logora behavior |
|---|---|
| You send the **same `uid`** | Logora **refuses login** — the `uid` is marked as deleted |
| You send a **new `uid`** | A **new account** is created, unrelated to the previous one |

For a user to recover their previous history 6 months later, two options:

1. Don't use deletion but **temporary banning** instead
2. Link the new `uid` to the historical `uid` via the API route `/users/merge`

## 5. Automatic notification via Backchannel Logout

If your system announces account deletion server-side (e.g. `DELETED` event), notify us in real time via [Backchannel Logout](/authentication/backchannel-logout). Logora will then delete the account on its side automatically.

```http
POST https://app.logora.fr/auth/logout/YOUR_APP
Content-Type: application/x-www-form-urlencoded

logout_token=YOUR_SIGNED_JWT
```

:::tip For developers
The `logout_token` must be a signed JWT containing an `events` claim with the deletion event. Full doc on [Backchannel Logout](/authentication/backchannel-logout).
:::

## 6. Retrieve or export user data

See the [User management](/faq/data) page for API routes to retrieve or anonymize user data on GDPR request.
