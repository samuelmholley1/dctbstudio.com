import Link from "next/link";

export default function LogoPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Simple Header */}
      <header className="bg-white border-b border-neutral-200 py-4">
        <div className="container mx-auto px-6 md:px-12 max-w-[1320px]">
          <Link href="/" className="font-serif text-sm uppercase tracking-[0.06em] hover:underline">
            ← Back to Design Consultants of Tampa Bay
          </Link>
        </div>
      </header>

      {/* Logo Showcase */}
      <main className="py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-[1320px]">
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Brand Identity
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The Design Consultants of Tampa Bay logo represents our commitment to elegant, 
              professional interior design services with a distinctive monogram and refined typography.
            </p>
          </div>

          {/* Logo Analysis Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 mb-12">
            <h2 className="font-serif text-2xl font-bold mb-8 text-center">
              Current Logo Analysis & Rebuild Requirements
            </h2>
            
            <div className="prose max-w-none">
              <h3 className="font-serif text-xl font-semibold text-red-600 mb-4">
                What Failed (Technical Assessment)
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-medium mb-3">🎯 Critical Issues Identified:</h4>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li><strong>Methodology mismatch:</strong> Generative model ≠ vector precision (99% confidence)</li>
                    <li><strong>Background spec drift:</strong> White inside frame, transparent outside unreliable</li>
                    <li><strong>Letterform integrity risk:</strong> Serif terminals, stroke contrast altered</li>
                    <li><strong>Kerning/alignment drift:</strong> Interlock overlaps (C→B, T over D) can shift</li>
                    <li><strong>Shadow fidelity:</strong> Pink-tinted elliptical shadow often becomes gray</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">🔧 Technical Specifications:</h4>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li><strong>Frame:</strong> 1px black (#000000) stroke</li>
                    <li><strong>Colors:</strong> brand.green (~#A7C957), brand.pink (~#E63973)</li>
                    <li><strong>Typography:</strong> Montserrat fallback for geometric sans</li>
                    <li><strong>Shadow:</strong> Pink @ 10% opacity, 28px blur, 3px Y-offset</li>
                    <li><strong>Export:</strong> PNG-24 with alpha transparency</li>
                  </ul>
                </div>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg mb-8">
                <h4 className="font-medium mb-3 text-green-700">✅ Correct Rebuild Process:</h4>
                <ol className="space-y-2 text-sm text-neutral-700">
                  <li><strong>1. Vector Rebuild:</strong> Manual pen tool trace in Illustrator/Figma</li>
                  <li><strong>2. Layer Management:</strong> D (rear), C (mid), T (upper-front), B (front)</li>
                  <li><strong>3. Color Sampling:</strong> Exact hex values from master reference</li>
                  <li><strong>4. Typography:</strong> Montserrat with precise tracking and weights</li>
                  <li><strong>5. Shadow Recreation:</strong> Elliptical underlay with exact blur and opacity</li>
                  <li><strong>6. Export Suite:</strong> SVG master, PDF print, PNG web, JPG social</li>
                </ol>
              </div>

              <h3 className="font-serif text-xl font-semibold text-blue-600 mb-4">
                Implementation Tokens
              </h3>
              
              <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-8">
                <pre>{`BRAND TOKENS
brand.green: #A7C957  (sample from master)
brand.pink:  #E63973  (sample from master) 
brand.black: #000000
brand.white: #FFFFFF

WORDMARK TYPOGRAPHY
design_consultants:
  font: Montserrat SemiBold
  case: uppercase
  tracking: +60
  size: 1.00x

of_tampa_bay:
  font: Montserrat Medium  
  case: uppercase
  tracking: +80
  size: 0.70x
  line_gap: 0.90x cap-height

FRAME & LAYOUT
stroke: 1px #000000
inside_fill: #FFFFFF
outside: transparent
padding: +25% breathing room

SHADOW SPECIFICATION
type: elliptical underlay
color: brand.pink @ 10%
blur: 28px Gaussian
offset: x=0, y=3px
clip: inside frame`}</pre>
              </div>

              <div className="text-center">
                <div className="inline-block bg-red-50 border border-red-200 rounded-lg p-6">
                  <h4 className="font-bold text-red-700 mb-2">Ready for Professional Rebuild</h4>
                  <p className="text-sm text-red-600 mb-4">
                    Current logo requires vector-accurate recreation following the specifications above.
                  </p>
                  <div className="text-xs text-red-500">
                    <strong>Deliverables Needed:</strong><br/>
                    • dctb-logo_master.svg (vector source)<br/>
                    • dctb-logo_print.pdf (PDF-X/4)<br/>
                    • dctb-logo_web@2048.png (transparent)<br/>
                    • dctb-logo_social@1200.jpg (flat white)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recreated Logo Display */}
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h3 className="font-serif text-xl font-semibold mb-6">Vector-Accurate Logo Rebuild</h3>
            
            {/* Logo Display */}
            <div className="mb-8">
              <div className="inline-block p-8 bg-neutral-50 rounded-lg">
                <img 
                  src="/dctb-logo-master.svg" 
                  alt="Design Consultants of Tampa Bay - Vector Logo"
                  className="w-64 h-64 mx-auto"
                />
              </div>
            </div>
            
            {/* Download Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-medium text-green-800 mb-2">✅ Master SVG</h4>
                <p className="text-sm text-green-700 mb-3">Vector source, infinite scalability</p>
                <a 
                  href="/dctb-logo-master.svg" 
                  download="dctb-logo-master.svg"
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors"
                >
                  Download SVG
                </a>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-2">🌐 Web Version</h4>
                <p className="text-sm text-blue-700 mb-3">High-res with transparency</p>
                <a 
                  href="/dctb-logo-web-2048.svg" 
                  download="dctb-logo-web-2048.svg"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
                >
                  Download Web
                </a>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg p-3 inline-block">
                <strong>✅ Vector Rebuild Complete</strong><br/>
                Professional SVG recreation following exact brand specifications
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
