import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { SectionHeader, Card, OptimizedImage } from "@/components/ui";
import { getAllPosts, getAllTags, formatBlogDate } from "@/lib/blog";
import { CTASection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Blog & Berita",
  description:
    "Baca artikel terbaru dari Sinar Heritage - tips kopi, resep, event, dan berita terkini seputar kafe kami.",
};

export default async function BlogPage() {
  const [posts, tags] = await Promise.all([getAllPosts(), getAllTags()]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/blog/hero-blog.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/70 via-brand-950/50 to-brand-950/80" />
        </div>

        <div className="container-custom relative flex min-h-[50vh] items-center justify-center text-center">
          <div className="py-32">
            <h1 className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Blog & Berita
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Cerita, tips, dan update terbaru dari Sinar Heritage
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-neutral-100">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <SectionHeader
                title="Artikel Terbaru"
                subtitle="Jelajahi cerita dan tips dari kami"
                centered={false}
              />

              {posts.length > 0 ? (
                <div className="mt-8 grid gap-8">
                  {posts.map((post) => (
                    <Card
                      key={post.slug}
                      padding="none"
                      className="group overflow-hidden"
                    >
                      <div className="grid md:grid-cols-5">
                        {/* Image */}
                        <div className="relative aspect-[16/9] md:col-span-2 md:aspect-auto">
                          <OptimizedImage
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            containerClassName="h-full"
                            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col p-6 md:col-span-3">
                          {/* Tags */}
                          <div className="mb-3 flex flex-wrap gap-2">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Title */}
                          <Link href={`/blog/${post.slug}`}>
                            <h2 className="mb-3 font-serif text-xl font-bold text-brand-800 transition-colors hover:text-brand-700 md:text-2xl">
                              {post.title}
                            </h2>
                          </Link>

                          {/* Excerpt */}
                          <p className="mb-4 line-clamp-2 flex-1 text-neutral-600">
                            {post.excerpt}
                          </p>

                          {/* Meta */}
                          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {formatBlogDate(post.date)}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {post.readingTime} menit baca
                            </div>
                          </div>

                          {/* Read More */}
                          <Link
                            href={`/blog/${post.slug}`}
                            className="mt-4 inline-flex items-center gap-2 font-medium text-brand-700 transition-colors hover:text-brand-700"
                          >
                            Baca Selengkapnya
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="mt-8 rounded-2xl bg-white p-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100">
                    <svg
                      className="h-8 w-8 text-neutral-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-brand-800">
                    Belum Ada Artikel
                  </h3>
                  <p className="text-neutral-600">
                    Artikel akan segera hadir. Nantikan update terbaru dari
                    kami!
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Tags */}
              <Card className="mb-8">
                <h3 className="mb-4 flex items-center gap-2 font-serif text-lg font-bold text-brand-800">
                  <Tag className="h-5 w-5 text-brand-600" />
                  Kategori
                </h3>
                {tags.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-brand-100 hover:text-brand-700"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-neutral-500">Belum ada kategori</p>
                )}
              </Card>

              {/* Newsletter */}
              <Card className="bg-brand-800 text-white">
                <h3 className="mb-2 font-serif text-lg font-bold">
                  Berlangganan Newsletter
                </h3>
                <p className="mb-4 text-sm text-white/80">
                  Dapatkan update artikel, promo, dan event terbaru langsung
                  ke email Anda.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="w-full rounded-lg border-2 border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-white px-4 py-3 font-medium text-brand-700 transition-colors hover:bg-brand-50"
                  >
                    Berlangganan
                  </button>
                </form>
              </Card>

              {/* About Blog */}
              <Card className="mt-8">
                <h3 className="mb-4 font-serif text-lg font-bold text-brand-800">
                  Tentang Blog Ini
                </h3>
                <p className="text-sm text-neutral-600">
                  Blog Sinar Heritage adalah tempat kami berbagi cerita,
                  tips, dan pengetahuan seputar kopi dan kuliner. Dari cara
                  menyeduh kopi yang sempurna hingga resep makanan pendamping,
                  semuanya ada di sini.
                </p>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
