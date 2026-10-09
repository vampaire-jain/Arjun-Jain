import { useRef, useEffect } from 'react';
import { Sparkles, Compass, ArrowDown } from 'lucide-react';
import Typewriter from './Typewriter';
import DivineLogo from './DivineLogo';
import { HERO_VIDEO, HERO_BACKUP_STREAM } from '../config';
import heroPackagingImage from '../assets/images/regenerated_image_1790071751371.jpg';

interface HeroProps {
  onExploreProducts: () => void;
  onDiscoverBrand: () => void;
}

export default function Hero({ onExploreProducts, onDiscoverBrand }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Attempt autoplay reliably across mobile and modern browser policies
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {
        // Autoplay may be restricted in some battery-saver modes
      });
    }
  }, []);

  return (
    <section
      id="hero"
      aria-label="Divine Incense Hero"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0C0B0A]"
    >
      {/* =========================================================================
          HERO BACKGROUND VIDEO (Autoplay, Muted, Loop, Playsinline, Object-fit Cover)
          Strictly video-only background - no static photo in background.
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-90 transition-opacity duration-700"
        >
          {/* Primary configured user path */}
          <source src={HERO_VIDEO} type="video/mp4" />
          {/* Windows URI scheme alternative for local execution */}
          <source src="file:///E:/Arjun%20jain/syndicate%20colony" type="video/mp4" />
          {/* Local project assets directory relative path */}
          <source src="/assets/videos/divine-ad.mp4" type="video/mp4" />
          {/* Active advertisement incense stream backup ensuring immediate live playback */}
          <source src={HERO_BACKUP_STREAM} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* =========================================================================
            WARM PREMIUM OVERLAYS:
            Subtle transparent charcoal, warm brown, and soft gold atmospheric lighting.
            Carefully tuned so the video remains clearly visible and visually dominant!
            ========================================================================= */}
        {/* Overall subtle charcoal tint for high contrast text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B0A] via-[#121110]/45 to-[#0C0B0A]/50" />

        {/* Warm brown atmospheric gradient from bottom-left */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#3C2B22]/30 via-transparent to-transparent mix-blend-multiply" />

        {/* Subtle gold atmospheric radial ambient highlight in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-[#C9A86A]/10 rounded-full blur-[160px] pointer-events-none" />

        {/* Delicate subtle lattice watermark */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#C9A86A 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* =========================================================================
          HERO CONTENT CONTAINER (Positioned cleanly over video)
          ========================================================================= */}
      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center z-10">
        {/* Left Column: Eyebrow, Typewriter Heading, Supporting Text, and Action Buttons */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-7">
          {/* Small Eyebrow Badge: "DIVINE FRAGRANCE" */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C9A86A]/40 bg-[#121110]/85 backdrop-blur-md text-xs font-sans tracking-[0.2em] uppercase text-[#E2C799] shadow-lg">
            <div className="w-4 h-5 flex-shrink-0">
              <DivineLogo className="w-4 h-5" />
            </div>
            <span className="font-semibold tracking-[0.25em]">DIVINE FRAGRANCE</span>
            <span className="text-[#B8AC9A]/70 text-[10px] hidden sm:inline">• Premium Incense</span>
          </div>

          {/* Main Heading with Backspace Typewriter Effect:
              "Choose your Agarbatti" -> "Choose your Dhoopbatti" */}
          <h1
            id="hero-heading"
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-normal tracking-tight text-[#FBF8F3] leading-[1.15] drop-shadow-md min-h-[2.5em] sm:min-h-[2.3em]"
          >
            <Typewriter
              fixedPrefix="Choose your"
              className="inline-block"
              cursorClassName="text-[#C9A86A]"
            />
          </h1>

          {/* Supporting Text */}
          <p
            id="hero-supporting-text"
            className="max-w-xl text-base sm:text-lg text-[#EFEAE2] font-sans font-light leading-relaxed drop-shadow"
          >
            Bring fragrance, warmth and peaceful moments into your everyday space.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
            {/* Primary Button */}
            <button
              id="hero-explore-cta"
              onClick={onExploreProducts}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-widest text-[#121110] bg-gradient-to-r from-[#C9A86A] via-[#E2C799] to-[#C9A86A] hover:brightness-110 active:scale-98 transition-all duration-300 shadow-xl shadow-[#C9A86A]/15 flex items-center justify-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A]"
            >
              <Sparkles className="w-4 h-4 text-[#121110]" />
              <span>Explore Products</span>
            </button>

            {/* Secondary Button */}
            <button
              id="hero-discover-cta"
              onClick={onDiscoverBrand}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-widest text-[#FBF8F3] border border-[#C9A86A]/50 bg-[#121110]/60 backdrop-blur-md hover:bg-[#C9A86A]/15 hover:border-[#E2C799] active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A]"
            >
              <Compass className="w-4 h-4 text-[#C9A86A]" />
              <span>Discover Divine</span>
            </button>
          </div>

          {/* Quick Category Indicator Badges */}
          <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs text-[#DDD4C6]/90">
            <span className="flex items-center gap-1.5 text-[#E2C799] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
              3 Inch Sticks (7 Scents)
            </span>
            <span className="text-[#B8AC9A]/50">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
              Pure Dhoop Batti
            </span>
            <span className="text-[#B8AC9A]/50">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
              Sacred Agarbatti
            </span>
          </div>
        </div>

        {/* Right Column: Authentic Divine Product Showcase Card */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md">
            {/* Subtle atmospheric glow behind product card */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#C9A86A]/20 via-[#5C4537]/15 to-transparent rounded-2xl blur-xl -z-10" />

            {/* Card Frame: Charcoal translucent with soft border and moderate border-radius */}
            <div className="relative rounded-2xl border border-[#C9A86A]/35 bg-[#121110]/80 backdrop-blur-xl p-4 sm:p-5 shadow-2xl overflow-hidden group">
              {/* Product Visual Container preserving original packaging aspect ratio */}
              <div className="relative h-72 sm:h-80 w-full rounded-xl overflow-hidden bg-[#1A1816] flex items-center justify-center">
                <img
                  src={heroPackagingImage}
                  alt="Authentic Divine Dhoop Batti and Agarbatti packaging collection"
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-black/20 pointer-events-none" />

                {/* Product Badge */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#121110]/85 backdrop-blur-md border border-[#C9A86A]/40 text-[10px] uppercase tracking-widest text-[#E2C799]">
                  Signature Collection
                </div>

                {/* Info Overlay at Bottom */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#121110] via-[#121110]/85 to-transparent">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A86A] block">
                    Divine Fragrance
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif text-lg text-[#FBF8F3]">
                      Dhoop Batti &amp; Agarbatti
                    </span>
                    <span className="text-xs text-[#B8AC9A]">
                      Pure Devotion
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Detail */}
              <div className="mt-3.5 pt-3 border-t border-[#25221F] flex items-center justify-between text-xs text-[#DDD4C6]">
                <span className="text-[#B8AC9A]">For Prayer &amp; Meditation</span>
                <button
                  onClick={onExploreProducts}
                  className="text-[#E2C799] hover:text-[#FBF8F3] font-medium flex items-center gap-1 transition-colors"
                >
                  <span>Explore</span>
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator at Bottom */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20 pointer-events-none opacity-80">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#B8AC9A] font-sans">
          Scroll to explore
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-[#C9A86A] animate-bounce" />
      </div>
    </section>
  );
}
