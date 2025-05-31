export interface Category {
  id: string;
  name: string;
  count?: number; // Optional count for the number of products in this category
}

export interface PriceRange {
  id: string;
  label: string;
  min?: number; // Optional minimum price
  max?: number; // Optional maximum price
}

export interface Brand {
  id: string;
  name: string;
  count?: number; // Optional count for the number of products from this brand
}

export interface Year {
  year: string;
  count: number; // Number of products available for this year
}

export interface Manufacturer {
  name: string;
  count?: number; // Optional count for the number of products from this manufacturer
}
