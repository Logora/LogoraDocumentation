---
id: badges
title: Badges and gamification
description: Reward your contributors
---

Badges are part of Logora's gamification: they reward users who take part in the debate. Each badge is linked to an action (writing an argument, getting votes, suggesting a debate…) and to a **reward**, a title displayed on the user's profile once the badge is fully unlocked.

Each badge has **several levels**, with increasingly higher thresholds. Progress towards the current badge is displayed on the user's profile, along with the "Completed!" message when the current level's threshold is reached.

### Available badges

Most badges have **3 levels**, with increasingly higher thresholds. The table below shows, for each badge, the number of actions to complete at each level ("Thresholds" column). The reward (i.e. the title displayed on the profile) is unlocked when **level 3** is reached.

| Badge | Action | Thresholds (level 1 → 2 → 3) | Reward |
| --- | --- | --- | --- |
| <img src="https://assets.logora.com/badges/Contributeur.jpg" width="40" /> **Contributor** | Write arguments | 10 → 30 → 60 | "Dialogue pro" |
| <img src="https://assets.logora.com/badges/Orateur.jpg" width="40" /> **Speaker** | Write arguments with a relevance score of at least 75 | 10 → 30 → 60 | "Feather" |
| <img src="https://assets.logora.com/badges/Influenceur.jpg" width="40" /> **Influencer** | Have your debate suggestion selected | 1 → 5 → 10 | "Initiator" |
| <img src="https://assets.logora.com/badges/Notable.jpg" width="40" /> **Person with status** | Add a description to your profile | N/A | — |
| <img src="https://assets.logora.com/badges/Merci_maman.jpg" width="40" /> **Popular** | Receive votes on your arguments | 10 → 30 → 60 | "A must" |
| <img src="https://assets.logora.com/badges/Critique.jpg" width="40" /> **Critical thinker** | Take a stand in the "Against" camp | 5 → 20 → 50 | "Resistant" |
| <img src="https://assets.logora.com/badges/D%C3%A9put%C3%A9.jpg" width="40" /> **Deputy** | Take part in debates | not enabled by default | "Great Debater" |
| <img src="https://assets.logora.com/badges/Adh%C3%A9rent.jpg" width="40" /> **Supporter** | Take a stand in the "For" camp | 5 → 20 → 50 | "Prolific" |

These thresholds match the default configuration (see `db/seeds.rb` in the backend); they can be adjusted for each application on request.

### Completed!

When a goal is reached, the badge displays "Completed!" and the reward title is unlocked and then displayed on the profile.

> For example, on a demo profile, the Contributor badge displays "Level 3", a progress of 24/60, and "At level 3 you will get the title: Dialogue pro".

### Customization

By default, badge images are hosted by Logora (`https://assets.logora.com/badges/`). If you wish to customize your badges, simply share the images of the badges to change with your Logora contact, and we will take care of setting them up.