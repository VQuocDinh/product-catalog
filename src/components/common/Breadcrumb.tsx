import { Link } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center py-3 text-sm">
      <Link to="/" className="text-gray-500 hover:text-blue-600">
        Trang chủ
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <HiChevronRight className="mx-2 text-gray-400" />
          {index === items.length - 1 ? (
            <span className="text-gray-900 font-medium">{item.label}</span>
          ) : (
            <Link to={item.path} className="text-gray-500 hover:text-blue-600">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;