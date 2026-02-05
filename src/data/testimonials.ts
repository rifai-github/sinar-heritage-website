import { Testimonial } from "@/types";

// ===========================================
// TESTIMONI FALLBACK (Jika Google API tidak tersedia)
// ===========================================

export const fallbackTestimonials: Testimonial[] = [
  {
    id: "testi-001",
    name: "Rina Susanti",
    avatar: "/images/avatars/avatar-1.jpg",
    rating: 5,
    comment:
      "Kafe favorit saya untuk kerja remote! Wifi kencang, kopi enak, dan suasananya sangat nyaman. Es kopi susu gula arennya juara banget!",
    date: "2024-01-15",
    source: "google",
  },
  {
    id: "testi-002",
    name: "Budi Prasetyo",
    avatar: "/images/avatars/avatar-2.jpg",
    rating: 5,
    comment:
      "Tempatnya cozy, cocok buat quality time sama keluarga. Anak-anak suka banget sama pancake-nya. Pasti balik lagi!",
    date: "2024-01-10",
    source: "google",
  },
  {
    id: "testi-003",
    name: "Dewi Anggraini",
    avatar: "/images/avatars/avatar-3.jpg",
    rating: 4,
    comment:
      "Interior-nya aesthetic banget, perfect buat foto-foto. Makanannya juga enak dan harganya reasonable. Recommended!",
    date: "2024-01-08",
    source: "google",
  },
  {
    id: "testi-004",
    name: "Ahmad Fauzi",
    avatar: "/images/avatars/avatar-4.jpg",
    rating: 5,
    comment:
      "Sinar Signature-nya wajib coba! Rasanya unik dan berbeda dari kopi-kopi biasa. Staff-nya juga ramah dan helpful.",
    date: "2024-01-05",
    source: "google",
  },
  {
    id: "testi-005",
    name: "Maria Christina",
    avatar: "/images/avatars/avatar-5.jpg",
    rating: 5,
    comment:
      "Sudah beberapa kali meeting client di sini. Tempatnya profesional tapi tetap nyaman. Nasi goreng Sinar-nya favorit!",
    date: "2024-01-02",
    source: "google",
  },
  {
    id: "testi-006",
    name: "Hendri Wijaya",
    avatar: "/images/avatars/avatar-6.jpg",
    rating: 4,
    comment:
      "Coffee shop dengan vibes yang pas. V60 single origin-nya excellent untuk pecinta specialty coffee. Baristanya knowledgeable!",
    date: "2023-12-28",
    source: "google",
  },
  {
    id: "testi-007",
    name: "Siti Nurhaliza",
    avatar: "/images/avatars/avatar-7.jpg",
    rating: 5,
    comment:
      "Tiramisu-nya the best! Lembut dan rasa kopinya pas. Tempatnya juga bersih dan pelayanannya cepat. Love it!",
    date: "2023-12-25",
    source: "google",
  },
  {
    id: "testi-008",
    name: "Ricky Gunawan",
    avatar: "/images/avatars/avatar-8.jpg",
    rating: 5,
    comment:
      "Kafe dengan konsep heritage yang unik. Dekorasinya klasik tapi modern. Cocok buat semua kalangan dari mahasiswa sampai profesional.",
    date: "2023-12-20",
    source: "google",
  },
];

// Rata-rata rating untuk fallback
export const fallbackRating = {
  average: 4.8,
  total: 248,
};
