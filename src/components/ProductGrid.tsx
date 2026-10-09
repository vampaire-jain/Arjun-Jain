import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onViewProduct: (product: Product) => void;
}

export default function ProductGrid({ products, onViewProduct }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-16 text-center text-[#B8AC9A] space-y-2">
        <p className="font-serif text-lg">No products found in this category.</p>
        <p className="text-xs text-[#DDD4C6]/60">Select another filter above to view products.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewProduct={onViewProduct}
        />
      ))}
    </div>
  );
}
