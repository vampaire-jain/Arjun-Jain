import { Sparkles, ArrowRight } from 'lucide-react';

interface ExperienceSectionProps {
  onExploreCollection: () => void;
}

export default function ExperienceSection({ onExploreCollection }: ExperienceSectionProps) {
  const sensoryMoods = [
    { label: 'Peace', desc: 'Tranquil quietude' },
    { label: 'Warmth', desc: 'Comforting ambience' },
    { label: 'Spiritual Ambience', desc: 'Reverent sacred space' },
    { label: 'Calm', desc: 'Stillness of mind' },
    { label: 'Fragrance', desc: 'Delicate soothing aroma' },
  ];

  return (
    <section
      id="experience"
      aria-label="Sensory Experience"
      className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0C0B0A]"
    >
      {/* Background Visual: incense smoke moving through a warm peaceful environment */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop"
          alt="Peaceful atmospheric ambient sanctuary with gentle light and calm warmth"
          className="w-full h-full object-cover filter brightness-[0.38] contrast-110"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        {/* Deep charcoal and warm golden overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B0A] via-black/50 to-[#0C0B0A]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,106,0.12),transparent_70%)]" />

        {/* Ambient smoke drift animations */}
        <div className="absolute top-1/3 left-1/4 w-48 h-96 bg-gradient-to-t from-[#EFEAE2]/15 to-transparent rounded-full blur-3xl animate-smoke-1 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-80 bg-gradient-to-t from-[#C9A86A]/10 to-transparent rounded-full blur-3xl animate-smoke-2 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#C9A86A]/40 bg-[#121110]/80 backdrop-blur-md text-xs font-sans uppercase tracking-[0.25em] text-[#E2C799]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Atmospheric Sanctuary</span>
        </div>

        <h2
          id="experience-heading"
          className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#FBF8F3] leading-tight"
        >
          Let the Fragrance Set the Mood.
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#DDD4C6] leading-relaxed font-light font-sans">
          As delicate wisps of fragrant smoke gently swirl into the air, surroundings quieten and everyday worries dissolve into serene stillness.
        </p>

        {/* Sensory Mood Pills (Peace, Warmth, Spiritual ambience, Calm, Fragrance) */}
        <div className="flex flex-wrap justify-center gap-3 pt-2 max-w-3xl mx-auto">
          {sensoryMoods.map((mood, idx) => (
            <div
              key={idx}
              className="px-4 py-2 rounded-full border border-[#C9A86A]/20 bg-[#121110]/60 backdrop-blur-sm flex flex-col items-center"
            >
              <span className="text-xs uppercase tracking-widest text-[#E2C799] font-medium">
                {mood.label}
              </span>
              <span className="text-[10px] text-[#B8AC9A] font-light">
                {mood.desc}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-4">
          <button
            id="experience-collection-cta"
            onClick={onExploreCollection}
            className="px-9 py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-[#121110] bg-gradient-to-r from-[#C9A86A] via-[#E2C799] to-[#C9A86A] hover:brightness-110 active:scale-98 transition duration-300 shadow-2xl shadow-[#C9A86A]/20 inline-flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A]"
          >
            <span>Explore the Collection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
