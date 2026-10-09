import { ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewProduct: (product: Product) => void;
}

export default function ProductCard({ product, onViewProduct }: ProductCardProps) {
  return (
    <article
      id={`product-card-${product.id}`}
      className="group rounded-2xl bg-[#1A1816]/90 border border-[#25221F] hover:border-[#C9A86A]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-xl hover:shadow-black/50"
    >
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-[#121110] flex items-center justify-center p-3">
        <img
          src={product.image}
          alt={`Divine ${product.name} packaging`}
          className="w-full h-full object-contain filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500 ease-out"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Subtle category badge overlay */}
        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-[#121110]/85 backdrop-blur-md border border-[#C9A86A]/30 text-[10px] uppercase tracking-wider text-[#E2C799]">
          {product.category}
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          {product.tagline && (
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A86A] block font-medium">
              {product.tagline}
            </span>
          )}

          <h3 className="font-serif text-xl text-[#FBF8F3] group-hover:text-[#E2C799] transition-colors leading-snug line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-[#DDD4C6] leading-relaxed font-light line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* View Product CTA Button */}
        <button
          onClick={() => onViewProduct(product)}
          className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#C9A86A] via-[#E2C799] to-[#C9A86A] hover:brightness-110 active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A]"
        >
          <span>View Product</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
}
