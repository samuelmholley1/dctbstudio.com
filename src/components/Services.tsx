import Image from "next/image";

export default function Services() {
  return (
    <section className="bg-white">
      {/* Service Block 1 */}
      <div className="container mx-auto px-6 md:px-12 py-10 md:py-14 max-w-[1320px]">
        <div className="grid grid-cols-12 gap-x-8 items-start">
          <div className="col-span-12 md:col-span-6 mb-8 md:mb-0">
            <div className="relative aspect-[4/3] rounded shadow-sm overflow-hidden">
              <Image
                src="/hallway.jpg"
                alt="Elegant hallway design showcasing architectural details"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <h2 className="font-serif text-sm md:text-base font-semibold uppercase tracking-[0.04em] mb-4">
              Design Consultants of Tampa Bay
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-[0.92rem] leading-[1.35] text-neutral-700">
              <li>Full service interior design</li>
              <li>High quality interior products available for purchase</li>
              <li>Custom designed interiors</li>
              <li>Unique finishes</li>
              <li>Budget-conscious</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Block 2 */}
      <div className="container mx-auto px-6 md:px-12 py-10 md:py-14 max-w-[1320px] border-t border-neutral-100">
        <div className="grid grid-cols-12 gap-x-8 items-start">
          <div className="col-span-12 md:col-span-6 mb-8 md:mb-0">
            <div className="relative aspect-[4/3] rounded shadow-sm overflow-hidden">
              <Image
                src="/living-room.jpg"
                alt="Beautiful living room interior with custom furniture design"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <h2 className="font-serif text-sm md:text-base font-semibold uppercase tracking-[0.04em] mb-4">
              Personal design services include:
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-[0.92rem] leading-[1.35] text-neutral-700">
              <li>Custom furniture design</li>
              <li>Hand painted finishes</li>
              <li>Window treatments</li>
              <li>Accessories and accents</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
