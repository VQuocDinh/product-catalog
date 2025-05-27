import { useState } from 'react';
import { fakeProducts, type Product } from '../utils/fakeData';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  const [products] = useState<Product[]>(fakeProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');

  const categories = ['Tất cả', ...new Set(fakeProducts.map(p => p.category))];

  const filteredProducts = selectedCategory === 'Tất cả'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Tài sản quốc gia</h1>
      <div className="flex space-x-4 mb-6">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;