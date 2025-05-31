import { FC } from 'react';

interface CategoryItem {
  icon?: string;
  name: string;
  subCategories?: string[];
}

const categories: CategoryItem[] = [
  {
    name: 'Vitamin & Khoáng chất',
    subCategories: ['Bổ sung Canxi & Vitamin D', 'Vitamin tổng hợp', 'Dầu cá, Omega 3, DHA']
  },
  { name: 'Sinh lý - Nội tiết tố' },
  { name: 'Cải thiện tăng cường chức năng' },
  { name: 'Hỗ trợ điều trị' },
  { name: 'Hỗ trợ tiêu hóa' },
  { name: 'Thần kinh não' },
  { name: 'Hỗ trợ làm đẹp' },
  { name: 'Sức khỏe tim mạch' },
  { name: 'Dinh dưỡng' }
];

const Category: FC = () => {
  return (
    <div className="absolute left-0 top-[calc(100%+0.5rem)] bg-white shadow-lg rounded-lg w-[280px] z-50">
      <ul className="py-2">
        {categories.map((category, index) => (
          <li 
            key={index}
            className="group relative px-4 py-2 hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">{category.name}</span>
              {category.subCategories && (
                <svg 
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>

            {/* Sub-categories */}
            {category.subCategories && (
              <div className="hidden group-hover:block absolute left-full top-0 bg-white shadow-lg rounded-lg w-[280px] ml-1">
                <ul className="py-2">
                  {category.subCategories.map((subCategory, subIndex) => (
                    <li 
                      key={subIndex}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      {subCategory}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
