import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'How Much is a Colorbond Roof? 2025 Cost Guide Australia',
  description: 'Complete guide to Colorbond roofing costs in Australia. Learn about price per m2, installation costs, replacement prices, and use our cost calculator guide.',
};

export default function HowMuchIsColorbondRoofPage() {
  return (
    <main className="bg-white">
      {/* Hero Section with Featured Image */}
      <section className="relative h-[400px] w-full">
        <Image
          src="/img/blog/how-much-is-a-colorbond-roof.jpg"
          alt="How much is a Colorbond roof - modern commercial building"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              How Much is a Colorbond Roof?
            </h1>
            <p className="text-xl md:text-2xl">
              Complete 2025 Cost Guide for Australia
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-[#006991] hover:underline">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/blog" className="text-[#006991] hover:underline">
                  Blog
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600">How Much is a Colorbond Roof?</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Reading Time */}
        <div className="text-gray-600 mb-8 flex items-center gap-4">
          <span>Published: January 2025</span>
          <span>•</span>
          <span>10 min read</span>
        </div>

        {/* Quick Answer Section */}
        <section className="mb-12 bg-[#006991] text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Quick Answer: Colorbond Roof Cost Australia</h2>
          <p className="text-lg mb-4">
            <strong>In 2025, Colorbond roofing costs in Australia range from $60 to $150 per m² installed</strong>, depending on the profile, installation complexity, and location. For an average residential home (150-200m²), expect to pay between $12,000 and $30,000. Commercial projects typically range from $80 to $150 per m².
          </p>
          <div className="bg-white/10 p-4 rounded">
            <h3 className="font-bold mb-2">Average Costs:</h3>
            <ul className="space-y-1">
              <li>• Material only: $25-50/m²</li>
              <li>• Installation labour: $35-80/m²</li>
              <li>• Total installed: $60-150/m²</li>
              <li>• Average home (150m²): $12,000-22,500</li>
            </ul>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            <li><a href="#cost-breakdown" className="text-[#006991] hover:underline">1. Colorbond Roofing Cost Breakdown</a></li>
            <li><a href="#per-m2" className="text-[#006991] hover:underline">2. Cost Per M² &amp; Per Square Foot</a></li>
            <li><a href="#factors" className="text-[#006991] hover:underline">3. Factors Affecting Colorbond Roof Prices</a></li>
            <li><a href="#calculator" className="text-[#006991] hover:underline">4. Colorbond Roofing Cost Calculator Guide</a></li>
            <li><a href="#bunnings" className="text-[#006991] hover:underline">5. Colorbond Roofing Prices at Bunnings</a></li>
            <li><a href="#stratco" className="text-[#006991] hover:underline">6. Stratco Colorbond Roof Sheets Price</a></li>
            <li><a href="#replacement" className="text-[#006991] hover:underline">7. Cost of Colorbond Roof Replacement</a></li>
            <li><a href="#installation" className="text-[#006991] hover:underline">8. Colorbond Roof Installation Costs</a></li>
            <li><a href="#melbourne" className="text-[#006991] hover:underline">9. Colorbond Roof Installers Near Me (Melbourne)</a></li>
            <li><a href="#faq" className="text-[#006991] hover:underline">10. FAQ</a></li>
          </ul>
        </section>

        {/* Main Content Sections */}
        <section id="cost-breakdown" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#212121]">1. Colorbond Roofing Cost Breakdown</h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Understanding the complete cost breakdown helps you budget accurately for your Colorbond roofing project. Here's what you need to know:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Complete Cost Components</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-[#006991] mb-2">Material Costs</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Colorbond sheets:</strong> $25-50/m² (varies by profile and colour)</li>
                  <li><strong>Flashings and trims:</strong> $15-30/linear metre</li>
                  <li><strong>Screws and fixings:</strong> $100-300 per project</li>
                  <li><strong>Insulation (optional):</strong> $8-15/m²</li>
                  <li><strong>Sarking/membrane:</strong> $5-12/m²</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006991] mb-2">Labour Costs</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Installation labour:</strong> $35-80/m²</li>
                  <li><strong>Removal of old roof:</strong> $20-40/m²</li>
                  <li><strong>Roof framing repairs:</strong> $50-150/m² (if needed)</li>
                  <li><strong>Gutter installation:</strong> $30-50/linear metre</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006991] mb-2">Additional Costs</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Building permits:</strong> $500-1,500</li>
                  <li><strong>Scaffolding hire:</strong> $1,000-5,000</li>
                  <li><strong>Waste disposal:</strong> $500-1,500</li>
                  <li><strong>Engineering certification:</strong> $500-2,000</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#A4D7F4] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Example: 150m² Residential Roof</h3>
            <div className="space-y-2 text-gray-800">
              <p>• Colorbond sheets (150m² × $40): <strong>$6,000</strong></p>
              <p>• Flashings and trims (40m × $25): <strong>$1,000</strong></p>
              <p>• Sarking (150m² × $8): <strong>$1,200</strong></p>
              <p>• Installation labour (150m² × $60): <strong>$9,000</strong></p>
              <p>• Old roof removal (150m² × $25): <strong>$3,750</strong></p>
              <p>• Permits and extras: <strong>$2,050</strong></p>
              <p className="text-xl font-bold pt-2 border-t-2 border-gray-600 mt-2">Total: <strong>$23,000</strong></p>
            </div>
          </div>
        </section>

        <section id="per-m2" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#212121]">2. Colorbond Roofing Cost Per M² &amp; Per Square Foot</h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Understanding both metric and imperial measurements helps you compare quotes and calculate your project costs accurately.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-[#006991] text-white">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left">Roof Type</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Cost Per M²</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Cost Per Sq Ft</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Material Only</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">$25-50</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">$2.30-4.65</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Residential (Installed)</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">$60-110</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">$5.60-10.20</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Commercial (Installed)</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">$80-150</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">$7.45-13.95</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Complex Installation</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">$120-180</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">$11.15-16.75</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Regional Price Variations (Per M² Installed)</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Melbourne:</strong> $70-120/m²</li>
              <li><strong>Sydney:</strong> $75-130/m²</li>
              <li><strong>Brisbane:</strong> $65-115/m²</li>
              <li><strong>Perth:</strong> $70-125/m²</li>
              <li><strong>Adelaide:</strong> $65-110/m²</li>
              <li><strong>Regional areas:</strong> $60-100/m² (may include travel charges)</li>
            </ul>
          </div>
        </section>

        <section id="factors" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#212121]">3. Factors Affecting Colorbond Roof Prices</h2>

          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            Several key factors influence the final cost of your Colorbond roofing project. Understanding these helps you budget accurately and make informed decisions.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-[#006991] pl-6">
              <h3 className="text-xl font-bold mb-3">1. Roof Profile Type</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Corrugated:</strong> $25-35/m² (material) - most economical</li>
                <li><strong>Trimdek:</strong> $30-40/m² (material) - popular residential choice</li>
                <li><strong>Kliplok:</strong> $35-45/m² (material) - concealed fastening</li>
                <li><strong>Custom profiles:</strong> $45-60/m² (material) - architectural designs</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#006991] pl-6">
              <h3 className="text-xl font-bold mb-3">2. Colour Selection</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Standard colours:</strong> Base price (Classic Cream, Cottage Green, Manor Red)</li>
                <li><strong>Premium colours:</strong> +$5-10/m² (Designer colours, Matt finishes)</li>
                <li><strong>Ultra premium:</strong> +$10-15/m² (Metallic finishes, special orders)</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#006991] pl-6">
              <h3 className="text-xl font-bold mb-3">3. Roof Complexity</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Simple gable roof:</strong> $60-80/m² installed</li>
                <li><strong>Hip roof:</strong> $70-95/m² installed</li>
                <li><strong>Complex multi-level:</strong> $90-130/m² installed</li>
                <li><strong>Steep pitch (&gt;30°):</strong> +$15-25/m² for safety equipment</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#006991] pl-6">
              <h3 className="text-xl font-bold mb-3">4. Building Type</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Single-storey residential:</strong> Standard rates</li>
                <li><strong>Two-storey residential:</strong> +$10-20/m²</li>
                <li><strong>Commercial/industrial:</strong> +$15-35/m² (larger spans, engineering)</li>
                <li><strong>Heritage/listed buildings:</strong> +$30-50/m² (special requirements)</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#006991] pl-6">
              <h3 className="text-xl font-bold mb-3">5. Insulation Requirements</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>No insulation:</strong> Base price</li>
                <li><strong>Blanket insulation:</strong> +$8-12/m²</li>
                <li><strong>Foil laminate:</strong> +$10-15/m²</li>
                <li><strong>High-performance systems:</strong> +$15-25/m²</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#006991] pl-6">
              <h3 className="text-xl font-bold mb-3">6. Location &amp; Accessibility</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Easy access:</strong> Standard rates</li>
                <li><strong>Difficult access:</strong> +$15-30/m²</li>
                <li><strong>Remote locations:</strong> +$20-40/m² (travel and logistics)</li>
                <li><strong>Tight urban sites:</strong> +$10-25/m² (crane hire, permits)</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#61CE70] text-white p-6 rounded-lg mt-6">
            <h3 className="text-xl font-bold mb-3">💡 Cost-Saving Tip</h3>
            <p>
              Choosing a standard Colorbond profile in a popular colour can save $10-20/m² compared to premium options, while still delivering the same durability and warranty. For a 150m² roof, that's a saving of $1,500-3,000!
            </p>
          </div>
        </section>

        <section id="calculator" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#212121]">4. Colorbond Roofing Cost Calculator Guide</h2>

          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            Calculate your Colorbond roofing costs with this simple step-by-step guide. While we recommend getting professional quotes, this helps you estimate your budget.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Step-by-Step Calculation Method</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006991] mb-2">Step 1: Measure Your Roof Area</h4>
                <p className="text-gray-700 mb-2">For a simple rectangular roof:</p>
                <div className="bg-white p-4 rounded border-l-4 border-[#006991]">
                  <p className="font-mono">Roof Area (m²) = Length × Width × Pitch Factor</p>
                  <p className="text-sm text-gray-600 mt-2">Pitch factors: Flat = 1.0, 15° = 1.04, 22.5° = 1.08, 30° = 1.15, 45° = 1.41</p>
                </div>
                <p className="text-sm text-gray-600 mt-2"><strong>Example:</strong> 12m × 8m house with 22.5° pitch = 12 × 8 × 1.08 = 103.68m²</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006991] mb-2">Step 2: Select Material Cost Per M²</h4>
                <div className="bg-white p-4 rounded">
                  <p className="mb-2">Choose based on profile and colour:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Budget (Corrugated, standard colour): $30/m²</li>
                    <li>Mid-range (Trimdek, popular colour): $40/m²</li>
                    <li>Premium (Kliplok, designer colour): $50/m²</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[#006991] mb-2">Step 3: Add Installation Labour</h4>
                <div className="bg-white p-4 rounded">
                  <p className="mb-2">Installation costs vary by complexity:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Simple roof: $40/m²</li>
                    <li>Standard complexity: $60/m²</li>
                    <li>Complex/steep roof: $80/m²</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[#006991] mb-2">Step 4: Add Additional Costs</h4>
                <div className="bg-white p-4 rounded">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Flashings and trims: Perimeter (m) × $25</li>
                    <li>Sarking/insulation: Roof area × $10</li>
                    <li>Old roof removal: Roof area × $25</li>
                    <li>Permits and fees: $1,000-2,000</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#006991] text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">📊 Example Calculation: 150m² Home</h3>
            <div className="space-y-2">
              <p><strong>1. Roof area:</strong> 150m²</p>
              <p><strong>2. Material (Trimdek):</strong> 150 × $40 = $6,000</p>
              <p><strong>3. Labour (standard):</strong> 150 × $60 = $9,000</p>
              <p><strong>4. Flashings (50m):</strong> 50 × $25 = $1,250</p>
              <p><strong>5. Sarking:</strong> 150 × $10 = $1,500</p>
              <p><strong>6. Removal:</strong> 150 × $25 = $3,750</p>
              <p><strong>7. Permits:</strong> $1,500</p>
              <p className="text-2xl font-bold pt-3 border-t-2 border-white/30 mt-3">
                TOTAL ESTIMATE: $23,000
              </p>
              <p className="text-sm opacity-90 mt-2">
                (Range: $21,000-25,000 depending on specific requirements)
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
            <p className="text-gray-800">
              <strong>⚠️ Important:</strong> This is an estimate only. Get at least 3 professional quotes for accurate pricing. Unexpected costs like structural repairs, asbestos removal, or complex drainage can significantly affect the final price.
            </p>
          </div>
        </section>

        <section id="bunnings" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#212121]">5. Colorbond Roofing Prices at Bunnings</h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Bunnings stocks Colorbond roofing sheets for DIY projects. Here's what you need to know about buying Colorbond from Bunnings versus professional supply.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Typical Bunnings Colorbond Prices (2025)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-[#006991] text-white">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left">Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Size</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Price Range</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Corrugated Sheet</td>
                    <td className="border border-gray-300 px-4 py-3">0.48mm × 2.4m</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">$35-45</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Corrugated Sheet</td>
                    <td className="border border-gray-300 px-4 py-3">0.48mm × 3.6m</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">$50-65</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Trimdek Sheet</td>
                    <td className="border border-gray-300 px-4 py-3">0.42mm × 2.4m</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">$40-55</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Ridge Capping</td>
                    <td className="border border-gray-300 px-4 py-3">2.4m length</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">$30-40</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Barge Flashing</td>
                    <td className="border border-gray-300 px-4 py-3">2.4m length</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">$25-35</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-lg font-bold mb-3 text-green-800">✓ Bunnings Pros</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Convenient retail locations</li>
                <li>• See products before buying</li>
                <li>• Good for small DIY projects</li>
                <li>• Standard lengths available</li>
                <li>• Price match guarantee</li>
                <li>• Easy returns policy</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-lg font-bold mb-3 text-red-800">✗ Bunnings Cons</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Limited colour range</li>
                <li>• Standard lengths only</li>
                <li>• Higher price per sheet</li>
                <li>• Limited stock for large projects</li>
                <li>• No custom cutting service</li>
                <li>• Transport challenges</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#A4D7F4] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">💰 Price Comparison: Bunnings vs Professional Supply</h3>
            <div className="space-y-3 text-gray-800">
              <p><strong>Example: 150m² roof project</strong></p>
              <p>Bunnings DIY approach:</p>
              <ul className="list-disc pl-6 mb-3">
                <li>Materials from Bunnings: ~$8,000-9,000</li>
                <li>Your time and labour: ~40-60 hours</li>
                <li>Tool hire/purchase: $500-1,000</li>
                <li><strong>Total: $8,500-10,000 + your time</strong></li>
              </ul>
              <p>Professional installation:</p>
              <ul className="list-disc pl-6">
                <li>Materials (trade supply): ~$6,000-7,000</li>
                <li>Professional installation: ~$9,000-12,000</li>
                <li>Warranty and insurance: Included</li>
                <li><strong>Total: $15,000-19,000 fully completed</strong></li>
              </ul>
              <p className="mt-3 font-semibold">
                Professional installation adds $5,000-9,000 but includes expertise, warranty, safety compliance, and faster completion.
              </p>
            </div>
          </div>
        </section>

        <section id="stratco" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#212121]">6. Stratco Colorbond Roof Sheets Price</h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Stratco is a major manufacturer and supplier of Colorbond roofing in Australia. Their pricing typically sits between retail (Bunnings) and direct trade supply.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Stratco Colorbond Sheet Prices (2025 Guide)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-[#006991] text-white">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left">Profile</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Thickness</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Price Per M²</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Corrugated</td>
                    <td className="border border-gray-300 px-4 py-3">0.48mm BMT</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">$28-38</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Trimclad</td>
                    <td className="border border-gray-300 px-4 py-3">0.42mm BMT</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">$32-42</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Longspan</td>
                    <td className="border border-gray-300 px-4 py-3">0.42mm BMT</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">$35-45</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Spandek</td>
                    <td className="border border-gray-300 px-4 py-3">0.42mm BMT</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">$38-48</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              *Prices are material only and vary by colour selection, quantity ordered, and location.
            </p>
          </div>

          <div className="bg-white border-2 border-[#006991] p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Stratco Services &amp; Benefits</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start">
                <span className="text-[#61CE70] mr-2">✓</span>
                <span>Custom cut-to-length service</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#61CE70] mr-2">✓</span>
                <span>Trade and retail pricing available</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#61CE70] mr-2">✓</span>
                <span>Full Colorbond colour range</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#61CE70] mr-2">✓</span>
                <span>Technical support and advice</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#61CE70] mr-2">✓</span>
                <span>Delivery service available</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#61CE70] mr-2">✓</span>
                <span>Complete roofing accessories</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#61CE70] text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">💡 When to Use Stratco</h3>
            <p className="mb-3">
              Stratco is ideal for medium to large DIY projects or when you want trade-quality materials with expert advice. They offer:
            </p>
            <ul className="space-y-2">
              <li>• Better pricing than Bunnings for bulk orders</li>
              <li>• Custom lengths reduce waste and cutting</li>
              <li>• Full colour range including premium options</li>
              <li>• Technical advice for your specific project</li>
            </ul>
          </div>
        </section>

        <section id="replacement" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#212121]">7. Cost of Colorbond Roof Replacement</h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Replacing an existing roof with Colorbond involves additional costs beyond new construction. Here's what to expect for a complete roof replacement project.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Complete Replacement Cost Breakdown</h3>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded border-l-4 border-[#006991]">
                <h4 className="font-bold mb-2">Old Roof Removal</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Tile roof removal: $30-50/m²</li>
                  <li>• Metal roof removal: $20-35/m²</li>
                  <li>• Asbestos removal: $80-150/m² (specialist required)</li>
                  <li>• Waste disposal: $800-2,000</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-[#006991]">
                <h4 className="font-bold mb-2">Structural Assessment &amp; Repairs</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Building inspection: $300-600</li>
                  <li>• Rafter repairs: $50-150/m² (if needed)</li>
                  <li>• New battens: $15-25/m²</li>
                  <li>• Structural upgrades: $2,000-8,000 (if required)</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-[#006991]">
                <h4 className="font-bold mb-2">New Colorbond Installation</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Sarking/membrane: $8-15/m²</li>
                  <li>• Colorbond sheets: $30-50/m²</li>
                  <li>• Installation labour: $40-70/m²</li>
                  <li>• Flashings and trims: $20-35/linear metre</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-[#006991]">
                <h4 className="font-bold mb-2">Additional Replacement Costs</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• New gutters: $30-50/linear metre</li>
                  <li>• Downpipes: $80-150 each</li>
                  <li>• Roof ventilation: $500-1,500</li>
                  <li>• Permits and inspections: $1,000-2,500</li>
                  <li>• Scaffolding: $2,000-6,000</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#006991] text-white p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Typical Replacement Costs by Roof Type</h3>
            <div className="space-y-3">
              <div>
                <p className="font-bold">150m² Tile Roof to Colorbond</p>
                <p>Total cost: <strong>$20,000-32,000</strong></p>
                <p className="text-sm opacity-90">Includes removal, disposal, new Colorbond installation</p>
              </div>
              <div className="border-t border-white/30 pt-3">
                <p className="font-bold">150m² Old Metal Roof to New Colorbond</p>
                <p>Total cost: <strong>$16,000-26,000</strong></p>
                <p className="text-sm opacity-90">Includes removal, disposal, new installation</p>
              </div>
              <div className="border-t border-white/30 pt-3">
                <p className="font-bold">150m² Asbestos Roof to Colorbond</p>
                <p>Total cost: <strong>$28,000-45,000</strong></p>
                <p className="text-sm opacity-90">Includes specialist asbestos removal and disposal</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-lg font-bold mb-3 text-green-800">Benefits of Replacement</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Improved energy efficiency</li>
                <li>✓ Reduced maintenance costs</li>
                <li>✓ 25+ year lifespan</li>
                <li>✓ Increased property value</li>
                <li>✓ Better weather protection</li>
                <li>✓ Lower insurance premiums</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-lg font-bold mb-3 text-blue-800">When to Replace</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Existing roof &gt;20 years old</li>
                <li>• Multiple leaks or damage</li>
                <li>• Cracked or broken tiles</li>
                <li>• Rust on metal roofing</li>
                <li>• Asbestos present</li>
                <li>• Planning renovation</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="installation" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#212121]">8. Colorbond Roof Installation Costs</h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Professional installation is crucial for Colorbond roofing to ensure proper performance and warranty validity. Here's what's included in professional installation costs.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4">What's Included in Installation</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-[#006991] mb-2">Preparation Work</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Site setup and safety equipment</li>
                  <li>Roof measurement and planning</li>
                  <li>Material delivery and handling</li>
                  <li>Weather protection</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#006991] mb-2">Installation Process</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Sarking/membrane installation</li>
                  <li>Sheet laying and fixing</li>
                  <li>Flashing and trim installation</li>
                  <li>Sealing and waterproofing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#006991] mb-2">Finishing Work</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Gutter and downpipe connection</li>
                  <li>Quality inspection</li>
                  <li>Site cleanup</li>
                  <li>Waste removal</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#006991] mb-2">Documentation</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Building permit applications</li>
                  <li>Warranty registration</li>
                  <li>Compliance certificates</li>
                  <li>Maintenance guides</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-[#006991] p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Installation Labour Rates</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-[#006991] text-white">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left">Complexity Level</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Rate Per M²</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Timeline</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Simple (single level, low pitch)</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">$35-50</td>
                    <td className="border border-gray-300 px-4 py-3">3-5 days</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Standard (hip roof, moderate pitch)</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">$50-70</td>
                    <td className="border border-gray-300 px-4 py-3">5-7 days</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Complex (multi-level, steep)</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">$70-90</td>
                    <td className="border border-gray-300 px-4 py-3">7-10 days</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Very complex (commercial/heritage)</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">$90-120</td>
                    <td className="border border-gray-300 px-4 py-3">10-15 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#61CE70] text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Why Professional Installation Matters</h3>
            <div className="space-y-2">
              <p>✓ <strong>Warranty Protection:</strong> Colorbond warranty requires professional installation</p>
              <p>✓ <strong>Building Compliance:</strong> Meets all Australian building codes and standards</p>
              <p>✓ <strong>Safety:</strong> Licensed installers have proper equipment and insurance</p>
              <p>✓ <strong>Quality:</strong> Experienced installers prevent common mistakes</p>
              <p>✓ <strong>Speed:</strong> Professional teams complete work 3-4x faster than DIY</p>
              <p>✓ <strong>Guarantee:</strong> Workmanship warranty typically 5-10 years</p>
            </div>
          </div>
        </section>

        <section id="melbourne" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#212121]">9. Colorbond Roof Installers Near Me (Melbourne)</h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Finding quality Colorbond roof installers in Melbourne is crucial for your project success. Here's what to look for and what to expect.
          </p>

          <div className="bg-[#006991] text-white p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Active Metal Roofing - Melbourne's Colorbond Experts</h3>
            <p className="mb-4">
              With over 22 years of experience, Active Metal Roofing specializes in commercial and industrial Colorbond roofing across Melbourne and surrounding areas.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-bold mb-2">Our Services:</h4>
                <ul className="space-y-1">
                  <li>✓ New Colorbond roof installation</li>
                  <li>✓ Roof replacement and re-roofing</li>
                  <li>✓ Commercial roofing projects</li>
                  <li>✓ Industrial roofing solutions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Why Choose Us:</h4>
                <ul className="space-y-1">
                  <li>✓ Licensed & insured</li>
                  <li>✓ 22+ years experience</li>
                  <li>✓ On-time completion</li>
                  <li>✓ Quality workmanship guarantee</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:0451866494"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#61CE70] text-white font-semibold rounded-md hover:bg-[#50bd5f] transition-all"
              >
                📞 Call 0451 866 494
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#006991] font-semibold rounded-md hover:bg-gray-100 transition-all"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Service Areas - Melbourne Metro &amp; Regions</h3>
            <div className="grid md:grid-cols-3 gap-3 text-gray-700">
              <Link href="/melbourne-cbd" className="hover:text-[#006991]">• Melbourne CBD</Link>
              <Link href="/berwick" className="hover:text-[#006991]">• Berwick</Link>
              <Link href="/cranbourne" className="hover:text-[#006991]">• Cranbourne</Link>
              <Link href="/dandenong" className="hover:text-[#006991]">• Dandenong</Link>
              <Link href="/frankston" className="hover:text-[#006991]">• Frankston</Link>
              <Link href="/langwarrin" className="hover:text-[#006991]">• Langwarrin</Link>
              <Link href="/mornington-peninsula" className="hover:text-[#006991]">• Mornington Peninsula</Link>
              <Link href="/pakenham" className="hover:text-[#006991]">• Pakenham</Link>
              <span>• And surrounding areas</span>
            </div>
          </div>

          <div className="bg-white border-2 border-[#006991] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Choosing a Colorbond Installer - Checklist</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-[#006991] mb-3">Essential Qualifications</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>☑ Licensed plumbing/roofing contractor</li>
                  <li>☑ Public liability insurance ($10M+)</li>
                  <li>☑ Workers compensation insurance</li>
                  <li>☑ Colorbond accreditation</li>
                  <li>☑ Building permits experience</li>
                  <li>☑ Safety certifications (heights)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#006991] mb-3">Red Flags to Avoid</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✗ No license or insurance</li>
                  <li>✗ Cash-only payment demands</li>
                  <li>✗ Large upfront deposits (&gt;20%)</li>
                  <li>✗ Pressure to sign immediately</li>
                  <li>✗ No written contract</li>
                  <li>✗ Reluctant to provide references</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#212121]">10. Frequently Asked Questions (FAQ)</h2>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-[#006991]">How much is a Colorbond roof per m2?</h3>
              <p className="text-gray-700">
                Colorbond roofing costs <strong>$60-150 per m² installed</strong> in Australia (2025). Material-only costs range from $25-50/m², while installation labour adds $35-80/m². The final price depends on roof profile, colour selection, complexity, and location. Simple residential roofs average $70-90/m², while complex commercial projects can reach $120-150/m².
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-[#006991]">How much is a Colorbond roof per square foot?</h3>
              <p className="text-gray-700">
                In imperial measurements, Colorbond roofing costs approximately <strong>$5.60-13.95 per square foot installed</strong>. This converts from the metric pricing of $60-150 per m². Material costs are roughly $2.30-4.65 per sq ft, with installation labour adding $3.25-7.45 per sq ft.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-[#006991]">What is the average cost of a Colorbond roof in Australia?</h3>
              <p className="text-gray-700">
                For an average Australian home (150-200m² roof area), expect to pay <strong>$12,000-30,000</strong> for a complete Colorbond roof installation. A typical 150m² residential roof costs around $15,000-22,500, including materials, labour, flashings, and installation. Replacement projects (removing old roof) add $3,000-8,000 depending on the existing roof type.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-[#006991]">How much does a Colorbond roof cost at Bunnings?</h3>
              <p className="text-gray-700">
                Bunnings sells Colorbond roofing sheets from approximately <strong>$35-65 per sheet</strong> (material only). A 0.48mm corrugated sheet (2.4m) costs around $35-45, while a 3.6m sheet costs $50-65. For a 150m² DIY project, expect to pay $8,000-10,000 in materials from Bunnings, plus your time and tool costs. Professional installation with trade materials typically costs $15,000-22,000 complete.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-[#006991]">What are Stratco Colorbond roof sheet prices?</h3>
              <p className="text-gray-700">
                Stratco Colorbond sheets cost <strong>$28-48 per m²</strong> for materials. Corrugated profiles start at $28-38/m², Trimclad costs $32-42/m², and Spandek ranges from $38-48/m². Stratco offers custom cut-to-length service, full colour range, and better bulk pricing than retail stores. They also provide flashings, trims, and complete roofing accessories.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-[#006991]">How much does Colorbond roof replacement cost?</h3>
              <p className="text-gray-700">
                Complete Colorbond roof replacement costs <strong>$16,000-45,000</strong> depending on existing roof type. Replacing old metal roofing costs $16,000-26,000 (150m²), tile to Colorbond replacement costs $20,000-32,000, and asbestos roof replacement costs $28,000-45,000. Replacement includes old roof removal, structural inspection, repairs if needed, and new Colorbond installation with full warranty.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-[#006991]">Is Colorbond roofing worth the cost?</h3>
              <p className="text-gray-700">
                Yes, Colorbond roofing offers excellent value with a 25+ year lifespan, minimal maintenance, and superior weather protection. While initial costs are higher than some alternatives, Colorbond provides lower long-term costs, better energy efficiency, increased property value, and comprehensive warranty coverage. Most homeowners recover their investment through reduced maintenance and energy savings within 10-15 years.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-[#006991]">Do I need a building permit for a Colorbond roof?</h3>
              <p className="text-gray-700">
                Yes, most Colorbond roofing projects in Australia require a building permit. New installations, replacements, and major repairs need approval from your local council. Your licensed roofing contractor typically handles permit applications as part of their service. Permit costs range from $500-2,500 depending on project scope and location. DIY projects still require permits and compliance inspections.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-[#006991]">How long does Colorbond roof installation take?</h3>
              <p className="text-gray-700">
                Professional Colorbond installation takes <strong>3-10 days</strong> for residential projects. A simple 150m² single-level home takes 3-5 days, standard complexity roofs take 5-7 days, and complex multi-level or commercial projects take 7-15 days. Timeline includes removal of old roofing (if applicable), structural preparation, installation, and final inspections. Weather and site access affect completion time.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-[#006991]">What's included in Colorbond roof installation cost?</h3>
              <p className="text-gray-700">
                Professional installation includes: site setup and safety equipment, sarking/membrane, Colorbond sheets and fixings, flashings and trims, waterproofing and sealing, gutter connections, quality inspections, site cleanup, waste removal, building permits, and workmanship warranty (5-10 years). Get detailed written quotes to confirm all inclusions before signing contracts.
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-[#212121]">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/commercial-metal-roofing-prices" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[#006991] transition-colors">
                    Commercial Metal Roofing Prices Guide
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Complete pricing guide for commercial metal roofing projects in Melbourne.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/blog/how-far-should-metal-roof-overhang-gutters" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[#006991] transition-colors">
                    Metal Roof Overhang Guide
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Expert guidance on proper metal roof overhang measurements for gutters.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/colorbond-roof-replacement" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[#006991] transition-colors">
                    Colorbond Roof Replacement Service
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Professional Colorbond roof replacement services in Melbourne.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#006991] to-[#004d6b] text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Colorbond Roof Project?
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Get a free, no-obligation quote from Melbourne's trusted Colorbond roofing experts. 22 years experience, licensed & insured.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:0451866494"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#61CE70] text-white font-semibold rounded-md hover:bg-[#50bd5f] transition-all shadow-lg text-lg"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call 0451 866 494
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#006991] font-semibold rounded-md hover:bg-gray-100 transition-all shadow-lg text-lg"
            >
              Get Free Quote
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
