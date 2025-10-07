import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <Image
          src="/Hero-image.jpg"
          alt="Elegant bedroom interior by Design Consultants of Tampa Bay"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain min-h-[75vh] md:min-h-[70vh] lg:min-h-[65vh]"
          priority
          sizes="100vw"
        />
      </div>

      {/* Subtle gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
      
      {/* Centered overlay content with proper bounds */}
      <div className="absolute inset-0 flex items-start justify-center pt-[10%] px-[15%]">
        <div className="text-center text-white w-full">
          <h1 className="font-serif uppercase tracking-[0.06em] md:tracking-[0.03em] lg:tracking-[0.02em] font-bold drop-shadow-lg mb-3 leading-tight whitespace-nowrap" style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)' }}>
            Design Consultants of Tampa Bay
          </h1>
          <p className="font-serif italic drop-shadow tracking-wide md:tracking-wider" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1rem)' }}>
            Crafting elegant interiors since 2015
          </p>
        </div>
      </div>
    </section>
  );
}
