import { useState } from 'react';
import type { Product } from '../utils/fakeData';
import ProductCard from '../components/ProductCard';
import PromoBanner from '../components/PromoBanner';
import Button from '../components/ButtonCustom';

const ProductList = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'Lọc dầu Air Filter - Chevrolet Colorado, Tr...',
      price: 299000,
      image: '/images/oil-filter1.jpg',
      category: 'Bộ lọc',
    },
    {
      id: 2,
      name: 'Lọc dầu Air Filter - Chevrolet Colorado, Tr...',
      price: 299000,
      image: '/images/oil-filter2.jpg',
      category: 'Bộ lọc',
    },
    {
      id: 3,
      name: 'Lọc dầu Air Filter - Chevrolet Colorado, Tr...',
      price: 299000,
      image: '/images/oil-filter3.jpg',
      category: 'Bộ lọc',
    },
    {
      id: 4,
      name: 'Lọc dầu Air Filter - Chevrolet Colorado, Tr...',
      price: 299000,
      image: '/images/oil-filter4.jpg',
      category: 'Bộ lọc',
    },
    {
      id: 5,
      name: 'Lọc dầu Air Filter - Chevrolet Colorado, Tr...',
      price: 299000,
      image: '/images/oil-filter5.jpg',
      category: 'Bộ lọc',
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');

  const categories = ['Tất cả', ...new Set(products.map(p => p.category))];

  const filteredProducts = selectedCategory === 'Tất cả'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="container mx-auto p-4 px-4 md:px-8 lg:px-16">
      <PromoBanner />
      <h1 className="text-3xl font-bold mb-4 mt-8">Tài sản quốc gia</h1>
      <div className="flex space-x-4 mb-6">
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'primary' : 'secondary'}
            size="medium"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;