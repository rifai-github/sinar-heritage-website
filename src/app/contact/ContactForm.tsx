"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Mohon lengkapi semua field yang wajib diisi.");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Format email tidak valid.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      // In production, replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo purposes, we'll just show success
      // In production, you would send this to your backend or email service
      console.log("Form submitted:", formData);

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch {
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-12 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mb-2 font-serif text-xl font-bold text-brand-800">
          Pesan Terkirim!
        </h3>
        <p className="mb-6 text-neutral-600">
          Terima kasih telah menghubungi kami. Kami akan segera membalas pesan
          Anda.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-brand-700 hover:underline"
        >
          Kirim pesan lain
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Error Message */}
      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-brand-800"
        >
          Nama Lengkap <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Masukkan nama lengkap"
          className="input"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-brand-800"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="nama@email.com"
          className="input"
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-brand-800"
        >
          Nomor Telepon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="08xxxxxxxxxx"
          className="input"
        />
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-brand-800"
        >
          Subjek
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="input"
        >
          <option value="">Pilih subjek</option>
          <option value="reservasi">Reservasi</option>
          <option value="pertanyaan">Pertanyaan Umum</option>
          <option value="kerjasama">Kerjasama / Partnership</option>
          <option value="feedback">Feedback / Masukan</option>
          <option value="lainnya">Lainnya</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-brand-800"
        >
          Pesan <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tulis pesan Anda di sini..."
          rows={5}
          className="textarea"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-brand-800 px-6 py-3 font-medium text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            Mengirim...
          </span>
        ) : (
          <span className="inline-flex items-center gap-2">
            <Send className="h-5 w-5" />
            Kirim Pesan
          </span>
        )}
      </button>

      {/* Note */}
      <p className="text-center text-xs text-neutral-500">
        Dengan mengirim pesan, Anda menyetujui{" "}
        <a href="/privacy" className="text-brand-700 hover:underline">
          Kebijakan Privasi
        </a>{" "}
        kami.
      </p>
    </form>
  );
}
