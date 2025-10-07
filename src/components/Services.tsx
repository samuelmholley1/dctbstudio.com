import Image from "next/image";

export default function Services() {
  return (
    <section className="bg-white">
      {/* Service Block 1 - Foyer with staircase */}
      <div className="container mx-auto px-6 md:px-12 py-10 md:py-14 max-w-[1320px]">
        <div className="grid grid-cols-12 gap-x-8 items-start">
          <div className="col-span-12 md:col-span-6 mb-8 md:mb-0">
            <div className="relative aspect-[4/3] rounded shadow-sm overflow-hidden">
              <Image
                src="/Foyer.jpg"
                alt="Elegant foyer with staircase design"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <h2 className="font-serif text-lg md:text-xl font-bold uppercase tracking-[0.04em] mb-6 leading-tight">
              Design Consultants of<br />Tampa Bay
            </h2>
            <h3 className="font-serif text-base md:text-lg font-semibold mb-4">
              A full service studio offering:
            </h3>
            <ul className="space-y-2 text-[0.92rem] leading-[1.4] text-neutral-700">
              <li>• High-end design solutions for home or office</li>
              <li>• Color & design consultation</li>
              <li>• Green products</li>
              <li>• Energy efficient practices</li>
            </ul>
            <p className="mt-6 text-[0.92rem] leading-[1.5] text-neutral-700">
              Design Consultants of Tampa Bay is known for crafting interiors blending modern style with intentional living, transforming residential and commercial spaces into environments that reflect individuality, elegance and comfort.
            </p>
          </div>
        </div>
      </div>

      {/* Service Block 2 - Living room with description on left */}
      <div className="container mx-auto px-6 md:px-12 py-10 md:py-14 max-w-[1320px] border-t border-neutral-100">
        <div className="grid grid-cols-12 gap-x-8 items-start">
          <div className="col-span-12 md:col-span-6 mb-8 md:mb-0">
            <h3 className="font-serif text-base md:text-lg font-semibold mb-4">
              Working with DC of Tampa Bay, clients can expect:
            </h3>
            <ul className="space-y-2 text-[0.92rem] leading-[1.4] text-neutral-700">
              <li>• Original interior design solutions</li>
              <li>• Commitment to excellence</li>
              <li>• Rewarding customer experience</li>
              <li>• Record of design success</li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="relative aspect-[4/3] rounded shadow-sm overflow-hidden">
              <Image
                src="/living-room.jpg"
                alt="Beautiful living room interior with fireplace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
