import { GooglePlaceDetails, GoogleReview } from "@/types";
import { fallbackTestimonials, fallbackRating } from "@/data/testimonials";

// ===========================================
// GOOGLE PLACES API INTEGRATION
// ===========================================

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;
const REVALIDATE_TIME = parseInt(process.env.REVALIDATE_GOOGLE_REVIEWS || "3600");

/**
 * Fetch detail tempat dari Google Places API
 * Termasuk rating, reviews, dan foto
 */
export async function fetchPlaceDetails(): Promise<GooglePlaceDetails | null> {
  // Jika credentials tidak tersedia, gunakan fallback
  if (!GOOGLE_MAPS_API_KEY || !GOOGLE_PLACE_ID) {
    console.log(
      "Google Places API credentials not configured, using fallback data"
    );
    return getFallbackPlaceDetails();
  }

  try {
    const fields = "name,rating,user_ratings_total,formatted_address,formatted_phone_number,website,opening_hours,photos,reviews";
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=${fields}&key=${GOOGLE_MAPS_API_KEY}&language=id&reviews_sort=newest`;

    const response = await fetch(url, {
      next: { revalidate: REVALIDATE_TIME },
    });

    if (!response.ok) {
      console.error("Google Places API error:", response.status);
      return getFallbackPlaceDetails();
    }

    const data = await response.json();

    if (data.status !== "OK") {
      console.error("Google Places API status:", data.status);
      return getFallbackPlaceDetails();
    }

    const result = data.result;

    // Transform reviews
    const reviews: GoogleReview[] = (result.reviews || []).map(
      (review: {
        author_name: string;
        profile_photo_url?: string;
        rating: number;
        text: string;
        time: number;
        relative_time_description: string;
      }) => ({
        authorName: review.author_name,
        authorPhoto: review.profile_photo_url,
        rating: review.rating,
        text: review.text,
        time: new Date(review.time * 1000).toISOString(),
        relativeTime: review.relative_time_description,
      })
    );

    // Transform photos URLs
    const photos = (result.photos || [])
      .slice(0, 10)
      .map(
        (photo: { photo_reference: string }) =>
          `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photo.photo_reference}&key=${GOOGLE_MAPS_API_KEY}`
      );

    return {
      name: result.name,
      rating: result.rating || 0,
      totalReviews: result.user_ratings_total || 0,
      address: result.formatted_address || "",
      phone: result.formatted_phone_number,
      website: result.website,
      openingHours: result.opening_hours?.weekday_text,
      photos,
      reviews,
    };
  } catch (error) {
    console.error("Error fetching place details:", error);
    return getFallbackPlaceDetails();
  }
}

/**
 * Fetch reviews saja dari Google Places
 */
export async function fetchGoogleReviews(): Promise<GoogleReview[]> {
  const placeDetails = await fetchPlaceDetails();
  return placeDetails?.reviews || [];
}

/**
 * Get rating info (average dan total)
 */
export async function fetchRatingInfo(): Promise<{
  average: number;
  total: number;
}> {
  const placeDetails = await fetchPlaceDetails();
  return {
    average: placeDetails?.rating || fallbackRating.average,
    total: placeDetails?.totalReviews || fallbackRating.total,
  };
}

/**
 * Fallback place details menggunakan data lokal
 */
function getFallbackPlaceDetails(): GooglePlaceDetails {
  return {
    name: "Sinar Heritage",
    rating: fallbackRating.average,
    totalReviews: fallbackRating.total,
    address: "Jl. Martandu No.20, Kambu, Kec. Kambu, Kota Kendari, Sulawesi Tenggara 93231",
    phone: "+62 853 3365 0518",
    website: "https://sinarheritage.com",
    openingHours: [
      "Senin: 08:00 - 22:00",
      "Selasa: 08:00 - 22:00",
      "Rabu: 08:00 - 22:00",
      "Kamis: 08:00 - 22:00",
      "Jumat: 08:00 - 22:00",
      "Sabtu: 09:00 - 23:00",
      "Minggu: 09:00 - 23:00",
    ],
    photos: [],
    reviews: fallbackTestimonials.map((t) => ({
      authorName: t.name,
      authorPhoto: t.avatar,
      rating: t.rating,
      text: t.comment,
      time: t.date,
      relativeTime: getRelativeTime(t.date),
    })),
  };
}

/**
 * Helper untuk generate relative time string
 */
function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffInDays === 0) return "Hari ini";
  if (diffInDays === 1) return "Kemarin";
  if (diffInDays < 7) return `${diffInDays} hari yang lalu`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} minggu yang lalu`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} bulan yang lalu`;
  return `${Math.floor(diffInDays / 365)} tahun yang lalu`;
}

/**
 * Generate Google Maps embed URL
 */
export function getGoogleMapsEmbedUrl(
  lat: number,
  lng: number,
  zoom: number = 15
): string {
  const apiKey = GOOGLE_MAPS_API_KEY;
  if (apiKey) {
    return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${lat},${lng}&zoom=${zoom}`;
  }
  // Fallback tanpa API key
  return `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
}

/**
 * Generate link ke Google Maps direction
 */
export function getGoogleMapsDirectionUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}
