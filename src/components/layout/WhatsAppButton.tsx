"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppLink } from "@/data/site-config";
import { cn } from "@/lib/utils";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasShownTooltip, setHasShownTooltip] = useState(false);

  // Show button setelah scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    // Check initial position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show tooltip setelah beberapa detik (hanya sekali)
  useEffect(() => {
    if (isVisible && !hasShownTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
        setHasShownTooltip(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, hasShownTooltip]);

  // Auto hide tooltip setelah beberapa detik
  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  const whatsappLink = getWhatsAppLink();

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-end gap-3 transition-all duration-500",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-10 opacity-0"
      )}
    >
      {/* Tooltip */}
      <div
        className={cn(
          "relative max-w-[200px] rounded-lg bg-white p-3 shadow-lg transition-all duration-300",
          showTooltip
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-4 opacity-0"
        )}
      >
        <button
          onClick={() => setShowTooltip(false)}
          className="absolute -right-2 -top-2 rounded-full bg-neutral-100 p-1 text-neutral-600 hover:bg-neutral-200"
          aria-label="Tutup"
        >
          <X className="h-3 w-3" />
        </button>
        <p className="text-sm text-brand-800">
          Ada pertanyaan? Chat kami langsung via WhatsApp!
        </p>
        {/* Arrow */}
        <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 border-8 border-transparent border-l-white" />
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
        aria-label="Chat via WhatsApp"
        onClick={() => setShowTooltip(false)}
      >
        {/* Pulse animation */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />

        {/* Icon */}
        <MessageCircle className="h-7 w-7 fill-white" />

        {/* Hover tooltip */}
        <span className="absolute bottom-full right-0 mb-2 hidden whitespace-nowrap rounded-lg bg-brand-800 px-3 py-1.5 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 md:block">
          Chat WhatsApp
        </span>
      </a>
    </div>
  );
}
