// ===========================================
// UTILITY FUNCTIONS
// ===========================================

/**
 * Combine class names dengan filter falsy values
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Truncate text dengan ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

/**
 * Format angka ke format Indonesia (dengan titik sebagai pemisah ribuan)
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat("id-ID").format(num);
}

/**
 * Scroll ke element dengan smooth behavior
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Check if code is running on client side
 */
export function isClient(): boolean {
  return typeof window !== "undefined";
}

/**
 * Get base URL
 */
export function getBaseUrl(): string {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

/**
 * Generate random ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

/**
 * Sleep/delay function
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Format phone number ke format WhatsApp
 */
export function formatWhatsAppNumber(phone: string): string {
  // Remove semua karakter non-digit
  const digits = phone.replace(/\D/g, "");

  // Jika dimulai dengan 0, ganti dengan 62 (Indonesia)
  if (digits.startsWith("0")) {
    return "62" + digits.slice(1);
  }

  // Jika sudah dimulai dengan 62, return as is
  if (digits.startsWith("62")) {
    return digits;
  }

  // Default: tambahkan 62 di depan
  return "62" + digits;
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Parse query params dari URL
 */
export function parseQueryParams(
  url: string
): Record<string, string | string[]> {
  const params: Record<string, string | string[]> = {};
  const urlObj = new URL(url, "http://localhost");

  urlObj.searchParams.forEach((value, key) => {
    if (params[key]) {
      // Jika key sudah ada, convert ke array
      if (Array.isArray(params[key])) {
        (params[key] as string[]).push(value);
      } else {
        params[key] = [params[key] as string, value];
      }
    } else {
      params[key] = value;
    }
  });

  return params;
}
