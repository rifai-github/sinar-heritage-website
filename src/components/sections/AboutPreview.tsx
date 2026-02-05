import Link from "next/link";
import { ArrowRight, Coffee, Car, Leaf } from "lucide-react";
import { SectionHeader, OptimizedImage } from "@/components/ui";

const features = [
  {
    icon: Coffee,
    title: "Kopi Berkualitas",
    description: "Biji kopi pilihan dari petani lokal Indonesia dengan harga terjangkau.",
  },
  {
    icon: Car,
    title: "Parkir Super Luas",
    description: "Area parkir yang sangat luas untuk kenyamanan pengunjung.",
  },
  {
    icon: Leaf,
    title: "Konsep Bali",
    description: "Desain interior rotan ala Bali dengan garden area dan kolam koi.",
  },
];

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                  <OptimizedImage
                    src="/images/about/interior-1.jpg"
                    alt="Interior Sinar Heritage"
                    fill
                    containerClassName="h-full"
                    className="h-full w-full"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <OptimizedImage
                    src="/images/about/coffee.jpg"
                    alt="Kopi Sinar Heritage"
                    fill
                    containerClassName="h-full"
                    className="h-full w-full"
                  />
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <OptimizedImage
                    src="/images/about/barista.jpg"
                    alt="Barista Sinar Heritage"
                    fill
                    containerClassName="h-full"
                    className="h-full w-full"
                  />
                </div>
                <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                  <OptimizedImage
                    src="/images/about/interior-2.jpg"
                    alt="Suasana Sinar Heritage"
                    fill
                    containerClassName="h-full"
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl bg-brand-800 px-8 py-4 text-center text-white shadow-brand">
              <div className="text-3xl font-bold">2025</div>
              <div className="text-sm opacity-90">Grand Opening</div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <SectionHeader
              title="Selamat Datang di Sinar Heritage"
              subtitle="Lebih dari sekadar kafe, kami adalah rumah kedua untuk Anda"
              centered={false}
            />

            <p className="mb-8 text-neutral-600">
              Dibuka pada 26 Juli 2025, Sinar Heritage hadir di Kendari,
              Sulawesi Tenggara sebagai destinasi ngopi baru dengan konsep
              berbeda. Kami percaya bahwa secangkir kopi yang baik dapat
              menyatukan orang-orang dan menciptakan momen berharga.
            </p>

            <p className="mb-8 text-neutral-600">
              Dengan desain interior rotan ala Bali yang hangat dan estetik,
              dilengkapi fasilitas lengkap seperti garden area, balkon, kolam
              koi, hingga musholla - kami menciptakan ruang nyaman untuk semua,
              dari mahasiswa hingga keluarga yang ingin quality time.
            </p>

            {/* Features */}
            <div className="mb-8 space-y-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-100">
                    <feature.icon className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-800">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-neutral-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-medium text-brand-700 transition-colors hover:text-brand-800"
            >
              Pelajari Lebih Lanjut
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
