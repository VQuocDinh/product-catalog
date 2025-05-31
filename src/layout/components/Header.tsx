import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import {
  Logo,
  FlagVN,
  Cart,
  User,
  Clock,
  Hand,
  Truck,
  Asyc,
} from "../../assets/icons";
import { AiOutlineMenu } from "react-icons/ai";
import Button from "../../components/common/ButtonCustom";
import React, { useState } from "react";
import Category from "../../pages/Home/Category";
import SearchBar from "../../components/common/SearchBar";
import CartPopup from "../../components/product/CartPopup";
import { Product1 } from "../../assets/images";

interface NavLink {
  to: string;
  label: string;
}

interface SupportLink {
  icon: string;
  label: string;
}

const navLinks: NavLink[] = [
  { to: "#", label: "Về Chúng Tôi" },
  { to: "#", label: "Bài Viết" },
  { to: "#", label: "Catalog" },
  { to: "#", label: "Liên Hệ" },
];

const supportLinks: SupportLink[] = [
  { icon: Clock, label: "Hỗ trợ 24/7" },
  { icon: Hand, label: "Miễn Phí Vận Chuyển" },
  { icon: Truck, label: "Giao Hàng Nhanh 2H" },
  { icon: Asyc, label: "30 Ngày Đổi Trả" },
];

const Header = () => {
  const [isOpenCategory, setIsOpenCategory] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Mock data - replace with real data later
  const cartItems = [
    {
      id: "1",
      name: "Lọc gió động cơ Air Filter - Chevrolet C...",
      image: Product1,
      price: 299000,
      quantity: 1,
    },
  ];

  return (
    <header className="bg-white p-4 shadow-md relative">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 lg:px-16">
        <div className="flex flex-col">
          <Link to="/" className="text-2xl font-bold">
            <img src={Logo} alt="Logo" className="w-auto" />
          </Link>
        </div>

        <SearchBar />

        <div className="flex items-center gap-8">
          <button
            className="flex items-center cursor-pointer focus:outline-none"
            type="button"
          >
            <img src={FlagVN} alt="Vietnam flag" />
            <span className="ml-2">VI</span>
          </button>

          <div
            className="relative"
            onMouseEnter={() => setIsCartOpen(true)}
            onMouseLeave={() => setIsCartOpen(false)}
          >
            <button
              className="flex items-center cursor-pointer focus:outline-none hover:text-blue-600 transition-colors"
              type="button"
            >
              <span className="relative">
                <img src={Cart} alt="cart" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              </span>
              <span className="ml-2">Giỏ hàng</span>
            </button>

            {isCartOpen && <CartPopup items={cartItems} />}
          </div>

          <button
            className="flex items-center cursor-pointer focus:outline-none"
            type="button"
          >
            <img src={User} alt="user" />
            <span className="ml-2">Tài khoản</span>
          </button>
        </div>
      </div>

      <div className="relative container mx-auto flex justify-between items-center mt-6 text-sm px-4 md:px-8 lg:px-16">
        <div className="flex items-center space-x-4">
          <div
            className="relative"
            onMouseEnter={() => setIsOpenCategory(true)}
            onMouseLeave={() => setIsOpenCategory(false)}
          >
            <Button
              variant="primary"
              size="medium"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <AiOutlineMenu size={20} className="mr-2" />
              <span className="mr-2">Danh Mục Sản Phẩm</span>
              <FiChevronDown size={16} />
            </Button>

            {isOpenCategory && <Category />}
          </div>

          <div className="flex space-x-4 inline-flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="mx-2 text-gray-700 hover:text-blue-600 font-bold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex space-x-4">
          {supportLinks.map((item) => (
            <Link
              key={item.label}
              to="#"
              className="flex items-center text-gray-700 hover:text-blue-600 font-bold"
            >
              <span className="mr-1">
                <img src={item.icon} alt="" />
              </span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
