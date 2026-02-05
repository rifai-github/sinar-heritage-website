import { ArrowRight, MapPin, Clock, Phone } from "lucide-react";
import { getWhatsAppLink, contactInfo } from "@/data/site-config";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/cta-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-brand-950/90" />
      </div>

      <div className="container-custom relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white/90">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500"></span>
            </span>
            Buka Sekarang
          </div>

          {/* Title */}
          <h2 className="mb-6 font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Kunjungi Kami Hari Ini
          </h2>

          <p className="mb-8 text-lg text-white/80">
            Nikmati kehangatan Sinar Heritage bersama orang tersayang. Reservasi
            sekarang atau langsung datang ke lokasi kami.
          </p>

          {/* Quick Info */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-brand-400" />
              <span className="text-sm">Kendari, Sulawesi Tenggara</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-brand-400" />
              <span className="text-sm">08:00 - 23:00 WITA</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-brand-400" />
              <span className="text-sm">{contactInfo.phone}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={getWhatsAppLink("Halo, saya ingin reservasi meja di Sinar Heritage")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-4 font-medium text-white transition-all hover:bg-brand-500 hover:shadow-lg"
            >
              Reservasi via WhatsApp
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${contactInfo.mapCoordinates.lat},${contactInfo.mapCoordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-medium text-white transition-all hover:bg-white hover:text-brand-800"
            >
              <MapPin className="h-5 w-5" />
              Petunjuk Arah
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
