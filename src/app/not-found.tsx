"use client";

import Link from "next/link";
import { Home, ArrowLeft, Coffee } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary-50 px-4">
      <div className="text-center">
        {/* Icon */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-brand-100">
          <Coffee className="h-12 w-12 text-brand-700" />
        </div>

        {/* 404 Number */}
        <h1 className="mb-4 font-serif text-8xl font-bold text-brand-800 md:text-9xl">
          404
        </h1>

        {/* Message */}
        <h2 className="mb-4 font-serif text-2xl font-bold text-brand-800 md:text-3xl">
          Halaman Tidak Ditemukan
        </h2>
        <p className="mx-auto mb-8 max-w-md text-neutral-600">
          Maaf, halaman yang Anda cari tidak ada. Mungkin sudah dipindahkan
          atau alamatnya salah ketik.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-brand-800 px-6 py-3 font-medium text-white transition-colors hover:bg-brand-700"
          >
            <Home className="h-5 w-5" />
            Kembali ke Beranda
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-full border-2 border-brand-800 px-6 py-3 font-medium text-brand-800 transition-colors hover:bg-brand-800 hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
            Halaman Sebelumnya
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 border-t border-neutral-200 pt-8">
          <p className="mb-4 text-sm text-neutral-500">
            Mungkin Anda mencari:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/menu"
              className="text-brand-700 hover:underline"
            >
              Menu
            </Link>
            <Link
              href="/about"
              className="text-brand-700 hover:underline"
            >
              Tentang Kami
            </Link>
            <Link
              href="/contact"
              className="text-brand-700 hover:underline"
            >
              Kontak
            </Link>
            <Link
              href="/blog"
              className="text-brand-700 hover:underline"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
