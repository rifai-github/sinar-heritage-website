import { GalleryItem, InstagramPost } from "@/types";

// ===========================================
// DATA GALERI FALLBACK (Jika Instagram API tidak tersedia)
// ===========================================

export const fallbackInstagramPosts: InstagramPost[] = [
  {
    id: "ig-001",
    caption:
      "Selamat pagi dari Sinar Heritage! ☕ Mulai harimu dengan secangkir kopi hangat. #SinarHeritage #KopiPagi",
    mediaUrl: "/images/gallery/instagram-1.jpg",
    mediaType: "IMAGE",
    permalink: "https://www.instagram.com/p/abc123",
    timestamp: "2024-01-15T08:00:00Z",
  },
  {
    id: "ig-002",
    caption:
      "Matcha Latte yang creamy dan segar 🍵 Perfect untuk menemani hari produktifmu! #MatchaLatte #SinarHeritage",
    mediaUrl: "/images/gallery/instagram-2.jpg",
    mediaType: "IMAGE",
    permalink: "https://www.instagram.com/p/def456",
    timestamp: "2024-01-14T14:00:00Z",
  },
  {
    id: "ig-003",
    caption:
      "Weekend vibes di Sinar Heritage 🌿 Tempat nyaman untuk bersantai bersama orang tersayang. #WeekendCafe",
    mediaUrl: "/images/gallery/instagram-3.jpg",
    mediaType: "IMAGE",
    permalink: "https://www.instagram.com/p/ghi789",
    timestamp: "2024-01-13T10:00:00Z",
  },
  {
    id: "ig-004",
    caption:
      "Roti Bakar Cokelat Keju 🍞🧀 Lelehan cokelat dan keju yang bikin nagih! #RotiBalcar #SinarHeritage",
    mediaUrl: "/images/gallery/instagram-4.jpg",
    mediaType: "IMAGE",
    permalink: "https://www.instagram.com/p/jkl012",
    timestamp: "2024-01-12T16:00:00Z",
  },
  {
    id: "ig-005",
    caption:
      "Es Kopi Susu Gula Aren ❤️ Signature drink yang wajib kamu coba! #EsKopiSusu #GulaAren",
    mediaUrl: "/images/gallery/instagram-5.jpg",
    mediaType: "IMAGE",
    permalink: "https://www.instagram.com/p/mno345",
    timestamp: "2024-01-11T12:00:00Z",
  },
  {
    id: "ig-006",
    caption:
      "Interior corner favorit untuk work from cafe 💻 Wifi kencang, colokan tersedia! #WorkFromCafe",
    mediaUrl: "/images/gallery/instagram-6.jpg",
    mediaType: "IMAGE",
    permalink: "https://www.instagram.com/p/pqr678",
    timestamp: "2024-01-10T09:00:00Z",
  },
  {
    id: "ig-007",
    caption:
      "Tiramisu homemade 🍰 Dessert favorit dengan rasa autentik Italia. #Tiramisu #DessertTime",
    mediaUrl: "/images/gallery/instagram-7.jpg",
    mediaType: "IMAGE",
    permalink: "https://www.instagram.com/p/stu901",
    timestamp: "2024-01-09T15:00:00Z",
  },
  {
    id: "ig-008",
    caption:
      "Sunset view dari outdoor area kami 🌅 Nikmati sore yang indah di Sinar Heritage. #CafeSunset",
    mediaUrl: "/images/gallery/instagram-8.jpg",
    mediaType: "IMAGE",
    permalink: "https://www.instagram.com/p/vwx234",
    timestamp: "2024-01-08T17:30:00Z",
  },
  {
    id: "ig-009",
    caption:
      "Chicken Steak with mushroom sauce 🥩 Hidangan yang selalu bikin kenyang dan puas. #ChickenSteak",
    mediaUrl: "/images/gallery/instagram-9.jpg",
    mediaType: "IMAGE",
    permalink: "https://www.instagram.com/p/yza567",
    timestamp: "2024-01-07T13:00:00Z",
  },
];

// ===========================================
// GALERI MANUAL (untuk halaman galeri)
// ===========================================

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-001",
    src: "/images/gallery/interior-1.jpg",
    alt: "Area dalam Sinar Heritage dengan pencahayaan hangat",
    caption: "Area dalam yang nyaman dengan pencahayaan hangat",
    category: "interior",
  },
  {
    id: "gallery-002",
    src: "/images/gallery/interior-2.jpg",
    alt: "Sudut baca dengan rak buku di Sinar Heritage",
    caption: "Sudut baca favorit pengunjung",
    category: "interior",
  },
  {
    id: "gallery-003",
    src: "/images/gallery/interior-3.jpg",
    alt: "Area outdoor dengan tanaman hijau",
    caption: "Area outdoor yang asri dan sejuk",
    category: "interior",
  },
  {
    id: "gallery-004",
    src: "/images/gallery/menu-1.jpg",
    alt: "Sinar Signature Coffee",
    caption: "Sinar Signature - kopi khas kami",
    category: "menu",
  },
  {
    id: "gallery-005",
    src: "/images/gallery/menu-2.jpg",
    alt: "Nasi Goreng Sinar dengan telur mata sapi",
    caption: "Nasi Goreng Sinar yang legendaris",
    category: "menu",
  },
  {
    id: "gallery-006",
    src: "/images/gallery/menu-3.jpg",
    alt: "Aneka dessert pilihan",
    caption: "Dessert pilihan yang menggugah selera",
    category: "menu",
  },
  {
    id: "gallery-007",
    src: "/images/gallery/event-1.jpg",
    alt: "Acara live music di Sinar Heritage",
    caption: "Live music setiap Jumat malam",
    category: "event",
  },
  {
    id: "gallery-008",
    src: "/images/gallery/event-2.jpg",
    alt: "Workshop latte art",
    caption: "Workshop latte art bersama barista profesional",
    category: "event",
  },
  {
    id: "gallery-009",
    src: "/images/gallery/atmosphere-1.jpg",
    alt: "Suasana pagi di Sinar Heritage",
    caption: "Suasana pagi yang tenang untuk memulai hari",
    category: "atmosphere",
  },
  {
    id: "gallery-010",
    src: "/images/gallery/atmosphere-2.jpg",
    alt: "Pengunjung menikmati waktu bersama",
    caption: "Momen kebersamaan di Sinar Heritage",
    category: "atmosphere",
  },
  {
    id: "gallery-011",
    src: "/images/gallery/atmosphere-3.jpg",
    alt: "Barista menyiapkan kopi",
    caption: "Barista profesional kami menyiapkan kopi terbaik",
    category: "atmosphere",
  },
  {
    id: "gallery-012",
    src: "/images/gallery/atmosphere-4.jpg",
    alt: "Suasana malam di Sinar Heritage",
    caption: "Suasana malam yang romantis",
    category: "atmosphere",
  },
];

// Helper untuk filter galeri berdasarkan kategori
export const getGalleryByCategory = (
  category: GalleryItem["category"]
): GalleryItem[] => {
  return galleryItems.filter((item) => item.category === category);
};
