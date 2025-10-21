import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Far Should Metal Roof Overhang Gutters? Expert Guide',
  description: 'Learn the optimal metal roof overhang distance for gutters. Expert guidance on measurements, installation tips, and common mistakes to avoid for proper water management.',
  openGraph: {
    title: 'How Far Should Metal Roof Overhang Gutters? Expert Guide',
    description: 'Complete guide to proper metal roof overhang measurements for optimal gutter performance and water drainage.',
    url: 'https://activemetalroofing.com.au/blog/how-far-should-metal-roof-overhang-gutters',
    type: 'article',
    images: [
      {
        url: 'https://activemetalroofing.com.au/img/blog/metal-roof-overhang-gutters.jpg',
        width: 1200,
        height: 630,
        alt: 'Metal roof overhang over gutters showing proper installation',
      },
    ],
  },
};

export default function MetalRoofOverhangPost() {
  return (
    <article className="bg-white">
      {/* Hero Image */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/img/blog/metal-roof-overhang-gutters.jpg"
          alt="Properly installed metal roof with correct overhang over gutters"
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
              <span className="ml-2">Installation Guides</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              How Far Should Metal Roof Overhang Gutters? Expert Installation Guide
            </h1>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span>By Active Metal Roofing</span>
              <span>•</span>
              <time>October 2025</time>
              <span>•</span>
              <span>7 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Proper metal roof overhang is critical for effective water management and protecting your building from water damage. Getting the overhang measurement right ensures rainwater flows correctly into gutters, prevents fascia rot, and extends the life of your roofing system. This comprehensive guide covers everything you need to know about metal roof overhang specifications.
          </p>
        </div>

        {/* Quick Answer */}
        <section className="mb-12 bg-[#006991] text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            The Quick Answer
          </h2>
          <div className="text-lg leading-relaxed">
            <p className="mb-4">
              <strong>The standard metal roof overhang over gutters should be between 25mm to 50mm (1 to 2 inches)</strong>, with the optimal measurement being around 32-38mm (1.25 to 1.5 inches) for most residential and commercial applications.
            </p>
            <p className="text-white/90">
              This ensures proper water drainage into gutters while preventing wind-driven rain from getting behind the gutter and damaging the fascia board.
            </p>
          </div>
        </section>

        {/* Why Overhang Matters */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Proper Overhang Distance Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#006991]">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-[#61CE70] mr-2 text-2xl">✓</span>
                Water Management
              </h3>
              <p className="text-gray-700">
                Correct overhang ensures rainwater flows directly into the gutter rather than overshooting or dripping behind it. This prevents water from running down the fascia and causing rot or water damage.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#006991]">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-[#61CE70] mr-2 text-2xl">✓</span>
                Fascia Protection
              </h3>
              <p className="text-gray-700">
                Proper overhang prevents water from wicking back under the roof edge, protecting the fascia board from moisture damage and extending the life of your roof edge components.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#006991]">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-[#61CE70] mr-2 text-2xl">✓</span>
                Wind Resistance
              </h3>
              <p className="text-gray-700">
                The right overhang distance prevents wind from lifting the roof edge while also stopping wind-driven rain from getting under the roofing material and into the building structure.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#006991]">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-[#61CE70] mr-2 text-2xl">✓</span>
                Ice Dam Prevention
              </h3>
              <p className="text-gray-700">
                Proper overhang helps prevent ice dams from forming at the roof edge in colder climates, reducing the risk of water backup and interior leaks during winter months.
              </p>
            </div>
          </div>
        </section>

        {/* Standard Measurements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Standard Overhang Measurements by Application
          </h2>

          <div className="space-y-6">
            <div className="bg-white border-2 border-[#6EC1E4] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Residential Metal Roofing</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-700">Minimum Overhang:</span>
                  <span className="text-[#006991] font-bold text-lg">25mm (1 inch)</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-700">Optimal Overhang:</span>
                  <span className="text-[#006991] font-bold text-lg">32-38mm (1.25-1.5 inches)</span>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <span className="font-semibold text-gray-700">Maximum Overhang:</span>
                  <span className="text-[#006991] font-bold text-lg">50mm (2 inches)</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 italic">
                *Residential applications typically use the 32-38mm range for optimal performance
              </p>
            </div>

            <div className="bg-white border-2 border-[#6EC1E4] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial/Industrial Metal Roofing</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-700">Minimum Overhang:</span>
                  <span className="text-[#006991] font-bold text-lg">38mm (1.5 inches)</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-700">Optimal Overhang:</span>
                  <span className="text-[#006991] font-bold text-lg">38-50mm (1.5-2 inches)</span>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <span className="font-semibold text-gray-700">Maximum Overhang:</span>
                  <span className="text-[#006991] font-bold text-lg">75mm (3 inches)</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 italic">
                *Commercial buildings often use larger gutters requiring increased overhang
              </p>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <svg className="w-6 h-6 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Important Note
            </h4>
            <p className="text-gray-700">
              These measurements refer to the distance from the drip edge to the back of the gutter, not the total roof overhang from the wall. Always verify local building codes as requirements may vary by region.
            </p>
          </div>
        </section>

        {/* Factors Affecting Overhang */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            7 Factors That Affect Optimal Overhang Distance
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-[#6EC1E4] pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Roof Pitch/Slope</h3>
              <p className="text-gray-700 mb-3">
                Steeper roofs require less overhang because water runs off faster and with more force. Flatter roofs may need more overhang to ensure water drops into the gutter.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg text-sm">
                <p className="mb-2"><strong>Steep pitch (8:12 or greater):</strong> 25-32mm overhang</p>
                <p className="mb-2"><strong>Medium pitch (4:12 to 7:12):</strong> 32-38mm overhang</p>
                <p><strong>Low pitch (below 4:12):</strong> 38-50mm overhang</p>
              </div>
            </div>

            <div className="border-l-4 border-[#6EC1E4] pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Gutter Size and Style</h3>
              <p className="text-gray-700 mb-3">
                The width and depth of your gutter system impacts optimal overhang:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Standard 125mm (5") gutters:</strong> 32-38mm overhang</li>
                <li><strong>Large 150mm (6") gutters:</strong> 38-50mm overhang</li>
                <li><strong>Box/commercial gutters:</strong> 50-75mm overhang</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#6EC1E4] pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Metal Roofing Profile</h3>
              <p className="text-gray-700">
                Different metal roofing profiles affect water runoff patterns. Corrugated and ribbed profiles with deep channels may require slightly different overhang than standing seam systems to account for the water channeling pattern.
              </p>
            </div>

            <div className="border-l-4 border-[#6EC1E4] pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">4. Climate and Rainfall Intensity</h3>
              <p className="text-gray-700 mb-3">
                Melbourne's variable climate requires consideration:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Heavy rainfall areas: Use the upper end of the overhang range</li>
                <li>Wind-prone locations: Keep to the lower-middle range to prevent uplift</li>
                <li>Areas with ice/snow: Slightly increased overhang helps prevent ice dam formation</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#6EC1E4] pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">5. Drip Edge Installation</h3>
              <p className="text-gray-700">
                The type and angle of drip edge flashing affects how water exits the roof. A properly angled drip edge (typically 100-120 degrees) directs water into the gutter, allowing for optimal overhang performance even at the lower end of the range.
              </p>
            </div>

            <div className="border-l-4 border-[#6EC1E4] pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">6. Wind Exposure</h3>
              <p className="text-gray-700">
                High-wind areas require careful balance. Too much overhang increases wind uplift risk, while too little may allow wind-driven rain to bypass gutters. In exposed locations, stay within the 32-38mm range and ensure proper fastening.
              </p>
            </div>

            <div className="border-l-4 border-[#6EC1E4] pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">7. Building Code Requirements</h3>
              <p className="text-gray-700">
                Australian building codes (AS/NZS 1562.1) provide guidelines for metal roof installation. Always verify local requirements as some councils may have specific overhang requirements based on local conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12 bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <svg className="w-8 h-8 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Common Overhang Mistakes to Avoid
          </h2>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">❌ Too Little Overhang (Less than 25mm)</h4>
              <p className="text-gray-700 mb-2"><strong>Problem:</strong> Water can wick back under the roof edge, causing fascia rot and potential leaks.</p>
              <p className="text-gray-700"><strong>Result:</strong> Premature fascia replacement, water damage, and voided warranties.</p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">❌ Too Much Overhang (More than 75mm)</h4>
              <p className="text-gray-700 mb-2"><strong>Problem:</strong> Increased wind uplift risk, water overshooting gutters in heavy rain, and structural stress.</p>
              <p className="text-gray-700"><strong>Result:</strong> Potential roof edge lifting, bent or damaged panels, ineffective gutters.</p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">❌ Inconsistent Overhang Distance</h4>
              <p className="text-gray-700 mb-2"><strong>Problem:</strong> Varying overhang along the roof edge creates uneven water flow and aesthetic issues.</p>
              <p className="text-gray-700"><strong>Result:</strong> Some areas overflow while others don't drain properly, unprofessional appearance.</p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">❌ Ignoring Roof Pitch</h4>
              <p className="text-gray-700 mb-2"><strong>Problem:</strong> Using the same overhang for all pitch angles doesn't account for water velocity differences.</p>
              <p className="text-gray-700"><strong>Result:</strong> Water either drips short of gutters or shoots over them.</p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">❌ No Drip Edge Installation</h4>
              <p className="text-gray-700 mb-2"><strong>Problem:</strong> Relying on metal roof overhang alone without proper drip edge flashing.</p>
              <p className="text-gray-700"><strong>Result:</strong> Water capillary action under the roof, fascia damage, and reduced gutter effectiveness.</p>
            </div>
          </div>
        </section>

        {/* Installation Best Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Installation Best Practices
          </h2>

          <div className="space-y-6">
            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-[#006991] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                Measure Before Installing Gutters
              </h3>
              <p className="text-gray-700">
                Always install the roof first, then measure the actual overhang before installing gutters. This allows you to position gutters for optimal water capture based on the real roof edge, not theoretical measurements.
              </p>
            </div>

            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-[#006991] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                Use a Chalk Line for Consistency
              </h3>
              <p className="text-gray-700">
                Mark a chalk line along the entire roof edge at your target overhang distance. This ensures consistent overhang across the entire roof and prevents waves or irregularities that affect water flow.
              </p>
            </div>

            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-[#006991] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                Install Proper Drip Edge
              </h3>
              <p className="text-gray-700 mb-3">
                Always install drip edge flashing before the metal roofing panels. The drip edge should:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Extend 25mm past the fascia board</li>
                <li>Have a downward angle of 100-120 degrees</li>
                <li>Be installed under the roofing underlayment</li>
                <li>Overlap at joints by at least 50mm</li>
              </ul>
            </div>

            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-[#006991] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                Account for Panel Expansion
              </h3>
              <p className="text-gray-700">
                Metal expands and contracts with temperature changes. Leave appropriate expansion gaps at panel ends while maintaining consistent overhang. Typically allow 6-10mm expansion gap for panels over 6 meters long.
              </p>
            </div>

            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-[#006991] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">5</span>
                Position Gutters Correctly
              </h3>
              <p className="text-gray-700 mb-3">
                Gutter placement is just as important as roof overhang:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Position the back edge of the gutter 25-32mm below the drip edge</li>
                <li>Ensure the front of the gutter is slightly lower than the back</li>
                <li>Maintain 1:200 slope towards downpipes (5mm drop per meter)</li>
                <li>Position so water droplets fall into the center of the gutter, not the edge</li>
              </ul>
            </div>

            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-[#006991] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">6</span>
                Test Water Flow
              </h3>
              <p className="text-gray-700">
                Before completing installation, test water flow with a hose. Check that water enters gutters properly across the entire roof edge at various flow rates, simulating light and heavy rainfall.
              </p>
            </div>
          </div>
        </section>

        {/* Tools and Materials */}
        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Essential Tools for Proper Overhang Installation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Measuring & Marking Tools</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Tape measure (8m minimum)</li>
                <li>• Chalk line</li>
                <li>• Spirit level (1200mm)</li>
                <li>• Speed square or framing square</li>
                <li>• Laser level (for long runs)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Installation Tools</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Metal cutting shears (left & right cut)</li>
                <li>• Cordless drill with metal bits</li>
                <li>• Pop rivet gun</li>
                <li>• Safety equipment (harness, gloves, glasses)</li>
                <li>• Roof brackets and staging</li>
              </ul>
            </div>
          </div>
        </section>

        {/* When to Call a Professional */}
        <section className="mb-12 bg-[#006991] text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">
            When to Call a Professional
          </h2>
          <p className="text-lg mb-6 text-white/90">
            While understanding proper overhang specifications is valuable, professional installation ensures optimal results. Consider hiring experienced roofing contractors when:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Working on commercial buildings or structures over two stories</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Complex roof designs with multiple pitch angles</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Dealing with difficult access or safety concerns</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Existing water damage or structural issues</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Warranty considerations (many require professional installation)</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Uncertainty about proper techniques or measurements</span>
            </div>
          </div>
          <p className="text-white/90">
            Professional installers have the experience to account for all variables and ensure your roof performs optimally for decades.
          </p>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#006991] to-[#004d6d] text-white p-8 md:p-12 rounded-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Expert Metal Roofing Installation?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our experienced team ensures proper overhang, drip edge installation, and gutter positioning for optimal water management and long-lasting performance.
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
            22 years experience • Licensed plumbers • Quality workmanship guaranteed
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
                Can I adjust overhang after the roof is installed?
              </h3>
              <p className="text-gray-700">
                While technically possible, it's difficult and expensive to modify overhang after installation. It typically requires removing and reinstalling the edge panels, drip edge, and potentially gutters. It's far better to get it right during initial installation.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Does metal roof overhang need to be the same on all sides?
              </h3>
              <p className="text-gray-700">
                While consistency is important on each individual side, different sides of the building may have different overhang requirements based on pitch, exposure, and gutter size. However, maintain consistent overhang along each continuous roof edge.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What happens if my overhang is slightly off the recommended range?
              </h3>
              <p className="text-gray-700">
                A few millimeters variance (±5mm) is generally acceptable and won't cause major issues. However, consistent significant deviation from recommended ranges will lead to water management problems over time. If your overhang is outside the 25-75mm range, consider consulting a professional about adjustment options.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do standing seam roofs require different overhang than corrugated?
              </h3>
              <p className="text-gray-700">
                Standing seam roofs can function well with slightly less overhang (25-32mm) because their raised seams prevent water from wicking backward. Corrugated roofs typically perform better with 32-38mm overhang to account for the channeled water flow pattern.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Should overhang be measured from the fascia or from the wall?
              </h3>
              <p className="text-gray-700">
                The overhang measurements in this guide (25-50mm) refer to the distance from the drip edge to the back of the gutter, not the total eave overhang from the wall. Total eave overhang (from wall to roof edge) is typically 300-600mm for weather protection, which is a separate consideration from gutter overhang.
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/commercial-metal-roofing-prices" className="group">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#006991]">
                  Commercial Metal Roofing Prices
                </h3>
                <p className="text-gray-600 text-sm mb-3">Complete guide to commercial metal roofing costs and pricing factors</p>
                <span className="text-[#006991] text-sm font-semibold">
                  Read more →
                </span>
              </div>
            </Link>
            <Link href="/metal-roof-replacement" className="group">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#006991]">
                  Metal Roof Replacement Services
                </h3>
                <p className="text-gray-600 text-sm mb-3">Professional metal roof replacement with 40-70 year lifespan</p>
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
