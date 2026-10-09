import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import BrandIntro from './components/BrandIntro';
import ValueSection from './components/ValueSection';
import ExperienceSection from './components/ExperienceSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import ContactModal from './components/ContactModal';
import { PRODUCTS } from './data';
import { Product } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'contact') {
      setIsContactModalOpen(true);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProducts = () => {
    const productsEl = document.getElementById('products');
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSelectedProduct(PRODUCTS[0]);
      setIsProductModalOpen(true);
    }
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleFooterProductClick = (categoryId: string) => {
    const matched =
      PRODUCTS.find((p) => p.id.includes(categoryId) || p.category.toLowerCase().includes(categoryId.toLowerCase())) ||
      PRODUCTS[0];
    setSelectedProduct(matched);
    setIsProductModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#121110] text-[#EFEAE2] flex flex-col font-sans selection:bg-[#C9A86A] selection:text-[#121110] overflow-x-hidden">
      {/* Sticky Header with backdrop blur and smooth transitions */}
      <Header
        onExploreClick={handleExploreProducts}
        onNavigate={handleNavigate}
      />

      {/* Main Landing Sections */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero Section with Background Video, Overlay, Typewriter Heading, and CTAs */}
        <Hero
          onExploreProducts={handleExploreProducts}
          onDiscoverBrand={() => handleNavigate('about')}
        />

        {/* 2. Product Section (Immediately after Hero) with "Explore Our Collection", Filter, and Scalable Grid */}
        <ProductSection
          onSelectProduct={handleSelectProduct}
        />

        {/* 3. Brand Introduction ("Fragrance That Creates a Moment") */}
        <BrandIntro
          onLearnMore={() => handleNavigate('values')}
        />

        {/* 4. Why Divine / Values Section */}
        <ValueSection />

        {/* 5. Atmospheric Experience Section */}
        <ExperienceSection
          onExploreCollection={handleExploreProducts}
        />

        {/* 6. Final Call to Action */}
        <FinalCTA
          onExploreProducts={handleExploreProducts}
        />
      </main>

      {/* Footer with Structured Navigation and Placeholders */}
      <Footer
        onNavigate={handleNavigate}
        onExploreProduct={handleFooterProductClick}
      />

      {/* Interactive Product Details & Inquiry Modal */}
      <ProductModal
        isOpen={isProductModalOpen}
        selectedProduct={selectedProduct}
        onClose={() => setIsProductModalOpen(false)}
        onSwitchProduct={(p) => setSelectedProduct(p)}
      />

      {/* Contact & Inquiries Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
