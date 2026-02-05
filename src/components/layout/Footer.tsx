import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  ArrowRight,
} from "lucide-react";
import { siteConfig, navigation, contactInfo } from "@/data/site-config";

// TikTok icon
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 flex items-center gap-3">
              {/* Logo */}
              <div className="relative h-14 w-14 overflow-hidden rounded-full bg-white p-1">
                <Image
                  src="/logo/logo.png"
                  alt={siteConfig.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-white">
                  Sinar
                </span>
                <span className="font-serif text-sm text-brand-300">
                  Heritage
                </span>
              </div>
            </Link>
            <p className="mb-6 text-brand-200 leading-relaxed">
              {siteConfig.tagline}
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href={contactInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand-800 p-3 transition-all duration-300 hover:bg-brand-600 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              {contactInfo.socialMedia.facebook && (
                <a
                  href={contactInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-brand-800 p-3 transition-all duration-300 hover:bg-brand-600 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {contactInfo.socialMedia.tiktok && (
                <a
                  href={contactInfo.socialMedia.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-brand-800 p-3 transition-all duration-300 hover:bg-brand-600 hover:scale-110"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="mb-6 font-serif text-lg font-bold text-white flex items-center gap-2">
              <span className="h-1 w-6 rounded-full bg-brand-500"></span>
              Navigasi
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-brand-200 transition-all duration-200 hover:text-white hover:translate-x-1"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-5 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="mb-6 font-serif text-lg font-bold text-white flex items-center gap-2">
              <span className="h-1 w-6 rounded-full bg-brand-500"></span>
              Kontak
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="rounded-lg bg-brand-800 p-2">
                  <MapPin className="h-4 w-4 text-brand-300" />
                </div>
                <span className="text-brand-200 text-sm leading-relaxed">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="rounded-lg bg-brand-800 p-2">
                  <Phone className="h-4 w-4 text-brand-300" />
                </div>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-brand-200 text-sm transition-colors hover:text-white"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="rounded-lg bg-brand-800 p-2">
                  <Mail className="h-4 w-4 text-brand-300" />
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-brand-200 text-sm transition-colors hover:text-white"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours Column */}
          <div>
            <h3 className="mb-6 font-serif text-lg font-bold text-white flex items-center gap-2">
              <span className="h-1 w-6 rounded-full bg-brand-500"></span>
              Jam Operasional
            </h3>
            <ul className="space-y-4">
              {contactInfo.openingHours.map((schedule, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="rounded-lg bg-brand-800 p-2">
                    <Clock className="h-4 w-4 text-brand-300" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">{schedule.day}</div>
                    <div className="text-brand-300 text-sm">{schedule.hours}</div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Newsletter mini */}
            <div className="mt-6 p-4 rounded-xl bg-brand-900/50 border border-brand-800">
              <p className="text-sm text-brand-200 mb-3">Dapatkan update terbaru</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 rounded-lg bg-brand-800 px-3 py-2 text-sm text-white placeholder:text-brand-400 border border-brand-700 focus:border-brand-500 focus:outline-none"
                />
                <button className="rounded-lg bg-brand-600 px-3 py-2 text-sm font-medium hover:bg-brand-500 transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-800">
        <div className="container-custom flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-sm text-brand-400">
            &copy; {currentYear} {siteConfig.name}. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6 text-sm text-brand-400">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
