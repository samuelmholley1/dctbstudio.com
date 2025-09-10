import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <Image
        src="/Hero-image.jpg"
        alt="Elegant bedroom interior by Design Consultants of Tampa Bay"
        width={1920}
        height={1080}
        className="w-full h-auto object-contain"
        priority
        sizes="100vw"
      />
      {/* Subtle gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
      
      {/* Centered overlay content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.06em] font-bold drop-shadow-lg mb-3">
            Design Consultants of Tampa Bay
          </h1>
          <p className="font-serif text-[0.85rem] md:text-sm lg:text-base italic drop-shadow">
            Creating elegant interiors
          </p>
        </div>
      </div>
    </section>
  );
}
