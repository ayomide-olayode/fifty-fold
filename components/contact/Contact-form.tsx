"use client";

import { useState } from "react";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import { clsx } from "clsx";
import { SERVICES } from "@/data";

export interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps): React.JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or chat with us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        className={clsx(
          "flex flex-col items-center justify-center rounded-2xl border border-amber-200 bg-amber-50/50 p-8 text-center sm:p-12",
          className
        )}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-amber text-white shadow-lg">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="mt-5 text-[24px] font-bold text-brand-black">
          Message Received!
        </h3>
        <p className="mt-2 max-w-md text-[15px] leading-relaxed text-stone-600">
          Thank you for reaching out to Fiftyfold. Our engineering and project management team will review your project details and respond within 48 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", phone: "", service: "", message: "" });
          }}
          className="mt-6 rounded-lg bg-brand-black px-6 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-stone-800 cursor-pointer"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(
        "rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8",
        className
      )}
    >
      <h3 className="text-[22px] font-bold text-brand-black">
        Request a Detailed Quote
      </h3>
      <p className="mt-1 text-[14px] text-stone-500">
        Fill in your project information below and we&apos;ll be in touch.
      </p>

      {error && (
        <div className="mt-4 rounded-lg bg-red-50 p-3 text-[14px] font-medium text-red-600">
          {error}
        </div>
      )}

      <div className="mt-6 space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-[13px] font-semibold text-stone-700">
            Full Name <span className="text-brand-amber">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Adebayo Johnson"
            className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-3 text-[15px] text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-amber/20"
          />
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="block text-[13px] font-semibold text-stone-700">
              Email Address <span className="text-brand-amber">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. adebayo@example.com"
              className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-3 text-[15px] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-amber/20"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-[13px] font-semibold text-stone-700">
              Phone / WhatsApp <span className="text-brand-amber">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +234 800 000 0000"
              className="mt-1.5 w-full rounded-xl border px-4 py-3 text-[15px] text-stone-900 focus:border-brand-amber focus:outline-none focus:ring-2 focus:ring-brand-amber/20"
            />
          </div>
        </div>

        {/* Service Dropdown */}
        <div>
          <label htmlFor="service" className="block text-[13px] font-semibold text-stone-700">
            Service Required
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-3 text-[15px] text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-amber/20"
          >
            <option value="">Select a trade or service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="multiple">Multiple Finishing Services</option>
            <option value="other">Other / Consultation</option>
          </select>
        </div>

        {/* Project Details */}
        <div>
          <label htmlFor="message" className="block text-[13px] font-semibold text-stone-700">
            Project Description & Location <span className="text-brand-amber">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about the property type, scope of work, timeline, or site location in Lagos..."
            className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-3 text-[15px] text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-amber/20 resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-amber px-6 py-3.5 text-[16px] font-semibold text-white shadow-md transition-all hover:bg-amber-700 disabled:opacity-60 cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Submitting Quote Request...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Request
          </>
        )}
      </button>
    </form>
  );
}

export default ContactForm;
