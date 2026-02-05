import type { Metadata } from "next";
import {
  Coffee,
  Heart,
  Users,
  Award,
  Target,
  Eye,
  Car,
  Leaf,
  Baby,
  Cigarette,
  Building2,
  Fish,
} from "lucide-react";
import { SectionHeader, OptimizedImage, Card } from "@/components/ui";
import { CTASection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali lebih dekat Sinar Heritage, kafe dengan lahan parkir super luas di Kendari, Sulawesi Tenggara. Desain interior rotan ala Bali dengan suasana nyaman.",
};

const values = [
  {
    icon: Coffee,
    title: "Kualitas Premium",
    description:
      "Kami hanya menggunakan biji kopi terbaik dari petani lokal Indonesia dan bahan-bahan berkualitas tinggi.",
  },
  {
    icon: Heart,
    title: "Pelayanan Sepenuh Hati",
    description:
      "Setiap pelanggan adalah keluarga. Kami melayani dengan senyum dan ketulusan.",
  },
  {
    icon: Users,
    title: "Komunitas",
    description:
      "Lebih dari sekadar tempat ngopi, kami adalah ruang untuk berkumpul dan berbagi cerita.",
  },
  {
    icon: Award,
    title: "Konsistensi",
    description:
      "Rasa yang sama setiap kali kunjungan. Standar tinggi adalah komitmen kami.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Persiapan & Perencanaan",
    description:
      "Konsep Sinar Heritage mulai dirancang dengan visi menghadirkan kafe berkonsep Bali di Kendari, Sulawesi Tenggara.",
  },
  {
    year: "2025",
    title: "Grand Opening",
    description:
      "Sinar Heritage resmi dibuka pada 26 Juli 2025 di Jl. Martandu, Kambu, Kendari dengan lahan parkir super luas dan desain interior rotan ala Bali.",
  },
  {
    year: "2025",
    title: "Sambutan Hangat",
    description:
      "Masyarakat Kendari menyambut antusias kehadiran Sinar Heritage sebagai destinasi ngopi baru dengan fasilitas lengkap.",
  },
];

