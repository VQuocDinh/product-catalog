import { type FC, useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../constants/category";
import type { Category as CategoryType } from "../../constants/category";
import { FiChevronRight } from "react-icons/fi";
import { bestSaler } from "../../utils/fakeData";
import ProductCard from "../../components/product/ProductCard";

const Category: FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType | null>(
    categories[0] || null
  );

  return (
    <div className="absolute top-full left-0 bg-gray-100 shadow-lg rounded-lg z-50 w-[1200px] min-h-[400px] p-4">
      <div className="flex">
        <div className="w-1/4 border-r">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`flex items-center gap-2 px-4 py-3 cursor-pointer hover:bg-gray-50
                ${activeCategory?.id === category.id ? "bg-gray-50" : ""}`}
              onMouseEnter={() => setActiveCategory(category)}
            >
              <img
                src={category.icon}
                alt=""
                className="w-6 h-6"
                aria-hidden="true"
              />
              <span className="text-sm">{category.name}</span>
              {(category.subCategories?.length ?? 0) > 0 && (
                <FiChevronRight className="ml-auto" />
              )}
            </div>
          ))}
        </div>

        {/* Subcategories */}
        {activeCategory?.subCategories && (
          <div className="flex-1 p-4">
            <div className="grid grid-cols-3 gap-4">
              {activeCategory.subCategories.map((sub) => (
                <Link
                  key={sub.id}
                  to={`/category/${activeCategory.id}/${sub.id}`}
                  className="p-4 rounded-lg hover:bg-gray-50 bg-white"
                >
                  <img
                    src={sub.image}
                    alt={sub.name}
                    className="w-full h-32 object-contain mb-2"
                  />
                  <p className="text-sm text-center">{sub.name}</p>
                </Link>
              ))}
            </div>

            {/* Best sellers section */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Sản Phẩm Bán Chạy</h3>
                <Link to="/best-sellers" className="text-blue-600 text-sm">
                  Xem tất cả
                </Link>
              </div>
              <div className="grid grid-cols-5 gap-4">
                {bestSaler.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
