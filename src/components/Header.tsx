import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import DivineLogo from './DivineLogo';

interface HeaderProps {
  onExploreClick: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ onExploreClick, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Products', id: 'products' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#121110]/95 backdrop-blur-md border-b border-[#C9A86A]/20 py-3 shadow-lg shadow-black/50'
          : 'bg-gradient-to-b from-[#0C0B0A]/85 via-[#0C0B0A]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A] rounded-lg p-1 transition"
          >
            <div className="relative w-10 h-12 flex-shrink-0 group-hover:scale-105 transition-transform">
              <DivineLogo className="w-10 h-12" />
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wider text-[#FBF8F3] group-hover:text-[#E2C799] transition-colors leading-tight">
                DIVINE
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#E2C799] font-sans">
                Divine fragrance
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-sans tracking-wide text-[#DDD4C6] hover:text-[#C9A86A] transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A] rounded"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Primary CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="header-explore-btn"
              onClick={onExploreClick}
              className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#C9A86A] via-[#E2C799] to-[#C9A86A] hover:brightness-110 active:scale-95 transition-all duration-300 shadow-md shadow-[#C9A86A]/20 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C9A86A]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore Products</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              id="header-explore-mobile-btn"
              onClick={onExploreClick}
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider text-[#121110] bg-[#C9A86A] active:scale-95 transition"
            >
              Explore
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#DDD4C6] hover:text-[#C9A86A] hover:bg-[#1A1816] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="md:hidden bg-[#121110]/98 backdrop-blur-xl border-b border-[#C9A86A]/20 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300 shadow-2xl"
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className="text-left text-base font-serif tracking-wide text-[#EFEAE2] hover:text-[#C9A86A] py-2 border-b border-[#25221F] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-2">
            <button
              id="mobile-menu-explore-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onExploreClick();
              }}
              className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-[#121110] bg-gradient-to-r from-[#C9A86A] to-[#E2C799] flex items-center justify-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore Products</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
