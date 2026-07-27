"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { Menu, X, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { CONTACT, NAV_LINKS, type NavLinkItem } from "@/data";

export { NAV_LINKS, type NavLinkItem };

export function Navbar(): React.JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  // Reset mobile menu state on route change
  const [prevPathname, setPrevPathname] = useState<string>(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Handle scroll detection
  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle scroll lock & ESC key when mobile sidebar is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 right-0 left-0 z-40 transition-colors duration-300",
          solid
            ? "border-b border-white/10 bg-black/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-[20px] font-extrabold tracking-tight text-white transition-opacity hover:opacity-90"
          >
            <Image
              src="/logo.png"
              alt="Fiftyfold Logo"
              width={100}
              height={62}
              priority
              className="h-9 w-auto md:h-11"
            />
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
                    "text-[15px] font-medium transition-colors hover:text-white",
                    isActive ? "text-brand-amber font-semibold" : "text-white/80"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="rounded-lg bg-brand-amber px-5 py-2.5 text-[14px] font-semibold text-white shadow-sm transition-all hover:bg-amber-700 hover:shadow-md"
            >
              Get a quote
            </Link>
          </div>

          {/* Mobile Menu Button Toggle */}
          <button
            type="button"
            aria-label="Open mobile menu"
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95 lg:hidden cursor-pointer"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Sidebar Overlay & Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Dark Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-over Sidebar Panel */}
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className="fixed top-0 right-0 bottom-0 z-50 flex w-full max-w-xs flex-col justify-between border-l border-stone-800 bg-brand-black p-6 text-white shadow-2xl transition-transform duration-300 sm:max-w-sm"
          >
            {/* Sidebar Top Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-stone-800">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="inline-block"
                >
                  <Image
                    src="/logo.png"
                    alt="Fiftyfold Logo"
                    width={90}
                    height={56}
                    className="h-9 w-auto"
                  />
                </Link>

                <button
                  type="button"
                  aria-label="Close mobile menu"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-stone-800 bg-stone-900 text-stone-300 transition-colors hover:border-brand-amber hover:text-white active:scale-95 cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="mt-6 flex flex-col gap-2">
                {NAV_LINKS.map((l) => {
                  const isActive =
                    l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
                  return (
                    <Link
                      key={l.to}
                      href={l.to}
                      onClick={() => setOpen(false)}
                      className={clsx(
                        "flex items-center justify-between rounded-xl px-4 py-3.5 text-[16px] font-semibold transition-all",
                        isActive
                          ? "bg-amber-500/10 text-brand-amber border border-amber-500/20"
                          : "text-stone-300 hover:bg-stone-900 hover:text-white"
                      )}
                    >
                      <span>{l.label}</span>
                      <ArrowRight
                        size={16}
                        className={clsx(
                          "transition-transform",
                          isActive ? "text-brand-amber translate-x-1" : "opacity-40"
                        )}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Quote CTA Button */}
              <div className="mt-6">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-amber px-5 py-3.5 text-center text-[15px] font-bold text-white shadow-md transition-colors hover:bg-amber-700"
                >
                  Get a quote
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Sidebar Bottom Contact Details */}
            <div className="border-t border-stone-800 pt-6">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-stone-500">
                Direct Contact
              </p>
              <div className="mt-3 space-y-2.5 text-[13px] text-stone-400">
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-2.5 transition-colors hover:text-brand-amber"
                >
                  <Phone size={15} className="text-brand-amber shrink-0" />
                  <span>{CONTACT.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-brand-amber"
                >
                  <Mail size={15} className="text-brand-amber shrink-0" />
                  <span>{CONTACT.email}</span>
                </a>
                <div className="flex items-center gap-2.5 text-stone-500">
                  <MapPin size={15} className="text-brand-amber shrink-0" />
                  <span>{CONTACT.address}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default Navbar;
