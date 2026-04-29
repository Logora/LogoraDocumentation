---
id: architecture-security
title: Architecture and security
description: Answers to security questionnaires (RFI/RFP) — hosting, multi-tenancy, data, compliance
sidebar_label: Architecture & security
---

This page gathers answers to common questions from security questionnaires (RFI/RFP) we receive from enterprise clients.

:::tip Preparing an RFP?
If you need a filled-in RFI questionnaire or a more detailed document under NDA (pentest report, ISO 27001), contact [security@logora.fr](mailto:security@logora.fr) — response within 48 hours.
:::

## Multi-tenant architecture

Logora is a **multi-tenant SaaS platform**. Each client is isolated by an `application_id` at the database level. No dedicated instance by default.

:::note Dedicated instances
For sensitive clients (e.g. Sanoma, certain healthcare/defense actors), we offer an optional **dedicated instance** in a chosen EU region, with an additional monthly fee. Contact Pierre Laburthe for terms.
:::

## Hosting

| Criterion | Value |
|---|---|
| **Provider** | Scaleway |
| **Primary region** | Paris, France |
| **Provider compliance** | ISO 27001, SOC 2 Type II |
| **Disaster Recovery** | Daily encrypted backup |
| **RTO** | 4h |
| **RPO** | 24h |
| **Transfer outside EU** | ❌ None by default |

## Data collected

Strict minimum:

- `uid`, `email`, `first_name`, `last_name`, `image_url` (sent by your SSO)
- Text contributions written on Logora
- Votes
- IP address (anonymized after 13 months — GDPR)
- User-agent

:::info No advertising tracking
- No third-party cookies
- No data resale
- No advertising profiling
:::

## Data sent to external moderation engines

**Only the text content** of contributions is transmitted to AI moderation engines (Logora AI, OpenAI, Mistral, Azure Content Safety).

No author data is transmitted:

- ❌ No email
- ❌ No IP
- ❌ No name

The engines return a toxicity score we store.

:::caution If your policy forbids sending to a third-party LLM
Disable AI moderation and use Logora's native moderation only (human team + proprietary algorithm trained in-house). See [Moderation](/configuration/moderation).
:::

## Admin authentication

- Login/password + **mandatory 2FA (TOTP)**
- **Google Workspace SSO** available
- **Access logs** kept 12 months
- **Manual revocation** of accounts (a departing employee must be deactivated manually — see [Admin management](/faq/invitation))

:::warning Revocation on departure
Revocation is not automatic when an employee leaves. Remember to deactivate their admin account manually at end of contract. To automate this flow, contact us about plugging your IdP (Okta, Azure AD).
:::

## Retention durations

| Data | Retention |
|---|---|
| User account | Until user requests deletion |
| IP address | 13 months (anonymization after) |
| Rejected (moderated) contributions | 5 years |
| Server logs | 90 days |
| Backups | 30 days rolling |

## GDPR rights response

See [/legal/rgpd](/legal/rgpd) for details.

| Right | Deadline |
|---|---|
| Data access | 1 month max |
| Deletion | 1 month max |
| Portability | 1 month max |
| Cost | Free |

## Security testing

- **Annual pentest** by an independent firm
- **Report available under NDA** for enterprise clients
- **Private bug bounty** by invitation
- **Systematic code review** on every API PR

:::tip Found a vulnerability?
Report it privately to [security@logora.fr](mailto:security@logora.fr). We acknowledge within 24 hours and ship a patch within 7 days for critical vulnerabilities.
:::

## Encryption

| Layer | Protocol |
|---|---|
| **In transit** | TLS 1.2+ everywhere |
| **At rest** | AES-256 (database + backups) |
| **Passwords** | bcrypt with salt |
| **JWT signature** | HMAC-SHA256 (HS256) or RSA (RS256) per your choice |

## Availability

- Real-time status: **[https://status.logora.fr](https://status.logora.fr)**
- Contractual SLA: **99.9%** (max 4 hours downtime per month)
- 24/7 on-call for critical incidents

## Security contact

For any security, audit, compliance, or RFI request:

- **Email**: [security@logora.fr](mailto:security@logora.fr)
- **Response time**: 48 business hours
- **Confidentiality**: NDA available on request
