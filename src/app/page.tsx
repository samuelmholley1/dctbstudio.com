import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-sm font-bold uppercase">
            DESIGN CONSULTANTS OF TAMPA BAY
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <a href="#" className="text-sm uppercase hover:underline">Home</a>
              <a href="#" className="text-sm uppercase hover:underline">See Our Clients</a>
            </nav>
            <div className="text-sm">Tel: 813-254-6113</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] bg-gray-300 flex items-center justify-center">
        <Image
          src="/Hero-image.jpg"
          alt="Elegant interior design by Design Consultants of Tampa Bay"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-3xl md:text-4xl font-serif uppercase mb-4">
            DESIGN CONSULTANTS OF TAMPA BAY
          </h1>
          <p className="text-lg md:text-xl italic font-serif">
            Creating elegant interiors
          </p>
        </div>
      </section>

      {/* Body Section 1 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square">
              <Image
                src="/hallway.jpg"
                alt="Elegant hallway design showcasing architectural details"
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-serif font-bold uppercase mb-6">
                DESIGN CONSULTANTS OF TAMPA BAY
              </h2>
              <ul className="space-y-3 text-base leading-relaxed">
                <li>• Full service interior design</li>
                <li>• High quality interior products available for purchase</li>
                <li>• Custom designed interiors</li>
                <li>• Unique finishes</li>
                <li>• Budget-conscious</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Body Section 2 */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square">
              <Image
                src="/living-room.jpg"
                alt="Beautiful living room interior with custom furniture design"
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold mb-4">
                Personal design services include:
              </h3>
              <ul className="space-y-2 text-base">
                <li>• Custom furniture design</li>
                <li>• Hand painted finishes</li>
                <li>• Window treatments</li>
                <li>• Accessories and accents</li>
              </ul>
            </div>
          </div>
          
          {/* Additional showcase images */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="relative aspect-[4/3]">
              <Image
                src="/Foyer.jpg"
                alt="Elegant foyer design with custom finishes"
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/Mural-1.jpg"
                alt="Hand painted mural showcasing unique artistic finishes"
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/Triptech-of-wall-finishes2.jpg"
                alt="Triptych of custom wall finishes and textures"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-lg italic text-gray-700 font-serif mb-4">
            &ldquo;When you have balance in your home, you feel long, well, but more at home.&rdquo;
          </blockquote>
          <cite className="text-sm italic font-serif text-gray-600">
            — DCTB Client
          </cite>
        </div>
      </section>

      {/* Portrait Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-48 h-56 mx-auto relative mb-6">
              <Image
                src="/elizabeth_workstation.avif"
                alt="Elizabeth, Lead Designer at Design Consultants of Tampa Bay"
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <h3 className="text-xl font-serif font-bold">
              Contact us to schedule a design consultation
            </h3>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-lg mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center bg-gray-100">
        <div className="space-y-2">
          <div>
            <a href="mailto:designconsultantsoftampabay@gmail.com" className="text-sm hover:underline">
              designconsultantsoftampabay@gmail.com
            </a>
          </div>
          <div className="text-sm">813-254-6113</div>
          <div className="text-xs text-gray-600 mt-4">
            All images courtesy of Design Consultants of Tampa Bay
          </div>
        </div>
      </footer>
    </div>
  );
}
