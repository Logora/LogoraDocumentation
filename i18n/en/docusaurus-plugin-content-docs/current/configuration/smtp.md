---
id: smtp
title: Sending emails from your own domain
description: Configure a custom SMTP server to send automatic emails from your own email address.
---

You can configure a **custom SMTP server** to send automatic emails (notifications, debate replies, newsletters, etc.) directly from **your own email address** instead of Logora’s default address.

This option allows you to:
- send messages with your own domain identity,
- improve email deliverability,
- strengthen user trust.

![SMTP Configuration](/img/smtp-config.png)

### 1. Enable custom SMTP sending

1. Go to your Logora admin interface.  
2. Open the menu **Configuration > Emails**.  
3. Enable the option **Activate custom SMTP**.  

An SMTP configuration form will then appear.

### 2. Fill in your SMTP settings

| Field | Example | Description |
|--------|----------|-------------|
| **Sender address** | `contact@yourdomain.com` | The email address that will appear as the sender |
| **Reply-to address** | `contact@yourdomain.com` | The address where replies will be received |
| **SMTP server** | `smtp.gmail.com` | SMTP server of your email provider |
| **SMTP port** | `587` | Connection port (usually `587` for STARTTLS or `465` for SSL) |
| **SMTP username** | `contact@yourdomain.com` | Usually your full email address |
| **SMTP password** | Password or app password | Authentication credential for your SMTP server |
| **Authentication method** | `Login` | Leave as default |
| **STARTTLS automatic** | Enabled | Recommended for security |

### 3. Gmail or Google Workspace users

If you use Gmail or Google Workspace, you must create an **App Password** (do not use your regular password):

1. Open your [Google Account → Security](https://myaccount.google.com/security).  
2. Enable **2-Step Verification** if it’s not already active.  
3. Under **App passwords**, create a password for “Mail”.  
4. Copy the generated 16-character password and paste it into the **SMTP password** field.

### 4. Save and test the configuration

1. Click **Save**.  
2. To test the configuration, ask a colleague or a user to **reply to a debate** so that you receive an automatic notification email.  
   If the message is correctly received from your custom address, your configuration is working.

Once the configuration is validated, all automatic emails (notifications, newsletters, etc.) will be sent from your own address.

### 5. Important notes

- If you use another provider (Outlook, Exchange, OVH, etc.), replace `smtp.gmail.com` with your provider’s SMTP server.  
- Make sure your DNS records (SPF, DKIM, DMARC) are properly configured for your domain to prevent your emails from being marked as spam.  
- If you encounter a connection error, verify the credentials and ports used.  
- If needed, contact the Logora team for assistance.

