# Sinar Heritage - Website Profil Kafe

Website profil perusahaan profesional untuk Kafe Sinar Heritage, dibangun dengan Next.js 15, TypeScript, dan Tailwind CSS.

## 🎯 Fitur

- ✅ **Responsive Design** - Mobile-first design yang optimal di semua perangkat
- ✅ **7 Halaman Lengkap** - Beranda, Tentang, Menu, Galeri, Testimoni, Blog, Kontak
- ✅ **Integrasi Instagram** - Otomatis menampilkan post terbaru (dengan fallback)
- ✅ **Integrasi Google Maps** - Rating dan ulasan dari Google Places API
- ✅ **Blog dengan Markdown** - Sistem blog sederhana menggunakan file markdown
- ✅ **SEO Optimized** - Meta tags, sitemap, dan robots.txt
- ✅ **WhatsApp Button** - Floating button untuk reservasi langsung
- ✅ **Lightbox Gallery** - Preview gambar dengan navigasi
- ✅ **Filter Menu** - Pencarian dan filter berdasarkan kategori
- ✅ **Lazy Loading** - Optimasi gambar untuk performa terbaik

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Markdown**: [Gray Matter](https://github.com/jonschlinkert/gray-matter) + [Remark](https://github.com/remarkjs/remark)
- **Fonts**: Google Fonts (Inter, Playfair Display)

## 📁 Struktur Folder

```
sinar-heritage-website/
├── public/
│   ├── images/           # Gambar statis
│   │   ├── menu/         # Foto menu
│   │   ├── gallery/      # Foto galeri
│   │   ├── about/        # Foto halaman about
│   │   ├── blog/         # Cover blog
│   │   └── ...
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── app/              # App Router pages
│   │   ├── about/
│   │   ├── blog/
│   │   │   └── [slug]/   # Dynamic blog post
│   │   ├── contact/
│   │   ├── gallery/
│   │   ├── menu/
│   │   ├── testimonials/
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/       # Header, Footer, WhatsApp
│   │   ├── sections/     # Home page sections
│   │   └── ui/           # Reusable UI components
│   ├── content/
│   │   └── blog/         # Markdown blog posts
│   ├── data/             # Static data (menu, config)
│   ├── lib/              # Utilities & API functions
│   └── types/            # TypeScript types
├── .env.example
├── .env.local
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 atau lebih baru
- npm atau yarn

### Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/your-username/sinar-heritage-website.git
   cd sinar-heritage-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` dan isi dengan nilai yang sesuai.

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Buka browser**
   ```
   http://localhost:3000
   ```

## ⚙️ Environment Variables

Buat file `.env.local` dari `.env.example`:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://sinarheritage.com
NEXT_PUBLIC_WHATSAPP_NUMBER=6285333650518

# Instagram Graph API (Opsional)
INSTAGRAM_ACCESS_TOKEN=your_token
INSTAGRAM_BUSINESS_ACCOUNT_ID=your_account_id

# Google Maps/Places API (Opsional)
GOOGLE_MAPS_API_KEY=your_api_key
GOOGLE_PLACE_ID=your_place_id

# Revalidation (detik)
REVALIDATE_INSTAGRAM=3600
REVALIDATE_GOOGLE_REVIEWS=3600
```

### Mendapatkan API Keys

#### Instagram Graph API

1. Buat Facebook Developer Account di [developers.facebook.com](https://developers.facebook.com)
2. Buat aplikasi baru
3. Tambahkan Instagram Graph API product
4. Connect Instagram Business Account
5. Generate access token dengan permission: `instagram_basic`, `instagram_content_publish`
6. Salin Access Token dan Business Account ID

#### Google Places API

1. Buka [Google Cloud Console](https://console.cloud.google.com)
2. Buat project baru atau pilih project existing
3. Enable "Places API" dan "Maps JavaScript API"
4. Buat API Key di Credentials
5. Untuk mendapatkan Place ID:
   - Buka [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
   - Cari nama bisnis Anda
   - Salin Place ID

## 📝 Mengelola Konten

### Menambah Artikel Blog

1. Buat file `.md` baru di `src/content/blog/`
2. Tambahkan frontmatter:
   ```markdown
   ---
   title: "Judul Artikel"
   excerpt: "Deskripsi singkat artikel"
   coverImage: "/images/blog/cover.jpg"
   author: "Nama Penulis"
   date: "2024-01-15"
   tags: ["Tag1", "Tag2"]
   ---

   Konten artikel dalam markdown...
   ```

### Mengubah Menu

Edit file `src/data/menu.ts`:

```typescript
export const menuItems: MenuItem[] = [
  {
    id: "kopi-001",
    name: "Nama Menu",
    description: "Deskripsi menu",
    price: 35000,
    category: "kopi", // kopi | non-kopi | makanan-ringan | makanan-berat | dessert
    image: "/images/menu/nama-menu.jpg",
    isPopular: true,
    isNew: false,
  },
  // ...
];
```

### Mengubah Informasi Kontak

Edit file `src/data/site-config.ts`:

```typescript
export const contactInfo: ContactInfo = {
  address: "Alamat lengkap kafe",
  phone: "+62 853 3365 0518",
  whatsapp: "6285333650518",
  email: "email@domain.com",
  // ...
};
```

### Menambah Gambar Galeri

1. Tambahkan gambar ke `public/images/gallery/`
2. Edit `src/data/gallery.ts`:
   ```typescript
   export const galleryItems: GalleryItem[] = [
     {
       id: "gallery-001",
       src: "/images/gallery/nama-file.jpg",
       alt: "Deskripsi gambar",
       caption: "Caption opsional",
       category: "interior", // interior | menu | event | atmosphere
     },
     // ...
   ];
   ```

## 🏗 Build & Deploy

### Build untuk Production

```bash
npm run build
```

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Set environment variables di Vercel Dashboard
4. Deploy otomatis setiap push ke main branch

### Deploy Manual

```bash
npm run build
npm run start
```

## 🖼 Placeholder Images

Website membutuhkan gambar-gambar berikut. Tambahkan gambar Anda sendiri atau gunakan placeholder:

```
public/images/
├── hero-bg.jpg           # Hero background (1920x1080)
├── cta-bg.jpg            # CTA section background
├── og-image.jpg          # Open Graph image (1200x630)
├── logo.png              # Logo
├── placeholder.jpg       # Fallback image
├── menu/
│   ├── sinar-signature.jpg
│   ├── es-kopi-susu.jpg
│   └── ... (semua gambar menu)
├── gallery/
│   ├── instagram-1.jpg ~ instagram-9.jpg
│   ├── interior-1.jpg ~ interior-3.jpg
│   └── ...
├── about/
│   ├── hero-about.jpg
│   ├── story.jpg
│   └── ...
├── blog/
│   ├── hero-blog.jpg
│   └── ... (cover images)
├── team/
│   └── ... (foto tim)
├── testimonials/
│   └── hero-testimonials.jpg
└── contact/
    └── hero-contact.jpg
```

**Ukuran yang disarankan:**
- Hero images: 1920x1080px
- Menu images: 800x600px (4:3)
- Gallery: 800x800px (1:1)
- Blog covers: 1200x630px
- Team photos: 400x500px

## 🔧 Customization

### Mengubah Warna

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: "#d98a47", // Warna utama
    // ...
  },
  warm: {
    cream: "#FFF8F0",
    coffee: "#4A3728",
    // ...
  },
}
```

### Mengubah Font

Edit `src/app/layout.tsx`:

```typescript
import { Inter, Playfair_Display } from "next/font/google";
// Ganti dengan font pilihan Anda
```

## 📄 Scripts

```bash
npm run dev      # Development server
npm run build    # Build production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🤝 Contributing

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📜 License

MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 📞 Support

Jika ada pertanyaan atau masalah, silakan:
- Buat [Issue](https://github.com/your-username/sinar-heritage-website/issues)
- Email: developer@sinarheritage.com

---

Dibuat dengan ❤️ untuk Sinar Heritage
