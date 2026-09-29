import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ServiceCardsRow } from "./components/ServiceCardsRow";
import { MarqueeBanner } from "./components/MarqueeBanner";
import { CaseStudyDark } from "./components/CaseStudyDark";
import { PricingSection } from "./components/PricingSection";
import { NewsSection } from "./components/NewsSection";
import { PartnersRow } from "./components/PartnersRow";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { AboutPage, AboutTab } from "./components/AboutPage";
import { ServicesPage } from "./components/ServicesPage";
import { ServiceLandingPage } from "./components/ServiceLandingPage";
import { CasestudiesPage } from "./components/CasestudiesPage";
import { PlansPage } from "./components/PlansPage";
import { NewsPage } from "./components/NewsPage";
import { FaqPage } from "./components/FaqPage";
import { ServiceModal } from "./components/ServiceModal";
import { BackToTop } from "./components/BackToTop";
import { FloatingLangSwitcher } from "./components/FloatingLangSwitcher";
import { ServiceItem, CaseStudy, PricingPlan, SERVICES } from "./data/antelmaData";
import { Language } from "./i18n/translations";

export default function App() {
  const [activePage, setActivePage] = useState<string>("home");
  const [selectedLandingServiceId, setSelectedLandingServiceId] = useState<string>("connettivita-gestita");
  const [selectedModalService, setSelectedModalService] = useState<ServiceItem | null>(null);
  const [aboutInitialTab, setAboutInitialTab] = useState<AboutTab>("organigramma");
  const [currentLang, setCurrentLang] = useState<Language>("it");

  const handleOpenContact = () => {
    if (activePage !== "home") {
      setActivePage("home");
      setTimeout(() => {
        const el = document.getElementById("contact-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById("contact-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactService = (serviceName: string) => {
    handleOpenContact();
  };

  const handleOpenServiceLanding = (serviceId: string) => {
    setSelectedLandingServiceId(serviceId);
    setActivePage("service-landing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateToCareers = () => {
    setAboutInitialTab("carriere");
    setActivePage("about");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      const el = document.getElementById("about-tabs-container") || document.getElementById("lavora-con-noi-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200);
  };

  const handleExploreMoreCaseStudy = (study: CaseStudy) => {
    setActivePage("casestudies");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    handleOpenContact();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fb] text-[#0f172a] font-sans selection:bg-red-600 selection:text-white">
      
      {/* Top Floating Navbar (Concise, Reliable Dropdowns, No Search Lens, No Flag in Header) */}
      <Navbar
        activePage={activePage}
        setActivePage={(page) => {
          if (page === "about") {
            setAboutInitialTab("organigramma");
          }
          setActivePage(page);
        }}
        onOpenContact={handleOpenContact}
        currentLang={currentLang}
        onSelectService={(service) => handleOpenServiceLanding(service.id)}
        onNavigateCareers={handleNavigateToCareers}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activePage === "home" && (
          <>
            {/* Hero Section with IT Team Photography, Blue & Red Palette */}
            <HeroSection
              onExplore={() => {
                setActivePage("services");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onOpenContact={handleOpenContact}
              currentLang={currentLang}
            />

            {/* Horizontal Pillar Service Cards - clicking navigates to dedicated SEO/GEO Landing Page */}
            <ServiceCardsRow
              onSelectService={(service) => handleOpenServiceLanding(service.id)}
            />

            {/* Red Infinite Marquee Band */}
            <MarqueeBanner currentLang={currentLang} />

            {/* Dark Theme Featured Case Study with Date Badge */}
            <CaseStudyDark
              onExploreMore={handleExploreMoreCaseStudy}
              currentLang={currentLang}
            />

            {/* Pricing & Business Continuity Plans */}
            <PricingSection
              onSelectPlan={handleSelectPlan}
              currentLang={currentLang}
            />

            {/* News & Tech Insights */}
            <NewsSection
              onReadArticle={(id) => {
                setActivePage("news");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onViewAll={() => {
                setActivePage("news");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              currentLang={currentLang}
            />

            {/* Trusted Collaborators & Technology Partners */}
            <PartnersRow />

            {/* Interactive 2-Column Contact Section */}
            <ContactSection currentLang={currentLang} />
          </>
        )}

        {/* Dedicated SEO/GEO & Conversion Service Landing Page */}
        {activePage === "service-landing" && (
          <ServiceLandingPage
            serviceId={selectedLandingServiceId}
            onNavigateHome={() => {
              setActivePage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onNavigateServices={() => {
              setActivePage("services");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onSelectOtherService={(sId) => handleOpenServiceLanding(sId)}
            onOpenQuickModal={(service) => setSelectedModalService(service)}
            currentLang={currentLang}
          />
        )}

        {/* Company Profile (Chi Siamo with Intred Structure, Timeline, Governance & Team Schema) */}
        {activePage === "about" && (
          <AboutPage
            onNavigateHome={() => {
              setActivePage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onOpenContact={handleOpenContact}
            initialTab={aboutInitialTab}
            currentLang={currentLang}
          />
        )}

        {/* Services Catalog with Click-Through to Dedicated Landing Pages & Quick Modal Option */}
        {activePage === "services" && (
          <ServicesPage
            onNavigateHome={() => {
              setActivePage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onSelectServiceLanding={(sId) => handleOpenServiceLanding(sId)}
            onOpenQuickModal={(service) => setSelectedModalService(service)}
            onOpenContact={handleOpenContact}
            currentLang={currentLang}
          />
        )}

        {activePage === "casestudies" && (
          <CasestudiesPage
            onNavigateHome={() => {
              setActivePage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onExploreMore={handleExploreMoreCaseStudy}
            onOpenContact={handleOpenContact}
            currentLang={currentLang}
          />
        )}

        {activePage === "plans" && (
          <PlansPage
            onNavigateHome={() => {
              setActivePage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onSelectPlan={handleSelectPlan}
            onOpenContact={handleOpenContact}
            currentLang={currentLang}
          />
        )}

        {activePage === "news" && (
          <NewsPage
            onNavigateHome={() => {
              setActivePage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onOpenContact={handleOpenContact}
            currentLang={currentLang}
          />
        )}

        {activePage === "faq" && (
          <FaqPage
            onNavigateHome={() => {
              setActivePage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onOpenContact={handleOpenContact}
            currentLang={currentLang}
          />
        )}

        {activePage === "contacts" && (
          <div className="pt-16">
            <ContactSection currentLang={currentLang} />
          </div>
        )}
      </main>

      {/* High-Impact Blue & Red Footer with Service Landing Links */}
      <Footer
        onNavigate={(page) => {
          if (page === "about") {
            setAboutInitialTab("organigramma");
          }
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onSelectServiceLanding={(sId) => handleOpenServiceLanding(sId)}
        onNavigateCareers={handleNavigateToCareers}
        currentLang={currentLang}
      />

      {/* Floating Flag Switcher in Bottom Left with Automatic Translation */}
      <FloatingLangSwitcher
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
      />

      {/* Floating Red Circular Back-To-Top Button in Bottom Right */}
      <BackToTop />

      {/* Detailed Service Modal (Quick Preview) with Option to Open Full Landing Page */}
      <ServiceModal
        service={selectedModalService}
        onClose={() => setSelectedModalService(null)}
        onContactService={handleContactService}
        onNavigateLanding={(sId) => handleOpenServiceLanding(sId)}
      />

    </div>
  );
}
