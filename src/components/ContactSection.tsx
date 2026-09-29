import React, { useState } from "react";
import { Send, CheckCircle2, Phone, MapPin, Mail, Linkedin, Facebook, Instagram, ShieldCheck } from "lucide-react";
import { ANTELMA_INFO } from "../data/antelmaData";
import { Language, TRANSLATIONS } from "../i18n/translations";

interface ContactSectionProps {
  currentLang?: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang = "it" }) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.it;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact-section" className="py-20 lg:py-28 bg-[#071326] text-white border-t border-blue-950">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info & Contact Channels */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-red-400 tracking-wider">
                  / {t.contact_kicker} /
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
                {t.contact_title}
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {t.contact_desc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-blue-900/60">
              {/* Call Center */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                  <Phone className="w-3.5 h-3.5 text-red-500" />
                  <span>{t.contact_callcenter}</span>
                </div>
                <div className="text-base font-bold text-white">
                  {ANTELMA_INFO.phone}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Fax: {ANTELMA_INFO.fax}
                </div>
              </div>

              {/* Our Location */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>{t.contact_location}</span>
                </div>
                <div className="text-sm font-medium text-slate-200 leading-snug">
                  {ANTELMA_INFO.address}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  P.IVA {ANTELMA_INFO.vatNumber}
                </div>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                  <Mail className="w-3.5 h-3.5 text-red-500" />
                  <span>{t.contact_email}</span>
                </div>
                <a
                  href={`mailto:${ANTELMA_INFO.email}`}
                  className="text-sm font-semibold text-slate-200 hover:text-red-400 transition-colors"
                >
                  {ANTELMA_INFO.email}
                </a>
              </div>

              {/* Social network */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                  Canali Istituzionali
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/company/antelma"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-full bg-[#0b1f3f] border border-blue-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-red-500 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/antelmasrl"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="w-9 h-9 rounded-full bg-[#0b1f3f] border border-blue-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-red-500 transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/antelmasrl"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-full bg-[#0b1f3f] border border-blue-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-red-500 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0b1f3f]/80 border border-blue-800 text-xs text-slate-300 leading-relaxed">
              <span className="text-white font-semibold">{t.contact_hours}</span>
            </div>
          </div>

          {/* Right Column: Clean White Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[32px] p-8 sm:p-10 text-slate-900 shadow-2xl border-4 border-slate-100">
              
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0b1f3f] tracking-tight font-sans">
                  {t.contact_form_title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2">
                  {t.contact_form_desc}
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0b1f3f] font-sans">
                    {t.contact_success_title}
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    {t.contact_success_desc}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: "", email: "", company: "", subject: "", message: "" });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-300 text-slate-800 hover:bg-slate-100 cursor-pointer"
                  >
                    {t.contact_send_another}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        {t.contact_name}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Es. Mario Rossi"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#0b1f3f] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        {t.contact_email_field}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nome@azienda.it"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#0b1f3f] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        {t.contact_company}
                      </label>
                      <input
                        type="text"
                        placeholder="Nome della tua impresa"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#0b1f3f] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        {t.contact_subject}
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-[#0b1f3f] focus:outline-none transition-colors"
                      >
                        <option value="">Seleziona un servizio...</option>
                        <option value="Connettività FTTO & Backup">Connettività FTTO &amp; Backup</option>
                        <option value="Cyber Security & NIS2">Cyber Security &amp; NIS2</option>
                        <option value="Smart Office & WhatsApp">Smart Office &amp; WhatsApp</option>
                        <option value="Assistenza Sistemistica IT">Assistenza Sistemistica IT</option>
                        <option value="Hardware & Caring">Hardware, Stampa &amp; Caring</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      {t.contact_message}
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Descrivi brevemente le esigenze di connettività, sicurezza o continuità della tua azienda..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#0b1f3f] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#0b1f3f] hover:bg-red-600 text-white transition-all shadow-md active:scale-95 disabled:opacity-50 cursor-pointer"
                    >
                      <span>{loading ? t.contact_submitting : t.contact_submit}</span>
                      <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                        <Send className="w-3 h-3 text-white" />
                      </span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
