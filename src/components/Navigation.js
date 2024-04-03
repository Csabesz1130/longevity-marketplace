import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Collapsible } from './Collapsible.mjs';
import { HomeIcon, ShoppingCartIcon, HeartIcon, PackageIcon } from '@heroicons/react/outline';

const Navigation = () => {
  const categories = ['Supplements', 'Therapies', 'Clinics', 'Wearables', 'Nutrition'];
  const location = useLocation();

  // Helper function to determine if a link is active based on the current location
  const isActive = (pathname) => location.pathname === pathname;

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-2 bg-blue-800 text-white">
        <h2 className="text-xl font-semibold">LongevityVerse</h2>
      </div>
      <div className="flex-grow overflow-auto">
        <nav className="flex flex-col p-4 space-y-2">
          <Link
            to="/"
            className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              isActive('/') ? 'bg-blue-200 text-gray-900' : 'text-gray-900 hover:bg-blue-100'
            }`}
          >
            <HomeIcon className="w-5 h-5" />
            Home
          </Link>
          <Link
            to="/orders"
            className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              isActive('/orders') ? 'bg-blue-200 text-gray-900' : 'text-gray-900 hover:bg-blue-100'
            }`}
          >
            <ShoppingCartIcon className="w-5 h-5" />
            Orders
          </Link>
          <Link
            to="/favorites"
            className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              isActive('/favorites') ? 'bg-blue-200 text-gray-900' : 'text-gray-900 hover:bg-blue-100'
            }`}
          >
            <HeartIcon className="w-5 h-5" />
            Favorites
          </Link>
          <Collapsible title="Categories">
            <div className="flex flex-col space-y-1">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to={`/category/${category.toLowerCase()}`}
                  className="pl-4 pr-2 py-1 text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </Collapsible>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
