import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Truck, ShieldCheck, Users } from "lucide-react";
import Breadcrumb from "@/components/ui/breadcrumb";
import banner1 from "@/assets/banner/1.png";
import banner2 from "@/assets/banner/2.png";
import NewsLetter from "@/components/sections/shared/NewsLetter";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "50K+", label: "Happy Customers" },
  { value: "200+", label: "Organic Products" },
  { value: "30+", label: "Partner Farms" },
];

const values = [
  {
    icon: Leaf,
    title: "100% Organic",
    description:
      "Every product is certified organic — free from synthetic pesticides, hormones, and GMOs. We believe real food should be as nature intended.",
    color: "text-primary",
    bg: "bg-green-50",
  },
  {
    icon: Truck,
    title: "Farm to Doorstep",
    description:
      "We work directly with local and regional farmers to deliver produce within 24 hours of harvest, so freshness is never compromised.",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description:
      "Every batch goes through strict quality checks before it reaches your basket. If you're not satisfied, we'll make it right — no questions asked.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Fair pay for farmers, sustainable livelihoods for rural communities, and a healthier planet for everyone. That's the Organishi promise.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const team = [
  { name: "Farhan Hossain", role: "Founder & CEO", initial: "F" },
  { name: "Amira Rahman", role: "Head of Sourcing", initial: "A" },
  { name: "Karim Hassan", role: "Operations Lead", initial: "K" },
  { name: "Nadia Islam", role: "Customer Experience", initial: "N" },
];

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="bg-linear-to-r from-primary via-green-600 to-lime-500">
        <div className="container py-14 text-white">
          <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-white/80">
            Who We Are
          </p>
          <h1 className="mb-2 text-4xl font-extrabold">About Organishi</h1>
          <p className="text-white/80 max-w-lg text-sm">
            We're a team of food lovers, farmers, and sustainability advocates on a mission to make
            fresh organic food accessible to everyone.
          </p>
        </div>
      </div>

      <div className="container py-8">
        <Breadcrumb items={[{ label: "About" }]} />

        {/* Story section */}
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Our Story
            </h2>
            <h3 className="mb-4 text-3xl font-bold leading-snug">
              From a Small Farm to Your Doorstep
            </h3>
            <div className="bg-primary mb-4 h-1 w-10 rounded-full" />
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Organishi started in 2010 as a small family-run farm stall in Dhaka. What began as a
              passion project to share genuinely fresh, chemical-free produce with neighbours grew
              into a full-scale organic marketplace connecting hundreds of farmers with thousands of
              households.
            </p>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Today we deliver across Bangladesh, but our values haven&apos;t changed: every
              product we carry is held to the same rigorous standards that earned us the trust of
              our very first customers.
            </p>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
            >
              Shop Our Products <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-52 overflow-hidden rounded-2xl">
              <Image src={banner1} alt="Organic farm" fill className="object-cover" />
            </div>
            <div className="relative mt-6 h-52 overflow-hidden rounded-2xl">
              <Image src={banner2} alt="Fresh produce" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border bg-white py-7 text-center shadow-sm"
            >
              <p className="text-primary text-3xl font-extrabold">{s.value}</p>
              <p className="text-muted-foreground mt-1 text-xs font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mt-14">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold">What We Stand For</h2>
            <div className="bg-primary mx-auto mt-2 h-1 w-10 rounded-full" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className={`rounded-2xl border p-5 ${v.bg}`}
              >
                <div className={`mb-3 ${v.color}`}>
                  <v.icon size={28} />
                </div>
                <h3 className="mb-1.5 font-bold">{v.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mt-14 mb-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold">Meet the Team</h2>
            <div className="bg-primary mx-auto mt-2 h-1 w-10 rounded-full" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border bg-white p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="bg-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white">
                  {member.initial}
                </div>
                <p className="font-bold">{member.name}</p>
                <p className="text-muted-foreground mt-0.5 text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}
