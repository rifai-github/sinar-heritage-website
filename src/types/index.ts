// ===========================================
// TIPE DATA UNTUK SINAR HERITAGE
// ===========================================

// Menu Item
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export type MenuCategory =
  | "kopi"
  | "non-kopi"
  | "makanan-ringan"
  | "makanan-berat"
  | "dessert";

export interface MenuCategoryInfo {
  id: MenuCategory;
  name: string;
  description: string;
}

// Instagram
export interface InstagramPost {
  id: string;
  caption: string;
  mediaUrl: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  permalink: string;
  timestamp: string;
  thumbnailUrl?: string;
}

// Raw API response from Instagram (snake_case)
export interface InstagramApiPost {
  id: string;
  caption?: string;
  media_url?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  permalink: string;
  timestamp: string;
  thumbnail_url?: string;
}

export interface InstagramApiResponse {
  data: InstagramApiPost[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

// Google Reviews
export interface GoogleReview {
  authorName: string;
  authorPhoto?: string;
  rating: number;
  text: string;
  time: string;
  relativeTime: string;
}

export interface GooglePlaceDetails {
  name: string;
  rating: number;
  totalReviews: number;
  address: string;
  phone?: string;
  website?: string;
  openingHours?: string[];
  photos?: string[];
  reviews: GoogleReview[];
}

// Blog Post
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  date: string;
  tags: string[];
  readingTime: number;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  date: string;
  tags: string[];
  readingTime: number;
}

// Testimonial (untuk data statis sebagai fallback)
export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  comment: string;
  date: string;
  source: "google" | "manual";
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Contact Info
export interface ContactInfo {
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  socialMedia: {
    instagram: string;
    facebook?: string;
    tiktok?: string;
  };
  openingHours: {
    day: string;
    hours: string;
  }[];
  mapCoordinates: {
    lat: number;
    lng: number;
  };
}

// Gallery Item
export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category?: "interior" | "menu" | "event" | "atmosphere";
}

// SEO Metadata
export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}
