---
id: errors
title: Installation dans l'article - erreurs courantes
---

### Dépannage de l'Installation de Logora sur vos Articles : Guide Pratique

Lors de l'installation de Logora pour enrichir vos articles avec des discussions interactives, des problèmes peuvent survenir, surtout lors de l'insertion du code dans votre contenu. Voici un guide étape par étape pour diagnostiquer et résoudre ces problèmes courants.

### Étapes de Vérification :

1. **Présence du Code JavaScript (`embed.js`)**
   - Assurez-vous que le fichier `embed.js` est bien chargé. Vous pouvez vérifier cela dans l'onglet "Réseau" de votre console de développement, sauf si vous gérez cela côté serveur.

2. **Configuration de `logora_config`**
   - Vérifiez que l'objet `logora_config` est présent dans votre code et qu'il contient toutes les informations nécessaires. Assurez-vous que les valeurs sont correctement définies selon vos besoins.

3. **Vérification du Conteneur (`logora_synthese` ou `logora_embed`)**
   - Confirmez qu'un conteneur `logora_synthese` ou `logora_embed` est présent sur votre page. Ce conteneur doit être correctement lié au bon objet de configuration. Vérifiez que l'attribut `data-object-id` correspond bien au nom de l'objet de configuration utilisé.

4. **Inspection des Messages de la Console**
   - Ouvrez la console de votre navigateur et filtrez les messages pour le tag [Logora]. Si des messages d'erreur apparaissent, suivez les indications fournies. Ces messages peuvent souvent être liés à des métadonnées incorrectes de l'article. Si l'article est trop vieux par exemple, nous ne le récupérons pas pour des raisons de performance.

5. **Vérification de l'Appel à `render.logora.fr`**
   - Assurez-vous que l'appel vers `render.logora.fr` s'exécute correctement. Vous pouvez vérifier cela également dans l'onglet "Réseau" de la console.

6. **Analyse de la Réponse de `render`**
   - Enfin, examinez la réponse de l'appel à `render`. Assurez-vous que le débat ou la consultation est bien retourné. Si les champs "content" ou "html" sont vides, il est probable qu'il s'agisse d'un problème du côté de Logora.

7. **Association d'un Débat ou Activation des Commentaires**
   - Vérifiez que votre article ou consultation est bien associé à un débat Logora ou que les commentaires sont activés sur votre espace d'administration.


### Conclusion :

Si, après avoir suivi toutes ces vérifications, le problème persiste, il est possible que l'origine du dysfonctionnement soit liée à Logora. Dans ce cas, nous vous invitons à contacter notre support technique pour obtenir de l'aide supplémentaire.
