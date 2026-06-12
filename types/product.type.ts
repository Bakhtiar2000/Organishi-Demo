export interface TProduct {
  id: number | string;
  name: string;
  categoryId?: number;
  section?: 'Hot Deals' | 'Best Sellers' | 'Top rated' | 'All';
  image: any;
  price: number;
  rating: number;            
  stock?: number;
  discount?: number;
}

export interface TProductQuery {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
  page?: number;
  limit?: number;
}
