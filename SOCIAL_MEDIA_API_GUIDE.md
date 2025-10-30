# Social Media Auto-Posting API Guide

## Current Setup (Zapier)
✅ RSS Feed → Zapier → Google Business Profile (WORKING)

## Extending to LinkedIn & Facebook

### Option 1: Zapier Multi-Platform (Recommended)

#### Step 1: Edit Your Existing Zap
1. Go to your existing Zap in Zapier
2. Click "+" to add new action steps after Google Business Profile

#### Step 2: Add LinkedIn Action
1. Search for "LinkedIn" app
2. Choose action: **"Create Share Update"** (for personal) or **"Create Organization Share"** (for company page)
3. Connect your LinkedIn account or Company Page
4. Map fields:
   - **Text**:
     ```
     {{Title}}

     {{Description}}

     Read more: {{Link}}
     ```
   - **Link URL**: `{{Link}}`
   - **Image URL**: `{{Media Content Url}}` or `{{Media Thumbnail Url}}`

#### Step 3: Add Facebook Action
1. Search for "Facebook Pages" app
2. Choose action: **"Create Page Post"**
3. Connect your Facebook Page
4. Map fields:
   - **Message**:
     ```
     {{Title}}

     {{Description}}

     Read more: {{Link}}
     ```
   - **Link**: `{{Link}}`
   - **Photo URL**: `{{Media Content Url}}`

#### Step 4: Test
1. Test each action individually
2. Turn on the Zap
3. Publish a new blog post to test all platforms

---

### Option 2: Make.com Setup

#### Advantages:
- More free operations (1,000 vs Zapier's 100 on free tier)
- Better error handling
- More advanced filtering and routing

#### Setup Flow:
```
RSS Feed Trigger
    ↓
  Router
    ├→ Google Business Profile
    ├→ LinkedIn (Company Share)
    └→ Facebook Pages (Create Post)
```

#### Make.com Modules Needed:
1. **RSS > Watch RSS Feed Items**
2. **Router** (to split into 3 paths)
3. **Google My Business > Create a Post**
4. **LinkedIn > Create a Company Share**
5. **Facebook Pages > Create a Post**

---

### Option 3: Custom Next.js API (Advanced)

If you need more control, create a custom API endpoint:

#### File: `/app/api/publish-to-social/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { title, description, link, image } = await request.json();

  const results = {
    linkedin: null,
    facebook: null,
    google: null,
    errors: []
  };

  // Post to LinkedIn
  try {
    const linkedInResponse = await fetch('https://api.linkedin.com/v2/ugcPosts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        'X-Restli-Protocol-Version': '2.0.0'
      },
      body: JSON.stringify({
        author: `urn:li:organization:${process.env.LINKEDIN_ORGANIZATION_ID}`,
        lifecycleState: 'PUBLISHED',
        specificContent: {
          'com.linkedin.ugc.ShareContent': {
            shareCommentary: {
              text: `${title}\n\n${description}\n\nRead more: ${link}`
            },
            shareMediaCategory: 'ARTICLE',
            media: [
              {
                status: 'READY',
                description: {
                  text: description
                },
                originalUrl: link,
                title: {
                  text: title
                }
              }
            ]
          }
        },
        visibility: {
          'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC'
        }
      })
    });
    results.linkedin = await linkedInResponse.json();
  } catch (error) {
    results.errors.push({ platform: 'linkedin', error: error.message });
  }

  // Post to Facebook
  try {
    const facebookResponse = await fetch(
      `https://graph.facebook.com/v18.0/${process.env.FACEBOOK_PAGE_ID}/feed`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: `${title}\n\n${description}`,
          link: link,
          access_token: process.env.FACEBOOK_PAGE_ACCESS_TOKEN
        })
      }
    );
    results.facebook = await facebookResponse.json();
  } catch (error) {
    results.errors.push({ platform: 'facebook', error: error.message });
  }

  return NextResponse.json(results);
}
```

#### Environment Variables Needed:
```env
# LinkedIn
LINKEDIN_ACCESS_TOKEN=your_linkedin_token
LINKEDIN_ORGANIZATION_ID=your_organization_id

# Facebook
FACEBOOK_PAGE_ID=your_page_id
FACEBOOK_PAGE_ACCESS_TOKEN=your_page_token
```

#### Call this API when publishing:
```typescript
// After publishing blog post
await fetch('/api/publish-to-social', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: blogPost.title,
    description: blogPost.excerpt,
    link: `https://www.activemetalroofing.com.au/blog/${blogPost.slug}`,
    image: blogPost.image
  })
});
```

---

## API Access Requirements

### LinkedIn API:
1. Create LinkedIn App: https://www.linkedin.com/developers/apps
2. Request API access
3. OAuth 2.0 authentication required
4. Permissions needed: `w_member_social` or `w_organization_social`

### Facebook API:
1. Create Facebook App: https://developers.facebook.com/
2. Add "Pages" product
3. Get Page Access Token
4. Permissions needed: `pages_manage_posts`, `pages_read_engagement`

### Google Business Profile API:
1. Already handled by Zapier ✓
2. Alternative: Google My Business API requires OAuth + complex setup

---

## Recommendation

**For your use case, I recommend Option 1: Zapier Multi-Platform**

### Why:
- ✅ Simplest to set up (no coding)
- ✅ Reliable and well-maintained
- ✅ Easy to test and troubleshoot
- ✅ Built-in error notifications
- ✅ All platforms in one workflow
- ✅ You already have it working with Google Business

### Steps to implement:
1. Edit your existing Zap
2. Add LinkedIn action step
3. Add Facebook action step
4. Test with your latest blog post
5. Done!

### Estimated setup time: 15-30 minutes

Would you like me to walk you through adding LinkedIn and Facebook to your existing Zapier automation?
