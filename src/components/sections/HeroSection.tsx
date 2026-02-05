import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/data/site-config";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/80 via-brand-900/60 to-brand-950/90" />
      </div>

      {/* Content */}
      <div className="container-custom relative flex min-h-screen items-center">
        <div className="max-w-3xl py-32">
          {/* Rating Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm text-white">4.8 Rating Google</span>
          </div>

          {/* Tagline */}
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
            {siteConfig.tagline}
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-xl text-lg text-white/90 md:text-xl">
            Selamat datang di Sinar Heritage, tempat di mana kehangatan tradisi
            bertemu dengan kenyamanan modern. Nikmati kopi berkualitas dan
            hidangan lezat dalam suasana yang menyenangkan.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={getWhatsAppLink("Halo, saya ingin reservasi meja di Sinar Heritage")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-4 font-medium text-white transition-all hover:bg-brand-500 hover:shadow-lg hover:scale-105"
            >
              Reservasi Sekarang
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-medium text-white transition-all hover:bg-white hover:text-brand-800"
            >
              Lihat Menu
            </Link>
          </div>

          {/* Quick Info */}
          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/20 pt-8">
            <div>
              <div className="text-3xl font-bold text-accent-gold">50+</div>
              <div className="text-sm text-white/70">Menu Pilihan</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-gold">248+</div>
              <div className="text-sm text-white/70">Ulasan Positif</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-gold">5+</div>
              <div className="text-sm text-white/70">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-2">
          <div className="h-2 w-1 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
