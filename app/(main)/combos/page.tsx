import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Package } from "lucide-react";
import Breadcrumb from "@/components/ui/breadcrumb";
import cabbage from "@/assets/products/cabbage.png";
import corn from "@/assets/products/corn.png";
import green_apple from "@/assets/products/green_apple.png";
import mango from "@/assets/products/mango.png";
import red_tomato from "@/assets/products/red_tomato.png";
import green_chili from "@/assets/products/green_chili.png";
import green_lettuce from "@/assets/products/green_lettuce.png";
import red_capsicum from "@/assets/products/red_capsicum.png";
import big_potato from "@/assets/products/big_potato.png";
import eggplant from "@/assets/products/eggplant.png";
import fresh_cauliflower from "@/assets/products/fresh_cauliflower.png";
import lady_finger from "@/assets/products/lady_finger.png";
import NewsLetter from "@/components/sections/shared/NewsLetter";

const combos = [
  {
    id: 1,
    name: "Fresh Salad Combo",
    description: "Cabbage, Lettuce, Red Capsicum & Tomato — everything for a crisp salad.",
    items: [cabbage, green_lettuce, red_capsicum, red_tomato],
    originalPrice: 9.99,
    comboPrice: 6.99,
    badge: "Best Value",
    badgeColor: "bg-primary",
  },
  {
    id: 2,
    name: "Fruit Fiesta Pack",
    description: "Sweet mangoes & green apples — a fruity treat for the whole family.",
    items: [mango, green_apple],
    originalPrice: 5.99,
    comboPrice: 3.99,
    badge: "Popular",
    badgeColor: "bg-orange-500",
  },
  {
    id: 3,
    name: "Stir-Fry Special",
    description: "Corn, Eggplant, Green Chili & Lady Finger for a vibrant stir-fry.",
    items: [corn, eggplant, green_chili, lady_finger],
    originalPrice: 8.49,
    comboPrice: 5.49,
    badge: "Hot Deal",
    badgeColor: "bg-red-500",
  },
  {
    id: 4,
    name: "Weekly Veggie Box",
    description: "Big Potato, Cauliflower, Cabbage & Corn — your week of veggies sorted.",
    items: [big_potato, fresh_cauliflower, cabbage, corn],
    originalPrice: 12.99,
    comboPrice: 8.49,
    badge: "Save 35%",
    badgeColor: "bg-amber-500",
  },
  {
    id: 5,
    name: "Spice & Greens",
    description: "Green Chili, Green Lettuce, Lady Finger & Capsicum — bold & fresh.",
    items: [green_chili, green_lettuce, lady_finger, red_capsicum],
    originalPrice: 7.49,
    comboPrice: 4.99,
    badge: "New",
    badgeColor: "bg-sky-500",
  },
  {
    id: 6,
    name: "Morning Boost Pack",
    description: "Mango, Green Apple & Corn — a wholesome start to your day.",
    items: [mango, green_apple, corn],
    originalPrice: 6.49,
    comboPrice: 4.29,
    badge: "Fresh Pick",
    badgeColor: "bg-teal-500",
  },
];

export default function CombosPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="bg-linear-to-r from-primary via-green-600 to-lime-500">
        <div className="container py-14 text-white">
          <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-white/80">
            Bundle &amp; Save
          </p>
          <h1 className="mb-2 text-4xl font-extrabold">Combo Packs</h1>
          <p className="text-white/80 max-w-lg text-sm">
            Hand-picked combinations of fresh organic produce at unbeatable bundle prices. Save
            more when you buy together.
          </p>
        </div>
      </div>

      <div className="container py-8">
        <Breadcrumb items={[{ label: "Combos" }]} />

        {/* Info strip */}
        <div className="mt-6 mb-8 flex items-center gap-3 rounded-2xl bg-green-50 border border-green-200 px-6 py-4">
          <Package className="text-primary shrink-0" size={20} />
          <p className="text-sm font-medium text-green-800">
            All combo packs are freshly assembled and delivered within 24 hours of your order.
          </p>
        </div>

        {/* Combo grid */}
        <h2 className="mb-5 text-xl font-bold">Available Combos</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {combos.map((combo) => {
            const savings = (combo.originalPrice - combo.comboPrice).toFixed(2);
            return (
              <div
                key={combo.id}
                className="group rounded-2xl border bg-white overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Product thumbnails */}
                <div className="relative flex items-center justify-center gap-2 bg-gray-50 px-4 py-5">
                  <span
                    className={`absolute top-3 left-3 rounded-full ${combo.badgeColor} px-2.5 py-0.5 text-[10px] font-bold text-white`}
                  >
                    {combo.badge}
                  </span>
                  {combo.items.map((img, i) => (
                    <div key={i} className="relative h-16 w-16 shrink-0">
                      <Image
                        src={img}
                        alt=""
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>

                <div className="p-4">
                  <h3 className="font-bold">{combo.name}</h3>
                  <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                    {combo.description}
                  </p>

                  <div className="mt-3 flex items-end justify-between">
                    <div>
                      <p className="text-primary text-lg font-extrabold leading-none">
                        ${combo.comboPrice}
                      </p>
                      <p className="text-muted-foreground mt-0.5 text-xs line-through">
                        ${combo.originalPrice}
                      </p>
                    </div>
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                      Save ${savings}
                    </span>
                  </div>

                  <Link
                    href="/products"
                    className="mt-3 flex items-center justify-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
                  >
                    Add Combo <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <NewsLetter />

    </div>
  );
}
