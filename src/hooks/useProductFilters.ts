import { useState, useCallback, useMemo } from 'react';
import type { FilterSection, FilterState, SortOption } from '../constants/product';
import type {Products} from '../utils/fakeData';

export function useProductFilters(initialProducts: Products[]) {
  const [filterSections, setFilterSections] = useState<FilterSection>({
    category: true,
    price: true,
    brand: true,
    year: true,
    manufacturer: true,
  });

  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRanges: [],
    brands: [],
    years: [],
    manufacturers: [],
  });

  const [sortBy, setSortBy] = useState<SortOption>('relevant');

  const toggleSection = useCallback((section: keyof FilterSection) => {
    setFilterSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  }, []);

  const handleFilterChange = useCallback((type: keyof FilterState, value: string) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value],
    }));
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...initialProducts];

    // Apply filters
    if (filters.categories.length) {
      result = result.filter(product => filters.categories.includes(product.category));
    }
    
    // Apply sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      // Add other sort cases
    }

    return result;
  }, [initialProducts, filters, sortBy]);

  return {
    filterSections,
    filters,
    sortBy,
    filteredProducts,
    toggleSection,
    handleFilterChange,
    setSortBy,
  };
}