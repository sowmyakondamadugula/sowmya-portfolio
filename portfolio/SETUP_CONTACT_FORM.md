# Contact Form Setup Guide

Your contact form has been updated with email functionality. You have three options to enable it:

## Option 1: Web3Forms (Easiest - Recommended) ⭐

Web3Forms is the simplest option - no account signup required!

### Setup Steps:

1. **Get your Access Key:**
   - Visit [https://web3forms.com/](https://web3forms.com/)
   - Enter your email: `kondamadugulasowmya22@gmail.com`
   - Click "Get Your Access Key"
   - Copy the access key (it will look like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

2. **Update script.js:**
   - Open `script.js`
   - Find line 59: `const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';`
   - Replace `'YOUR_WEB3FORMS_ACCESS_KEY'` with your actual access key (keep the quotes)
   - Example: `const WEB3FORMS_ACCESS_KEY = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';`

3. **That's it!** Test the form - it should now send emails directly to your inbox.

**Benefits:**
- ✅ Free for up to 250 submissions per month
- ✅ No account required
- ✅ Works immediately
- ✅ Spam protection included

---

## Option 2: EmailJS (More Features)

EmailJS allows your form to send emails directly without a backend server.

### Setup Steps:

1. **Create a free account** at [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Add an Email Service:**
   - Go to "Email Services" in the dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create an Email Template:**
   - Go to "Email Templates" in the dashboard
   - Click "Create New Template"
   - Use this template:
     ```
     Subject: New Contact Form Message from {{from_name}}
     
     From: {{from_name}}
     Email: {{from_email}}
     
     Message:
     {{message}}
     ```
   - Save the template and note the Template ID

4. **Get your Public Key:**
   - Go to "Account" → "General"
   - Copy your "Public Key"

5. **Update script.js:**
   - Open `script.js`
   - Replace these values (lines 57-59):
     ```javascript
     const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';  // Replace with your Service ID
     const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
     const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';   // Replace with your Public Key
     ```

6. **Test the form** - it should now send emails to your inbox!

---

## Option 3: Current Fallback (Works Now - No Setup)

Currently, if EmailJS is not configured, the form will:
- Open the user's email client with a pre-filled message
- This works immediately but requires the user to have an email client set up

---

## Which Option Should You Choose?

- **Web3Forms** ⭐: Easiest setup (recommended), just get an access key - no signup needed!
- **EmailJS**: More features and customization options, requires account setup
- **Fallback (mailto)**: Works immediately but requires user's email client

**Recommendation**: Use **Web3Forms** for the easiest setup and best user experience without any account creation!

---

## Need Help?

If you need assistance setting up any of these options, let me know and I can help you configure it!
