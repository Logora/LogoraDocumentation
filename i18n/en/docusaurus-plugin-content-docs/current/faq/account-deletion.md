---
id: account-deletion
title: Deleting and anonymizing a user
description: How to anonymize or delete a user via the Logora API, and how to notify Logora of an SSO-side deletion.
sidebar_label: User deletion
---

The Logora API offers two operations to handle user deletion, depending on your need:

| Operation | Effect on contributions | Endpoint |
|---|---|---|
| **Anonymize** | ✅ Kept (author hidden) | `POST /api/v1/users/{user_uid}/anonymize` |
| **Delete** | ❌ Removed | `DELETE /api/v1/users/{user_uid}` |

Choose based on context:

- **GDPR erasure request** → anonymization is usually enough (balances right to be forgotten with preserving public content).
- **Permanent deletion** (test account, duplicate, confirmed fraud) → full deletion.

## Anonymize a user

```http
POST https://app.logora.fr/api/v1/users/{user_uid}/anonymize
Authorization: Bearer YOUR_TOKEN
```

The `user_uid` is the unique identifier **you** pass to Logora via SSO (the JWT's `uid` field).

Returns `200` on success.

## Delete a user

```http
DELETE https://app.logora.fr/api/v1/users/{user_uid}
Authorization: Bearer YOUR_TOKEN
```

:::caution Irreversible
Deletion removes the user **and all their contributions**. This operation is not reversible.
:::

## Notify Logora of a deletion on your side (Backchannel Logout)

If your authentication system handles deletion server-side (e.g. GDPR via your back-office), you can notify Logora in real time via [Backchannel Logout](/authentication/backchannel-logout).

The endpoint accepts a signed JWT containing the deletion details.

```http
POST https://app.logora.fr/auth/logout/{shortname}
Content-Type: application/x-www-form-urlencoded

logout_token=YOUR_SIGNED_JWT
```

See the dedicated page for the expected claims.

## Test via Swagger

Both `anonymize` and `delete` endpoints are testable directly from the **[interactive Swagger](https://app.logora.fr/docs)**, *Users* section.

## See also

- [Public Logora API](/faq/api)
- [Backchannel Logout](/authentication/backchannel-logout)
- [User management (FAQ)](/faq/data) — GDPR overview
