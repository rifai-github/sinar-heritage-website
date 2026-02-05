import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { SectionHeader, Card } from "@/components/ui";
import ContactForm from "./ContactForm";
import { contactInfo, getWhatsAppLink } from "@/data/site-config";
import { getGoogleMapsEmbedUrl, getGoogleMapsDirectionUrl } from "@/lib/google-places";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Sinar Heritage - alamat, nomor telepon, email, dan jam operasional. Temukan lokasi kami di peta.",
};

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

export default function ContactPage() {
  const mapEmbedUrl = getGoogleMapsEmbedUrl(
    contactInfo.mapCoordinates.lat,
    contactInfo.mapCoordinates.lng
  );

  const directionsUrl = getGoogleMapsDirectionUrl(
    contactInfo.mapCoordinates.lat,
    contactInfo.mapCoordinates.lng
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/contact/hero-contact.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/70 via-brand-950/50 to-brand-950/80" />
        </div>

        <div className="container-custom relative flex min-h-[50vh] items-center justify-center text-center">
          <div className="py-32">
            <h1 className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Hubungi Kami
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Kami senang mendengar dari Anda. Silakan hubungi kami melalui
              berbagai cara di bawah ini.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <SectionHeader
                title="Informasi Kontak"
                subtitle="Temukan kami di lokasi berikut atau hubungi melalui channel yang tersedia"
                centered={false}
              />

              <div className="mt-8 space-y-6">
                {/* Address */}
                <Card className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-100">
                    <MapPin className="h-6 w-6 text-brand-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-800">Alamat</h3>
                    <p className="mt-1 text-neutral-600">
                      {contactInfo.address}
                    </p>
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-sm text-brand-700 hover:underline"
                    >
                      Lihat Petunjuk Arah →
                    </a>
                  </div>
                </Card>

                {/* Phone */}
                <Card className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-100">
                    <Phone className="h-6 w-6 text-brand-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-800">Telepon</h3>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="mt-1 block text-neutral-600 hover:text-brand-700"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </Card>

                {/* WhatsApp */}
                <Card className="flex items-start gap-4 bg-green-50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-800">WhatsApp</h3>
                    <p className="mt-1 text-neutral-600">
                      Chat langsung untuk reservasi atau pertanyaan
                    </p>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Chat Sekarang
                    </a>
                  </div>
                </Card>

                {/* Email */}
                <Card className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-100">
                    <Mail className="h-6 w-6 text-brand-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-800">Email</h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="mt-1 block text-neutral-600 hover:text-brand-700"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </Card>

                {/* Opening Hours */}
                <Card className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-100">
                    <Clock className="h-6 w-6 text-brand-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-800">
                      Jam Operasional
                    </h3>
                    <div className="mt-2 space-y-1">
                      {contactInfo.openingHours.map((schedule, index) => (
                        <div
                          key={index}
                          className="flex justify-between text-neutral-600"
                        >
                          <span>{schedule.day}</span>
                          <span className="font-medium">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Social Media */}
                <Card>
                  <h3 className="mb-4 font-semibold text-brand-800">
                    Ikuti Kami
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={contactInfo.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white transition-transform hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    {contactInfo.socialMedia.facebook && (
                      <a
                        href={contactInfo.socialMedia.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform hover:scale-110"
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
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-110"
                        aria-label="TikTok"
                      >
                        <TikTokIcon className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <SectionHeader
                title="Kirim Pesan"
                subtitle="Ada pertanyaan atau masukan? Silakan isi formulir di bawah ini"
                centered={false}
              />

              <Card className="mt-8">
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary-100 py-16">
        <div className="container-custom">
          <SectionHeader
            title="Lokasi Kami"
            subtitle="Temukan Sinar Heritage dengan mudah"
          />

          <div className="mt-12 overflow-hidden rounded-2xl shadow-warm">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Sinar Heritage"
              className="w-full"
            />
          </div>

          {/* Quick Actions */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-800 px-6 py-3 font-medium text-white transition-colors hover:bg-brand-700"
            >
              <MapPin className="h-5 w-5" />
              Petunjuk Arah
            </a>
            <a
              href={getWhatsAppLink("Halo, saya ingin reservasi meja")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" />
              Reservasi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Pertanyaan Umum"
            subtitle="Jawaban untuk pertanyaan yang sering diajukan"
          />

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {[
              {
                question: "Apakah perlu reservasi untuk datang?",
                answer:
                  "Reservasi tidak wajib, tapi sangat disarankan terutama untuk weekend atau group besar. Anda bisa reservasi via WhatsApp.",
              },
              {
                question: "Apakah tersedia WiFi?",
                answer:
                  "Ya, kami menyediakan WiFi gratis dengan kecepatan tinggi untuk semua pengunjung.",
              },
              {
                question: "Apakah ada area outdoor?",
                answer:
                  "Ya, kami memiliki area outdoor yang nyaman dengan tanaman hijau untuk Anda yang ingin menikmati udara segar.",
              },
              {
                question: "Apakah bisa untuk acara private?",
                answer:
                  "Tentu! Kami menyediakan paket untuk acara private seperti ulang tahun, arisan, atau meeting. Hubungi kami untuk info lebih lanjut.",
              },
              {
                question: "Metode pembayaran apa saja yang diterima?",
                answer:
                  "Kami menerima tunai, kartu debit/kredit (Visa, Mastercard), dan berbagai e-wallet (GoPay, OVO, DANA, ShopeePay).",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <h3 className="font-semibold text-brand-800">{faq.question}</h3>
                <p className="mt-2 text-neutral-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
