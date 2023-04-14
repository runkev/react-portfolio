// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/" className="font-bold text-xl">My Portfolio</Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
            About
          </Link>
          <Link to="/experience" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
            Experience
          </Link>
          <Link to="/projects" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
            My Projects
          </Link>
          <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
