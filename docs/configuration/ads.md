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

Si vous utilisez une autre régie, vous pouvez cibler les conteneurs publicitaires Logora existants.

Pour que les conteneurs soient rendus, remplissez les champs `path` et `id` — y compris avec des valeurs factices. Les conteneurs portent l'ID `div-gpt-ad-{votre-id}`.

Ciblez-les ensuite avec votre script :

| Sélecteur | Emplacement |
|-----------|-------------|
| `#div-gpt-ad-{votre-id-article}` | Pavé pied d'article |
| `#div-gpt-ad-{votre-id-thread}` | Pavé dans la liste d'arguments |

```html
<script>
document.querySelectorAll('[id^="div-gpt-ad-"]').forEach(function(el) {
  // Insérez ici le code de votre régie publicitaire
});
</script>
```

