import { ContactInfo, NavItem, SEOMetadata } from "@/types";

// ===========================================
// KONFIGURASI WEBSITE SINAR HERITAGE
// ===========================================

export const siteConfig = {
  name: "Sinar Heritage",
  tagline: "Warisan Rasa, Kehangatan Setiap Cangkir",
  description:
    "Kafe dengan lahan parkir super luas di Kendari, Sulawesi Tenggara. Nikmati kopi berkualitas dengan sentuhan desain rotan ala Bali, lengkap dengan balkon, garden area, dan kolam koi.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sinarheritage.com",
  logo: "/logo/logo.png",
  ogImage: "/images/og-image.jpg",
  openedSince: "26 Juli 2025",
  city: "Kendari",
};

export const navigation: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Galeri", href: "/gallery" },
  { label: "Testimoni", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Kontak", href: "/contact" },
];

export const contactInfo: ContactInfo = {
  address: "Jl. Martandu, Kel. Kambu, Kec. Kambu, Kendari, Sulawesi Tenggara",
  phone: "+62 853 3365 0518",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285333650518",
  email: "hello@sinarheritage.com",
  socialMedia: {
    instagram: "https://www.instagram.com/sinarheritage",
    facebook: "https://www.facebook.com/sinarheritage",
    tiktok: "https://www.tiktok.com/@sinarheritage",
  },
  openingHours: [
    { day: "Setiap Hari", hours: "08:00 - 23:00 WITA" },
  ],
  mapCoordinates: {
    // Koordinat Kendari, Sulawesi Tenggara
    lat: -3.9778,
    lng: 122.5150,
  },
};

export const defaultSEO: SEOMetadata = {
  title: "Sinar Heritage - Kafe dengan Kehangatan Warisan di Kendari",
  description:
    "Sinar Heritage adalah kafe dengan lahan parkir super luas di Kendari, Sulawesi Tenggara. Desain rotan ala Bali, balkon, garden area, dan kolam koi. Buka setiap hari 08:00-23:00 WITA.",
  keywords: [
    "kafe kendari",
    "coffee shop kendari",
    "sinar heritage",
    "kopi sulawesi",
    "tempat nongkrong kendari",
    "cafe aesthetic kendari",
    "kafe keluarga",
    "workspace cafe",
    "kafe parkir luas",
    "cafe sulawesi tenggara",
  ],
  ogImage: "/images/og-image.jpg",
};

export const whatsappMessage = encodeURIComponent(
  "Halo Sinar Heritage! Saya ingin bertanya tentang..."
);

export const getWhatsAppLink = (message?: string) => {
  const msg = message || whatsappMessage;
  return `https://wa.me/${contactInfo.whatsapp}?text=${msg}`;
};
