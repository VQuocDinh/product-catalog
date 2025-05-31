import type { FC } from "react";
import { fakeProducts } from "../../utils/fakeData";
import { useProductFilters } from "../../hooks/useProductFilters";
import ProductCard from "./ProductCard";
import PromoBanner from "./PromoBanner";
import Breadcrumb from "../../components/Breadcrumb";
import Services from "./Services";
import { FilterSidebar } from "./FilterSidebar";
import { sortOptions, type SortOption } from '../../constants/product';

const breadcrumbItems = [
  {
    label: "Sản phẩm",
    path: "/products",
  },
];

const ProductList: FC = () => {
  const {
    filterSections,
    filters,
    sortBy,
    filteredProducts,
    toggleSection,
    handleFilterChange,
    setSortBy,
  } = useProductFilters(fakeProducts);

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
      <Breadcrumb items={breadcrumbItems} />
      <PromoBanner />

      <div className="flex mt-8">
        <FilterSidebar
          filterSections={filterSections}
          filters={filters}
          onToggleSection={toggleSection}
          onFilterChange={handleFilterChange}
        />

        <main className="flex-1" role="main">
          <div className="flex justify-between items-center mb-4 bg-gray-50 p-4 rounded-lg">
            <h1 className="text-xl font-medium">
              Danh sách sản phẩm ({filteredProducts.length})
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sắp xếp theo:</span>
              <div className="flex items-center gap-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSortBy(option.value as SortOption)}
                    className={`px-3 py-1.5 text-sm rounded-full transition-colors
                      ${sortBy === option.value 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                    aria-current={sortBy === option.value ? 'true' : undefined}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            role="list"
            aria-label="Danh sách sản phẩm"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>

      <Services />
    </div>
  );
};

export default ProductList;
