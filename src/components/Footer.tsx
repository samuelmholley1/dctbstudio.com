export default function Footer() {
  return (
    <footer className="bg-white mt-16 py-8 border-t border-neutral-100">
      <div className="text-center px-6">
        <div className="space-y-1 mb-4">
          <div>
            <a 
              href="mailto:designconsultantsoftampabay@gmail.com" 
              className="text-xs text-neutral-600 hover:text-black transition-colors"
            >
              designconsultantsoftampabay@gmail.com
            </a>
          </div>
          <div className="text-xs text-neutral-600">
            813-254-6113
          </div>
        </div>
        <div className="text-xs text-neutral-500">
          All images courtesy of Design Consultants of Tampa Bay
        </div>
      </div>
    </footer>
  );
}