const facilities = [
  {
    icon: Car,
    title: "Parkir Super Luas",
    description: "Area parkir yang sangat luas untuk kenyamanan pengunjung",
  },
  {
    icon: Building2,
    title: "Indoor 2 Lantai",
    description: "Ruangan indoor nyaman dengan AC di dua lantai",
  },
  {
    icon: Leaf,
    title: "Garden Area & Balkon",
    description: "Area outdoor dengan taman hijau dan balkon untuk bersantai",
  },
  {
    icon: Fish,
    title: "Kolam Koi",
    description: "Kolam ikan koi yang menenangkan untuk suasana rileks",
  },
  {
    icon: Cigarette,
    title: "Smoking Area",
    description: "Area khusus merokok yang terpisah dan nyaman",
  },
  {
    icon: Baby,
    title: "Baby Chair",
    description: "Tersedia kursi bayi untuk pengunjung yang membawa anak kecil",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/about/hero-about.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/70 via-brand-950/50 to-brand-950/80" />
        </div>

        <div className="container-custom relative flex min-h-[60vh] items-center justify-center text-center">
          <div className="py-32">
            <h1 className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Tentang Sinar Heritage
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Lebih dari sekadar kafe, kami adalah rumah kedua yang menghadirkan
              kehangatan dalam setiap cangkir kopi
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-brand-700">
                Cerita Kami
              </span>
              <h2 className="mb-6 font-serif text-3xl font-bold text-brand-800 md:text-4xl">
                Oase Kopi di Bumi Anoa
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Sinar Heritage hadir di Kendari, Sulawesi Tenggara, sebagai
                  destinasi ngopi baru yang menggabungkan kenyamanan modern
                  dengan sentuhan estetika Bali. Dibuka pada 26 Juli 2025,
                  kafe ini menawarkan pengalaman berbeda dengan lahan parkir
                  super luas dan desain interior rotan yang khas.
                </p>
                <p>
                  Nama &quot;Sinar Heritage&quot; mencerminkan visi kami:
                  menjadi cahaya baru dalam dunia perkopian Kendari sambil
                  tetap menghormati warisan budaya Indonesia. Desain interior
                  rotan ala Bali dipilih untuk menghadirkan suasana hangat
                  dan autentik yang berbeda dari kafe-kafe lainnya.
                </p>
                <p>
                  Dengan fasilitas lengkap mulai dari garden area, balkon,
                  kolam koi, hingga musholla, Sinar Heritage bukan sekadar
                  tempat ngopi biasa. Ini adalah ruang untuk bersantai,
                  berkumpul dengan keluarga, atau sekadar menikmati ketenangan
                  di tengah kesibukan kota Kendari.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <OptimizedImage
                  src="/images/about/story.jpg"
                  alt="Cerita Sinar Heritage"
                  fill
                  containerClassName="h-full"
                  className="h-full w-full"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-brand-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary-100">
        <div className="container-custom">
          <SectionHeader
            title="Visi & Misi"
            subtitle="Komitmen kami untuk menghadirkan yang terbaik"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-100">
                <Eye className="h-8 w-8 text-brand-700" />
              </div>
              <h3 className="mb-4 font-serif text-2xl font-bold text-brand-800">
                Visi
              </h3>
              <p className="text-neutral-600">
                Menjadi kafe pilihan utama yang menghadirkan pengalaman ngopi
                berkualitas tinggi dengan sentuhan kehangatan budaya Indonesia,
                serta menjadi ruang yang menginspirasi kreativitas dan
                kebersamaan.
              </p>
            </Card>

            <Card className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-100">
                <Target className="h-8 w-8 text-brand-700" />
              </div>
              <h3 className="mb-4 font-serif text-2xl font-bold text-brand-800">
                Misi
              </h3>
              <ul className="space-y-3 text-left text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-800" />
                  Menyajikan kopi dan hidangan berkualitas dengan konsistensi
                  rasa terbaik
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-800" />
                  Menciptakan suasana yang nyaman dan inspiratif bagi semua
                  kalangan
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-800" />
                  Mendukung petani kopi lokal Indonesia dengan kemitraan yang
                  adil
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-800" />
                  Memberikan pelayanan tulus yang membuat pelanggan merasa
                  seperti di rumah
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Nilai-Nilai Kami"
            subtitle="Prinsip yang kami pegang teguh dalam setiap langkah"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-100">
                  <value.icon className="h-7 w-7 text-brand-700" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-brand-800">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-secondary-100">
        <div className="container-custom">
          <SectionHeader
            title="Fasilitas Kami"
            subtitle="Berbagai fasilitas lengkap untuk kenyamanan Anda"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <Card key={facility.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-100">
                  <facility.icon className="h-7 w-7 text-brand-700" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-brand-800">
                  {facility.title}
                </h3>
                <p className="text-sm text-neutral-600">{facility.description}</p>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 rounded-2xl bg-brand-800 p-8 text-center text-white">
            <h3 className="mb-4 font-serif text-2xl font-bold">
              Tersedia Juga Musholla
            </h3>
            <p className="mx-auto max-w-2xl text-white/90">
              Untuk kenyamanan beribadah, Sinar Heritage menyediakan musholla
              yang bersih dan nyaman bagi pengunjung yang ingin menunaikan
              sholat.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Perjalanan Kami"
            subtitle="Milestone penting dalam sejarah Sinar Heritage"
          />

          <div className="relative mt-12">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-brand-200 md:left-1/2 md:block md:-translate-x-1/2" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col gap-4 md:flex-row md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="ml-12 md:ml-0 md:w-[calc(50%-2rem)]">
                    <Card
                      className={index % 2 === 0 ? "md:text-right" : "md:text-left"}
                    >
                      <span className="mb-2 inline-block rounded-full bg-brand-100 px-3 py-1 text-sm font-bold text-brand-700">
                        {item.year}
                      </span>
                      <h3 className="mb-2 font-serif text-xl font-bold text-brand-800">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600">{item.description}</p>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-brand-800 text-white md:left-1/2 md:-translate-x-1/2">
                    <span className="h-3 w-3 rounded-full bg-white" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section-padding bg-secondary-100">
        <div className="container-custom">
          <SectionHeader
            title="Tim Kami"
            subtitle="Orang-orang hebat di balik setiap cangkir kopi"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Budi Santoso",
                role: "Founder & Owner",
                image: "/images/team/founder.jpg",
              },
              {
                name: "Sarah Wijaya",
                role: "Head Barista",
                image: "/images/team/barista.jpg",
              },
              {
                name: "Andi Pratama",
                role: "Chef de Cuisine",
                image: "/images/team/chef.jpg",
              },
              {
                name: "Lisa Anggraini",
                role: "Operations Manager",
                image: "/images/team/manager.jpg",
              },
            ].map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-2xl">
                  <OptimizedImage
                    src={member.image}
                    alt={member.name}
                    fill
                    containerClassName="h-full"
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-800">
                  {member.name}
                </h3>
                <p className="text-sm text-neutral-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
