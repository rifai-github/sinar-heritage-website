"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navigation, siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll untuk efek header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu saat route berubah
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll saat menu terbuka
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            {/* Logo Image */}
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src="/logo/logo.png"
                alt={siteConfig.name}
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Brand Name */}
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-serif text-xl font-bold leading-tight transition-colors",
                  isScrolled ? "text-brand-800" : "text-white"
                )}
              >
                Sinar
              </span>
              <span
                className={cn(
                  "font-serif text-sm font-medium leading-tight transition-colors",
                  isScrolled ? "text-brand-600" : "text-white/90"
                )}
              >
                Heritage
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                  isScrolled
                    ? pathname === item.href
                      ? "text-brand-800 bg-brand-50"
                      : "text-neutral-700 hover:text-brand-800 hover:bg-brand-50"
                    : pathname === item.href
                      ? "text-white bg-white/20"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            href="/contact"
            className={cn(
              "hidden rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 lg:block",
              "transform hover:scale-105 active:scale-95",
              isScrolled
                ? "bg-brand-800 text-white hover:bg-brand-700 shadow-brand"
                : "bg-white text-brand-800 hover:bg-brand-50"
            )}
          >
            Hubungi Kami
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "rounded-full p-2.5 transition-all duration-200 lg:hidden",
              isScrolled
                ? "text-brand-800 hover:bg-brand-50"
                : "text-white hover:bg-white/10"
            )}
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-20 z-40 bg-white transition-all duration-300 lg:hidden",
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        )}
      >
        <div className="container-custom py-8">
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-4 py-3.5 text-lg font-medium transition-all duration-200",
                  pathname === item.href
                    ? "bg-brand-50 text-brand-800 border-l-4 border-brand-800"
                    : "text-neutral-700 hover:bg-secondary-50 hover:text-brand-800"
                )}
              >
                {item.label}
              </Link>
            ))}

            {/* CTA Button - Mobile */}
            <Link
              href="/contact"
              className="mt-6 rounded-full bg-brand-800 px-6 py-4 text-center font-semibold text-white transition-all duration-300 hover:bg-brand-700 shadow-brand"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Footer Info */}
          <div className="mt-8 border-t border-secondary-200 pt-6">
            <p className="text-sm text-neutral-500 text-center">
              © 2024 Sinar Heritage. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
