import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">SUNFIL</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Trang chủ</a></li>
            <li><a href="#" className="hover:underline">Sản phẩm</a></li>
            <li><a href="#" className="hover:underline">Liên hệ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;