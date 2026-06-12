import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Breadcrumb from "@/components/ui/breadcrumb";
import NewsLetter from "@/components/sections/shared/NewsLetter";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    lines: ["House 12, Road 5, Block B", "Bashundhara R/A, Dhaka 1229"],
    color: "text-primary",
    bg: "bg-green-50",
  },
  {
    icon: Phone,
    label: "Call Us",
    lines: ["+880 1700-000000", "+880 1800-000000"],
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: ["hello@organishi.com", "support@organishi.com"],
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Clock,
    label: "Business Hours",
    lines: ["Mon – Fri: 9 AM – 7 PM", "Sat – Sun: 10 AM – 5 PM"],
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="bg-linear-to-r from-teal-600 via-primary to-lime-500">
        <div className="container py-14 text-white">
          <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-white/80">
            We&apos;d Love to Hear from You
          </p>
          <h1 className="mb-2 text-4xl font-extrabold">Contact Us</h1>
          <p className="text-white/80 max-w-lg text-sm">
            Have a question, a bulk order enquiry, or just want to say hello? Reach out and our
            team will get back to you within 24 hours.
          </p>
        </div>
      </div>

      <div className="container py-8">
        <Breadcrumb items={[{ label: "Contact" }]} />

        {/* Info cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info) => (
            <div key={info.label} className={`rounded-2xl border p-5 ${info.bg}`}>
              <div className={`mb-3 ${info.color}`}>
                <info.icon size={22} />
              </div>
              <p className="mb-1.5 text-sm font-bold">{info.label}</p>
              {info.lines.map((line) => (
                <p key={line} className="text-muted-foreground text-xs leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Form + map */}
        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          {/* Contact form */}
          <div className="lg:col-span-3 rounded-2xl border bg-white p-8">
            <h2 className="mb-1 text-xl font-bold">Send a Message</h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Fill in the form and we&apos;ll get back to you as soon as possible.
            </p>

            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="border-border w-full rounded-xl border bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="border-border w-full rounded-xl border bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold">Phone (optional)</label>
                <input
                  type="tel"
                  placeholder="+880 1700-000000"
                  className="border-border w-full rounded-xl border bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold">Subject</label>
                <select className="border-border w-full rounded-xl border bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors">
                  <option value="">Select a topic…</option>
                  <option>Order Enquiry</option>
                  <option>Bulk / Wholesale Order</option>
                  <option>Product Question</option>
                  <option>Delivery Issue</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help…"
                  className="border-border w-full resize-none rounded-xl border bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map placeholder + FAQ */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Map placeholder */}
            <div className="flex-1 min-h-52 overflow-hidden rounded-2xl border bg-gray-100 flex flex-col items-center justify-center gap-2 text-center p-6">
              <MapPin className="text-primary" size={32} />
              <p className="font-semibold">Bashundhara R/A</p>
              <p className="text-muted-foreground text-xs">Dhaka, Bangladesh</p>
              <a
                href="#"
                className="mt-2 rounded-full border border-primary px-4 py-1.5 text-xs font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Open in Maps
              </a>
            </div>

            {/* Quick FAQ */}
            <div className="rounded-2xl border bg-white p-5">
              <h3 className="mb-4 text-sm font-bold">Quick Answers</h3>
              <ul className="space-y-3">
                {[
                  ["Do you deliver nationwide?", "Yes, we ship to all major cities across Bangladesh."],
                  ["What is the minimum order?", "There is no minimum order requirement."],
                  ["How fresh is the produce?", "Most items are harvested within 24 hours of delivery."],
                ].map(([q, a]) => (
                  <li key={q} className="border-b pb-3 last:border-0 last:pb-0">
                    <p className="text-xs font-semibold">{q}</p>
                    <p className="text-muted-foreground mt-0.5 text-xs">{a}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />

    </div>
  );
}
