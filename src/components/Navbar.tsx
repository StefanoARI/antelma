import React, { useState, useEffect, useRef } from "react";
import { 
  Menu, X, ChevronDown, ChevronRight, 
  ShieldCheck, Wifi, PhoneCall, Headphones, 
  Layers, HardDrive, FileText, HelpCircle, 
  Newspaper, Briefcase, ArrowRight
} from "lucide-react";
import { IMAGES } from "../assets/images";
import { ANTELMA_INFO, SERVICES, ServiceItem } from "../data/antelmaData";
import { Language, TRANSLATIONS } from "../i18n/translations";

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  onOpenContact: () => void;
  currentLang: Language;
  onSelectService?: (service: ServiceItem) => void;
  onNavigateCareers?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  onOpenContact,
  currentLang,
  onSelectService,
  onNavigateCareers,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.it;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms buffer ensures easy mouse transit
  };

  const toggleDropdown = (menuName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown((prev) => (prev === menuName ? null : menuName));
  };

  const handleNavClick = (page: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActivePage(page);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleServiceClick = (service: ServiceItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (onSelectService) {
      onSelectService(service);
    } else {
      setActivePage("services");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80"
          : "py-3.5 bg-white/90 backdrop-blur-sm border-b border-slate-100"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            >
              <img
                src={IMAGES.logo}
                alt={ANTELMA_INFO.name}
                className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector(".logo-fallback")) {
                    const span = document.createElement("span");
                    span.className = "logo-fallback text-xl font-extrabold tracking-tight text-[#0b1f3f]";
                    span.innerHTML = 'ANTELMA<span class="text-red-600">.</span>';
                    parent.appendChild(span);
                  }
                }}
              />
            </button>
          </div>

          {/* Clean, Concise Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3">
            {/* 1. HOME */}
            <button
              onClick={() => handleNavClick("home")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activePage === "home"
                  ? "bg-[#0b1f3f] text-white shadow-sm"
                  : "text-slate-700 hover:text-[#0b1f3f] hover:bg-slate-100"
              }`}
            >
              {t.nav_home}
            </button>

            {/* 2. CHI SIAMO */}
            <button
              onClick={() => handleNavClick("about")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activePage === "about"
                  ? "bg-[#0b1f3f] text-white shadow-sm"
                  : "text-slate-700 hover:text-[#0b1f3f] hover:bg-slate-100"
              }`}
            >
              {t.nav_about.split("/")[0].trim()}
            </button>

            {/* 3. SERVIZI (Seamless hover & click dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => toggleDropdown("services", e)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  activePage === "services" || activeDropdown === "services"
                    ? "bg-slate-100 text-[#0b1f3f] font-bold"
                    : "text-slate-700 hover:text-[#0b1f3f] hover:bg-slate-100"
                }`}
              >
                <span>{t.nav_services.split("&")[0].trim()}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "services" ? "rotate-180 text-red-600" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu Container (connected with pt-2, no mouse-drop gap) */}
              {activeDropdown === "services" && (
                <div
                  onMouseEnter={() => handleMouseEnter("services")}
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-full left-0 pt-2 w-92 z-50"
                >
                  <div className="bg-[#0b1f3f] text-white rounded-2xl p-3 shadow-2xl border border-blue-900/60 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="flex items-center justify-between px-3 py-1.5 border-b border-blue-900/60 mb-2">
                      <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">
                        Soluzioni &amp; Servizi Gestiti
                      </span>
                      <button
                        onClick={() => handleNavClick("services")}
                        className="text-[10px] font-bold text-red-400 hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Vedi Tutti &rarr;
                      </button>
                    </div>

                    <div className="space-y-1">
                      {SERVICES.map((s) => (
                        <div
                          key={s.id}
                          onClick={(e) => handleServiceClick(s, e)}
                          className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors text-left group cursor-pointer"
                        >
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-red-400 group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0">
                            {s.category.includes("Reti") && <Wifi className="w-4 h-4" />}
                            {s.category.includes("Cyber") && <ShieldCheck className="w-4 h-4" />}
                            {s.category.includes("Voice") && <PhoneCall className="w-4 h-4" />}
                            {s.category.includes("Supporto") && <Headphones className="w-4 h-4" />}
                            {s.category.includes("Hardware") && <HardDrive className="w-4 h-4" />}
                            {s.category.includes("Integration") && <Layers className="w-4 h-4" />}
                          </div>
                          <div className="overflow-hidden flex-1">
                            <div className="text-xs font-bold text-white truncate group-hover:text-red-300 transition-colors">
                              {s.title}
                            </div>
                            <div className="text-[11px] text-slate-300 truncate mt-0.5">
                              {s.shortDesc}
                            </div>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-blue-300 group-hover:text-white group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. CASI STUDIO */}
            <button
              onClick={() => handleNavClick("casestudies")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activePage === "casestudies"
                  ? "bg-[#0b1f3f] text-white shadow-sm"
                  : "text-slate-700 hover:text-[#0b1f3f] hover:bg-slate-100"
              }`}
            >
              {t.nav_casestudies}
            </button>

            {/* 5. PIANI & SLA */}
            <button
              onClick={() => handleNavClick("plans")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activePage === "plans"
                  ? "bg-[#0b1f3f] text-white shadow-sm"
                  : "text-slate-700 hover:text-[#0b1f3f] hover:bg-slate-100"
              }`}
            >
              Piani &amp; SLA
            </button>

            {/* 6. RISORSE (Sottomenu con FAQ & NIS2, News, Documenti) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("risorse")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => toggleDropdown("risorse", e)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  activePage === "faq" || activePage === "news" || activeDropdown === "risorse"
                    ? "bg-slate-100 text-[#0b1f3f] font-bold"
                    : "text-slate-700 hover:text-[#0b1f3f] hover:bg-slate-100"
                }`}
              >
                <span>Risorse</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "risorse" ? "rotate-180 text-red-600" : ""
                  }`}
                />
              </button>

              {/* Submenu for FAQ, News, Careers */}
              {activeDropdown === "risorse" && (
                <div
                  onMouseEnter={() => handleMouseEnter("risorse")}
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-full left-0 pt-2 w-72 z-50"
                >
                  <div className="bg-[#0b1f3f] text-white rounded-2xl p-2.5 shadow-2xl border border-blue-900/60 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-1 text-[10px] font-bold text-blue-300 uppercase tracking-widest border-b border-blue-900/60 mb-1">
                      Approfondimenti &amp; Aggiornamenti
                    </div>

                    <button
                      onClick={() => handleNavClick("news")}
                      className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors text-left group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0">
                        <Newspaper className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-red-300 transition-colors">
                          News &amp; Insights
                        </div>
                        <div className="text-[11px] text-slate-300">
                          Guide tecniche e novità
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick("faq")}
                      className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors text-left group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                        <HelpCircle className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-red-300 transition-colors">
                          FAQ &amp; Normativa NIS2
                        </div>
                        <div className="text-[11px] text-slate-300">
                          Domande frequenti su SLA e compliance
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick("about")}
                      className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors text-left group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                        <FileText className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-red-300 transition-colors">
                          Carta dei Servizi AGCOM
                        </div>
                        <div className="text-[11px] text-slate-300">
                          Documentazione e media kit
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        if (timeoutRef.current) clearTimeout(timeoutRef.current);
                        setActiveDropdown(null);
                        setMobileMenuOpen(false);
                        if (onNavigateCareers) {
                          onNavigateCareers();
                        } else {
                          handleNavClick("about");
                        }
                      }}
                      className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors text-left group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors shrink-0">
                        <Briefcase className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-red-300 transition-colors">
                          Lavora con Noi
                        </div>
                        <div className="text-[11px] text-slate-300">
                          Posizioni aperte e carriere
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 7. CONTATTI */}
            <button
              onClick={() => handleNavClick("contacts")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activePage === "contacts"
                  ? "bg-[#0b1f3f] text-white shadow-sm"
                  : "text-slate-700 hover:text-[#0b1f3f] hover:bg-slate-100"
              }`}
            >
              {t.nav_contacts}
            </button>
          </nav>

          {/* Right Action: Clean CTA Button (Search and Flag removed as requested) */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#0b1f3f] hover:bg-red-600 text-white transition-all shadow-md active:scale-95 cursor-pointer font-sans"
            >
              {t.nav_get_in_touch}
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-slate-800 hover:bg-slate-100 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Accordion Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-3 shadow-xl animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
          <button
            onClick={() => handleNavClick("home")}
            className={`block w-full text-left py-2 text-sm font-semibold uppercase ${
              activePage === "home" ? "text-red-600 font-bold" : "text-slate-800"
            }`}
          >
            {t.nav_home}
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className={`block w-full text-left py-2 text-sm font-semibold uppercase ${
              activePage === "about" ? "text-red-600 font-bold" : "text-slate-800"
            }`}
          >
            Chi Siamo (Profilo Societario)
          </button>
          <button
            onClick={() => handleNavClick("services")}
            className={`block w-full text-left py-2 text-sm font-semibold uppercase ${
              activePage === "services" ? "text-red-600 font-bold" : "text-slate-800"
            }`}
          >
            Servizi IT &amp; TLC
          </button>
          <button
            onClick={() => handleNavClick("casestudies")}
            className={`block w-full text-left py-2 text-sm font-semibold uppercase ${
              activePage === "casestudies" ? "text-red-600 font-bold" : "text-slate-800"
            }`}
          >
            {t.nav_casestudies}
          </button>
          <button
            onClick={() => handleNavClick("plans")}
            className={`block w-full text-left py-2 text-sm font-semibold uppercase ${
              activePage === "plans" ? "text-red-600 font-bold" : "text-slate-800"
            }`}
          >
            Piani &amp; SLA
          </button>

          {/* Submenu on mobile */}
          <div className="pt-2 pb-2 pl-3 border-l-2 border-red-500 space-y-2">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              Risorse &amp; Informazioni
            </div>
            <button
              onClick={() => handleNavClick("news")}
              className={`block w-full text-left py-1 text-xs font-semibold ${
                activePage === "news" ? "text-red-600 font-bold" : "text-slate-700"
              }`}
            >
              News &amp; Aggiornamenti
            </button>
            <button
              onClick={() => handleNavClick("faq")}
              className={`block w-full text-left py-1 text-xs font-semibold ${
                activePage === "faq" ? "text-red-600 font-bold" : "text-slate-700"
              }`}
            >
              FAQ &amp; Normativa NIS2
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigateCareers) {
                  onNavigateCareers();
                } else {
                  handleNavClick("about");
                }
              }}
              className="block w-full text-left py-1 text-xs font-semibold text-slate-700 hover:text-red-600 flex items-center gap-2 cursor-pointer"
            >
              <Briefcase className="w-3.5 h-3.5 text-amber-500" />
              <span>Lavora con Noi &amp; Carriere</span>
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="block w-full text-left py-1 text-xs font-semibold text-slate-700"
            >
              Carta dei Servizi &amp; Media Kit
            </button>
          </div>

          <button
            onClick={() => handleNavClick("contacts")}
            className={`block w-full text-left py-2 text-sm font-semibold uppercase ${
              activePage === "contacts" ? "text-red-600 font-bold" : "text-slate-800"
            }`}
          >
            {t.nav_contacts}
          </button>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0b1f3f] text-white text-center cursor-pointer"
            >
              {t.nav_get_in_touch}
            </button>
            <div className="text-xs text-slate-500 text-center pt-2">
              Tel: {ANTELMA_INFO.phone} | {ANTELMA_INFO.email}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
