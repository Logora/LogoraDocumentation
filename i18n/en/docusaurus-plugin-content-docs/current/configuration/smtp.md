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

### 3. Relay without authentication (Microsoft 365, corporate relay)

If your mail server no longer accepts SMTP authentication — Microsoft is deprecating SMTP AUTH on Exchange Online — use an **IP-authorised relay**: Logora connects to it without credentials.

| Field | Value |
|--------|----------|
| **SMTP server** | relay hostname provided by your IT team |
| **SMTP port** | `587` (STARTTLS) or `465` (implicit TLS) |
| **Authentication method** | `None (relay allowed by IP)` |
| **SMTP username / password** | empty: both fields are disabled |
| **STARTTLS automatic** | enabled for port `587` |
| **Implicit TLS connection** | checked for port `465` |

Ask the Logora team for the **outbound IP addresses** to authorise on your relay, then restrict that relay to senders of your domain.

#### Microsoft 365 / Exchange Online

1. In the [Exchange admin centre](https://admin.exchange.microsoft.com), open **Mail flow > Connectors**, then **Add a connector**.
2. Choose **From: Your organization's email server** to **To: Office 365**, with the **Organization mailboxes** usage.
3. Name it (for example `Logora`), then select **By verifying that the IP address of the sending server matches** and add the IPs provided by Logora.
4. Keep **TLS** enabled and authentication disabled: this connector does not use SMTP AUTH and therefore does not require re-enabling the deprecated protocol.
5. Make sure the sender address configured in Logora belongs to an accepted domain of your tenant.

#### SPF, DKIM and DMARC

These records belong to your domain, not to Logora's code:

- **SPF**: your relay must be authorised in your domain's SPF record.
- **DKIM**: the signature is added by your relay; enable DKIM signing for your domain (Microsoft 365: **Protection > DKIM**, or your provider).
- **DMARC**: publish a policy aligned with your sender domain.

Logora cannot sign these emails for you, nor test them remotely: a rejection for SPF, DKIM or DMARC is fixed in your DNS.

### 4. Gmail or Google Workspace users

If you use Gmail or Google Workspace, you must create an **App Password** (do not use your regular password):

1. Open your [Google Account → Security](https://myaccount.google.com/security).  
2. Enable **2-Step Verification** if it’s not already active.  
3. Under **App passwords**, create a password for “Mail”.  
4. Copy the generated 16-character password and paste it into the **SMTP password** field.

### 5. Save and test the configuration

1. Click **Save**.  
2. To test the configuration, ask a colleague or a user to **reply to a debate** so that you receive an automatic notification email.  
   If the message is correctly received from your custom address, your configuration is working.

Once the configuration is validated, all automatic emails (notifications, newsletters, etc.) will be sent from your own address.

### 6. Important notes

- If you use another provider (Outlook, Exchange, OVH, etc.), replace `smtp.gmail.com` with your provider’s SMTP server.  
- Make sure your DNS records (SPF, DKIM, DMARC) are properly configured for your domain to prevent your emails from being marked as spam.  
- If you encounter a connection error, verify the credentials and ports used.  
- If needed, contact the Logora team for assistance.

