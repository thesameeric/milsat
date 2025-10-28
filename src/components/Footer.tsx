import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container mx-auto px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Milsat</h3>
            <p className="text-gray-400 text-sm">
              Turning every corner of Africa into actionable intelligence.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/data/collection" className="hover:text-white transition-colors">Data Collection</Link></li>
              <li><Link href="/data/integration" className="hover:text-white transition-colors">Data Integration</Link></li>
              <li><Link href="/data/sharing" className="hover:text-white transition-colors">Data Sharing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-white/10 mt-12 pt-8 text-sm text-gray-400">
          <p>© 2025 Milsat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
