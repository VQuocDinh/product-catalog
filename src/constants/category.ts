import { OilFilter, OxiFilter } from "../assets/image";

export interface SubCategory {
  id: string;
  name: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subCategories?: SubCategory[];
}
export const categories: Category[] = [
  {
    id: "oil-filter",
    name: "Bộ Lọc Dầu",
    icon: OilFilter,
    subCategories: [
      {
        id: "air-filter-1",
        name: "Bộ lọc gió",
        image: OxiFilter,
      },
      {
        id: "air-filter-2",
        name: "Bộ lọc gió",
        image: OilFilter,
      },
    ],
  },
  {
    id: "air-filter",
    name: "Bộ Lọc Không Khí",
    icon: OxiFilter,
    subCategories: [
      {
        id: "air-filter-1",
        name: "Bộ lọc gió",
        image: OxiFilter,
      },
      {
        id: "air-filter-2",
        name: "Bộ lọc gió",
        image: OxiFilter,
      },
    ],
  },
  {
    id: "fuel-filter",
    name: "Bộ Lọc Nhiên Liệu",
    icon: OilFilter,
    subCategories: [
      {
        id: "air-filter-1",
        name: "Bộ lọc gió",
        image: OilFilter,
      },
      {
        id: "air-filter-2",
        name: "Bộ lọc gió",
        image: OilFilter,
      },
    ],
  },
  {
    id: "cabin-filter",
    name: "Bộ Lọc Trong Cabin",
    icon: OilFilter,
    subCategories: [
      {
        id: "air-filter-1",
        name: "Bộ lọc gió",
        image: OxiFilter,
      },
      {
        id: "air-filter-2",
        name: "Bộ lọc gió",
        image: OxiFilter,
      },
    ],
  },
];
