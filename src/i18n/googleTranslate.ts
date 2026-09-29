import { Language } from "./translations";

declare global {
  interface Window {
    google?: {
      translate: {
        TranslateElement: new (
          options: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

export function applyGoogleTranslateLanguage(targetLang: Language) {
  if (typeof window === "undefined") return;

  const hostname = window.location.hostname;
  const cookieValue = targetLang === "it" ? "" : `/it/${targetLang}`;

  // 1. Set Google Translate cookies across all path/domain combinations
  if (targetLang === "it") {
    // Reset to Italian
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname}`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${hostname}`;
  } else {
    document.cookie = `googtrans=${cookieValue}; path=/;`;
    document.cookie = `googtrans=${cookieValue}; path=/; domain=${hostname}`;
    document.cookie = `googtrans=${cookieValue}; path=/; domain=.${hostname}`;
  }

  // 2. Trigger the Google Translate select element if loaded in DOM
  const fireSelectChange = () => {
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = targetLang;
      select.dispatchEvent(new Event("change", { bubbles: true }));
      return true;
    }
    return false;
  };

  if (!fireSelectChange()) {
    // If element is not yet attached, poll for a brief moment
    let retries = 0;
    const interval = setInterval(() => {
      retries++;
      if (fireSelectChange() || retries > 10) {
        clearInterval(interval);
      }
    }, 250);
  }
}
