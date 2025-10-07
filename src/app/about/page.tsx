import Image from 'next/image'

export const metadata = {
  title: "About - Design Consultants of Tampa Bay",
  description: "Learn about our team of experienced interior designers and our passion for creating beautiful, functional spaces in Tampa Bay.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Design Consultants of Tampa Bay
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are passionate interior designers dedicated to transforming spaces and creating environments that reflect your unique style and enhance your daily life.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded with a vision to bring exceptional interior design to Tampa Bay, Design Consultants has been transforming homes and office spaces for over a decade. Our team combines creativity with functionality to deliver spaces that are both beautiful and functional.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that great design should be accessible to everyone, which is why we offer budget-conscious solutions without compromising on quality or style. Every project is a collaboration between our designers and our clients, ensuring that the final result truly reflects your vision.
              </p>
              <p className="text-gray-600">
                From concept to completion, we handle every aspect of your interior design project with professionalism, attention to detail, and a commitment to excellence that has made us Tampa Bay&apos;s trusted design consultants.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/living-room.jpg"
                alt="Our design work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Elizabeth</h2>
            <p className="text-xl text-gray-600">
              Experienced designer passionate about creating beautiful spaces
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Team Photo Coming Soon</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lead Designer</h3>
                <p className="text-gray-600 mb-4">
                  With over 15 years of experience, our lead designer brings expertise in residential and commercial interior design.
                </p>
                <p className="text-sm text-gray-500">Interior Design, Project Management</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Team Photo Coming Soon</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Senior Consultant</h3>
                <p className="text-gray-600 mb-4">
                  Specializing in space planning and color coordination, bringing fresh perspectives to every project.
                </p>
                <p className="text-sm text-gray-500">Space Planning, Color Theory</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Team Photo Coming Soon</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Design Associate</h3>
                <p className="text-gray-600 mb-4">
                  Focused on sustainable design practices and innovative solutions for modern living spaces.
                </p>
                <p className="text-sm text-gray-500">Sustainable Design, Modern Interiors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #A7C957 0%, #E63973 100%)' }}>
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality, using only the finest materials and partnering with trusted suppliers and craftspeople.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-gray-200">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Client-Centered</h3>
              <p className="text-gray-600">
                Your vision is our priority. We listen carefully and work collaboratively to bring your dream space to life.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-gray-200">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Budget Conscious</h3>
              <p className="text-gray-600">
                Beautiful design shouldn&apos;t break the bank. We offer solutions for every budget without sacrificing style or quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
