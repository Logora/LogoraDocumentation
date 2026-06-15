---
id: ads
title: Insertions publicitaires
description: Monétisez votre espace de discussion
---

Logora permet d'insérer des publicités dans votre espace de débat, avec ou sans Google Ad Manager.

## Desktop

Sur desktop, insérez vos blocs publicitaires autour de l'espace de débat comme sur le reste de votre site. Aucune configuration Logora n'est nécessaire.

Exemple sur Capital.fr :

![Desktop ads](/img/desktop_ads.png)

## Mobile

Sur mobile, les publicités s'insèrent **à l'intérieur** de l'espace de débat, via la configuration Logora.

Deux emplacements sont disponibles :

| Emplacement | Position | Format |
|-------------|----------|--------|
| **Pavé pied d'article** | Entre le sondage et les contributions mises en avant | 300×250 |
| **Pavé dans la liste** | Tous les *n* arguments (configurable via `threadFrequency`) | 300×250 |

![Ad on mobile](/img/article_ad.png)

### Avec Google Ad Manager

Rendez-vous dans `Administration > Configuration > Publicité`, cochez **Autoriser les publicités** et renseignez pour chaque emplacement :

- **Path** : chemin de l'ad slot GAM (ex: `/6355419/Logora/Article`)
- **ID** : identifiant unique du conteneur
- **Targeting key** : clé de ciblage personnalisé
- **Targeting value** : valeur de ciblage personnalisé

![Configure ads](/img/configure_ads.png)

Les champs `path` et `id` sont propres à chaque emplacement. Les champs `targeting key` et `targeting value` peuvent être identiques.

### Sans Google Ad Manager

Si vous utilisez une autre régie, ciblez les conteneurs publicitaires Logora via leur attribut HTML :

| Sélecteur | Emplacement |
|-----------|-------------|
| `[data-logora-ad-slot="article"]` | Pavé pied d'article |
| `[data-logora-ad-slot="thread"]` | Pavé dans la liste d'arguments |

```html
<script>
document.querySelectorAll('[data-logora-ad-slot="article"]').forEach(function(el) {
  // Insérez ici le code de votre régie publicitaire
});
</script>
```

:::note
Si vous avez contractualisé avec un modèle de partage de revenu, remplissez tous les emplacements et transmettez les performances à Logora (rapport Excel, Data Studio, etc.).
:::