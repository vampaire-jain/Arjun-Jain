import { useState, useEffect } from 'react';
import { X, Mail, MapPin, CheckCircle2, Send, Sparkles } from 'lucide-react';
import DivineLogo from './DivineLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('All Products');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setSent(false);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#121110] border border-[#C9A86A]/40 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-[#1A1816] text-[#DDD4C6] hover:text-[#C9A86A] border border-[#25221F] hover:border-[#C9A86A]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A86A]"
          aria-label="Close Contact Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-[#1A1816] border-b border-[#25221F] p-6 sm:p-8 flex items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-[#C9A86A]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Divine Fragrance Inquiries</span>
            </div>
            <h2 id="contact-modal-title" className="font-serif text-2xl sm:text-3xl text-[#FBF8F3]">
              Connect With Divine Fragrance
            </h2>
            <p className="text-sm text-[#B8AC9A] font-light">
              Have questions about Divine Fragrance 3 Inch Sticks, Dhoop Batti, Agarbatti, or Sambrani Cups? Send an inquiry directly.
            </p>
          </div>
          <div className="w-12 h-14 flex-shrink-0 hidden sm:block">
            <DivineLogo className="w-12 h-14" />
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {sent ? (
            <div className="py-10 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#C9A86A] mx-auto" />
              <h3 className="font-serif text-2xl text-[#FBF8F3]">Message Received</h3>
              <p className="text-sm text-[#DDD4C6] max-w-md mx-auto">
                Thank you for contacting Divine. Your note has been registered and we look forward to assisting you.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#121110] bg-[#C9A86A]"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-[#DDD4C6] block font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1A1816] border border-[#25221F] text-sm text-[#FBF8F3] placeholder-[#B8AC9A]/50 focus:outline-none focus:border-[#C9A86A]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-[#DDD4C6] block font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1A1816] border border-[#25221F] text-sm text-[#FBF8F3] placeholder-[#B8AC9A]/50 focus:outline-none focus:border-[#C9A86A]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider text-[#DDD4C6] block font-medium">
                  Product of Interest
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1A1816] border border-[#25221F] text-sm text-[#FBF8F3] focus:outline-none focus:border-[#C9A86A]"
                >
                  <option value="All Products">All Fragrance Collections</option>
                  <option value="Dhoop Batti">Dhoop Batti</option>
                  <option value="Agarbatti">Agarbatti</option>
                  <option value="Zipper Pack">Zipper Pack</option>
                  <option value="Retail / Distribution">Distribution & Retail Inquiry</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider text-[#DDD4C6] block font-medium">
                  Message / Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Share your question or requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1A1816] border border-[#25221F] text-sm text-[#FBF8F3] placeholder-[#B8AC9A]/50 focus:outline-none focus:border-[#C9A86A] resize-none"
                />
              </div>

              {/* Contact information note */}
              <div className="p-3 rounded-lg bg-[#1A1816]/70 border border-[#25221F] text-[11px] text-[#B8AC9A] space-y-1">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C9A86A] flex-shrink-0 mt-0.5" />
                  <span>
                    Brand: <strong>Divine Fragrance</strong> • Email: <a href="mailto:arjunjain12359@gmail.com" className="text-[#DDD4C6] underline hover:text-[#C9A86A]">arjunjain12359@gmail.com</a>
                  </span>
                </div>
                <div className="pl-5 text-[#DDD4C6]">
                  Product Manager: <a href="tel:9548850930" className="hover:text-[#C9A86A]">9548850930</a> • <a href="tel:9719925030" className="hover:text-[#C9A86A]">9719925030</a> • <a href="tel:9458454615" className="hover:text-[#C9A86A]">9458454615</a>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-xs font-semibold uppercase tracking-widest text-[#121110] bg-gradient-to-r from-[#C9A86A] via-[#E2C799] to-[#C9A86A] hover:brightness-110 active:scale-98 transition flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
