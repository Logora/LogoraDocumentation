---
id: moderation
title: Moderation
description: Logora handles your debate space moderation. Configure the algorithm, blacklist, rejection reasons, and the team in charge.
---

Logora offers several moderation layers that can be combined, configurable from your [admin space](https://admin.logora.fr) (*Configuration > Moderation*).

![Moderation configuration](/img/moderation.png)

## Moderation type

| Type | Description | Recommendation |
|---|---|---|
| **Pre-publication** | *A priori* moderation: contributions only appear once validated. Pending messages appear as published to their authors to keep the experience smooth. | ✅ Recommended |
| **Post-publication** | *A posteriori* moderation: contributions appear immediately, then enter the moderation queue. | For very high-trust communities |

## Moderation team

### Manual

You handle moderation from the Logora admin. The queue is in *Moderation > Queue*.

### Smart — Logora ✅ recommended

Our proprietary algorithm (trained on **45,000+ labeled contributions**, **2M+ processed in production**) automatically accepts clearly compliant messages.

Uncertain cases (15–20%) are processed within **24 hours on weekdays** by our team of native, college-educated moderators.

:::info Performance
**100% success rate** on detecting hateful, illegible, or illegal messages per our internal evaluation (5,000 contribution sample, 2025).
:::

### Third-party AI engines

You can also activate one of these AI engines from the admin:

| Engine | Provider | Specifics |
|---|---|---|
| **Logora AI** | Logora (default) | Model trained on our data |
| **OpenAI** | OpenAI | GPT for content moderation |
| **Azure Content Safety** | Microsoft | Fine-grained categorization (hate, sexual, violence) |
| **Mistral** | Mistral AI | European model, GDPR-friendly |
| **Perspective AI** | Google Jigsaw | Beta in Logora |

Each engine has its own thresholds adjustable in *Moderation > Thresholds* (toxicity, personal attack, sexual content, etc.).

### External

If you already work with a provider (Nétino, Bodyguard, Ferret Go, Etoeo, etc.), we plug into their APIs.

:::tip Provider not in the list?
To add a provider absent from the admin, write to [contact@logora.fr](mailto:contact@logora.fr). Setup typically takes **5 business days**.
:::

## Blacklist and watchlist

In *Moderation > Blacklist* you can add:

| List | Effect |
|---|---|
| **Blacklist** (blocking) | Contribution is **automatically rejected** |
| **Watchlist** (flagging) | Contribution goes to **manual moderation** |

These lists apply to **contributions** but also to **usernames** if you enable *Apply to usernames* on the same page.

:::note Real-world case
Cutowl/Robin (Italy) wanted to prevent usernames containing slurs: option enabled, blacklist applied at signup and on every username change. Users get a clear error message if they try a blocked word.
:::

## Rejection emails and moderation reasons

When a contribution is rejected, the author receives an explanatory email. You can:

- **Choose from preset reasons** (insult, off-topic, unverified source, hate speech, etc.)
- **Add a free-form note** shown to the author — notes are auto-saved and persist even if you close the tab
- **Customize the subject and body** in *Configuration > Emails > Rejection email*

See also [Customize notification emails](/faq/notification-emails).

## Moderation API (custom integration)

If you have your own internal tool or a particular workflow, we expose a bidirectional webhook:

1. Logora sends each contribution to your webhook
2. You return `accepted` / `rejected` + reason

See the [Swagger documentation](https://app.logora.fr/docs) section `Moderation`.

## Moderation dashboard

The admin includes a dashboard with:

- **Volume**: contributions moderated per day
- **Rejection rate**: per reason category
- **Median processing time**
- **Top reported contributors**

CSV export available in *Moderation > Statistics*.

## Best practices

:::tip Recommendations from our experience
- **Start with pre-publication moderation** on sensitive topics (politics, society). You can switch to post-publication once the community stabilizes.
- **Customize the rejection email** with an empathetic message: a user who understands why their message was rejected is 3× less likely to reoffend.
- **Combine multiple layers**: blacklist (blocking) + AI (flagging) + human team (final validation) = robust pipeline.
- **Monitor AI thresholds** in the first week: adjust them to your editorial tolerance.
:::
