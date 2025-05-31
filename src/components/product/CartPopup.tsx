import type { FC } from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/product";
import "./index.scoped.scss";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartPopupProps {
  items: CartItem[];
}

const CartPopup: FC<CartPopupProps> = ({ items }) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="absolute top-full right-0 w-96 bg-white rounded-lg shadow-lg z-50 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">Giỏ hàng ({items.length})</h3>
        <Link to="/cart" className="text-blue-600 text-sm hover:underline">
          Xem tất cả
        </Link>
      </div>

      {items.length > 0 ? (
        <>
          <div className="max-h-80 overflow-y-auto divide-y">
            {items.map((item) => (
              <div key={item.id} className="flex py-3 gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain border rounded"
                />
                <div className="flex-1">
                  <h4 className="text-sm line-clamp-2">{item.name}</h4>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-red-600 font-medium">
                      {formatPrice(item.price)}
                    </span>
                    <span className="text-gray-500">x{item.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between mb-4">
              <span>Tổng tiền:</span>
              <span className="text-red-600 font-bold">
                {formatPrice(total)}
              </span>
            </div>
            <Link
              to="/checkout"
              className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Thanh toán
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center py-8 text-gray-500">
          <p>Giỏ hàng trống</p>
        </div>
      )}
    </div>
  );
};

export default CartPopup;
