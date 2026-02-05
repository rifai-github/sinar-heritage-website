import { Instagram, ExternalLink } from "lucide-react";
import { SectionHeader, OptimizedImage } from "@/components/ui";
import { fetchInstagramPosts, getInstagramProfileUrl } from "@/lib/instagram";
import { contactInfo } from "@/data/site-config";

export default async function InstagramGallery() {
  const posts = await fetchInstagramPosts(9);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          title="Ikuti Kami di Instagram"
          subtitle="Lihat momen-momen seru dan update terbaru dari Sinar Heritage"
        />

        {/* Instagram Grid */}
        <div className="mb-8 mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {posts.map((post, index) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl bg-secondary-100"
            >
              <OptimizedImage
                src={post.mediaUrl}
                alt={post.caption.slice(0, 100) || `Instagram post ${index + 1}`}
                fill
                containerClassName="h-full"
                className="h-full w-full transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-brand-800/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-center text-white">
                  <Instagram className="mx-auto mb-2 h-8 w-8" />
                  <span className="text-sm">Lihat di Instagram</span>
                </div>
              </div>

              {/* Video indicator */}
              {post.mediaType === "VIDEO" && (
                <div className="absolute right-2 top-2">
                  <svg
                    className="h-6 w-6 text-white drop-shadow-lg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center">
          <a
            href={getInstagramProfileUrl("sinarheritage")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border-2 border-brand-800 px-8 py-4 font-medium text-brand-800 transition-all hover:bg-brand-800 hover:text-white"
          >
            <Instagram className="h-5 w-5" />
            @sinarheritage
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Instagram Embed Fallback Info */}
        <p className="mt-4 text-center text-sm text-neutral-500">
          Atau kunjungi langsung{" "}
          <a
            href={contactInfo.socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-700 hover:underline"
          >
            profil Instagram kami
          </a>
        </p>
      </div>
    </section>
  );
}
