export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const fakeProducts: Product[] = [
  { id: 1, name: "Bộ lọc dầu A", price: 250000, image: "/images/filter1.jpg", category: "Bộ lọc" },
  { id: 2, name: "Bộ lọc dầu B", price: 300000, image: "/images/filter2.jpg", category: "Bộ lọc" },
  { id: 3, name: "Dầu động cơ C", price: 400000, image: "/images/oil1.jpg", category: "Dầu" },
];