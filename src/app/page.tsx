import {
  HeroSection,
  AboutPreview,
  MenuPreview,
  InstagramGallery,
  TestimonialsPreview,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Preview */}
      <AboutPreview />

      {/* Menu Preview */}
      <MenuPreview />

      {/* Instagram Gallery */}
      <InstagramGallery />

      {/* Testimonials Preview */}
      <TestimonialsPreview />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
