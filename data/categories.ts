import fresh_fruits from "@/assets/categories/fresh_fruits.png";
import fresh_vegetables from "@/assets/categories/fresh_vegetables.png";
import honey from "@/assets/categories/honey.png";
import oil from "@/assets/categories/oil.png";
import meat_fish from "@/assets/categories/meat_fish.png";
import dairy from "@/assets/categories/dairy.png";
import nuts_seeds from "@/assets/categories/nuts_seeds.png";
import juices_drinks from "@/assets/categories/juice_drinks.png";

export interface ICategory {
  name: string;
  id: number;
  image: any;
}

export const categories: ICategory[] = [
  { name: "Fruits", id: 1, image: fresh_fruits },
  { name: "Vegetables", id: 2, image: fresh_vegetables },
  { name: "Dairy & Eggs", id: 3, image: dairy },
  { name: "Meat & Fish", id: 4, image: meat_fish },
  { name: "Oil", id: 5, image: oil },
  { name: "Nuts & Seeds", id: 6, image: nuts_seeds },
  { name: "Juices & Drinks", id: 7, image: juices_drinks },
  { name: "Honey", id: 8, image: honey },
];
