import React, { useState, useEffect } from "react";
import ProductCard from '../Components/ProductCard';
import CategoriePrice from '../Components/CategoriePrice';
import { Link } from "react-router-dom";
import useFetchProducts from '../utils/useFetchProducts';
import Price from "../Components/Price";

const Home = () => {
  const { products, loading, error } = useFetchProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceSort, setPriceSort] = useState('normal');

  useEffect(() => {
    if (products.length > 0) {
      filterAndSortProducts(products, searchTerm, selectedCategory, priceSort);
    }
  }, [products, searchTerm, selectedCategory, priceSort]);

  const filterAndSortProducts = (products, term, category, sort) => {
    let filtered = [...products];

    if (category !== 'All') {
      filtered = filtered.filter(product => product.category === category);
    }

    if (term) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(term.toLowerCase()) ||
        product.description.toLowerCase().includes(term.toLowerCase())
      );
    }

    if (sort === 'lowToHigh') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'highToLow') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceSort = (sortOption) => {
    setPriceSort(sortOption);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className="ml-[25rem] p-8 mb-[2rem] mt-[-80px]">
        <input
          onChange={handleSearch}
          value={searchTerm}
          type="text"
          placeholder="Search products..."
          className="w-full max-w-[300px] bg-gray-100 text-gray-800 border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent transition-all duration-300"
        />
        <button
          type="submit"
          className="bg-yellow-700 text-white py-2 px-4 rounded-r-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
        >
          Search
        </button>
      </form>

      <CategoriePrice onCategorySelect={handleCategorySelect} selectedCategory={selectedCategory} />
      
      <Price onPriceSort={handlePriceSort} />

      <div className="ml-[150px] w-[80%]">
        <div className="grid grid-cols-3 gap-3 content-center ">
          {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <ProductCard 
                product={product} 
                className="opacity-0 animate-fade-in" // Apply animation
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
