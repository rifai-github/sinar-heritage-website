import { NextRequest, NextResponse } from "next/server";

// Tipe data untuk form contact
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validasi basic
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Nama, email, dan pesan wajib diisi" },
        { status: 400 }
      );
    }

    // Validasi email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Format email tidak valid" },
        { status: 400 }
      );
    }

    // Di sini Anda bisa menambahkan logika untuk:
    // 1. Mengirim email menggunakan service seperti SendGrid, Resend, atau Nodemailer
    // 2. Menyimpan ke database
    // 3. Mengirim notifikasi ke Slack/Discord
    // 4. Integrasi dengan CRM

    // Contoh implementasi dengan email service:
    // await sendEmail({
    //   to: "hello@sinarheritage.com",
    //   subject: `[Website] ${body.subject || "Pesan Baru"} dari ${body.name}`,
    //   text: `
    //     Nama: ${body.name}
    //     Email: ${body.email}
    //     Telepon: ${body.phone || "-"}
    //     Subjek: ${body.subject || "-"}
    //
    //     Pesan:
    //     ${body.message}
    //   `,
    // });

    // Log untuk development
    console.log("Contact form submission:", body);

    // Response sukses
    return NextResponse.json(
      {
        success: true,
        message: "Pesan berhasil dikirim. Kami akan segera menghubungi Anda.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan. Silakan coba lagi." },
      { status: 500 }
    );
  }
}

// Handle GET request (untuk testing)
export async function GET() {
  return NextResponse.json(
    { message: "Contact API endpoint. Use POST to submit form." },
    { status: 200 }
  );
}
