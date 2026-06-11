export interface OrganiCategory {
  name: string;
  slug: string;
  emoji: string;
}

export const organicCategories: OrganiCategory[] = [
  { name: "Fruits", slug: "fruits", emoji: "🍎" },
  { name: "Vegetables", slug: "vegetables", emoji: "🥦" },
  { name: "Dairy & Eggs", slug: "dairy-eggs", emoji: "🥛" },
  { name: "Grains & Cereals", slug: "grains", emoji: "🌾" },
  { name: "Herbs & Spices", slug: "herbs-spices", emoji: "🌿" },
  { name: "Nuts & Seeds", slug: "nuts-seeds", emoji: "🥜" },
  { name: "Juices & Drinks", slug: "juices-drinks", emoji: "🧃" },
  { name: "Snacks", slug: "snacks", emoji: "🫐" },
];
