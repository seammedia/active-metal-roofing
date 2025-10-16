# Contact Form Email Setup with Resend

## ✅ What's Been Implemented

All contact forms on the Active Metal Roofing website now send emails using **Resend** to:
- **Primary recipient**: `luke@activemetalroofing.com.au`
- **BCC**: `contact@seammedia.com.au`

### Forms Updated
1. ✅ Homepage "Get Your Free Quote" form
2. ✅ Contact page form
3. ✅ Service page contact forms (all 8 services)

All forms POST to the unified endpoint: `/api/contact`

## 🔧 Setup Instructions

### 1. Get Your Resend API Key

1. Go to [https://resend.com/](https://resend.com/)
2. Sign up or log in
3. Navigate to **API Keys** in the dashboard
4. Click **Create API Key**
5. Copy the API key (starts with `re_`)

### 2. Verify Domain

For production emails, you need to verify your domain:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter `activemetalroofing.com.au`
4. Add the provided DNS records to your domain registrar:
   - **TXT** record for verification
   - **MX** records (optional, for receiving emails)
   - **DKIM** records (for email authentication)

**Note**: Until domain is verified, use `onboarding@resend.dev` as the sender email for testing.

### 3. Configure Environment Variables

#### Local Development

Create or update `.env.local`:
```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

#### Vercel Production

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Your Resend API key
   - **Environment**: Production (and Preview if needed)
4. Click **Save**
5. **Redeploy** your project for changes to take effect

### 4. Update Sender Email (After Domain Verification)

Once `activemetalroofing.com.au` is verified in Resend, the API route is already configured to use:
```
from: 'Active Metal Roofing <noreply@activemetalroofing.com.au>'
```

If verification is still pending, temporarily update [app/api/contact/route.ts:41](app/api/contact/route.ts#L41):
```typescript
from: 'Active Metal Roofing <onboarding@resend.dev>', // Temporary for testing
```

## 📧 Email Configuration

### Current Setup

**Recipients**:
- **To**: `luke@activemetalroofing.com.au`
- **BCC**: `contact@seammedia.com.au`
- **Reply-To**: Customer's email (automatically set from form submission)

**Email Content Includes**:
- Customer name
- Customer email
- Phone number
- Service interested in
- Message
- Source page URL
- Timestamp (Melbourne time)

### Email Subject Format
```
New Website Lead — [Customer Name] ([Service])
```

Example: `New Website Lead — John Smith (Commercial Re-Roofing)`

## 🧪 Testing

### Test the Contact Form

1. **Start dev server**:
   ```bash
   npm run dev
   ```

2. **Fill out any contact form** on:
   - Homepage: [http://localhost:3000](http://localhost:3000)
   - Contact page: [http://localhost:3000/contact](http://localhost:3000/contact)
   - Any service page: [http://localhost:3000/services/commercial-re-roofing](http://localhost:3000/services/commercial-re-roofing)

3. **Check email arrives**:
   - Luke should receive email at `luke@activemetalroofing.com.au`
   - Seam Media should receive BCC at `contact@seammedia.com.au`
   - Reply-To should be set to customer's email

4. **Verify email content**:
   - Subject includes customer name and service
   - All form fields are present
   - Source page is tracked
   - Timestamp is in Melbourne time

### Test Email Sending (Dev)

You can test the API route directly:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "0400 000 000",
    "service": "Commercial Roofing",
    "message": "This is a test message"
  }'
```

Expected response:
```json
{
  "ok": true,
  "id": "abc123..."
}
```

## 🚨 Troubleshooting

### "Failed to send email" Error

**Problem**: API returns 500 error
**Solutions**:
1. Check `RESEND_API_KEY` is set correctly in `.env.local` or Vercel
2. Verify API key is valid (starts with `re_`)
3. Check domain verification status in Resend dashboard
4. Look at server logs: `npm run dev` output or Vercel function logs

### Emails Not Arriving

**Problem**: Form submits successfully but no email received
**Solutions**:
1. Check spam/junk folders
2. Verify recipients in [app/api/contact/route.ts:42-43](app/api/contact/route.ts#L42-L43)
3. Check Resend dashboard → **Logs** for delivery status
4. Confirm domain is verified (production only)
5. Check Resend account limits haven't been exceeded

### "Domain not verified" Error

**Problem**: Emails fail in production with domain error
**Solutions**:
1. Verify domain in Resend dashboard
2. Add all required DNS records
3. Wait up to 24-48 hours for DNS propagation
4. Use `onboarding@resend.dev` temporarily for testing

### API Key Not Working

**Problem**: API key invalid or expired
**Solutions**:
1. Generate a new API key in Resend dashboard
2. Update environment variable in Vercel
3. **Redeploy** after updating env vars

## 📊 Monitoring

### Check Email Logs

**Resend Dashboard**:
1. Go to [https://resend.com/logs](https://resend.com/logs)
2. View all sent emails
3. Check delivery status
4. See bounce/complaint reports

**Vercel Function Logs**:
1. Go to Vercel project → **Logs**
2. Filter by `/api/contact`
3. Check for errors or successful submissions

## 🔒 Security Notes

- ✅ API key is stored in environment variables (never in code)
- ✅ `.env.local` is in `.gitignore` (secrets not committed)
- ✅ Basic validation prevents empty submissions
- ✅ Reply-To set to customer email for direct replies
- ✅ Rate limiting: Consider adding Vercel rate limiting if spam becomes an issue

## 📝 Files Modified

1. **[app/api/contact/route.ts](app/api/contact/route.ts)** - Updated with Resend integration
2. **[package.json](package.json)** - Added `resend` dependency
3. **[.env.local](.env.local)** - Added `RESEND_API_KEY` (not committed)
4. **[.env.example](.env.example)** - Template for environment variables

## 🚀 Next Steps

1. ✅ Get Resend API key
2. ✅ Add to `.env.local` for local dev
3. ✅ Add to Vercel environment variables
4. ⏳ Verify domain `activemetalroofing.com.au` in Resend
5. ⏳ Add DNS records for domain verification
6. ⏳ Test form submissions on staging/production
7. ⏳ Monitor email delivery in Resend dashboard

---

**Need Help?**
- Resend Documentation: [https://resend.com/docs](https://resend.com/docs)
- Support: contact@seammedia.com.au
