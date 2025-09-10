import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import GalleryRow from "@/components/GalleryRow";
import Testimonial from "@/components/Testimonial";
import PortraitCta from "@/components/PortraitCta";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <GalleryRow />
      <Testimonial />
      <PortraitCta />
      <ContactForm />
      <Footer />
    </div>
  );
}
