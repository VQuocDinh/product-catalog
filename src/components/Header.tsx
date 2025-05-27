import { Link } from "react-router-dom";
import {
  FiSearch,
  FiCamera,
  FiChevronDown,
} from "react-icons/fi";
import { Logo, FlagVN, Cart, User, Clock, Hand, Truck, Asyc } from "../assets/icons";
import Button from "./ButtonCustom";

const navLinks = [
  { to: "#", label: "VÉ CHÚNG TÔI" },
  { to: "#", label: "BÀI VIẾT" },
  { to: "#", label: "CATALOG" },
  { to: "#", label: "LIÊN HỆ" },
];

const supportLinks = [
  { icon: Clock, label: "Hỗ trợ 24/7" },
  { icon: Hand, label: "Miễn Phí Vận Chuyển" },
  { icon: Truck, label: "Giao Hàng NHANH 2H" },
  { icon: Asyc, label: "30 Ngày Đổi Trả" },
];

const Header = () => (
  <header className="bg-white p-4 shadow-md">
    <div className="container mx-auto flex items-center justify-between px-4 md:px-8 lg:px-16">
      {/* Logo */}
      <div className="flex flex-col">
        <Link to="/" className="text-2xl font-bold">
          <img src={Logo} alt="Logo" className="w-auto" />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex items-center space-x-4 w-1/2">
        <div
          className="flex items-center bg-white rounded-full px-4 py-2 flex-1"
          style={{ border: "3px solid #0373F3" }}
        >
          <input
            type="text"
            placeholder="Tìm sản phẩm"
            className="flex-1 outline-none text-black"
          />
          <FiCamera className="text-gray-500 mr-2" size={20} />
          <Button
            variant="primary"
            size="medium"
            className="p-1 ml-2"
            style={{ borderRadius: "50px" }}
          >
            <FiSearch className="text-white-600 " size={20} />
          </Button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 gap-2">
        {/* Country */}
        <div className="flex items-center space-x-1 cusoror-pointer">
          <img src={FlagVN} alt="Vietnam flag" />
          <span className="ml-2">VI</span>
        </div>

        {/* Cart */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <div className="relative">
            <img src={Cart} alt="cart" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              12
            </span>
          </div>
          <span className="ml-2">Giỏ hàng</span>
        </div>

        {/* Account */}
        <button className="flex items-center space-x-1">
          <img src={User} alt="user"/>
          <span>Tài khoản</span>
        </button>
      </div>
    </div>

    {/* Sub Navigation */}
    <div className="container mx-auto flex justify-between items-center mt-2 text-sm px-4 md:px-8 lg:px-16">
      <div>
        {/* Product Category Button */}
        <div className="relative inline-block mr-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
            <span className="mr-2">Danh Mục Sản Phẩm</span>
            <FiChevronDown size={16} />
          </button>
        </div>
        
        <div className="flex space-x-4 inline-flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="mx-2"
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
            className="flex items-center"
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

export default Header;
