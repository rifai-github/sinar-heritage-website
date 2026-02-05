import { MenuItem, MenuCategoryInfo } from "@/types";

// ===========================================
// KATEGORI MENU
// ===========================================

export const menuCategories: MenuCategoryInfo[] = [
  {
    id: "kopi",
    name: "Kopi",
    description: "Pilihan kopi berkualitas dari biji pilihan Nusantara",
  },
  {
    id: "non-kopi",
    name: "Non-Kopi",
    description: "Minuman segar tanpa kafein untuk semua kalangan",
  },
  {
    id: "makanan-ringan",
    name: "Makanan Ringan",
    description: "Camilan lezat untuk menemani ngobrol santai",
  },
  {
    id: "makanan-berat",
    name: "Makanan Berat",
    description: "Hidangan mengenyangkan dengan cita rasa istimewa",
  },
  {
    id: "dessert",
    name: "Dessert",
    description: "Penutup manis untuk melengkapi hari Anda",
  },
];

// ===========================================
// DAFTAR MENU
// ===========================================

export const menuItems: MenuItem[] = [
  // KOPI
  {
    id: "kopi-001",
    name: "Es Americano",
    description:
      "Double shot espresso dengan air dingin, rasa bold dan refreshing",
    price: 15000,
    category: "kopi",
    image: "/images/menu/americano.jpg",
    isPopular: true,
  },
  {
    id: "kopi-002",
    name: "Es Kopi Susu Gula Aren",
    description:
      "Perpaduan sempurna espresso, susu segar, dan gula aren asli",
    price: 18000,
    category: "kopi",
    image: "/images/menu/es-kopi-susu.jpg",
    isPopular: true,
  },
  {
    id: "kopi-003",
    name: "Cappuccino",
    description: "Espresso klasik dengan foam susu lembut dan taburan cokelat",
    price: 18000,
    category: "kopi",
    image: "/images/menu/cappuccino.jpg",
  },
  {
    id: "kopi-004",
    name: "Caffe Latte",
    description: "Espresso dengan susu steamed yang creamy dan smooth",
    price: 18000,
    category: "kopi",
    image: "/images/menu/caffe-latte.jpg",
  },
  {
    id: "kopi-005",
    name: "Sinar Signature",
    description:
      "Espresso blend khas Sinar Heritage dengan sentuhan cokelat dan karamel",
    price: 20000,
    category: "kopi",
    image: "/images/menu/sinar-signature.jpg",
    isNew: true,
  },
  {
    id: "kopi-006",
    name: "V60 Single Origin",
    description: "Pour over dengan biji kopi single origin pilihan barista",
    price: 20000,
    category: "kopi",
    image: "/images/menu/v60.jpg",
  },
  {
    id: "kopi-007",
    name: "Affogato",
    description: "Vanilla ice cream dengan shot espresso panas",
    price: 20000,
    category: "kopi",
    image: "/images/menu/affogato.jpg",
  },
  {
    id: "kopi-008",
    name: "Mocha",
    description: "Espresso dengan cokelat premium dan susu steamed",
    price: 20000,
    category: "kopi",
    image: "/images/menu/mocha.jpg",
  },

  // NON-KOPI
  {
    id: "nonkopi-001",
    name: "Es Kelapa Muda",
    description: "Air kelapa muda segar langsung dari buahnya",
    price: 18000,
    category: "non-kopi",
    image: "/images/menu/es-kelapa-muda.jpg",
    isPopular: true,
  },
  {
    id: "nonkopi-002",
    name: "Matcha Latte",
    description: "Teh hijau premium Jepang dengan susu segar",
    price: 20000,
    category: "non-kopi",
    image: "/images/menu/matcha-latte.jpg",
    isPopular: true,
  },
  {
    id: "nonkopi-003",
    name: "Cokelat Panas",
    description: "Cokelat premium dengan susu creamy",
    price: 18000,
    category: "non-kopi",
    image: "/images/menu/cokelat-panas.jpg",
  },
  {
    id: "nonkopi-004",
    name: "Teh Tarik",
    description: "Teh susu khas dengan teknik tarik tradisional",
    price: 15000,
    category: "non-kopi",
    image: "/images/menu/teh-tarik.jpg",
  },
  {
    id: "nonkopi-005",
    name: "Fresh Lemonade",
    description: "Perasan lemon segar dengan mint dan madu",
    price: 18000,
    category: "non-kopi",
    image: "/images/menu/lemonade.jpg",
  },
  {
    id: "nonkopi-006",
    name: "Mango Smoothie",
    description: "Smoothie mangga segar dengan yogurt",
    price: 22000,
    category: "non-kopi",
    image: "/images/menu/mango-smoothie.jpg",
    isNew: true,
  },
  {
    id: "nonkopi-007",
    name: "Earl Grey Tea",
    description: "Teh Earl Grey premium dengan aroma bergamot",
    price: 15000,
    category: "non-kopi",
    image: "/images/menu/earl-grey.jpg",
  },

  // MAKANAN RINGAN
  {
    id: "snack-001",
    name: "Roti Bakar Cokelat Keju",
    description: "Roti panggang dengan lelehan cokelat dan keju mozarella",
    price: 20000,
    category: "makanan-ringan",
    image: "/images/menu/roti-bakar.jpg",
    isPopular: true,
  },
  {
    id: "snack-002",
    name: "French Fries",
    description: "Kentang goreng crispy dengan bumbu rempah",
    price: 18000,
    category: "makanan-ringan",
    image: "/images/menu/french-fries.jpg",
  },
  {
    id: "snack-003",
    name: "Pisang Goreng Crispy",
    description: "Pisang goreng dengan tepung crispy dan topping madu",
    price: 15000,
    category: "makanan-ringan",
    image: "/images/menu/pisang-goreng.jpg",
  },
  {
    id: "snack-004",
    name: "Chicken Wings",
    description: "Sayap ayam goreng dengan pilihan saus BBQ atau pedas",
    price: 25000,
    category: "makanan-ringan",
    image: "/images/menu/chicken-wings.jpg",
  },
  {
    id: "snack-005",
    name: "Croissant",
    description: "Croissant butter freshly baked setiap hari",
    price: 18000,
    category: "makanan-ringan",
    image: "/images/menu/croissant.jpg",
  },

  // MAKANAN BERAT
  {
    id: "main-001",
    name: "Nasi Goreng Sinar",
    description:
      "Nasi goreng spesial dengan telur mata sapi dan ayam suwir",
    price: 25000,
    category: "makanan-berat",
    image: "/images/menu/nasi-goreng.jpg",
    isPopular: true,
  },
  {
    id: "main-002",
    name: "Chicken Steak",
    description:
      "Dada ayam panggang dengan saus mushroom dan kentang panggang",
    price: 35000,
    category: "makanan-berat",
    image: "/images/menu/chicken-steak.jpg",
  },
  {
    id: "main-003",
    name: "Spaghetti Bolognese",
    description: "Pasta dengan saus daging sapi dan parmesan",
    price: 30000,
    category: "makanan-berat",
    image: "/images/menu/spaghetti.jpg",
  },
  {
    id: "main-004",
    name: "Beef Burger",
    description: "Burger daging sapi dengan keju dan sayuran segar",
    price: 32000,
    category: "makanan-berat",
    image: "/images/menu/burger.jpg",
  },
  {
    id: "main-005",
    name: "Mie Goreng Seafood",
    description: "Mie goreng dengan udang, cumi, dan sayuran",
    price: 28000,
    category: "makanan-berat",
    image: "/images/menu/mie-goreng.jpg",
    isNew: true,
  },
  {
    id: "main-006",
    name: "Rice Bowl Chicken Teriyaki",
    description: "Nasi dengan ayam teriyaki, sayuran, dan telur",
    price: 25000,
    category: "makanan-berat",
    image: "/images/menu/rice-bowl.jpg",
  },

  // DESSERT
  {
    id: "dessert-001",
    name: "Tiramisu",
    description: "Dessert klasik Italia dengan mascarpone dan espresso",
    price: 25000,
    category: "dessert",
    image: "/images/menu/tiramisu.jpg",
    isPopular: true,
  },
  {
    id: "dessert-002",
    name: "Brownies",
    description: "Brownies cokelat lembut dengan topping ice cream",
    price: 22000,
    category: "dessert",
    image: "/images/menu/brownies.jpg",
  },
  {
    id: "dessert-003",
    name: "Cheesecake",
    description: "New York cheesecake dengan saus berry",
    price: 25000,
    category: "dessert",
    image: "/images/menu/cheesecake.jpg",
  },
  {
    id: "dessert-004",
    name: "Pancake Stack",
    description: "Pancake berlapis dengan maple syrup dan butter",
    price: 22000,
    category: "dessert",
    image: "/images/menu/pancake.jpg",
  },
  {
    id: "dessert-005",
    name: "Es Krim Gelato",
    description: "Gelato homemade dengan pilihan 3 rasa",
    price: 18000,
    category: "dessert",
    image: "/images/menu/gelato.jpg",
    isNew: true,
  },
];

// Helper function untuk mendapatkan menu berdasarkan kategori
export const getMenuByCategory = (category: string): MenuItem[] => {
  return menuItems.filter((item) => item.category === category);
};

// Helper function untuk mendapatkan menu populer
export const getPopularMenu = (): MenuItem[] => {
  return menuItems.filter((item) => item.isPopular);
};

// Helper function untuk mendapatkan menu baru
export const getNewMenu = (): MenuItem[] => {
  return menuItems.filter((item) => item.isNew);
};

// Helper function untuk format harga ke Rupiah
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
