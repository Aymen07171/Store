import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './Home';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className='mb-4 sm:mb-6 md:mb-8 lg:mb-[100px]'>
      <nav className='bg-yellow-700 p-4'>
        <div className='container mx-auto flex justify-between items-center'>
        <Link to="/" className="w-[3rem]">
  <img src="/Logo_A.png" alt="Logo" />
</Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden text-white'
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>

          {/* Desktop menu */}
          <ul className='hidden md:flex space-x-4 text-white'>
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to="/products">Products</Link></li> */}
            <li className='font-bold'><Link to="/cart">Cart ({cartItems.length})</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
          </ul>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <ul className='md:hidden mt-4 space-y-2 text-white'>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
            <li className='font-bold'><Link to="/cart" onClick={() => setIsMenuOpen(false)}>Cart ({cartItems.length})</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/checkout" onClick={() => setIsMenuOpen(false)}>Checkout</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;