import person1 from "@/assets/clients/guy_hawkins.jpg";
import person2 from "@/assets/clients/jenny_wilson.jpg";
import person3 from "@/assets/clients/kathryn_murphy.jpg";

export interface TTestimonial {
  id: number | string;
  name: string;
  image: any;
  role: string;
  content: string;
}

export const testimonials: TTestimonial[] = [
  {
    id: 1,
    name: "Amira Rahman",
    role: "Customer",
    image: person1,
    content:
      "Organishi has completely transformed how my family eats. The vegetables are incredibly fresh — you can actually taste the difference from regular market produce. Delivery is always on time!",
  },
  {
    id: 2,
    name: "Karim Hassan",
    role: "Customer",
    image: person2,
    content:
      "I was skeptical about online grocery at first, but Organishi won me over. The honey is pure gold — literally the best I've ever tasted. The organic certification gives me real peace of mind.",
  },
  {
    id: 3,
    name: "Nadia Islam",
    role: "Customer",
    image: person3,
    content:
      "As a nutritionist, I only recommend verified organic foods. Organishi meets every standard I look for. My clients love the quality and I love how easy the ordering process is.",
  },
];
