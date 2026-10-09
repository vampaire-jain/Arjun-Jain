import DivineLogo from './DivineLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onExploreProduct: (categoryName: string) => void;
}

export default function Footer({ onNavigate, onExploreProduct }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      aria-label="Footer"
      className="bg-[#0C0B0A] border-t border-[#25221F] text-[#DDD4C6] pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#25221F]">
          {/* Column 1: Brand Info (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-12 flex-shrink-0">
                <DivineLogo className="w-10 h-12" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-semibold tracking-wider text-[#FBF8F3]">
                  DIVINE
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#E2C799]">
                  Divine fragrance
                </span>
              </div>
            </div>

            <p className="text-sm text-[#B8AC9A] leading-relaxed font-light font-sans max-w-sm">
              Devotional and ambient fragrances crafted for moments of prayer, meditation, and serene living.
            </p>

            <div className="pt-2 text-xs text-[#B8AC9A] space-y-1">
              <span className="block font-medium text-[#E2C799]">Industry:</span>
              <p>Incense • Devotional Fragrance • Home Fragrance</p>
            </div>
          </div>

          {/* Column 2: Navigation Links (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2C799] font-sans">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#C9A86A] transition-colors focus:outline-none focus-visible:underline"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#C9A86A] transition-colors focus:outline-none focus-visible:underline"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#C9A86A] transition-colors focus:outline-none focus-visible:underline"
                >
                  About Divine
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('values')}
                  className="hover:text-[#C9A86A] transition-colors focus:outline-none focus-visible:underline"
                >
                  Brand Values
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('experience')}
                  className="hover:text-[#C9A86A] transition-colors focus:outline-none focus-visible:underline"
                >
                  Experience
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Products Links (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2C799] font-sans">
              Products
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onExploreProduct('3 inch stick')}
                  className="hover:text-[#C9A86A] transition-colors text-left focus:outline-none focus-visible:underline text-[#E2C799] font-medium"
                >
                  3 Inch Stick
                  <span className="block text-xs text-[#B8AC9A]">7 fragrances (Rose, Sandal, Oudh, etc.)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onExploreProduct('sambarani-cup')}
                  className="hover:text-[#C9A86A] transition-colors text-left focus:outline-none focus-visible:underline"
                >
                  Sambarani Cup
                  <span className="block text-xs text-[#B8AC9A]">Kacha Chandan sambrani cup</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onExploreProduct('wet-dhoop')}
                  className="hover:text-[#C9A86A] transition-colors text-left focus:outline-none focus-visible:underline"
                >
                  Wet Dhoop
                  <span className="block text-xs text-[#B8AC9A]">Garima Guggal moist resin</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onExploreProduct('thin-stick-in-4-inch')}
                  className="hover:text-[#C9A86A] transition-colors text-left focus:outline-none focus-visible:underline"
                >
                  Thin Stick in 4 Inch
                  <span className="block text-xs text-[#B8AC9A]">Kacha Guggal slender dhoop</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onExploreProduct('dhoop-batti')}
                  className="hover:text-[#C9A86A] transition-colors text-left focus:outline-none focus-visible:underline"
                >
                  Dhoop Batti
                  <span className="block text-xs text-[#B8AC9A]">Traditional incense roll</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onExploreProduct('agarbatti')}
                  className="hover:text-[#C9A86A] transition-colors text-left focus:outline-none focus-visible:underline"
                >
                  Agarbatti
                  <span className="block text-xs text-[#B8AC9A]">Slender incense sticks</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onExploreProduct('zipper-pack')}
                  className="hover:text-[#C9A86A] transition-colors text-left focus:outline-none focus-visible:underline"
                >
                  Zipper Packs
                  <span className="block text-xs text-[#B8AC9A]">Freshness sealed pouches</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2C799] font-sans">
              Contact & Inquiries
            </h4>

            {/* Direct Contact Details */}
            <div className="p-3.5 rounded-xl border border-[#25221F] bg-[#1A1816]/70 text-xs space-y-2.5">
              <div>
                <span className="text-[11px] font-semibold text-[#E2C799] uppercase tracking-wider block">
                  Product Manager
                </span>
                <div className="mt-1 flex flex-col gap-1 text-[#DDD4C6]">
                  <a href="tel:9548850930" className="hover:text-[#C9A86A] transition-colors inline-flex items-center gap-1.5">
                    <span>9548850930</span>
                  </a>
                  <a href="tel:9719925030" className="hover:text-[#C9A86A] transition-colors inline-flex items-center gap-1.5">
                    <span>9719925030</span>
                  </a>
                  <a href="tel:9458454615" className="hover:text-[#C9A86A] transition-colors inline-flex items-center gap-1.5">
                    <span>9458454615</span>
                  </a>
                </div>
              </div>

              <div className="pt-1.5 border-t border-[#25221F]">
                <p className="text-[#B8AC9A]">
                  Inquiries:{' '}
                  <a
                    href="mailto:arjunjain12359@gmail.com"
                    className="text-[#DDD4C6] underline hover:text-[#C9A86A] transition-colors break-all"
                  >
                    <span>arjunjain12359@gmail.com</span>
                  </a>
                </p>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-[#E2C799] uppercase tracking-wider block">
                Social Media Channels
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <a
                  href="https://instagram.com/divinefragnancee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-[#1A1816] border border-[#25221F] text-[#DDD4C6] hover:text-[#C9A86A] hover:border-[#C9A86A]/40 transition-colors inline-block"
                >
                  <span>@divinefragnancee</span>
                </a>
                <span className="px-2.5 py-1 rounded bg-[#1A1816] border border-[#25221F] text-[#B8AC9A]">
                  Facebook
                </span>
                <span className="px-2.5 py-1 rounded bg-[#1A1816] border border-[#25221F] text-[#B8AC9A]">
                  YouTube
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B8AC9A]">
          <p>© {currentYear} Divine Fragrance. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#DDD4C6] cursor-pointer transition-colors">
              Privacy Policy (Pending)
            </span>
            <span>•</span>
            <span className="hover:text-[#DDD4C6] cursor-pointer transition-colors">
              Terms &amp; Conditions (Pending)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
