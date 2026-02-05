import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader, OptimizedImage, Card } from "@/components/ui";
import { getPopularMenu, formatPrice } from "@/data/menu";

export default function MenuPreview() {
  const popularItems = getPopularMenu().slice(0, 6);

  return (
    <section className="section-padding bg-secondary-100">
      <div className="container-custom">
        <SectionHeader
          title="Menu Favorit"
          subtitle="Temukan hidangan dan minuman terpopuler yang menjadi andalan kami"
        />

        {/* Menu Grid */}
        <div className="mb-12 mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularItems.map((item) => (
            <Card key={item.id} padding="none" className="overflow-hidden group">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <OptimizedImage
                  src={item.image}
                  alt={item.name}
                  fill
                  containerClassName="h-full"
                  className="h-full w-full transition-transform duration-500 group-hover:scale-110"
                />
                {/* Badges */}
                <div className="absolute left-3 top-3 flex gap-2">
                  {item.isPopular && (
                    <span className="badge-popular">Populer</span>
                  )}
                  {item.isNew && <span className="badge-new">Baru</span>}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="font-serif text-lg font-bold text-brand-800">
                    {item.name}
                  </h3>
                  <span className="flex-shrink-0 font-bold text-brand-700">
                    {formatPrice(item.price)}
                  </span>
                </div>
                <p className="line-clamp-2 text-sm text-neutral-600">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-full bg-brand-800 px-8 py-4 font-medium text-white transition-all hover:bg-brand-700 hover:shadow-brand"
          >
            Lihat Semua Menu
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
