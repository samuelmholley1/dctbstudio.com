import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Wix Banner */}
      <div className="bg-gray-100 text-center py-2 px-4 text-sm">
        This site was designed with the Wix.com website builder. Create your website today.{" "}
        <span className="text-blue-600 underline cursor-pointer">Start Now</span>
      </div>

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
        {/* Placeholder for bedroom image */}
        <div className="absolute inset-0 bg-gray-400 flex items-center justify-center text-gray-600">
          [BEDROOM IMAGE PLACEHOLDER]
        </div>
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
            <div className="bg-gray-300 aspect-square flex items-center justify-center text-gray-600">
              [STAIRCASE IMAGE PLACEHOLDER]
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
            <div className="bg-gray-300 aspect-square flex items-center justify-center text-gray-600">
              [FIREPLACE ROOM IMAGE PLACEHOLDER]
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
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-lg italic text-gray-700 font-serif mb-4">
            "When you have balance in your home, you feel long, well, but more at home."
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
            <div className="w-48 h-56 mx-auto bg-gray-300 flex items-center justify-center text-gray-600 mb-6">
              [DESIGNER PORTRAIT PLACEHOLDER]
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
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-black text-sm"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-black text-sm"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-black text-sm"
              />
            </div>
            <div>
              <textarea
                placeholder="Type your message here..."
                rows={6}
                className="w-full p-3 border border-black text-sm resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 uppercase font-bold text-sm hover:bg-gray-800 transition-colors"
            >
              Submit
            </button>
          </form>
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
