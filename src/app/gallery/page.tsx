import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui";
import GalleryGrid from "./GalleryGrid";
import { InstagramGallery, CTASection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Lihat galeri foto Sinar Heritage - interior, menu, event, dan suasana kafe. Juga ikuti kami di Instagram untuk update terbaru.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/gallery/hero-gallery.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/70 via-brand-950/50 to-brand-950/80" />
        </div>

        <div className="container-custom relative flex min-h-[50vh] items-center justify-center text-center">
          <div className="py-32">
            <h1 className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Galeri
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Jelajahi keindahan dan kehangatan Sinar Heritage melalui
              koleksi foto kami
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Momen di Sinar Heritage"
            subtitle="Setiap sudut menyimpan cerita dan kenangan indah"
          />

          {/* Gallery Grid with Lightbox */}
          <GalleryGrid />
        </div>
      </section>

      {/* Instagram Section */}
      <InstagramGallery />

      {/* CTA */}
      <CTASection />
    </>
  );
}
