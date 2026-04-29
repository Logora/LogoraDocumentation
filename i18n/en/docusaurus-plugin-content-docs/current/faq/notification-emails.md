---
id: notification-emails
title: Customize notification emails
description: Branding, template, content — adapt Logora emails to your brand
sidebar_label: Notification emails
---

Logora sends several types of emails to users (reply notifications, validation, moderation, weekly digest). You can customize the **sender**, **template**, and **content**.

:::tip Why it matters
Users often mark notifications as spam when the sender is `noreply@logora.fr`. Configuring your own SMTP and consistent branding can **multiply your open rate by 3 or 4×**.
:::

## Sender (sending from your domain)

To send emails from `noreply@kronen-zeitung.at` (or your equivalent) instead of from us, see [Send emails from your domain](/configuration/smtp).

## Email types sent

| Type | Trigger | Customizable |
|---|---|---|
| **Registration confirmation** | New non-SSO account | ✅ |
| **Reply to argument** | Someone replies to your contribution | ✅ |
| **Mention** | Someone tags you | ✅ |
| **Moderation rejection** | Your contribution is rejected | ✅ (reason + note) |
| **Weekly digest** | Hot debates summary | ✅ |
| **Admin notification** | Reports, content to validate | ❌ |

## Customize the global template

In *Admin > Configuration > Emails > Template*:

| Element | Format |
|---|---|
| **Logo** | PNG/SVG, max 200×80 px |
| **Primary color** (header) | Hex code |
| **CTA button color** | Hex code |
| **Footer** | Legal mentions, unsubscribe link |
| **Font** | Inter, Roboto, or custom via webfont |

A **live preview** is available in the admin: tweak settings and see the rendered output instantly.

## Customize each email's text

In *Admin > Configuration > Emails > Texts*, by language (FR, EN, DE, ES, IT, FI, PL...):

- **Subject**
- **Body** (HTML allowed)
- **CTA button text**

### Available variables

```
{{user.first_name}}      User first name
{{user.last_name}}       Last name
{{user.email}}           Email
{{argument.content}}     Argument content
{{argument.url}}         Direct URL to argument
{{debate.title}}         Debate title
{{debate.url}}           Debate URL
{{publisher.name}}       Your publication name
```

### Custom example

```html
<h1>Hello {{user.first_name}},</h1>

<p>A new reply has been posted on your argument in the debate
   "<strong>{{debate.title}}</strong>".</p>

<blockquote>{{argument.content}}</blockquote>

<a href="{{argument.url}}" class="cta">Read the reply</a>

<footer>
  Best regards, the {{publisher.name}} team
</footer>
```

## Bring your own HTML template

If you want a fully custom template (perfect match with your brand):

1. Prepare your **MJML** or **HTML** template
2. Send it to [contact@logora.fr](mailto:contact@logora.fr)
3. We integrate it within **48 hours**, keeping Logora variables active

:::note Real-world case
Krone (Kronen Zeitung) provided a full Axel Springer Group template. Once integrated, their notifications matched the visual identity of all other group emails — deliverability multiplied by 4×.
:::

## Disable visual elements

### Hide the red footer box

Several clients (RTL, Krone) asked us to remove the red box from notifications. To hide it, add in *Admin > Configuration > Emails > Additional CSS*:

```css
.logora-email-warning {
  display: none !important;
}
```

### Disable an entire notification type

In *Admin > Configuration > Emails > Activation* you can fully disable sending a type (e.g. cut the weekly digest if you have your own newsletter).

## Test before shipping

:::warning Always test on staging
Before pushing a new template to production, send yourself a test email from the admin:

> *Admin > Configuration > Emails > Template > **Send test***

Check the rendering on:
- Gmail (web and mobile app)
- Outlook
- Apple Mail
- A French webmail client (Free, Orange, Laposte) — they're the most restrictive on HTML
:::

## Unsubscribe (opt-out)

The unsubscribe link is **mandatory** in all emails (GDPR + anti-spam laws). Logora adds it automatically, but you can customize:

- The **link text**
- The **destination page** (Logora internal page or your site)
- The **default behavior**: opt-out from all notifications, or opt-out per category

See [Email management](/faq/mailing) for details.
