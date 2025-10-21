import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Commercial Metal Roofing Prices Guide 2025 | Active Metal',
  description: 'Complete guide to commercial metal roofing prices in Melbourne. Learn about cost factors, materials, installation, and ROI for your business roofing project.',
  openGraph: {
    title: 'Commercial Metal Roofing Prices Guide 2025',
    description: 'Complete guide to commercial metal roofing prices in Melbourne including cost factors and ROI.',
    url: 'https://activemetalroofing.com.au/blog/commercial-metal-roofing-prices',
    type: 'article',
    images: [
      {
        url: 'https://activemetalroofing.com.au/img/blog/commercial-metal-roofing-prices.jpg',
        width: 1200,
        height: 630,
        alt: 'Commercial Metal Roofing Installation',
      },
    ],
  },
};

export default function CommercialMetalRoofingPricesPost() {
  return (
    <article className="bg-white">
      {/* Hero Image */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/img/blog/commercial-metal-roofing-prices.jpg"
          alt="Commercial metal roofing installation on large warehouse facility"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-white/80 text-sm mb-3">
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link> /
              <span className="ml-2">Roofing Guides</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Commercial Metal Roofing Prices: Complete Guide for Melbourne Businesses
            </h1>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span>By Active Metal Roofing</span>
              <span>•</span>
              <time>October 2025</time>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Understanding commercial metal roofing prices is crucial for making informed decisions about your business property investment. This comprehensive guide breaks down everything you need to know about costs, factors, and returns on investment for commercial metal roofing in Melbourne.
          </p>
        </div>

        {/* Average Price Range */}
        <section className="mb-12 bg-[#f8f9fa] p-8 rounded-lg border-l-4 border-[#006991]">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Average Commercial Metal Roofing Costs in Melbourne
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#006991] font-semibold mb-2">Basic Range</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">$70-$110</div>
              <div className="text-sm text-gray-600">per square metre</div>
              <p className="text-sm text-gray-700 mt-3">Standard corrugated or trapezoidal profiles, basic installation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-[#006991]">
              <div className="text-[#006991] font-semibold mb-2">Mid-Range</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">$110-$180</div>
              <div className="text-sm text-gray-600">per square metre</div>
              <p className="text-sm text-gray-700 mt-3">Premium profiles, Colorbond, includes insulation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#006991] font-semibold mb-2">Premium Range</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">$180-$250+</div>
              <div className="text-sm text-gray-600">per square metre</div>
              <p className="text-sm text-gray-700 mt-3">Architectural cladding, complex installations, specialty systems</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 italic">
            *Prices include materials and installation. Actual costs vary based on project specifics, roof complexity, and site conditions.
          </p>
        </section>

        {/* Key Cost Factors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            7 Key Factors That Impact Commercial Metal Roofing Prices
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-[#6EC1E4] pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Roof Size and Complexity</h3>
              <p className="text-gray-700 mb-2">
                Larger roofs benefit from economies of scale, potentially reducing the per-square-metre cost. However, complex roof designs with multiple penetrations, valleys, or elevation changes increase labour costs and material waste.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Simple rectangular roof: Lower cost per m²</li>
                <li>Multiple roof sections: 10-15% price increase</li>
                <li>Complex architectural features: 20-30% premium</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#6EC1E4] pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Material Selection</h3>
              <p className="text-gray-700 mb-3">Your choice of metal roofing material significantly impacts the overall cost:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-2 font-semibold">Material</th>
                      <th className="text-right py-2 font-semibold">Price Range (per m²)</th>
                      <th className="text-right py-2 font-semibold">Lifespan</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-200">
                      <td className="py-2">Zincalume</td>
                      <td className="text-right">$70-$95</td>
                      <td className="text-right">30-40 years</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">Colorbond</td>
                      <td className="text-right">$90-$130</td>
                      <td className="text-right">40-50 years</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">Standing Seam</td>
                      <td className="text-right">$140-$200</td>
                      <td className="text-right">50-60 years</td>
                    </tr>
                    <tr>
                      <td className="py-2">Architectural Cladding</td>
                      <td className="text-right">$180-$280</td>
                      <td className="text-right">50-70 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-l-4 border-[#6EC1E4] pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Roof Access and Site Conditions</h3>
              <p className="text-gray-700">
                Difficult site access, limited crane space, or working height restrictions can increase labour costs by 15-40%. Sites in busy urban areas or those requiring traffic management add additional expenses.
              </p>
            </div>

            <div className="border-l-4 border-[#6EC1E4] pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">4. Existing Roof Removal</h3>
              <p className="text-gray-700 mb-2">
                If you're replacing an existing roof, removal and disposal costs add to the total:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Simple metal roof removal: $15-$25/m²</li>
                <li>Asbestos roof removal: $45-$85/m² (requires licensed removal)</li>
                <li>Multi-layer roof removal: $30-$50/m²</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#6EC1E4] pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">5. Insulation Requirements</h3>
              <p className="text-gray-700 mb-2">
                Proper insulation is crucial for energy efficiency and condensation control:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Basic blanket insulation: $15-$25/m²</li>
                <li>Rigid board insulation: $25-$40/m²</li>
                <li>Spray foam insulation: $40-$65/m²</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#6EC1E4] pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">6. Accessories and Add-ons</h3>
              <p className="text-gray-700 mb-2">Essential accessories that impact the final cost:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Gutters and downpipes: $30-$65 per linear metre</li>
                <li>Skylights: $800-$2,500 each installed</li>
                <li>Ridge vents: $25-$45 per linear metre</li>
                <li>Safety rails and access systems: $150-$300 per linear metre</li>
                <li>Solar panel integration: $500-$1,500 additional per roof section</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#6EC1E4] pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">7. Warranty and Quality</h3>
              <p className="text-gray-700">
                Licensed contractors with comprehensive insurance and quality warranties typically charge 15-25% more than unlicensed operators, but provide crucial protection for your investment and peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* Cost Breakdown Example */}
        <section className="mb-12 bg-[#f8f9fa] p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Example: 1,000m² Warehouse Re-Roof Cost Breakdown
          </h2>
          <div className="space-y-3 mb-4">
            <div className="flex justify-between py-2 border-b border-gray-300">
              <span className="text-gray-700">Colorbond sheeting (1,000m²)</span>
              <span className="font-semibold">$45,000</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-300">
              <span className="text-gray-700">Structural purlins and framework</span>
              <span className="font-semibold">$18,000</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-300">
              <span className="text-gray-700">Insulation (blanket type)</span>
              <span className="font-semibold">$22,000</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-300">
              <span className="text-gray-700">Labour and installation</span>
              <span className="font-semibold">$35,000</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-300">
              <span className="text-gray-700">Gutters, downpipes, and accessories</span>
              <span className="font-semibold">$12,000</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-300">
              <span className="text-gray-700">Old roof removal and disposal</span>
              <span className="font-semibold">$8,000</span>
            </div>
            <div className="flex justify-between py-3 border-t-2 border-gray-400 mt-2">
              <span className="text-gray-900 font-bold text-lg">Total Project Cost</span>
              <span className="font-bold text-xl text-[#006991]">$140,000</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Cost per square metre</span>
              <span>$140/m²</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 italic mt-4">
            This is a typical mid-range commercial re-roofing project. Your actual costs may vary based on specific requirements and site conditions.
          </p>
        </section>

        {/* Long-term Value */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Long-Term Value and ROI
          </h2>
          <p className="text-gray-700 mb-6">
            While commercial metal roofing has higher upfront costs compared to some alternatives, the long-term value proposition is compelling:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-[#6EC1E4] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-[#61CE70]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Cost Savings
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#61CE70] mr-2">✓</span>
                  <span><strong>Energy efficiency:</strong> Reflective coatings reduce cooling costs by 20-30%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#61CE70] mr-2">✓</span>
                  <span><strong>Low maintenance:</strong> Minimal upkeep saves $500-$2,000 annually</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#61CE70] mr-2">✓</span>
                  <span><strong>Durability:</strong> 40-70 year lifespan vs 15-25 for alternatives</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#6EC1E4] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-[#6EC1E4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Business Benefits
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#61CE70] mr-2">✓</span>
                  <span><strong>Property value:</strong> Quality roof adds 5-10% to property value</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#61CE70] mr-2">✓</span>
                  <span><strong>Insurance premiums:</strong> Better roof ratings reduce premiums</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#61CE70] mr-2">✓</span>
                  <span><strong>Minimal disruption:</strong> Fast installation reduces downtime</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#006991] text-white p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-3">Typical Payback Period</h4>
            <p className="mb-4">
              When factoring in energy savings, reduced maintenance, and avoided replacement costs, most commercial metal roofs pay for themselves within:
            </p>
            <div className="text-3xl font-bold text-[#61CE70]">8-15 years</div>
            <p className="text-sm text-white/80 mt-2">
              While continuing to provide value for decades beyond the payback period
            </p>
          </div>
        </section>

        {/* How to Save Money */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Smart Ways to Manage Commercial Roofing Costs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#006991] text-white rounded-full flex items-center justify-center font-bold mr-3 mt-1">1</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Plan During Off-Peak Season</h4>
                  <p className="text-gray-700 text-sm">Schedule projects in autumn or winter when contractors have more availability and may offer better rates.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#006991] text-white rounded-full flex items-center justify-center font-bold mr-3 mt-1">2</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Bundle Multiple Buildings</h4>
                  <p className="text-gray-700 text-sm">If you have multiple properties, bundle them into one project for volume discounts of 10-20%.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#006991] text-white rounded-full flex items-center justify-center font-bold mr-3 mt-1">3</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Choose Standard Profiles</h4>
                  <p className="text-gray-700 text-sm">Standard corrugated or trapezoidal profiles are 20-30% cheaper than custom architectural profiles while still highly durable.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#006991] text-white rounded-full flex items-center justify-center font-bold mr-3 mt-1">4</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Don't Skimp on Critical Elements</h4>
                  <p className="text-gray-700 text-sm">Quality insulation, proper flashing, and professional installation prevent costly problems. These aren't areas to cut costs.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#006991] text-white rounded-full flex items-center justify-center font-bold mr-3 mt-1">5</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Get Multiple Detailed Quotes</h4>
                  <p className="text-gray-700 text-sm">Compare at least 3 detailed quotes to ensure you're getting fair pricing and comprehensive coverage.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#006991] text-white rounded-full flex items-center justify-center font-bold mr-3 mt-1">6</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Consider Roof Restoration First</h4>
                  <p className="text-gray-700 text-sm">If your existing metal roof is structurally sound, restoration can extend its life by 15-20 years at 30-50% of replacement cost.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="mb-12 bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <svg className="w-8 h-8 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Red Flags: When a Quote Seems Too Good to Be True
          </h2>
          <p className="text-gray-700 mb-4">Be wary of quotes that are significantly lower than market rates. They often indicate:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">⚠</span>
              <span>No proper licensing or insurance</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">⚠</span>
              <span>Use of inferior or non-compliant materials</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">⚠</span>
              <span>Hidden costs that will emerge later</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">⚠</span>
              <span>Shortcuts in installation that lead to premature failure</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">⚠</span>
              <span>No warranty or guarantee on workmanship</span>
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#006991] to-[#004d6d] text-white p-8 md:p-12 rounded-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get an Accurate Quote for Your Project?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team provides detailed, transparent quotes with no hidden costs. We'll assess your specific needs and provide a comprehensive breakdown of all costs involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-[#61CE70] text-white rounded-md hover:bg-[#50bd5f] transition-all shadow-lg"
            >
              Get Free Quote
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:0451866494"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-[#006991] rounded-md hover:bg-gray-100 transition-all shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 0451 866 494
            </a>
          </div>
          <p className="text-sm text-white/70 mt-6">
            22 years experience • Licensed plumbers • Free site inspections
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How long does commercial metal roof installation take?
              </h3>
              <p className="text-gray-700">
                A typical 1,000m² warehouse re-roof takes 2-4 weeks depending on complexity, weather conditions, and whether the existing roof needs removal. Simple overlay installations can be completed faster, while complex projects with structural modifications may take longer.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Will my business need to close during installation?
              </h3>
              <p className="text-gray-700">
                Not necessarily. We work with businesses to minimize disruption, often completing work in sections or outside business hours. Most commercial operations can continue with minimal impact, though some noise and restricted access to certain areas should be expected.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What's the best time of year to replace a commercial roof?
              </h3>
              <p className="text-gray-700">
                Autumn (March-May) and spring (September-November) typically offer the best conditions with mild weather and lower contractor demand. However, modern installation techniques allow for year-round installation when necessary. Winter projects may have slight delays due to weather, but can offer better pricing.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I claim commercial roofing costs as a tax deduction?
              </h3>
              <p className="text-gray-700">
                Commercial roof replacement is typically a capital expense that can be depreciated over time. However, repairs and maintenance may be immediately deductible. Consult with your accountant or tax advisor for specific guidance on your situation, as tax treatment varies based on the scope of work and your business structure.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What warranty should I expect on commercial metal roofing?
              </h3>
              <p className="text-gray-700">
                Quality commercial metal roofing should come with two warranties: a material warranty (typically 20-40 years depending on the product) and a workmanship warranty (usually 10-15 years from reputable contractors). Always ensure both are clearly documented in your contract.
              </p>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/commercial-re-roofing" className="group">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#006991]">
                  Commercial Re-Roofing
                </h3>
                <p className="text-gray-600 text-sm mb-3">Complete roof replacement services for businesses</p>
                <span className="text-[#006991] text-sm font-semibold">
                  Learn more →
                </span>
              </div>
            </Link>
            <Link href="/metal-roof-restoration" className="group">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#006991]">
                  Roof Restoration
                </h3>
                <p className="text-gray-600 text-sm mb-3">Save 30-50% vs replacement with professional restoration</p>
                <span className="text-[#006991] text-sm font-semibold">
                  Learn more →
                </span>
              </div>
            </Link>
            <Link href="/roof-inspections" className="group">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#006991]">
                  Roof Inspections
                </h3>
                <p className="text-gray-600 text-sm mb-3">Professional assessments with detailed reports</p>
                <span className="text-[#006991] text-sm font-semibold">
                  Learn more →
                </span>
              </div>
            </Link>
          </div>
        </section>

      </div>
    </article>
  );
}
