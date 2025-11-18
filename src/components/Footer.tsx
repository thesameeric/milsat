import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Milsat</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Turning every corner of Africa into actionable intelligence.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Product</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li><Link href="/data/collection" className="hover:text-white transition-colors">Data Collection</Link></li>
              <li><Link href="/data/integration" className="hover:text-white transition-colors">Data Integration</Link></li>
              <li><Link href="/data/sharing" className="hover:text-white transition-colors">Data Sharing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Legal</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 text-xs sm:text-sm text-gray-400">
          <p>© 2025 Milsat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
