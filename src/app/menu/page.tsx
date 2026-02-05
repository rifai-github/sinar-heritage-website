import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui";
import MenuGrid from "./MenuGrid";
import { CTASection } from "@/components/sections";
import { menuCategories } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Jelajahi menu lengkap Sinar Heritage - kopi, minuman non-kopi, makanan ringan, makanan berat, dan dessert. Temukan hidangan favorit Anda.",
};

export default function MenuPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/menu/hero-menu.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/70 via-brand-950/50 to-brand-950/80" />
        </div>

        <div className="container-custom relative flex min-h-[50vh] items-center justify-center text-center">
          <div className="py-32">
            <h1 className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Menu Kami
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Dari kopi berkualitas hingga hidangan lezat, temukan favorit
              Anda di Sinar Heritage
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-20 z-30 bg-white shadow-sm">
        <div className="container-custom">
          <nav className="scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4 py-4">
            <a
              href="#semua"
              className="flex-shrink-0 rounded-full bg-brand-800 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
            >
              Semua
            </a>
            {menuCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="flex-shrink-0 rounded-full bg-secondary-100 px-6 py-2.5 text-sm font-medium text-secondary-700 transition-colors hover:bg-brand-100 hover:text-brand-700"
              >
                {category.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section-padding bg-secondary-100" id="semua">
        <div className="container-custom">
          <SectionHeader
            title="Pilihan Menu"
            subtitle="Semua hidangan disiapkan dengan bahan berkualitas dan penuh cinta"
          />

          {/* Menu Grid Component (Client Component for interactivity) */}
          <MenuGrid />
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-12">
        <div className="container-custom">
          <div className="rounded-2xl bg-brand-50 p-8 text-center">
            <h3 className="mb-4 font-serif text-2xl font-bold text-brand-800">
              Informasi Menu
            </h3>
            <div className="mx-auto max-w-2xl space-y-2 text-neutral-600">
              <p>
                <strong>Alergi?</strong> Silakan informasikan staf kami tentang
                alergi makanan Anda. Kami akan dengan senang hati membantu.
              </p>
              <p>
                <strong>Halal.</strong> Semua menu kami dijamin 100% halal.
              </p>
              <p>
                <strong>Harga.</strong> Harga sudah termasuk pajak. Tidak ada
                biaya tambahan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
