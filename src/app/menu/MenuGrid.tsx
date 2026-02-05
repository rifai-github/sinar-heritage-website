"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Card, OptimizedImage } from "@/components/ui";
import { menuItems, menuCategories, formatPrice } from "@/data/menu";
import { MenuCategory } from "@/types";
import { cn } from "@/lib/utils";

export default function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | "all">(
    "all"
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Filter menu items
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Group items by category for display
  const groupedItems = menuCategories.map((category) => ({
    ...category,
    items: filteredItems.filter((item) => item.category === category.id),
  }));

  return (
    <div className="mt-12">
      {/* Search and Filter */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Cari menu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input pl-12"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === "all"
                ? "bg-brand-800 text-white"
                : "bg-white text-neutral-600 hover:bg-brand-50"
            )}
          >
            Semua ({menuItems.length})
          </button>
          {menuCategories.map((category) => {
            const count = menuItems.filter(
              (item) => item.category === category.id
            ).length;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeCategory === category.id
                    ? "bg-brand-800 text-white"
                    : "bg-white text-neutral-600 hover:bg-brand-50"
                )}
              >
                {category.name} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <p className="mb-6 text-neutral-600">
        Menampilkan {filteredItems.length} dari {menuItems.length} menu
      </p>

      {/* Menu Display */}
      {activeCategory === "all" ? (
        // Grouped display
        <div className="space-y-16">
          {groupedItems.map(
            (category) =>
              category.items.length > 0 && (
                <div key={category.id} id={category.id}>
                  <div className="mb-6">
                    <h2 className="font-serif text-2xl font-bold text-brand-800 md:text-3xl">
                      {category.name}
                    </h2>
                    <p className="text-neutral-600">{category.description}</p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {category.items.map((item) => (
                      <MenuCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      ) : (
        // Flat display for single category
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="py-16 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100">
            <Search className="h-8 w-8 text-neutral-400" />
          </div>
          <h3 className="mb-2 font-serif text-xl font-bold text-brand-800">
            Menu Tidak Ditemukan
          </h3>
          <p className="text-neutral-600">
            Coba ubah kata kunci pencarian atau pilih kategori lain
          </p>
        </div>
      )}
    </div>
  );
}

// Menu Card Component
interface MenuCardProps {
  item: (typeof menuItems)[0];
}

function MenuCard({ item }: MenuCardProps) {
  return (
    <Card padding="none" className="group overflow-hidden">
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
          {item.isPopular && <span className="badge-popular">Populer</span>}
          {item.isNew && <span className="badge-new">Baru</span>}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-serif text-lg font-bold text-brand-800">
            {item.name}
          </h3>
          <span className="flex-shrink-0 rounded-full bg-brand-50 px-3 py-1 text-sm font-bold text-brand-700">
            {formatPrice(item.price)}
          </span>
        </div>
        <p className="line-clamp-2 text-sm text-neutral-600">
          {item.description}
        </p>
      </div>
    </Card>
  );
}
