import Image from "next/image";

export default function PortraitCta() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="text-center px-6">
        <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] relative rounded-full mx-auto mb-6 overflow-hidden shadow-lg">
          <Image
            src="/elizabeth_workstation.avif"
            alt="Elizabeth, Lead Designer at Design Consultants of Tampa Bay"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-base md:text-lg font-medium font-serif text-center max-w-md mx-auto">
          Contact us to schedule a design consultation
        </h3>
      </div>
    </section>
  );
}
