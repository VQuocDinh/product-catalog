import { useCallback, useState } from "react";
import { fakeProducts } from "../../utils/fakeData";
import ProductCard from "./ProductCard";
import PromoBanner from "./PromoBanner";
import Breadcrumb from "../../components/Breadcrumb";
import { Filter } from "../../assets/icons";
import Services from "./Services";
import FilterSection from "./FilterSection";
import { BRANDS, CATEGORIES, PRICE_RANGES, YEARS } from "../../constants/product";

const breadcrumbItems = [
  {
    label: "Sản phẩm",
    path: "/products",
  },
];

const ProductList = () => {
  const [filterSections, setFilterSections] = useState({
    category: true,
    price: true,
    brand: true,
    year: true,
    manufacturer: true,
  });

  const [filters, setFilters] = useState({
    categories: [] as string[],
    priceRanges: [] as string[],
    brands: [] as string[],
    years: [] as string[],
    manufacturers: [] as string[],
  });

  // Handle toggle filter section visibility
  const toggleSection = useCallback((section: keyof typeof filterSections) => {
    setFilterSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }, []);

  //Handle filter changes
  const handleFilterChange = useCallback(
    (type: keyof typeof filters, value: string) => {
      setFilters((prev) => ({
        ...prev,
        [type]: prev[type].includes(value)
          ? prev[type].filter((item) => item !== value)
          : [...prev[type], value],
      }));
    },
    []
  );

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
      <Breadcrumb items={breadcrumbItems} />
      <PromoBanner />

      <div className="flex mt-8">
        {/* Filters sidebar */}
        <div className="w-64 flex-shrink-0 pr-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h2 className="font-medium mb-4 flex items-center gap-2">
              <img src={Filter} alt="" />
              <span className="text-lg text-blue-600">Bộ lọc</span>
            </h2>

            <FilterSection
              title="Danh mục sản phẩm"
              isOpen={filterSections.category}
              onToggle={() => toggleSection("category")}
            >
              <div className="space-y-2">
                {CATEGORIES.map((category) => (
                  <label key={category.id} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      checked={filters.categories.includes(category.id)}
                      onChange={() =>
                        handleFilterChange("categories", category.id)
                      }
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
              onToggle={() => toggleSection("price")}
            >
              <div className="space-y-2 mb-4">
                {PRICE_RANGES.map((range) => (
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">{range.label}</span>
                  </label>
                ))}
              </div>
            </FilterSection>

            <FilterSection
              title="Thương hiệu"
              isOpen={filterSections.brand}
              onToggle={() => toggleSection("brand")}
            >
              <div className="space-y-2 mb-4">
                {BRANDS.map((brand) => (
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">{brand.name}</span>
                  </label>
                ))}
              </div>
            </FilterSection>

             <FilterSection
              title="Năm sản xuất"
              isOpen={filterSections.year}
              onToggle={() => toggleSection("year")}
            >
              <div className="space-y-2">
                {YEARS.map((item) => (
                  <label key={item.year} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      checked={filters.years.includes(item.year)}
                      onChange={() =>
                        handleFilterChange("years", item.year)
                      }
                    />
                    <span className="text-sm">{item.year}</span>
                    {item.count && (
                      <span className="text-xs text-gray-500">
                        ({item.count})
                      </span>
                    )}
                  </label>
                ))}
              </div>
            </FilterSection>

            <FilterSection
              title="Thương hiệu"
              isOpen={filterSections.brand}
              onToggle={() => toggleSection("brand")}
            >
              <div className="space-y-2 mb-4">
                {BRANDS.map((brand) => (
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">{brand.name}</span>
                  </label>
                ))}
              </div>
            </FilterSection>
          </div>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-medium">Danh sách sản phẩm</h1>
            <div className="flex items-center gap-4">
              <select className="border rounded px-2 py-1 text-sm">
                <option>Liên quan</option>
                <option>Bán chạy</option>
                <option>Mới nhất</option>
                <option>Giá thấp - cao</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {fakeProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <Services />
    </div>
  );
};

export default ProductList;
