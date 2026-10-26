---
id: moderation
title: Moderation
description: Logora takes care of the moderation of your debate space. Customize the type of moderation and the party responsible for moderation from your administration area.
---

You can choose your moderation system from the administration area, in *Configuration > Moderation*.

![Moderation setup](/img/moderation.png)

Two settings are available: the **type of moderation** (when contributions are checked) and the **party responsible for moderation** (who performs the check).

## Type of moderation

`Before publication of content` - **recommended**: contributions will go through moderation before publication (*a priori* moderation). Non-compliant content is never visible to your readers.

`After publication of content`: contributions will be published and then go through moderation (*a posteriori* moderation). Contributions appear immediately, but can be withdrawn after review.

In both cases, rejected contributions are not deleted for their authors: they remain visible to their author only, who can edit and resubmit them.

## Party responsible for moderation

### Manual

You manage the moderation yourself. Pending contributions appear in the [moderation interface](#moderation-interface) of your administration area, where you can accept or reject each contribution.

### Smart (Logora) - **recommended**

The Logora team takes care of the moderation. We have built a moderation algorithm by tagging over 45,000 contributions, which automatically accepts arguments that are considered readable, well-written and non-hateful. When the algorithm is not sure of the quality of the argument (unknown source, new turns of phrase, new concepts), the argument is sent to a member of our team for manual moderation. This concerns 15 to 20% of the arguments.

We perform moderation every 24 hours on weekdays. Pending posts are seen as published by their authors to make their experience more fluid.

All of our moderators are native speakers and have a university degree. We have processed over two million arguments for all of our partners with a 100% success rate of detecting hateful, unreadable and illegal messages.

To understand how the algorithm works in detail, see the [Content quality](/faq/quality) page.

### External

We outsource moderation to your external moderation services (Netino, Bodyguard, or others). If your moderation provider is not listed in the administration area, send us an email at [contact@logora.fr](mailto:contact@logora.fr), we will connect to them as soon as possible.

## How moderation works

The process is as follows:

1. Posted arguments are sent to the party responsible for moderation (the Logora team in the vast majority of cases). They are moderated *a priori*: 80 to 85% of arguments are processed automatically, therefore instantly. The remaining 15 to 20% are processed manually, every 24 hours on weekdays.
2. Arguments approved by moderation are published. Our relevance algorithm scores each contribution and highlights the ones that appear the most carefully crafted.

Each argument receives a **moderation score**:

- A low score means the algorithm considers the argument as safe: several arguments of this type have been accepted in the past, so it can accept it automatically.
- A high score means this type of argument is unknown or has been rejected in the past. The argument is then put on hold for human review.

## Moderation interface

The moderation interface is visible from your administration area. Our work is transparent and you have the ability to step in (accept / reject contributions) if you wish.

In this example, you can see a list of arguments that went through the moderation algorithm: some are accepted automatically, others are rejected or pending.

![Moderation interface](/img/moderationtab.png)

## Learn more

- [Content quality](/faq/quality): detailed operation of moderation and argument ranking.
- [Social media moderation](/installation/social-moderation): moderation of content imported from social networks.
- [GDPR](/legal/rgpd): processing of personal data in the context of moderation.

If you have any questions, write to us at [contact@logora.fr](mailto:contact@logora.fr).
