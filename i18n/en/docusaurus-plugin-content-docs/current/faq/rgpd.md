---
id: rgpd
title: Data
description: Data Protection Regulation (RGPD)
---

### Protection of personal data 

## 1. Summary of this document 

**The data in your discussion space belongs to you**. 

Logora acts as a data processor on your behalf. We make a copy of the debater's first name, last name and email to display on the debate space and notify users by email of the latest debates trending on your space.

We do not place any advertising or analytics cookies on the debate platform.

You can get your data back automatically by calling our API. To do so, contact us (contact@logora.fr). 
You can also retrieve them manually from your administration space. They are retrieved in CSV format. 

## 2. Description of the processing subject to subcontracting 

The processor is authorised to process on behalf of the data controller the personal data necessary to enable Internet users with an account to give an opinion and answer questions in the form of a debate and to comment on their answers. 

##### The nature of the operations carried out on the data is :

The receipt and use of data to create the data subject's profile via deduplication of the account in the subcontractor's system;

The use of the data to allow Internet users to give their opinion;

The storage of data to keep track of the progress of Internet users; 

Destruction of data. 

##### The purposes of the processing are :

1) The taking into account of participation in a debate; 

2) Taking into account the submission of comments and contributions;

3) Management of the debate area; 

4) Moderation; 

5) Sending [email notifications](faq/mailing.md); 

6) Suggesting debates by Internet users; 

7) Suggesting a debate to a user related to his activity. 

8) Improvement of the services via a test with users accepting to evaluate the tool; 

Our contracts were created with the help of some of the leading publishing companies (Ouest-France, Prisma Media, Bayard Presse). 

If you would like to receive a full copy, please contact contact@logora.fr


## 3. Anonymization of user data

In accordance with the GDPR, users can request the deletion of their data from the debate platform. 

We provide an API for you to proceed to anonymize a user's data.

This route anonymizes all personal data related to the user: first name, last name, email, unique identifier, image, while keeping their contributions and activity.

**URL**: https://app.logora.fr/api/v1/users/{uid}/anonymize

**Method**: POST

**Parameters**:
    
- uid: unique user ID that you pass to Logora when the user registers

**Authorization**: Bearer token with the scope `authentication`.

The authorization uses the OAuth2.0 standard. Here is how to get an access token :
```
curl -d grant_type=client_credentials -d client_id=API_KEY -d client_secret=API_SECRET -d scope=authentication https://app.logora.fr/oauth/token
```

The API key and secret key are available in your administration area.

This operation is not reversible. Please take precautions when using this API route.
