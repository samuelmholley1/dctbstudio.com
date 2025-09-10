import Image from "next/image";

export default function GalleryRow() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container mx-auto px-6 md:px-12 max-w-[1320px]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          <div className="relative aspect-[4/3] rounded overflow-hidden">
            <Image
              src="/Foyer.jpg"
              alt="Elegant foyer design with custom finishes"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded overflow-hidden">
            <Image
              src="/Mural-1.jpg"
              alt="Hand painted mural showcasing unique artistic finishes"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded overflow-hidden">
            <Image
              src="/Triptech-of-wall-finishes2.jpg"
              alt="Triptych of custom wall finishes and textures"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
