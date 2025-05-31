import { memo } from "react";
import { Fire } from "../../assets/icons";
import type { Product } from "../../utils/fakeData";
import { formatPrice } from "../../utils/product";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  className?: string;
}

 const DISCOUNT_PERCENT = 10;

const ProductCard = memo(
  ({ product, onAddToCart, className = "" }: ProductCardProps) => {
    const originalPrice = product.price;
    const discountedPrice =
      originalPrice * (1 - DISCOUNT_PERCENT / 100);

    const handleAddToCart = () => {
      onAddToCart?.(product);
    };

    return (
      <article
        className={`bg-white rounded-lg p-4 hover:shadow-lg transition-shadow ${className}`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-contain my-3"
          loading="lazy"
        />

        <div className="mt-4">
          <div
            className="top-2 left-2 flex bg-[#FFAB00] text-xs text-white px-3 py-1 rounded-full items-center size-fit mb-2"
            aria-label="Giá khuyến mãi"
          >
            <img src={Fire} alt="" aria-hidden="true" className="w-4 h-4" />
            <span className="ml-2">Giá cực sốc</span>
          </div>
          <h3
            className="text-sm font-bold text-gray-800 mb-2 line-clamp-2 h-10"
            title={product.name}
          >
            {product.name}
          </h3>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-red-600 font-bold">
                {formatPrice(discountedPrice)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 line-through text-sm">
                {formatPrice(originalPrice)}
              </span>
              <span className="text-red-600 text-xs">
                -{DISCOUNT_PERCENT}%
              </span>
            </div>
          </div>

          <button
            className="w-full mt-3 bg-[#E6F1FF] text-blue-500 py-2 rounded text-sm font-bold 
            hover:bg-blue-200 transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onClick={handleAddToCart}
            aria-label={`Thêm ${product.name} vào giỏ hàng`}
          >
            Mua ngay
          </button>
        </div>
      </article>
    );
  }
);

export default ProductCard;
