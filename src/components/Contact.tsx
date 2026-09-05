import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Send,
  MessageCircle,
  Mail,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  PhoneCall,
  MapPin,
  Clock,
  AlertCircle,
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface ContactProps {
  initialService?: string;
  initialBudget?: string;
}

export const Contact: React.FC<ContactProps> = ({
  initialService,
  initialBudget,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Video Editing',
    budget: '₹5,000 – ₹10,000',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
    if (initialBudget) {
      setFormData((prev) => ({ ...prev, budget: initialBudget }));
    }
  }, [initialService, initialBudget]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.projectDetails.trim() || formData.projectDetails.trim().length < 10) {
      newErrors.projectDetails = 'Please provide at least 10 characters describing your project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF5533', '#FF3E6C', '#F5BE6B', '#25D366'],
        });
      } catch {
        // Safe fallback
      }
    }
  };

  // Dynamic message template for WhatsApp and Email
  const formattedSummary = `Project Inquiry for ${siteConfig.brand.fullName}:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone || 'Not provided'}
• Service Requested: ${formData.service}
• Estimated Budget: ${formData.budget}
• Project Scope & Details:
${formData.projectDetails}`;

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${siteConfig.brand.fullName}! I'm reaching out with a new project request:\n\n${formattedSummary}`
  )}`;

  const emailUrl = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    `[New Project Request] ${formData.service} - ${formData.name}`
  )}&body=${encodeURIComponent(formattedSummary)}`;

  const handleCopyDetails = () => {
    navigator.clipboard.writeText(formattedSummary);
    setCopied(true);
    try {
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.7 },
        colors: ['#FF5533', '#25D366'],
      });
    } catch {
      // Safe fallback
    }
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative bg-[#FAF2EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Info & Trust */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEAE8] border border-[#FFCCD3] text-xs font-display font-bold text-[#FF5533] uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#1C1618] uppercase tracking-tight leading-tight mb-4">
              Let’s Create Something Great.
            </h2>

            <p className="text-sm sm:text-base text-[#5E5253] leading-relaxed mb-8">
              Have a project in mind? Tell us what you’re working on. We respond within a few hours with a clear roadmap and quotation.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#F0E2D8] hover:border-[#FF5533]/50 shadow-sm transition-all group"
              >
                <div className="w-11 h-11 rounded-full bg-[#FFEAE8] text-[#FF5533] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#7D6E6F] font-mono">Email Us Directly</p>
                  <p className="text-sm font-bold text-[#1C1618] group-hover:text-[#FF5533] transition-colors">
                    {siteConfig.contact.email}
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.contact.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#F0E2D8] hover:border-[#25D366]/50 shadow-sm transition-all group"
              >
                <div className="w-11 h-11 rounded-full bg-[#E8F8EE] text-[#25D366] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#7D6E6F] font-mono">WhatsApp Fast Chat</p>
                  <p className="text-sm font-bold text-[#1C1618] group-hover:text-[#25D366] transition-colors">
                    {siteConfig.contact.phoneDisplay} (Instant Reply)
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#F0E2D8] shadow-sm">
                <div className="w-11 h-11 rounded-full bg-[#FFF4ED] text-[#FF5533] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#7D6E6F] font-mono">Studio Working Hours</p>
                  <p className="text-xs text-[#5E5253]">
                    {siteConfig.contact.businessHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Project Request Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-10 bg-white border border-[#F0E2D8] shadow-xl">
              {!isSubmitted ? (
                <form id="project-request-form" onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-[#F0E2D8] pb-4 mb-2">
                    <h3 className="font-display font-black text-xl text-[#1C1618] uppercase tracking-wide">
                      Start Your Project Request
                    </h3>
                    <p className="text-xs text-[#5E5253] mt-0.5">
                      Fill in your specifications below to generate your customized creative brief.
                    </p>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-display font-bold uppercase tracking-wider text-[#1C1618] mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FAF2EA] border text-sm text-[#1C1618] placeholder-[#A09394] focus:outline-none focus:ring-2 focus:ring-[#FF5533] transition-all ${
                          errors.name ? 'border-red-500 bg-red-50' : 'border-[#E8D8CC] hover:border-[#FF5533]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-display font-bold uppercase tracking-wider text-[#1C1618] mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FAF2EA] border text-sm text-[#1C1618] placeholder-[#A09394] focus:outline-none focus:ring-2 focus:ring-[#FF5533] transition-all ${
                          errors.email ? 'border-red-500 bg-red-50' : 'border-[#E8D8CC] hover:border-[#FF5533]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Service Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-display font-bold uppercase tracking-wider text-[#1C1618] mb-1.5"
                      >
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 80746 84574"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF2EA] border border-[#E8D8CC] hover:border-[#FF5533] text-sm text-[#1C1618] placeholder-[#A09394] focus:outline-none focus:ring-2 focus:ring-[#FF5533] transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-service"
                        className="block text-xs font-display font-bold uppercase tracking-wider text-[#1C1618] mb-1.5"
                      >
                        Service Needed
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF2EA] border border-[#E8D8CC] hover:border-[#FF5533] text-sm text-[#1C1618] focus:outline-none focus:ring-2 focus:ring-[#FF5533] transition-all cursor-pointer font-medium"
                      >
                        <option value="Video Editing">🎬 Video Editing</option>
                        <option value="Photo Retouching">🖼 Photo Retouching</option>
                        <option value="Graphic Design">🎨 Graphic Design</option>
                        <option value="Social Media Content">📱 Social Media Content</option>
                        <option value="Full Retainer / Other">⚡ Full Retainer / Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Dropdown */}
                  <div>
                    <label
                      htmlFor="contact-budget"
                      className="block text-xs font-display font-bold uppercase tracking-wider text-[#1C1618] mb-1.5"
                    >
                      Target Budget Range
                    </label>
                    <select
                      id="contact-budget"
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF2EA] border border-[#E8D8CC] hover:border-[#FF5533] text-sm text-[#1C1618] focus:outline-none focus:ring-2 focus:ring-[#FF5533] transition-all cursor-pointer font-medium"
                    >
                      <option value="Under ₹5,000">Under ₹5,000</option>
                      <option value="₹5,000 – ₹10,000">₹5,000 – ₹10,000</option>
                      <option value="₹10,000 – ₹25,000">₹10,000 – ₹25,000</option>
                      <option value="₹25,000+">₹25,000+</option>
                      <option value="Custom / Enterprise Retainer">Custom / Enterprise Retainer</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label
                      htmlFor="contact-details"
                      className="block text-xs font-display font-bold uppercase tracking-wider text-[#1C1618] mb-1.5"
                    >
                      Project Details & Links *
                    </label>
                    <textarea
                      id="contact-details"
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) =>
                        setFormData({ ...formData, projectDetails: e.target.value })
                      }
                      placeholder="Tell us about your footage, goals, timeline, reference styles, or links to Drive folders..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF2EA] border text-sm text-[#1C1618] placeholder-[#A09394] focus:outline-none focus:ring-2 focus:ring-[#FF5533] transition-all ${
                        errors.projectDetails
                          ? 'border-red-500 bg-red-50'
                          : 'border-[#E8D8CC] hover:border-[#FF5533]'
                      }`}
                    />
                    {errors.projectDetails && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.projectDetails}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full font-display font-bold text-xs uppercase tracking-wider text-white bg-[#FF5533] hover:bg-[#E64424] shadow-md shadow-[#FF5533]/25 active:scale-[0.99] transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Request</span>
                  </button>
                </form>
              ) : (
                /* Success Confirmation State */
                <div id="contact-success-panel" className="text-center py-6 space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#E8F8EE] text-[#25D366] flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="font-display font-black text-2xl text-[#1C1618] uppercase mb-2">
                      Thanks! Your project request has been prepared.
                    </h3>
                    <p className="text-sm text-[#5E5253] max-w-md mx-auto leading-relaxed">
                      Choose how you’d prefer to send your project details directly to our creative team:
                    </p>
                  </div>

                  {/* Action Buttons: WhatsApp and Email */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                    <a
                      id="submit-whatsapp-btn"
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-display font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <a
                      id="submit-email-btn"
                      href={emailUrl}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FF5533] hover:bg-[#E64424] text-white font-display font-bold text-xs uppercase tracking-wider shadow-md shadow-[#FF5533]/25 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email</span>
                    </a>
                  </div>

                  {/* Copyable Project Brief Box */}
                  <div className="p-4 rounded-2xl bg-[#FAF2EA] border border-[#E8D8CC] text-left max-w-md mx-auto">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono text-[#7D6E6F]">
                        Generated Project Brief:
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyDetails}
                        className="inline-flex items-center gap-1 text-xs text-[#FF5533] font-mono font-bold transition-colors"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                    <pre className="text-xs text-[#1C1618] font-mono whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto">
                      {formattedSummary}
                    </pre>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Video Editing',
                        budget: '₹5,000 – ₹10,000',
                        projectDetails: '',
                      });
                    }}
                    className="text-xs text-[#7D6E6F] hover:text-[#1C1618] transition-colors underline"
                  >
                    Submit another request
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
