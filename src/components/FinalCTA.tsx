import { Sparkles, ArrowRight } from 'lucide-react';
import { BRAND_DETAILS } from '../data';

interface FinalCTAProps {
  onExploreProducts: () => void;
}

export default function FinalCTA({ onExploreProducts }: FinalCTAProps) {
  return (
    <section
      id="final-cta"
      aria-label="Final Invitation"
      className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0C0B0A] relative overflow-hidden border-t border-[#25221F]"
    >
      {/* Background warm radial highlights & subtle smoke */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#C9A86A]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-[#5C4537]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative smoke drift */}
      <div className="absolute top-10 right-1/4 w-32 h-64 bg-gradient-to-t from-[#EFEAE2]/10 to-transparent rounded-full blur-2xl animate-smoke-1 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Sacred Brand Mark */}
        <div className="w-14 h-14 mx-auto rounded-full border border-[#C9A86A]/40 bg-[#1A1816] flex items-center justify-center font-serif text-2xl font-bold text-[#E2C799] shadow-lg shadow-black/60">
          D
        </div>

        <h2
          id="final-cta-heading"
          className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#FBF8F3] leading-[1.15]"
        >
          {BRAND_DETAILS.closingHeading}
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#DDD4C6] leading-relaxed font-light font-sans">
          {BRAND_DETAILS.closingText}
        </p>

        <div className="pt-2">
          <button
            id="final-explore-products-btn"
            onClick={onExploreProducts}
            className="px-10 py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-[#121110] bg-gradient-to-r from-[#C9A86A] via-[#E2C799] to-[#C9A86A] hover:brightness-110 active:scale-98 transition duration-300 shadow-2xl shadow-[#C9A86A]/20 inline-flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A]"
          >
            <Sparkles className="w-4 h-4 text-[#121110]" />
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4 text-[#121110]" />
          </button>
        </div>

        {/* Quiet assurance note */}
        <p className="text-xs text-[#B8AC9A] tracking-wider uppercase pt-4 font-sans">
          Divine • Dhoop Batti & Agarbatti
        </p>
      </div>
    </section>
  );
}
