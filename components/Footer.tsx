import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { CONTACT, NAV_LINKS, type NavLinkItem } from "@/data";

export { NAV_LINKS, CONTACT, type NavLinkItem };

function InstagramIcon({ size = 18 }: { size?: number }): React.JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer(): React.JSX.Element {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 md:px-8 md:py-20">
        {/* Column 1 — Logo + Description + Social */}
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Fiftyfold Logo"
              width={100}
              height={62}
              className="h-auto w-auto"
            />
          </Link>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-stone-400">
            Lagos-based real estate finishing partner — painting, skimming,
            aluminium windows, ceilings, and premium paint sales.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-brand-amber hover:text-brand-amber"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h4 className="text-[13px] font-semibold uppercase tracking-widest text-stone-400">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  href={link.to}
                  className="text-[15px] text-stone-300 transition-colors hover:text-brand-amber"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Contact */}
        <div>
          <h4 className="text-[13px] font-semibold uppercase tracking-widest text-stone-400">
            Contact
          </h4>
          <ul className="mt-5 space-y-4 text-[15px] text-stone-300">
            <li>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-3 transition-colors hover:text-brand-amber"
              >
                <Phone size={16} className="text-brand-amber" />
                <span>{CONTACT.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-3 transition-colors hover:text-brand-amber"
              >
                <Mail size={16} className="text-brand-amber" />
                <span>{CONTACT.email}</span>
              </a>
            </li>
            <li className="text-stone-400">{CONTACT.address}</li>
          </ul>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2.5 text-[14px] font-medium text-white transition-colors hover:border-brand-amber hover:text-brand-amber"
          >
            <MessageCircle size={16} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-center text-[13px] text-stone-400 md:px-8">
          © 2026 Fiftyfold. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
