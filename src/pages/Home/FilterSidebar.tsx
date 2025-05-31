import type { FC } from "react";
import FilterSection from "./FilterSection";
import {
  BRANDS,
  CATEGORIES,
  PRICE_RANGES,
  YEARS,
} from "../../constants/product";
import type {
  FilterSection as FilterSectionType,
  FilterState,
} from "../../constants/product";
import { Filter } from "../../assets/icons";

interface FilterSidebarProps {
  filterSections: FilterSectionType;
  filters: FilterState;
  onToggleSection: (section: keyof FilterSectionType) => void;
  onFilterChange: (type: keyof FilterState, value: string) => void;
}

export const FilterSidebar: FC<FilterSidebarProps> = ({
  filterSections,
  filters,
  onToggleSection,
  onFilterChange,
}) => {
  return (
    <aside className="w-64 flex-shrink-0 pr-6" aria-label="Product filters">
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h2 className="font-medium mb-4 flex items-center gap-2">
          <img src={Filter} alt="" aria-hidden="true" />
          <span className="text-lg text-blue-600">Bộ lọc</span>
        </h2>

        <FilterSection
          title="Danh mục sản phẩm"
          isOpen={filterSections.category}
          onToggle={() => onToggleSection("category")}
        >
          <div className="space-y-2">
            {CATEGORIES.map((category) => (
              <label key={category.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  checked={filters.categories.includes(category.id)}
                  onChange={() => onFilterChange("categories", category.id)}
                />
                <span className="text-sm">{category.name}</span>
                {category.count && (
                  <span className="text-xs text-gray-500">
                    ({category.count})
                  </span>
                )}
              </label>
            ))}
          </div>
        </FilterSection>

        <FilterSection
          title="Khoảng giá"
          isOpen={filterSections.price}
          onToggle={() => onToggleSection("price")}
        >
          <div className="space-y-2 mb-4">
            {PRICE_RANGES.map((range) => (
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm">{range.label}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        <FilterSection
          title="Thương hiệu"
          isOpen={filterSections.brand}
          onToggle={() => onToggleSection("brand")}
        >
          <div className="space-y-2 mb-4">
            {BRANDS.map((brand) => (
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm">{brand.name}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        <FilterSection
          title="Năm sản xuất"
          isOpen={filterSections.year}
          onToggle={() => onToggleSection("year")}
        >
          <div className="space-y-2">
            {YEARS.map((item) => (
              <label key={item.year} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  checked={filters.years.includes(item.year)}
                  onChange={() => onFilterChange("years", item.year)}
                />
                <span className="text-sm">{item.year}</span>
                {item.count && (
                  <span className="text-xs text-gray-500">({item.count})</span>
                )}
              </label>
            ))}
          </div>
        </FilterSection>

        <FilterSection
          title="Xuất xứ"
          isOpen={filterSections.manufacturer}
          onToggle={() => onToggleSection("manufacturer")}
        >
          <div className="space-y-2 mb-4">
            {BRANDS.map((manufacturer) => (
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm">{manufacturer.name}</span>
              </label>
            ))}
          </div>
        </FilterSection>
      </div>
    </aside>
  );
};
