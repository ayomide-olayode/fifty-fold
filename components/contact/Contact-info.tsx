import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { clsx } from "clsx";
import { CONTACT } from "@/data";

function InstagramIcon({ size = 20 }: { size?: number }): React.JSX.Element {
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

export interface ContactInfoProps {
  className?: string;
}

export function ContactInfo({ className }: ContactInfoProps): React.JSX.Element {
  const items = [
    {
      icon: Phone,
      label: "Call us",
      value: CONTACT.phoneDisplay,
      href: CONTACT.phoneHref,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with our team",
      href: CONTACT.whatsappHref,
    },
    {
      icon: Mail,
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      value: CONTACT.instagramHandle,
      href: CONTACT.instagram,
    },
  ];

  return (
    <div className={clsx("flex flex-col", className)}>
      <h2
        className="text-[26px] font-extrabold text-brand-black md:text-[32px]"
        style={{ letterSpacing: "-0.02em" }}
      >
        Reach us directly
      </h2>
      <p className="mt-3 text-[16px] leading-relaxed text-stone-600">
        Prefer to talk? Use any of the channels below — or fill out the
        form and we&apos;ll come to you.
      </p>

      {/* Channel Cards */}
      <div className="mt-8 space-y-3">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <a
              key={it.label}
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-stone-200 bg-white p-4 transition-all duration-200 hover:border-brand-amber hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-black text-brand-amber">
                <Icon size={20} />
              </span>
              <span>
                <span className="block text-[13px] font-semibold uppercase tracking-wider text-stone-500">
                  {it.label}
                </span>
                <span className="block text-[16px] font-bold text-brand-black">
                  {it.value}
                </span>
              </span>
            </a>
          );
        })}
      </div>

      {/* Office & Operating Hours */}
      <div className="mt-6 space-y-3 rounded-2xl bg-stone-100/80 p-5 text-[15px] font-medium text-stone-700 border border-stone-200">
        <div className="flex items-center gap-3">
          <MapPin size={18} className="shrink-0 text-brand-amber" />
          <span>{CONTACT.address}</span>
        </div>
        <div className="flex items-center gap-3">
          <Clock size={18} className="shrink-0 text-brand-amber" />
          <span>Mon – Sat, 8:00am – 6:00pm</span>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
