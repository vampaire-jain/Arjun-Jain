import { useState, useMemo } from 'react';
import { Sparkles, ShieldCheck, Flame, Layers } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product, CategoryFilter } from '../types';
import ProductFilter from './ProductFilter';
import ProductGrid from './ProductGrid';
import DivineLogo from './DivineLogo';

interface ProductSectionProps {
  onSelectProduct: (product: Product) => void;
}

const CATEGORIES: CategoryFilter[] = [
  'All',
  '3 inch stick',
  'Agarbatti',
  'Dhoop Batti',
  'sambarani cup',
  'Wet dhoop',
  'thin stick in 4 inch',
];

const THREE_INCH_STICK_NAMES = [
  'Rose',
  'Kacha bella',
  'Lavender',
  'Game changer',
  'sandal',
  'Gulzar oudh',
  'Kasturi',
];

export default function ProductSection({ onSelectProduct }: ProductSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  // Compute category counts dynamically
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: PRODUCTS.length,
      '3 inch stick': 0,
      Agarbatti: 0,
      'Dhoop Batti': 0,
      'sambarani cup': 0,
      'Wet dhoop': 0,
      'thin stick in 4 inch': 0,
    };
    PRODUCTS.forEach((p) => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      } else {
        counts[p.category] = 1;
      }
    });
    return counts;
  }, []);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Dedicated 3 inch stick products list
  const threeInchStickProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.category === '3 inch stick');
  }, []);

  return (
    <section
      id="products"
      aria-label="Product Collection"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#121110] relative border-t border-[#25221F]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C9A86A]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#5C4537]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C9A86A]/30 bg-[#1A1816]/90 text-xs font-sans uppercase tracking-[0.25em] text-[#E2C799]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sacred Collection</span>
          </div>

          <h2
            id="product-collection-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FBF8F3]"
          >
            Explore Our Collection
          </h2>

          <p className="text-base text-[#DDD4C6] font-light">
            Distinct devotional and ambient incense formulations designed to enrich prayer, quiet meditation, and lingering home fragrance.
          </p>

          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent mx-auto pt-1" />
        </div>

        {/* ================================================================= */}
        {/* NEW DEDICATED SECTION: "3 inch stick" Showcase Banner */}
        {/* ================================================================= */}
        <div
          id="three-inch-stick"
          className="rounded-3xl bg-gradient-to-br from-[#1C1713] via-[#161311] to-[#0E0C0A] border-2 border-[#C9A86A]/40 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#C9A86A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A86A]/15 border border-[#C9A86A]/35 text-[11px] font-sans tracking-[0.2em] uppercase text-[#E2C799]">
                <Layers className="w-3.5 h-3.5 text-[#C9A86A]" />
                <span>New Section • 7 Signature Products</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-14 flex-shrink-0 hidden sm:block">
                  <DivineLogo className="w-12 h-14" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FBF8F3]">
                    3 inch stick
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-[#C9A86A] font-medium mt-0.5">
                    Compact Bamboo-Less Devotional Fragrance Sticks
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#DDD4C6] leading-relaxed font-light">
                Carefully crafted in a slender 3-inch (~7.5 cm) format without a harsh bamboo core, offering a pure, even burn and rich aromatic smoke. Explore all 7 individual fragrance creations:
              </p>

              {/* Fragrance List Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {THREE_INCH_STICK_NAMES.map((fragranceName) => {
                  const targetProd = threeInchStickProducts.find((p) => p.name.toLowerCase() === fragranceName.toLowerCase());
                  return (
                    <button
                      key={fragranceName}
                      onClick={() => {
                        if (targetProd) {
                          onSelectProduct(targetProd);
                        } else {
                          setActiveCategory('3 inch stick');
                        }
                      }}
                      className="text-xs px-3 py-1.5 rounded-lg bg-[#241F1A] hover:bg-[#C9A86A] hover:text-[#121110] border border-[#C9A86A]/30 hover:border-[#C9A86A] text-[#E2C799] transition-all font-medium flex items-center gap-1.5 shadow-sm"
                      title={`View ${fragranceName} 3 inch stick`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
                      <span>{fragranceName}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Action Button for 3 inch stick */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <button
                onClick={() => setActiveCategory('3 inch stick')}
                className={`w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md ${
                  activeCategory === '3 inch stick'
                    ? 'bg-[#C9A86A] text-[#121110] ring-2 ring-[#E2C799]'
                    : 'bg-gradient-to-r from-[#C9A86A] via-[#E2C799] to-[#C9A86A] text-[#121110] hover:brightness-110'
                }`}
              >
                <span>View All 7 Fragrances ({threeInchStickProducts.length})</span>
              </button>
              {activeCategory === '3 inch stick' && (
                <button
                  onClick={() => setActiveCategory('All')}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl text-xs font-medium text-[#DDD4C6] border border-[#C9A86A]/30 hover:border-[#C9A86A] bg-[#121110]/70"
                >
                  Show Full Collection
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Quick Section Highlights for Specialized Offerings */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#181614] border border-[#C9A86A]/25 flex flex-wrap items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-[#C9A86A]/15 text-[#E2C799]">
              <Flame className="w-4 h-4" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#E2C799]">Specialized Formats</p>
              <p className="text-xs text-[#DDD4C6]/80 hidden sm:block">Explore 3-inch sticks, ceremonial cups, wet dhoop cakes, and 4-inch slender dhoop.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {(['3 inch stick', 'sambarani cup', 'Wet dhoop', 'thin stick in 4 inch'] as CategoryFilter[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 capitalize font-medium ${
                  activeCategory === cat
                    ? 'bg-[#C9A86A] text-[#121110] border-[#C9A86A] font-semibold'
                    : 'bg-[#121110] text-[#E2C799] border-[#C9A86A]/30 hover:border-[#C9A86A]'
                }`}
              >
                + {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter Controls */}
        <div className="flex justify-center">
          <ProductFilter
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            counts={categoryCounts}
          />
        </div>

        {/* Scalable Product Grid */}
        <ProductGrid
          products={filteredProducts}
          onViewProduct={onSelectProduct}
        />

        {/* Informative Assurance Note */}
        <div className="pt-6 text-center">
          <p className="text-xs text-[#B8AC9A] inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C9A86A]" />
            <span>Formulated for traditional prayer rituals, meditation sessions, and serene ambient fragrance.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
