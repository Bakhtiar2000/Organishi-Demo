import news1 from "@/assets/news/1.png";
import news2 from "@/assets/news/2.png";
import news3 from "@/assets/news/3.png";

export interface TNews {
  id: number;
  title: string;
  excerpt: string;
  image: any;
  day: string;
  month: string;
}

export const newsList: TNews[] = [
  {
    id: 1,
    title: "Why Organic Foods Are Worth the Switch?",
    excerpt:
      "Discover how choosing organic products can support your health, protect the environment, and bring more natural goodness to your daily meals.",
    image: news1,
    day: "23",
    month: "JAN",
  },
  {
    id: 2,
    title: "5 Simple Habits for a Healthier Lifestyle",
    excerpt:
      "From mindful eating to choosing cleaner ingredients, small changes in your routine can lead to long-term wellness for the whole family.",
    image: news2,
    day: "12",
    month: "MAR",
  },
  {
    id: 3,
    title: "How to Identify Truly Natural Products?",
    excerpt:
      "Learn the key signs of authentic organic products and shop with confidence for you and your loved ones.",
    image: news3,
    day: "08",
    month: "NOV",
  },
];
