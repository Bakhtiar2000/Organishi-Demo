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
    name: "Guy Hawkins",
    role: "CEO, Company",
    image: person1,
    content: "This is the best organic produce I've ever had. The quality is unmatched."
  },
  {
    id: 2,
    name: "Jenny Wilson",
    role: "Marketing Director",
    image: person2,
    content: "I love the convenience of having fresh, organic produce delivered to my doorstep."
  },
  {
    id: 3,
    name: "Kathryn Murphy",
    role: "Nutritionist",
    image: person3,
    content: "As a nutritionist, I can confidently recommend these products for their health benefits."
  }
];