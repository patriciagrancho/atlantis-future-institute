import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-sm font-normal tracking-[0.3em] uppercase text-cream">
              Evoluteon
            </span>
            <p className="mt-4 text-sm leading-relaxed text-stone-400 font-light max-w-md">
              Curating the world&apos;s most transformative wellness and
              longevity experiences. Science-backed.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-stone-500 mb-6">
              Explore
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="#waitlist"
                className="text-sm text-stone-400 font-light hover:text-cream transition-colors"
              >
                Join Waitlist
              </Link>
              <Link
                href="/become-a-partner"
                className="text-sm text-stone-400 font-light hover:text-cream transition-colors"
              >
                Partner Application
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-stone-500 mb-6">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://linkedin.com/company/evoluteon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-stone-400 font-light hover:text-cream transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:evoluteon.global@gmail.com"
                className="text-sm text-stone-400 font-light hover:text-cream transition-colors"
              >
                evoluteon.global@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500 font-light">
            &copy; {new Date().getFullYear()} Evoluteon. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-xs text-stone-500 font-light hover:text-stone-300 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs text-stone-500 font-light hover:text-stone-300 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
