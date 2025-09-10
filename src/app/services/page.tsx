import Image from 'next/image'

export const metadata = {
  title: "Services - Design Consultants of Tampa Bay",
  description: "Comprehensive interior design services including residential design, commercial spaces, custom furniture, and design consultations in Tampa Bay.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From complete home makeovers to single room refreshes, we offer comprehensive interior design services tailored to your needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Residential Design */}
            <div className="flex flex-col">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mb-6">
                <Image
                  src="/living-room.jpg"
                  alt="Residential interior design"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Residential Design</h2>
              <p className="text-gray-600 mb-4 flex-grow">
                Transform your home into a reflection of your personal style. We work with you to create beautiful, functional living spaces that enhance your daily life and increase your home's value.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#A7C957' }}></span>
                  Complete home makeovers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#A7C957' }}></span>
                  Single room designs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#A7C957' }}></span>
                  Kitchen and bathroom remodels
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#A7C957' }}></span>
                  Color consultations
                </li>
              </ul>
            </div>

            {/* Commercial Design */}
            <div className="flex flex-col">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mb-6">
                <Image
                  src="/Foyer.jpg"
                  alt="Commercial interior design"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Commercial Design</h2>
              <p className="text-gray-600 mb-4 flex-grow">
                Create professional environments that inspire productivity and impress clients. Our commercial design services help businesses make a lasting impression through thoughtful interior design.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Office space planning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Retail environments
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Restaurant and hospitality
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Brand-aligned design
                </li>
              </ul>
            </div>

            {/* Custom Furniture */}
            <div className="flex flex-col">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mb-6">
                <Image
                  src="/elizabeth_workstation.avif"
                  alt="Custom furniture design"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Custom Furniture & Finishes</h2>
              <p className="text-gray-600 mb-4 flex-grow">
                Get exactly what you envision with our custom furniture and finish services. We work with skilled craftspeople to create unique pieces that perfectly fit your space and style.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Built-in cabinetry
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Custom furniture pieces
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Unique wall finishes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Window treatments
                </li>
              </ul>
            </div>

            {/* Design Consultation */}
            <div className="flex flex-col">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mb-6">
                <Image
                  src="/hallway.jpg"
                  alt="Design consultation"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Design Consultation</h2>
              <p className="text-gray-600 mb-4 flex-grow">
                Get professional guidance and fresh ideas for your space. Our consultation services are perfect for DIY enthusiasts who want expert advice before tackling their own projects.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Space planning advice
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Color and material selection
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Furniture arrangement
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Budget planning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Design Process</h2>
            <p className="text-xl text-gray-600">
              A proven approach that ensures exceptional results every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">
                We start with a detailed consultation to understand your vision, needs, and budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600 text-sm">
                Our team creates detailed design plans, mood boards, and 3D renderings for your approval.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">
                We manage all aspects of the project, from procurement to installation and styling.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reveal</h3>
              <p className="text-gray-600 text-sm">
                We complete the final styling touches and reveal your beautifully transformed space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your project and see how we can bring your vision to life.
          </p>
          <a
            href="/contact?consult=true"
            className="inline-block text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{ background: 'linear-gradient(135deg, #A7C957 0%, #E63973 100%)' }}
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </section>
    </div>
  )
}
