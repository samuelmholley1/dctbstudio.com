import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[40vh] md:h-[min(48vh,420px)] overflow-hidden">
      <Image
        src="/Hero-image.jpg"
        alt="Elegant bedroom interior by Design Consultants of Tampa Bay"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Subtle gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/5"></div>
      
      {/* Centered overlay content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-[0.06em] font-bold drop-shadow-lg mb-3">
            Design Consultants of Tampa Bay
          </h1>
          <p className="font-serif text-[0.85rem] md:text-sm italic drop-shadow">
            Creating elegant interiors
          </p>
        </div>
      </div>
    </section>
  );
}
