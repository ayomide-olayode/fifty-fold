"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";

export interface NavLinkItem {
  label: string;
  to: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

export function Navbar(): React.JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  // Reset mobile menu state on route change without triggering cascading render effects
  const [prevPathname, setPrevPathname] = useState<string>(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={clsx(
        "fixed top-0 right-0 left-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-white/10 bg-black/90 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-8">
        <Link
          href="/"
          className="text-[20px] font-extrabold tracking-tight text-white"
          style={{ letterSpacing: "0.04em" }}
        >
          <Image src="/logo.png" alt="logo" width={100} height={62} />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => {
            const isActive =
              l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                href={l.to}
                className={clsx(
                  "text-[15px] font-medium transition-colors",
                  isActive
                    ? "text-brand-amber"
                    : "text-white/80 hover:text-white"
                )}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-md bg-brand-amber px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-amber-700"
          >
            Get a quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-white lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((l) => {
              const isActive =
                l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  href={l.to}
                  className={clsx(
                    "rounded-md px-2 py-3 text-[16px] font-medium",
                    isActive ? "text-brand-amber" : "text-white/90"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 rounded-md bg-brand-amber px-5 py-3 text-center text-[15px] font-semibold text-white"
            >
              Get a quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

