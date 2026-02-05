import { Coffee } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary-50">
      <div className="text-center">
        {/* Animated Coffee Icon */}
        <div className="mx-auto mb-4 animate-bounce">
          <Coffee className="h-12 w-12 text-brand-700" />
        </div>

        {/* Loading Text */}
        <p className="font-serif text-lg text-brand-800">
          Memuat...
        </p>

        {/* Loading Bar */}
        <div className="mx-auto mt-4 h-1 w-32 overflow-hidden rounded-full bg-neutral-200">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-brand-600" />
        </div>
      </div>
    </div>
  );
}
