import { ArrowRight, Sparkles } from 'lucide-react';
import { BRAND_DETAILS } from '../data';
import DivineLogo from './DivineLogo';

interface BrandIntroProps {
  onLearnMore: () => void;
}

export default function BrandIntro({ onLearnMore }: BrandIntroProps) {
  return (
    <section
      id="about"
      aria-label="Brand Introduction"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#121110] relative overflow-hidden border-t border-[#25221F]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#C9A86A]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand / Product Visual with marked space for upcoming brand visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#C9A86A]/25 bg-[#1A1816] shadow-2xl">
              {/* Product / Ritual Image */}
              <div className="relative h-80 sm:h-[440px] w-full">
                <img
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop"
                  alt="Atmospheric incense burning during mindful quiet reflection"
                  className="w-full h-full object-cover filter brightness-90 contrast-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-black/20 to-transparent" />

                {/* Explicitly Marked Asset Placeholder Slot (As requested: leave space it will provide later) */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-[#121110]/90 border border-[#C9A86A]/40 backdrop-blur-sm text-[10px] uppercase tracking-wider text-[#E2C799] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
                  <span>Brand Visual Asset Slot</span>
                </div>

                {/* Seal / Emblem Badge */}
                <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3.5 bg-[#121110]/95 backdrop-blur-md border border-[#C9A86A]/40 p-3 sm:p-3.5 rounded-xl max-w-xs shadow-xl">
                  <div className="w-10 h-12 flex-shrink-0">
                    <DivineLogo className="w-10 h-12" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base text-[#FBF8F3]">Divine Fragrance</h3>
                    <p className="text-xs text-[#E2C799]">
                      Divine Fragrance • Devotional Fragrances
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative gold corner flourish */}
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-2 border-b-2 border-[#C9A86A]/40 rounded-br-2xl pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Heading, Description & Learn More CTA */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-[#C9A86A]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Divine Philosophy</span>
            </div>

            <h2
              id="brand-intro-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FBF8F3] leading-tight"
            >
              Fragrance That Creates a Moment.
            </h2>

            <div className="w-16 h-[2px] bg-gradient-to-r from-[#C9A86A] to-transparent" />

            <p className="text-base sm:text-lg text-[#DDD4C6] leading-relaxed font-sans font-light">
              Divine focuses on incense products designed to bring fragrance and a peaceful atmosphere into everyday spaces. Created for prayer, meditation, and quiet contemplation, our fragrances transform surrounding rooms into sanctuaries of calm and spiritual balance.
            </p>

            <p className="text-sm sm:text-base text-[#B8AC9A] leading-relaxed font-sans">
              Whether you are igniting traditional Dhoop Batti for early morning devotion or lighting graceful Agarbatti sticks for evening unwinding, Divine enriches your rituals with comforting warmth.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl border border-[#25221F] bg-[#1A1816]/60">
                <span className="block font-serif text-lg text-[#E2C799]">Prayer & Puja</span>
                <span className="text-xs text-[#B8AC9A]">Sacred devotion & reverence</span>
              </div>
              <div className="p-3.5 rounded-xl border border-[#25221F] bg-[#1A1816]/60">
                <span className="block font-serif text-lg text-[#E2C799]">Everyday Calm</span>
                <span className="text-xs text-[#B8AC9A]">Peaceful home surroundings</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                id="brand-learn-more-btn"
                onClick={onLearnMore}
                className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-[#E2C799] hover:text-[#FBF8F3] border-b border-[#C9A86A] pb-1.5 hover:border-[#FBF8F3] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A]"
              >
                <span>Learn More About Divine</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
