export default function Header() {
  return (
    <header className="h-12 border-b border-neutral-200 bg-white">
      <div className="container mx-auto px-6 md:px-12 h-full flex items-center justify-between max-w-[1320px]">
        <a 
          href="#" 
          className="font-serif text-sm uppercase tracking-[0.06em] font-medium hover:no-underline"
        >
          Design Consultants of Tampa Bay
        </a>
        <div className="text-sm">
          813-254-6113
        </div>
      </div>
    </header>
  );
}
