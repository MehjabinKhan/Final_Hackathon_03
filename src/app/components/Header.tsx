"use client";
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaCartShopping } from 'react-icons/fa6';
import { IoFastFoodOutline } from 'react-icons/io5';
import { MdOutlineAccountCircle } from 'react-icons/md';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="bg-blue-100 text-slate-900 shadow-md">
      <div className="container mx-auto p-4 flex flex-wrap items-center justify-between">
        {/* Logo Section */}
        <a className="flex items-center" href="/">
          <IoFastFoodOutline className="text-3xl" />
          <span className="ml-2 text-2xl font-bold">Flavor Fusion</span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-lg font-medium">
          {['Home', 'Menu', 'About', 'Contact'].map((item, index) => (
            <a
              key={index}
              className="transition-colors hover:text-blue-600"
              href={`/${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Cart and Account Icons */}
        <div className="flex items-center space-x-6">
          <a 
            href="/components/menu" 
            aria-label="View Cart" 
            className="text-2xl hover:text-blue-600"
          >
            <FaCartShopping />
          </a>
          <a 
            href="/components/auth/login" 
            aria-label="User Account" 
            className="text-2xl hover:text-blue-600"
          >
            <MdOutlineAccountCircle />
          </a>

          {/* Search Button */}
          <button 
            aria-label="Toggle Search" 
            className="md:hidden text-xl p-2 hover:text-blue-600"
          >
            <CiSearch />
          </button>

          {/* Search Bar - Always visible on all screen sizes */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchInputChange}
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-600 w-40 md:w-60"
              placeholder="Search..."
              aria-label="Search"
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
        {['Home', 'Menu', 'About', 'Contact'].map((item, index) => (
          <a 
            key={index} 
            className="text-lg text-slate-900 hover:text-blue-600 transition-colors" 
            href={`/${item.toLowerCase()}`}
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;