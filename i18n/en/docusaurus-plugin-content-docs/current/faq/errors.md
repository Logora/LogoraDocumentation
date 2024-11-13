---

id: errors
title: Installation in the Article - Common Errors

---

### Troubleshooting Logora Installation on Your Articles: A Practical Guide

When installing Logora to enhance your articles with interactive discussions, issues may arise, particularly during code insertion into your content. Here’s a step-by-step guide to diagnose and resolve these common issues.

**Verification Steps:**

1. **Presence of JavaScript Code (`embed.js`)**
   - Ensure that the `embed.js` file is properly loaded. You can verify this in the "Network" tab of your development console, unless this is handled server-side.

2. **Configuration of `logora_config`**
   - Check that the `logora_config` object is present in your code and contains all the necessary information. Ensure the values are correctly defined according to your needs.

3. **Verification of the Container (`logora_synthese` or `logora_embed`)**
   - Confirm that a `logora_synthese` or `logora_embed` container is present on your page. This container should be correctly linked to the appropriate configuration object. Verify that the `data-object-id` attribute matches the name of the configuration object used.

4. **Inspection of Console Messages**
   - Open your browser's console and filter messages for the [Logora] tag. If error messages appear, follow the provided instructions. These messages can often be linked to incorrect article metadata. For example, if the article is too old, we do not retrieve it for performance reasons.

5. **Verification of the Call to `render.logora.fr`**
   - Ensure the call to `render.logora.fr` is successfully executed. You can also verify this in the "Network" tab of the console.

6. **Analysis of the Response from `render`**
   - Finally, examine the response of the call to `render`. Ensure the debate or consultation is correctly returned. If the "content" or "html" fields are empty, it is likely a problem on our side.

7. **Association of a Debate or Activation of Comments**
   - Verify that your article or consultation is associated with a Logora debate or that comments are activated in your administration area.

### Conclusion:

If, after following all these verifications, the issue persists, it may be a problem related to Logora. In this case, we invite you to contact our technical support for further assistance.
