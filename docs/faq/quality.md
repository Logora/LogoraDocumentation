---
id: quality
title: Qualité des contenus
description: La qualité des contenus publiés sur votre site est notre priorité. 
---

La qualité des contenus publiés sur votre site est un enjeu légal et éditorial. 

Nous garantissons des discussions apaisées, intéressantes et lisibles.

Les arguments publiés sont de bonne tenue et ceux mis ont avant sont les mieux travaillés. 

Le fonctionnement est le suivant : 

1) Les arguments postés sont envoyés au gestionnaire de modération (l'équipe Logora, dans la grande majorité des cas).  
Ils sont modérés a priori. 80% à 85% des arguments sont traités automatiquement, donc instantanément. 
15% à 20% des arguments sont traités manuellement, toutes les 24h. 

2) Les arguments validés par la modération sont publiés. Notre algorithme de pertinence note chacune des contributions et met en avant celles qui paraissent les plus travaillées. 

### 1) Fonctionnement de la modération

La gestion de la modération est proposée par Logora (solution recommandée), elle peut aussi être prise en charge par vos prestataires de modération. 

Le processus de modération est le suivant : nous avons construit un algorithme de modération en labellisant plus de 45 000 contributions. 

L'agorithme accepte automatiquement les arguments considérés comme lisibles, bien écrits et non haineux. Lorsque l'algorithme n'est pas sûr de la qualité de l'argument (source inconnue, nouvelles tournures de phrases, nouveaux concepts), l'argument est envoyé à un membre de notre équipe pour modération manuelle. 

Cela concerne 15 à 20% des arguments. Nous réalisons la modération toutes les 24h en semaine. Les messages en attente sont vus comme publiés par leurs auteurs pour fluidifier leur expérience. 

Tous nos modérateurs sont natifs et diplômés du supérieur. 

Nous avons traité plus de deux millions d'arguments pour l'ensemble de nos partenaires avec un taux de réussite de 100% de détection de messages haineux, illisibles et illégaux.

Notre interface de modération est visible depuis votre espace d'administration. Notre travail est transparent et vous avez la possibilité d'intervenir (accepter / rejeter des contributions) si vous le souhaitez. 

Sur cet exemple, vous pouvez voir une liste d'arguments passés par l'algorithme de modération : certains sont acceptés automatiquement, d'autres refusés et en attente. 

![Moderation interface](/img/moderationtab.png)

Un score de modération bas, signifie que l'algorithme juge l'argument comme sécurisé : plusieurs arguments de ce type ont été acceptés par le passé, il peut l'accepter automatiquement. 
Un score de modération haut signifie que ce genre d'argument est inconnu ou a été rejeté par le passé. Dans ce cas, l'argument est mis en attente d'une analyse humaine.

Pour en savoir plus sur la mise en place de la modération, lisez notre article de documentation dans *Configuration > Modération*. 

### 2) Fonctionnement de la hiérarchisation des arguments

Nous avons créé un algorithme "de pertinence" mettant en avant les arguments les mieux écrits. 

L'objectif est de rendre votre espace contributif le plus intéressant possible d'une part, et de récompenser les participants les plus investis d'autre part. 

L'algorithme de pertinence est indépendant de l'algorithme de modération. 

> La question que nous posons est la suivante : une fois que les arguments sont de bonne tenue (après modération), comment choisir ceux qui méritent d'être mis en avant ?
> Nous n'avons pas pour rôle de juger le fond des arguments, nous nous attachons donc à leurs formes et leurs structures pour les distinguer. 

L'algorithme calcule la qualité du texte. Quatre indicateurs importants sont pris en compte :

- Longueur du texte
- Pourcentage de majuscules
- Le pourcentage de caractères de ponctuation
- Le pourcentage de fautes de grammaire ou d'orthographe
  
Ce dernier indicateur utilise la bibliothèque Open Source LanguageTool (https://languagetool.org) pour calculer le nombre d'erreurs dans un texte.
Exemple : "Hello, here's a teexte test" contient trois erreurs, une pour la ponctuation, une pour la grammaire et une pour l'orthographe.

Le nombre de votes n'est pas pris en compte comme indicateur dans notre modèle. L'objectif est de calculer la qualité pure du texte. Le vote sera ajouté à la note par la suite et aura une influence sur la note finale, mais n'est pas inclus dans notre modèle.

**La note finale est calculée comme suit : S(x,y) = x + (y/100)^1.1 * (1 - x), où x est le score de qualité et y le nombre de votes.**

Lorsqu'un utilisateur publie un argument, le modèle prédit un score entre 0 et 100.

Cette opération est totalement automatisée, toutefois la note d'un argument peut être modifié a posteriori depuis votre espace d'administration. 

Nous avons effectué des milliers d'annotations sur différents types de contenu, contribuant ainsi de manière significative au développement de l'algorithme. La moyenne de nos annotations a été utilisée pour effectuer une régression et trouver une fonction appropriée pour calculer le score.
Un modèle de forêt aléatoire a ensuite été formé sur les annotations. Ce modèle correspond le plus possible à notre vision du score de pertinence.

![Contenus pertinents](/img/qualitycontent.png)

Entre deux arguments bien écrits, développés et sourcés, il est difficile de juger qu'un argument est plus intéressant qu'un autre.

Ce fonctionnement permet de récompenser les arguments les mieux écrits en les distinguant des arguments plus courts et moins construits. 
