---
id: troubleshooting-sso
title: SSO troubleshooting
description: Common errors during SSO setup and how to fix them
sidebar_label: SSO troubleshooting
---

This page lists the most frequently reported SSO errors and their resolutions, with the actual client cases that surfaced them.

## "Cloudflare is blocking your server-to-server OAuth requests"

:::danger Symptom
Your authentication server returns `HTTP 1020` or `403` when Logora calls your `/oauth/token` route (visible in our Datadog logs).
:::

**Cause**: your WAF (Cloudflare, Akamai, AWS WAF, etc.) blocks calls coming from our server IP, considering them as bots.

**Solution**:

1. Add our IP ranges to your WAF allowlist:
   - `52.59.0.0/16` (Scaleway Paris)
   - `163.172.0.0/16`
2. Or create an **exception** on the `/oauth/token` route (no bot challenge, no rate limit)

:::tip Real-world case
Suedkurier reported this issue in 2025: their Cloudflare deployment was blocking our subscription validation calls. Once the route was excepted, production rollout was immediate.
:::

## "Failed to process backchannel logout: Connection refused"

**Symptom**: `HTTP 422` when calling `/auth/logout/YOUR_APP`.

**Cause**: your `logout_token` doesn't contain the expected `audience`, or points to an unreachable domain.

**Solution**: verify that:

- The JWT logout `aud` claim is `https://app.logora.fr`
- Your back-channel URL (configured in admin) is reachable from outside (no localhost, no non-standard ports)

## The user stays on the login popup even though they're logged in

:::warning Symptom
The user is authenticated on your site but Logora still asks them to log in when clicking "Vote" or "Comment".
:::

**Cause**: the JWT is not regenerated server-side when the user is already logged in on your site.

**Solution**: your backend must generate the JWT for **every authenticated user**, not just at login time. The JWT must be present in `logora_config.remote_auth` on **every page render**.

```javascript
// ❌ Wrong: JWT generated only at login
var logora_config = {
  remote_auth: window.justLoggedIn ? generateJWT() : ''
};

// ✅ Right: JWT generated for every authenticated user
var logora_config = {
  remote_auth: currentUser ? generateJWT(currentUser) : ''
};
```

## First name capitalized automatically

**Cause**: Logora applies title-case to `first_name` by default.

**Solution**: disable *Auto-capitalize first name* in *Admin > Configuration > Authentication*.

:::tip Real-world case
Krone (Kronen Zeitung) flagged this in August 2025: their users preferred keeping the exact case of their name. Once disabled, `first_name` was passed through unchanged.
:::

## SSO avatar doesn't display

Common cause: the URL returns a non-standard `Content-Type` or requires authentication.

Check the requirements on [JWT > Image URL format](/authentication/jwt#format-required-for-image_url):

- **Extension**: `.png`, `.jpg`, or `.jpeg`
- **HTTP Content-Type**: `image/png` or `image/jpeg`
- **Public**: no cookies, no token in URL
- **Size**: 200×200 px minimum recommended

## Google login / SSO conflict on same email

:::warning Symptom
The user has a Google account `marie@example.com` (created directly on Logora). You then send a JWT for `marie@example.com`. Logora blocks or creates two separate accounts.
:::

**Solution**: enforce uniqueness by `uid` (your internal identifier) **rather than by email**. Enable:

> *Admin > Configuration > Authentication > Identify users by uid only*

## User stuck on onboarding (name too short)

Logora requires `first_name` ≥ 2 characters. If your user only has "D", two options:

1. **Enable free username**: *Configuration > Onboarding > Allow free username* — the user picks a Logora username independent from their SSO name
2. **Enable `updateUserOnLogin`** and ask your side to fix the name

See also [User creation](/configuration/onboarding) section *Edge cases*.

## JWT considered expired without reason

**Cause**: clock skew between your server and ours, or `iat` claim in the future.

**Solution**:

- Sync your server with NTP
- If your `exp` is short (< 30 s), remember the token must travel to the user's browser — allow **at least 60 s** between `iat` and `exp`

## User loses session every 2 hours

This is **expected**: the Logora session expires after 2 hours by default. If the user stays authenticated on your site, the JWT regenerated on every page render automatically recreates a session — transparently.

See [JWT > Session lifecycle](/authentication/jwt#session-lifecycle).

## User cannot log out

**Cause**: Logora doesn't know the user logged out on your side.

**Solution**: on logout from your site, do one of two things:

1. **Client-side**: remove the `remote_auth` parameter or set it to empty string
2. **Server-side**: call [Backchannel Logout](/authentication/backchannel-logout) to invalidate the session immediately

## Need more help?

:::tip Technical support
If your issue isn't listed here, contact us at [contact@logora.fr](mailto:contact@logora.fr) with:

- The URL of the affected page
- The impacted user's `uid`
- An anonymized sample JWT payload
- A screenshot of the browser network console

We prioritize these requests.
:::
