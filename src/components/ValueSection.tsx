import { Sparkles, HeartHandshake, SunMedium, Wind } from 'lucide-react';
import { VALUE_POINTS } from '../data';

export default function ValueSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#C9A86A]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#C9A86A]" />;
      case 'SunMedium':
        return <SunMedium className="w-5 h-5 text-[#C9A86A]" />;
      case 'Wind':
        return <Wind className="w-5 h-5 text-[#C9A86A]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C9A86A]" />;
    }
  };

  return (
    <section
      id="values"
      aria-label="Core Brand Values"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#121110] border-t border-[#25221F] relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-[#C9A86A]">
            <span>Mindful Purpose</span>
          </div>

          <h2
            id="values-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FBF8F3]"
          >
            A Fragrance for Every Moment
          </h2>

          <p className="text-base text-[#DDD4C6] font-light">
            Rooted in spiritual reverence and designed to bring peaceful clarity into daily living.
          </p>

          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent mx-auto pt-1" />
        </div>

        {/* 4 Clean Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {VALUE_POINTS.map((item) => (
            <div
              key={item.id}
              id={`value-card-${item.id}`}
              className="p-7 rounded-2xl bg-[#1A1816] border border-[#25221F] hover:border-[#C9A86A]/40 transition-all duration-300 flex flex-col justify-between space-y-4 group hover:shadow-lg hover:shadow-black/50"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#25221F] border border-[#332E29] flex items-center justify-center group-hover:border-[#C9A86A]/40 transition-colors">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="font-serif text-xl text-[#FBF8F3] group-hover:text-[#E2C799] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[#DDD4C6] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-2">
                <span className="w-8 h-[1px] bg-[#332E29] group-hover:bg-[#C9A86A]/60 block transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
