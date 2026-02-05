import type { Metadata } from "next";
import { Star, ExternalLink } from "lucide-react";
import { SectionHeader, Card, StarRating, OptimizedImage } from "@/components/ui";
import { fetchPlaceDetails, fetchRatingInfo } from "@/lib/google-places";
import { CTASection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Testimoni",
  description:
    "Baca ulasan dan testimoni dari pelanggan Sinar Heritage. Lihat pengalaman nyata mereka bersama kami.",
};

export default async function TestimonialsPage() {
  const [placeDetails, ratingInfo] = await Promise.all([
    fetchPlaceDetails(),
    fetchRatingInfo(),
  ]);

  const reviews = placeDetails?.reviews || [];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/testimonials/hero-testimonials.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/70 via-brand-950/50 to-brand-950/80" />
        </div>

        <div className="container-custom relative flex min-h-[50vh] items-center justify-center text-center">
          <div className="py-32">
            <h1 className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Testimoni Pelanggan
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Dengarkan pengalaman nyata dari pelanggan yang telah merasakan
              kehangatan Sinar Heritage
            </p>
          </div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="bg-white py-12">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-center gap-8 rounded-2xl bg-brand-50 p-8 md:flex-row md:justify-between">
            {/* Google Rating */}
            <div className="flex items-center gap-6">
              <svg
                className="h-12 w-12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-bold text-brand-800">
                    {ratingInfo.average.toFixed(1)}
                  </span>
                  <StarRating rating={ratingInfo.average} size="lg" />
                </div>
                <p className="text-neutral-600">
                  Berdasarkan {ratingInfo.total} ulasan di Google
                </p>
              </div>
            </div>

            {/* Rating Breakdown */}
            <div className="flex gap-8">
              {[5, 4, 3, 2, 1].map((stars) => {
                // Calculate approximate percentage based on rating
                const percentage =
                  stars === 5
                    ? 75
                    : stars === 4
                    ? 18
                    : stars === 3
                    ? 5
                    : stars === 2
                    ? 1
                    : 1;
                return (
                  <div key={stars} className="text-center">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium">{stars}</span>
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <div className="mt-1 h-20 w-4 overflow-hidden rounded-full bg-neutral-200">
                      <div
                        className="w-full rounded-full bg-yellow-400"
                        style={{ height: `${percentage}%` }}
                      />
                    </div>
                    <span className="mt-1 text-xs text-neutral-500">
                      {percentage}%
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Write Review Button */}
            <a
              href="https://g.page/r/sinarheritage/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-800 px-6 py-3 font-medium text-white transition-colors hover:bg-brand-700"
            >
              Tulis Ulasan
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-neutral-100">
        <div className="container-custom">
          <SectionHeader
            title="Apa Kata Mereka"
            subtitle="Ulasan terbaru dari pelanggan setia Sinar Heritage"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <Card key={index} className="flex flex-col">
                {/* Header */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full bg-neutral-100">
                    {review.authorPhoto ? (
                      <OptimizedImage
                        src={review.authorPhoto}
                        alt={review.authorName}
                        fill
                        containerClassName="h-full"
                        className="h-full w-full"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-brand-100 text-lg font-bold text-brand-700">
                        {review.authorName.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-brand-800">
                      {review.authorName}
                    </div>
                    <div className="text-sm text-neutral-500">
                      {review.relativeTime}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <StarRating rating={review.rating} className="mb-3" />

                {/* Review Text */}
                <p className="flex-1 text-neutral-600">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Source Badge */}
                <div className="mt-4 flex items-center gap-2 border-t border-neutral-100 pt-4">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  <span className="text-xs text-neutral-500">
                    Ulasan dari Google
                  </span>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More - placeholder for future implementation */}
          <div className="mt-12 text-center">
            <a
              href="https://g.page/sinarheritage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-800 px-8 py-3 font-medium text-brand-800 transition-colors hover:bg-brand-800 hover:text-white"
            >
              Lihat Semua Ulasan di Google
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
