import Image from "next/image";

export default function PortraitCta() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/elizabeth_workstation.avif"
              alt="Elizabeth, Lead Designer at Design Consultants of Tampa Bay"
              width={500}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule a personalized design consultation with our expert team. We&apos;ll discuss your vision, budget, and timeline to create the perfect space for you.
            </p>
            <a
              href="/contact?consult=true"
              className="inline-block bg-white text-gray-900 px-8 py-3 border border-gray-300 font-medium hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
