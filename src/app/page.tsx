import Hero from "@/components/Hero";
import Services from "@/components/Services";
import GalleryRow from "@/components/GalleryRow";
import Testimonial from "@/components/Testimonial";
import PortraitCta from "@/components/PortraitCta";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <GalleryRow />
      <Testimonial />
      <PortraitCta />
      <ContactForm />
    </div>
  );
}
