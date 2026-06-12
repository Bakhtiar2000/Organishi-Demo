import { TProduct } from "@/types/product.type";
import big_potato from "@/assets/products/big_potato.png";
import cabbage from "@/assets/products/cabbage.png";
import corn from "@/assets/products/corn.png";
import eggplant from "@/assets/products/eggplant.png";
import fresh_cauliflower from "@/assets/products/fresh_cauliflower.png";
import green_apple from "@/assets/products/green_apple.png";
import green_chili from "@/assets/products/green_chili.png";
import green_lettuce from "@/assets/products/green_lettuce.png";
import indian_malta from "@/assets/products/indian_malta.png";
import red_capsicum from "@/assets/products/red_capsicum.png";
import red_tomato from "@/assets/products/red_tomato.png";

export const mockProducts: TProduct[] = [
  {
    id: 1,
    name: "Big Potato",
    categoryId: 1,
    section: "All",
    image: big_potato,
    price: 4.99,
    rating: 4.8,
    stock: 100,
    discount: 0,
  },
  {
    id: 2,
    name: "Fresh Cabbage",
    categoryId: 1,
    section: "Hot Deals",
    image: cabbage,
    price: 2.49,
    rating: 4.5,
    stock: 50,
    discount: 10,
  },
  {
    id: 3,
    name: "Sweet Corn",
    categoryId: 1,
    section: "Best Sellers",
    image: corn,
    price: 3.99,
    rating: 4.7,
    stock: 80,
    discount: 5,    
  },
  {
    id: 4,
    name: "Eggplant",
    categoryId: 1,
    section: "Top rated",
    image: eggplant,
    price: 1.99,
    rating: 4.6,
    stock: 60,
    discount: 0,    
  },
  {
    id: 5,
    name: "Green Apple",
    categoryId: 1,
    section: "Best Sellers",
    image: green_apple,
    price: 0.99,
    rating: 4.9,
    stock: 200,
    discount: 15,    
  },
  {
    id: 6,
    name: "Red Tomato",
    categoryId: 1,
    section: "Hot Deals",
    image: red_tomato,
    price: 1.49,
    rating: 4.4,
    stock: 120,
    discount: 20,    
  },
  {
    id: 7,
    name: "Green Chili",
     categoryId: 1,
    section: "Top rated",
    image: green_chili,
    price: 0.79,
    rating: 4.3,
    stock: 150,
    discount: 0,    
  },
  {
    id: 8,
    name: "Green Lettuce",
     categoryId: 1,
    section: "All",
    image: green_lettuce,
    price: 1.29,
    rating: 4.2,
    stock: 90,
    discount: 5,    
  },
  {
    id: 9,
    name: "Indian Malta",
     categoryId: 1,
    section: "Best Sellers",
    image: indian_malta,
    price: 0.89,
    rating: 4.8,
    stock: 110,
    discount: 10,    
  },
  {
    id: 10,
    name: "Red Capsicum",
     categoryId: 1,
    section: "Hot Deals",
    image: red_capsicum,
    price: 1.99,
    rating: 4.5,
    stock: 70,
    discount: 15, 
  },
  {
    id: 11,
    name: "Fresh Cauliflower",
     categoryId: 1,
    section: "Top rated",
    image: fresh_cauliflower,
    price: 2.49,
    rating: 4.8,
    stock: 70,
    discount: 15, 
  }
];
