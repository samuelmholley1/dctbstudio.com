import Link from "next/link";

export default function Header() {
  return (
    <header className="h-12 border-b border-neutral-200 bg-white">
      <div className="container mx-auto px-6 md:px-12 h-full flex items-center justify-between max-w-[1320px]">
        <Link 
          href="/" 
          className="font-serif text-sm uppercase tracking-[0.06em] font-medium hover:no-underline"
        >
          Design Consultants of Tampa Bay
        </Link>
        <div className="flex items-center space-x-6">
          <div className="text-sm">
            813-254-6113
          </div>
        </div>
      </div>
    </header>
  );
}
