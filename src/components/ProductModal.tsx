import { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';
import DivineLogo from './DivineLogo';

interface ProductModalProps {
  isOpen: boolean;
  selectedProduct: Product | null;
  onClose: () => void;
  onSwitchProduct: (product: Product) => void;
}

export default function ProductModal({
  isOpen,
  selectedProduct,
  onClose,
  onSwitchProduct,
}: ProductModalProps) {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setIsSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentProduct = selectedProduct || PRODUCTS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryEmail.trim()) return;
    setIsSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#121110] border border-[#C9A86A]/40 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-[#1A1816] text-[#DDD4C6] hover:text-[#C9A86A] border border-[#25221F] hover:border-[#C9A86A]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A]"
          aria-label="Close Product Details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Tabs */}
        <div className="bg-[#1A1816] border-b border-[#25221F] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-7 flex-shrink-0">
              <DivineLogo className="w-6 h-7" />
            </div>
            <span className="font-serif text-lg tracking-wider text-[#FBF8F3]">
              Divine Fragrance Collection
            </span>
          </div>

          {/* Product Switcher Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#121110] border border-[#25221F] overflow-x-auto max-w-full">
            {PRODUCTS.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  onSwitchProduct(p);
                  setIsSubmitted(false);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  p.id === currentProduct.id
                    ? 'bg-[#C9A86A] text-[#121110] font-semibold shadow'
                    : 'text-[#B8AC9A] hover:text-[#E2C799]'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {/* Left Column: Product Imagery */}
          <div className="md:col-span-6 flex flex-col space-y-4">
            <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-[#1A1816] border border-[#25221F] flex items-center justify-center p-4">
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="w-full h-full object-contain filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4">
                {currentProduct.tagline && (
                  <span className="text-[10px] uppercase tracking-widest text-[#C9A86A] font-semibold block">
                    {currentProduct.tagline}
                  </span>
                )}
                <h3 className="font-serif text-2xl text-[#FBF8F3]">
                  {currentProduct.name}
                </h3>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[#25221F] bg-[#1A1816]/70 text-xs text-[#DDD4C6] space-y-1.5">
              <span className="font-semibold text-[#E2C799] block uppercase tracking-wider">
                Category &amp; Packaging
              </span>
              <p className="text-[#B8AC9A] font-light">
                {currentProduct.category} Collection — Authentic Packaging
              </p>
              <p className="text-[#B8AC9A] italic text-[11px]">
                *Detailed product specifications and bulk retail ordering available upon inquiry.
              </p>
            </div>
          </div>

          {/* Right Column: Descriptions & Inquiry */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1816] border border-[#C9A86A]/30 text-xs font-sans text-[#E2C799]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Devotional Fragrance Experience</span>
              </div>

              <h2 id="product-modal-title" className="font-serif text-2xl sm:text-3xl text-[#FBF8F3]">
                {currentProduct.name}
              </h2>

              <p className="text-sm text-[#DDD4C6] leading-relaxed font-light">
                {currentProduct.description}
              </p>

              {currentProduct.idealFor && (
                <div className="pt-2 space-y-2">
                  <span className="text-xs uppercase tracking-wider text-[#E2C799] font-medium block">
                    Ideal Usage:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#DDD4C6]">
                    {currentProduct.idealFor.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {currentProduct.ritualRole && (
                <div className="pt-2 text-xs text-[#B8AC9A]">
                  <span className="text-[#E2C799] font-medium">Atmospheric Effect: </span>
                  {currentProduct.ritualRole}
                </div>
              )}
            </div>

            {/* Product Inquiry / Pre-order Interest Form */}
            <div className="pt-4 border-t border-[#25221F]">
              {isSubmitted ? (
                <div className="p-4 rounded-xl border border-[#C9A86A]/40 bg-[#1A1816] text-center space-y-2 animate-in zoom-in-95">
                  <CheckCircle2 className="w-8 h-8 text-[#C9A86A] mx-auto" />
                  <h4 className="font-serif text-lg text-[#FBF8F3]">Thank You for Your Interest</h4>
                  <p className="text-xs text-[#DDD4C6]">
                    Your inquiry for <strong className="text-[#E2C799]">{currentProduct.name}</strong> has been noted. We will reach out with availability updates.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-[#C9A86A] underline pt-1 block mx-auto"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <span className="text-xs uppercase tracking-wider text-[#E2C799] font-medium block">
                    Product Inquiry &amp; Availability Notice
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your Name (Optional)"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="px-3.5 py-2 rounded-lg bg-[#1A1816] border border-[#25221F] text-xs text-[#FBF8F3] placeholder-[#B8AC9A]/60 focus:outline-none focus:border-[#C9A86A]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="px-3.5 py-2 rounded-lg bg-[#1A1816] border border-[#25221F] text-xs text-[#FBF8F3] placeholder-[#B8AC9A]/60 focus:outline-none focus:border-[#C9A86A]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Location / City / Special request (Optional)"
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#1A1816] border border-[#25221F] text-xs text-[#FBF8F3] placeholder-[#B8AC9A]/60 focus:outline-none focus:border-[#C9A86A]"
                  />

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#C9A86A] to-[#E2C799] hover:brightness-110 active:scale-98 transition flex items-center justify-center gap-2 shadow"
                  >
                    <span>Request Product Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
