import { CategoryFilter } from '../types';

interface ProductFilterProps {
  categories: CategoryFilter[];
  activeCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
  counts?: Record<string, number>;
}

export default function ProductFilter({
  categories,
  activeCategory,
  onSelectCategory,
  counts,
}: ProductFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter products by category"
      className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-[#1A1816] border border-[#25221F] gap-1 sm:gap-2 shadow-inner"
    >
      {categories.map((category) => {
        const isActive = activeCategory === category;
        const count = counts?.[category];

        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            tabIndex={0}
            onClick={() => onSelectCategory(category)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectCategory(category);
              }
            }}
            className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A] ${
              isActive
                ? 'bg-gradient-to-r from-[#C9A86A] to-[#E2C799] text-[#121110] font-semibold shadow-md'
                : 'text-[#DDD4C6] hover:text-[#E2C799] hover:bg-[#25221F]/60'
            }`}
          >
            <span>{category}</span>
            {count !== undefined && (
              <span
                className={`ml-1.5 text-[11px] px-1.5 py-0.2 rounded-full ${
                  isActive
                    ? 'bg-[#121110]/20 text-[#121110]'
                    : 'bg-[#25221F] text-[#B8AC9A]'
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
