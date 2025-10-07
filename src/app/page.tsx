import Hero from "@/components/Hero";
import Services from "@/components/Services";
import GalleryRow from "@/components/GalleryRow";
import Testimonial from "@/components/Testimonial";
import PortraitCta from "@/components/PortraitCta";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Logo Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/DCTB_logo.png"
              alt="Design Consultants of Tampa Bay - Full Logo"
              width={400}
              height={200}
              className="h-auto w-auto max-w-sm md:max-w-md lg:max-w-lg"
              priority
            />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto italic">
            Transforming spaces with exceptional interior design and consulting services throughout Tampa Bay. 
            We create beautiful, functional environments that reflect your unique style and enhance your daily life.
          </p>
        </div>
      </section>
      
      <Services />
      <GalleryRow />
      <Testimonial />
      <PortraitCta />
      <ContactForm />
    </div>
  );
}
