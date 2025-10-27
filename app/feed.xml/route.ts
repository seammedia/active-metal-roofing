import { NextResponse } from 'next/server';

// Blog posts data - sync this with app/blog/page.tsx
const blogPosts = [
  {
    slug: '5-ways-to-detect-roof-leaks',
    title: '5 Ways to Detect Roof Leaks Early',
    excerpt: 'Learn how to detect roof leaks before they cause serious damage. Expert tips on identifying water damage, inspection techniques, and when to call professionals.',
    image: '/img/blog/5-ways-to-detect-roof-leaks.jpg',
    date: '2025-01-15T09:00:00Z',
    category: 'Maintenance Tips'
  },
  {
    slug: 'how-to-prevent-damaged-roofs-in-carrum-downs',
    title: 'How to Prevent Damaged Roofs in Carrum Downs',
    excerpt: 'Expert tips on preventing roof damage in Carrum Downs. Learn about maintenance, inspections, and protective measures to extend your roof\'s lifespan in coastal environments.',
    image: '/img/blog/how-to-prevent-damaged-roofs-in-carrum-downs.jpg',
    date: '2025-01-20T09:00:00Z',
    category: 'Maintenance Tips'
  },
  {
    slug: 'how-much-is-a-colorbond-roof',
    title: 'How Much is a Colorbond Roof? 2025 Cost Guide Australia',
    excerpt: 'Complete guide to Colorbond roofing costs in Australia. Learn about price per m2, installation costs, replacement prices, and use our cost calculator guide.',
    image: '/img/blog/how-much-is-a-colorbond-roof.jpg',
    date: '2025-01-25T09:00:00Z',
    category: 'Pricing Guides'
  },
  {
    slug: 'how-far-should-metal-roof-overhang-gutters',
    title: 'How Far Should Metal Roof Overhang Gutters? Expert Guide',
    excerpt: 'Learn the optimal metal roof overhang distance for gutters. Expert guidance on measurements, installation tips, and common mistakes to avoid for proper water management.',
    image: '/img/blog/metal-roof-overhang-gutters.jpg',
    date: '2025-10-10T09:00:00Z',
    category: 'Installation Guides'
  },
  {
    slug: 'commercial-metal-roofing-prices',
    title: 'Commercial Metal Roofing Prices: Complete Guide for Melbourne Businesses',
    excerpt: 'Understanding commercial metal roofing prices is crucial for making informed decisions about your business property investment. Learn about cost factors, materials, and ROI.',
    image: '/img/blog/commercial-metal-roofing-prices.jpg',
    date: '2025-10-15T09:00:00Z',
    category: 'Pricing Guides'
  }
];

export async function GET() {
  const siteUrl = 'https://www.activemetalroofing.com.au';

  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Active Metal Roofing Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Commercial roofing news, tips and updates from Melbourne's trusted roofing experts. 22 years experience serving Victoria.</description>
    <language>en-AU</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/img/logo.png</url>
      <title>Active Metal Roofing</title>
      <link>${siteUrl}</link>
    </image>
${sortedPosts.map(post => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <dc:creator><![CDATA[Active Metal Roofing]]></dc:creator>
      <category><![CDATA[${post.category}]]></category>
      <enclosure url="${siteUrl}${post.image}" type="image/jpeg" length="0"/>
    </item>`).join('\n')}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
    },
  });
}
