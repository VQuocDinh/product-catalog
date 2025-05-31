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

export interface FilterItems {
  id: string;
  name: string;
}

export interface Product {
  id: string | number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface FilterSection {
  category: boolean;
  price: boolean;
  brand: boolean;
  year: boolean;
  manufacturer: boolean;
}

export interface FilterState {
  categories: string[];
  priceRanges: string[];
  brands: string[];
  years: string[];
  manufacturers: string[];
}

export type SortOption = 'relevant' | 'bestseller' | 'newest' | 'price-asc' | 'price-desc';

export const sortOptions = [
  { value: 'relevant', label: 'Liên quan' },
  { value: 'bestseller', label: 'Bán chạy' },
  { value: 'newest', label: 'Mới nhất' }, 
  { value: 'popular', label: 'Nổi bật' },
  { value: 'price-asc', label: 'Giá: Thấp → Cao' },
  { value: 'price-desc', label: 'Giá: Cao → Thấp' },
] as const;

export const FILTER_ITEMS: FilterItems[] = [
  {id: "categories", name: "Danh mục sản phẩm"},
  {id: "price", name: "Khoảng giá"},
  {id: "brands", name: "Thương hiệu"},
  {id: "years", name: "Năm sản xuất"},
  {id: "manufacturers", name: "Xuất xứ"},

]


export const CATEGORIES: Category[] = [
  { id: "filter", name: "Lọc gió động cơ - Air Filter", count: 24 },
  { id: "fuel", name: "Lọc nhiên liệu - Fuel Filter", count: 24 },
  { id: "oil", name: "Bộ lọc dầu", count: 24 },
];

export const PRICE_RANGES: PriceRange[] = [
  { id: "under-100", label: "Dưới 100.000đ", max: 100000 },
  { id: "100-500", label: "Từ 100.000đ - 500.000đ", min: 100000, max: 500000 },
  { id: "above-500", label: "Trên 500.000đ", min: 500000 },
];

export const BRANDS: (Brand & { count: number })[] = [
    { id: "asakashi", name: "Asakashi", count: 10 },
    { id: "bosch", name: "Bosch", count: 8 },
    { id: "hyundai", name: "Huyndai", count: 6 },
];

export const YEARS: { year: string; count: number }[] = [
    { year: "2023", count: 12 },
    { year: "2022", count: 10 },
    { year: "2021", count: 8 },
    { year: "2020", count: 6 },
    { year: "2019", count: 4 },
];

export const MANUFACTURERS: { name: string; count: number }[] = [
    { name: "Toyota", count: 15 },
    { name: "Honda", count: 12 },
    { name: "Ford", count: 10 },
    { name: "Chevrolet", count: 8 },
    { name: "Nissan", count: 9 },
];
