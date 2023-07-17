---
id: rgpd
title: RGPD
description: Data processing  
---

### Protection of personal data

## 1 Logora's compliance with the RGPD

When Logora interacts with you in your capacity as a customer or prospect, Logora processes your personal data in its capacity as data controller. In the context of the provision of your debate space, Logora acts as a data processor on your behalf and according to the instructions you give it in its capacity as data controller. 

In all cases, Logora undertakes to comply with the applicable regulations, i.e. to date Regulation No. 2016/679 (EU) of 27 April 2016 known as the General Data Protection Regulation (the "GDPR") and the French Data Protection Act of 6 January 1978 in its updated version.  

As such, Logora has implemented the following measures:
- Adoption of a confidentiality policy for its customers and prospects,
- Provision of a model confidentiality policy for users of the discussion forums made available to you;
- Updating its customer contracts to take account of the obligations set out in Article 28 of the RGPD on subcontracting;
- Keeping a register of processing operations carried out in its capacity as controller and processor,
- Cooperate closely with you on all matters relating to the processing of personal data;
- Engage in an accountability procedure and adopt procedures to be followed in the event of receiving a request from a data subject to exercise his or her rights or being exposed to a data breach.

We do not place advertising or audience tracking cookies on the discussion forum.

## 2. Description of the processing subject to subcontracting 

In its capacity as subcontractor, Logora is authorised to process the personal data of users of the Debate Spaces to enable them to contribute to the Debate Space. The data processing carried out as part of this subcontracting is described in the model privacy policy for Debate Space users, which is accessible and made available to you in the documentation so that you can personalise it before bringing it to the attention of Debate Space users.

## 3. Anonymisation of user data

In accordance with the RGPD, users may request the deletion of their data from the discussion forum.
We provide an API for you to anonymise a user's data.

This route anonymises all the personal data linked to the user: first name, surname, email, unique identifier, image, while retaining their contributions and activity.

**URL**: https://app.logora.fr/api/v1/users/{uid}/anonymize

**Method**: POST

**Parameters**:
- uid: unique user identifier that you pass to Logora when the user registers.
  
**Authorisation**: Bearer token with authentication scope

Authorisation uses the OAuth2.0 standard. Here's how to get an access token :

```html
curl -d grant_type=client_credentials -d client_id=API_KEY -d
client_secret=API_SECRET -d scope=authentication
https://app.logora.fr/oauth/token
```

The API key and secret key are available in your administration space.
This operation is not reversible. Please take precautions when using this API route.
