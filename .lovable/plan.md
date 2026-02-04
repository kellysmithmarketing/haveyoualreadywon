
# Plan: Connect Custom Domain and Add Email Notifications for Contact Form

## Overview
We'll keep your site hosted on Lovable (the easiest and most secure option), connect your custom domain, and make the contact form actually send you email notifications when someone fills it out.

---

## Part 1: Connect Your Custom Domain to Lovable

This is a simple DNS change - you don't need to move your website anywhere.

### Steps:
1. In Lovable, go to **Project Settings** (click your project name in the top left, then Settings)
2. Click **Domains**
3. Click **Connect Domain** and enter your domain (e.g., `rowtokenergy.com`)
4. Lovable will give you DNS records to add

### DNS Changes at Your Domain Registrar:
Add these **A records** (this does NOT change your nameservers):

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.158.133.1 |
| A | www | 185.158.133.1 |
| TXT | _lovable | (Lovable will provide this value) |

- DNS changes can take up to 72 hours to fully propagate
- Lovable will automatically set up SSL (HTTPS) for you

---

## Part 2: Make Contact Form Send Email Notifications

Currently, your contact form just shows a success message but doesn't actually send anything. We'll fix that using Resend (an email service) and a Supabase Edge Function.

### What We'll Create:

**1. Enable Lovable Cloud** (Supabase backend)
- This gives you the ability to run server-side code

**2. Create an Edge Function** (`send-contact-email`)
- Receives form data securely
- Sends formatted email to your business email address

**3. Update the Contact Form** (`src/components/Contact.tsx`)
- Add proper input validation
- Send data to the edge function
- Show appropriate success/error messages

### Email Service Setup (Resend):
You'll need to:
1. Sign up at [resend.com](https://resend.com) (free tier available)
2. Verify your domain at [resend.com/domains](https://resend.com/domains)
3. Create an API key at [resend.com/api-keys](https://resend.com/api-keys)
4. Provide the API key when prompted

---

## Technical Details

### Edge Function Structure
The edge function will:
- Validate incoming form data (name, email, phone, company, service, message)
- Format a professional email with all submission details
- Send to your specified business email (e.g., info@rowtokenergy.com)
- Return success/error response to the frontend

### Form Validation
We'll add proper validation including:
- Required field checks
- Email format validation  
- Input length limits for security
- Phone number format validation

### Email Format
You'll receive emails formatted like:
```
New Contact Form Submission

Name: [Customer Name]
Company: [Company Name]
Email: [customer@email.com]
Phone: [555-123-4567]
Service Requested: [Electrical & Instrumentation]

Message:
[Customer's message here]
```

---

## Summary

| Task | Effort |
|------|--------|
| Connect custom domain | ~5 minutes (then wait for DNS) |
| Set up Resend account | ~10 minutes |
| Create edge function | Automated by Lovable |
| Update contact form | Automated by Lovable |

After this is complete, whenever someone fills out your contact form, you'll receive an email notification with all their details.
