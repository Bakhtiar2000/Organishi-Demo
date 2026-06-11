export interface TProduct {
  id: string;
  name: string;
  category: string;
  emoji: string;
  price: number;
  unit?: string;
  rating: number;
  reviewCount: number;
  isOrganic: boolean;
  description?: string;
  images?: string[];
  stock?: number;
}

export interface TProductQuery {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
  page?: number;
  limit?: number;
}
