import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='bg-purple-100'>
      <header className="bg-purple-400 fixed top-0 left-0 right-0 z-50 ">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-white" to="/">
                <img
                  src="https://i.pinimg.com/736x/dd/9c/da/dd9cda5f517eef649341b406e1fe32eb.jpg"
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
              </Link>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li><a className="text-white hover:text-gray-200" href="#">About</a></li>
                  <li><a className="text-white hover:text-gray-200" href="#">Careers</a></li>
                  <li><a className="text-white hover:text-gray-200" href="#">History</a></li>
                  <li><a className="text-white hover:text-gray-200" href="#">Services</a></li>
                  <li><a className="text-white hover:text-gray-200" href="#">Projects</a></li>
                  <li><a className="text-white hover:text-gray-200" href="#">Blog</a></li>
                </ul>
              </nav>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4 hidden md:flex">
                <a className="rounded-md bg-purple-800 px-5 py-2.5 text-sm font-medium text-white shadow-sm" href="#">Login</a>
                <Link className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black" to="/create">Register</Link>
              </div>

              {/* Hamburger Button */}
              <div className="block md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="rounded-sm bg-gray-100 p-2 text-gray-600 hover:text-gray-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-2">
              <ul className="flex flex-col gap-2 text-sm text-white bg-purple-500 p-4 rounded">
                <li><a href="#" className="block hover:text-gray-200">About</a></li>
                <li><a href="#" className="block hover:text-gray-200">Careers</a></li>
                <li><a href="#" className="block hover:text-gray-200">History</a></li>
                <li><a href="#" className="block hover:text-gray-200">Services</a></li>
                <li><a href="#" className="block hover:text-gray-200">Projects</a></li>
                <li><a href="#" className="block hover:text-gray-200">Blog</a></li>
                <li><a href="#" className="block bg-purple-700 py-2 px-3 rounded">Login</a></li>
                <li><Link to="/create" className="block bg-white text-black py-2 px-3 rounded">Register</Link></li>
              </ul>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
