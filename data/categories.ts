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

export interface ProductCategory {
  name: string;
  slug: string;
}

export const productCategories: ProductCategory[] = [
  { name: "Honey", slug: "honey" },
  { name: "Dry Food", slug: "dry-food" },
  { name: "Mix Food", slug: "mix-food" },
  { name: "Nuts & Seeds", slug: "nuts-seeds" },
  { name: "Pickle (আচার)", slug: "pickle" },
  { name: "Dates (খেজুর)", slug: "dates" },
  { name: "Masala (মসলা কম্বো)", slug: "masala" },
  { name: "Tea", slug: "tea" },
];
