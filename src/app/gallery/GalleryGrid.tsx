"use client";

import { useState } from "react";
import { OptimizedImage, Lightbox } from "@/components/ui";
import { galleryItems, getGalleryByCategory } from "@/data/gallery";
import { GalleryItem } from "@/types";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "Semua" },
  { id: "interior", label: "Interior" },
  { id: "menu", label: "Menu" },
  { id: "event", label: "Event" },
  { id: "atmosphere", label: "Suasana" },
] as const;

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter items based on category
  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : getGalleryByCategory(activeCategory as GalleryItem["category"]);

  // Prepare images for lightbox
  const lightboxImages = filteredItems.map((item) => ({
    src: item.src,
    alt: item.alt,
    caption: item.caption,
  }));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* Category Filter */}
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "rounded-full px-6 py-2.5 text-sm font-medium transition-colors",
              activeCategory === category.id
                ? "bg-brand-800 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-brand-100 hover:text-brand-700"
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => openLightbox(index)}
            className="group relative aspect-square overflow-hidden rounded-xl bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2"
          >
            <OptimizedImage
              src={item.src}
              alt={item.alt}
              fill
              containerClassName="h-full"
              className="h-full w-full transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-950/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <svg
                className="mb-2 h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
              {item.caption && (
                <span className="px-4 text-center text-sm text-white">
                  {item.caption}
                </span>
              )}
            </div>

            {/* Category badge */}
            {item.category && (
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium capitalize text-brand-800 backdrop-blur-sm">
                {item.category}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="mt-6 text-center text-neutral-600">
        Menampilkan {filteredItems.length} foto
      </p>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        images={lightboxImages}
        currentIndex={currentImageIndex}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </>
  );
}
