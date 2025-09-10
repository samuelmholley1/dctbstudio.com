import Image from "next/image";

export default function PortraitCta() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="text-center px-6">
        <div className="w-[180px] h-[180px] relative rounded-full mx-auto mb-4 overflow-hidden">
          <Image
            src="/elizabeth_workstation.avif"
            alt="Elizabeth, Lead Designer at Design Consultants of Tampa Bay"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-sm font-medium font-serif text-center max-w-md mx-auto">
          Contact us to schedule a design consultation
        </h3>
      </div>
    </section>
  );
}
