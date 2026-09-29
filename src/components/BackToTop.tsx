import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Torna all'inizio"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 animate-in fade-in zoom-in-75 cursor-pointer border-2 border-white/20"
    >
      <ArrowUp className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
};
