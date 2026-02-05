import { InstagramPost, InstagramApiResponse, InstagramApiPost } from "@/types";
import { fallbackInstagramPosts } from "@/data/gallery";

// ===========================================
// INSTAGRAM API INTEGRATION
// ===========================================

const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const INSTAGRAM_BUSINESS_ACCOUNT_ID = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;
const REVALIDATE_TIME = parseInt(process.env.REVALIDATE_INSTAGRAM || "3600");

/**
 * Fetch Instagram posts menggunakan Instagram Graph API
 * Memerlukan access token dari Facebook Developer Console
 */
export async function fetchInstagramPosts(
  limit: number = 9
): Promise<InstagramPost[]> {
  // Jika credentials tidak tersedia, gunakan fallback
  if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_BUSINESS_ACCOUNT_ID) {
    console.log(
      "Instagram API credentials not configured, using fallback data"
    );
    return fallbackInstagramPosts.slice(0, limit);
  }

  try {
    const fields = "id,caption,media_url,media_type,permalink,timestamp,thumbnail_url";
    const url = `https://graph.instagram.com/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media?fields=${fields}&limit=${limit}&access_token=${INSTAGRAM_ACCESS_TOKEN}`;

    const response = await fetch(url, {
      next: { revalidate: REVALIDATE_TIME },
    });

    if (!response.ok) {
      console.error("Instagram API error:", response.status);
      return fallbackInstagramPosts.slice(0, limit);
    }

    const data: InstagramApiResponse = await response.json();

    // Transform API response ke format yang kita gunakan
    const posts: InstagramPost[] = data.data.map((post: InstagramApiPost) => ({
      id: post.id,
      caption: post.caption || "",
      mediaUrl: post.media_url || post.thumbnail_url || "",
      mediaType: post.media_type,
      permalink: post.permalink,
      timestamp: post.timestamp,
      thumbnailUrl: post.thumbnail_url,
    }));

    return posts;
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);
    return fallbackInstagramPosts.slice(0, limit);
  }
}

/**
 * Generate Instagram embed URL untuk fallback
 */
export function getInstagramEmbedUrl(postId: string): string {
  return `https://www.instagram.com/p/${postId}/embed`;
}

/**
 * Generate link ke profil Instagram
 */
export function getInstagramProfileUrl(username: string = "sinarheritage"): string {
  return `https://www.instagram.com/${username}`;
}

/**
 * Format tanggal post Instagram
 */
export function formatInstagramDate(timestamp: string): string {
  const date = new Date(timestamp);
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
