import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // =========================================
      // SINAR HERITAGE BRAND COLORS
      // =========================================
      colors: {
        // Primary Brand Color - Dark Green
        brand: {
          50: "#e8f5ee",
          100: "#c5e6d4",
          200: "#9ed6b8",
          300: "#77c69c",
          400: "#59b986",
          500: "#3bac70",
          600: "#2d9d62",
          700: "#1e8a52",
          800: "#0F4D2E", // Main brand color
          900: "#0a3d24",
          950: "#052b18",
        },
        // Primary alias
        primary: {
          50: "#e8f5ee",
          100: "#c5e6d4",
          200: "#9ed6b8",
          300: "#77c69c",
          400: "#59b986",
          500: "#3bac70",
          600: "#2d9d62",
          700: "#1e8a52",
          800: "#0F4D2E",
          900: "#0a3d24",
          950: "#052b18",
        },
        // Secondary - Warm Cream/Beige
        secondary: {
          50: "#FDFCFA",
          100: "#FAF8F5",
          200: "#F5F1EB",
          300: "#EDE7DC",
          400: "#E0D5C5",
          500: "#D4C4AD",
          600: "#BBA88A",
          700: "#9E8968",
          800: "#7D6B50",
          900: "#5C4E3B",
          950: "#3D3427",
        },
        // Neutral - Charcoal/Gray
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#030712",
        },
        // Accent colors
        accent: {
          gold: "#C9A961",
          cream: "#FFF9F0",
          sage: "#8FAE8B",
          light: "#e8f5ee",
          DEFAULT: "#3bac70",
          dark: "#0F4D2E",
        },
        // Legacy warm colors (for backward compatibility)
        warm: {
          cream: "#FDFCFA",
          beige: "#F5F1EB",
          brown: "#5C4E3B",
          coffee: "#3D3427",
          espresso: "#1F2937",
        },
      },
      // =========================================
      // TYPOGRAPHY
      // =========================================
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      // =========================================
      // ANIMATIONS
      // =========================================
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      // =========================================
      // SPACING & SIZING
      // =========================================
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      // =========================================
      // BORDER RADIUS
      // =========================================
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      // =========================================
      // BOX SHADOWS
      // =========================================
      boxShadow: {
        "soft": "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "soft-lg": "0 10px 40px -3px rgba(0, 0, 0, 0.1), 0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        "brand": "0 4px 20px -2px rgba(15, 77, 46, 0.15)",
        "brand-lg": "0 10px 40px -3px rgba(15, 77, 46, 0.2)",
        "warm": "0 4px 20px -2px rgba(15, 77, 46, 0.15)",
        "warm-lg": "0 10px 40px -3px rgba(15, 77, 46, 0.2)",
        "glow": "0 0 20px rgba(15, 77, 46, 0.3)",
      },
      // =========================================
      // BACKGROUND IMAGES
      // =========================================
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #0F4D2E 0%, #1e8a52 100%)",
        "gradient-brand-light": "linear-gradient(135deg, #3bac70 0%, #0F4D2E 100%)",
        "gradient-hero": "linear-gradient(180deg, rgba(15, 77, 46, 0.9) 0%, rgba(15, 77, 46, 0.7) 50%, rgba(15, 77, 46, 0.85) 100%)",
        "gradient-overlay": "linear-gradient(180deg, transparent 0%, rgba(15, 77, 46, 0.8) 100%)",
        "gradient-cream": "linear-gradient(180deg, #FDFCFA 0%, #FAF8F5 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
