import { Link } from "react-router-dom";
import { FiGlobe } from "react-icons/fi";
import { NotitedLogo } from "../assets/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Cột 1: Thông tin công ty */}
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-4">
              VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY
            </h3>
            <p className="text-sm mb-2">
              <strong>Tax code:</strong> 0305094228
            </p>
            <p className="text-sm mb-2">
              <strong>Address:</strong> 13 Nghia Thuc, Ward 05, District 5, Ho
              Chi Minh City, Viet Nam
            </p>
            <p className="text-sm mb-2">
              <strong>Phone number:</strong> 0283 760 7607
            </p>
            <p className="text-sm mb-4">
              <strong>Opening hour:</strong> 09:00 – 22:00 from Mon – Fri
            </p>
            <img
              src={NotitedLogo}
              alt="Đã thông báo Bộ Công Thương"
              className="w-32"
            />
          </div>

          {/* Cột 2: Sitemap */}
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-4">Sitemap</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#" className="hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-600">
                  Article
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-600">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-600">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Legal */}
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#" className="hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-600">
                  Cookie policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-600">
                  Delivery policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-600">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 4: Download App */}
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-4">
              Download App
            </h3>
            <div className="space-y-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play Store"
                  className="w-40"
                />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Apple App Store"
                  className="w-40"
                />
              </a>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <FiGlobe className="text-blue-600" size={20} />
              <span>VI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
