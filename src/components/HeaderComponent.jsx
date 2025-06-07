import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

  
const HeaderComponent = () => {
  const{ isLogin } = useSelector(state=>state.authReducer)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close mobile menu if clicked outside menu or button
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close menu when clicking a mobile nav link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-purple-100">
      <header className="bg-purple-400 fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-white" to="/">
                <img
                  src="https://i.pinimg.com/736x/dd/9c/da/dd9cda5f517eef649341b406e1fe32eb.jpg"
                  alt="Logo"
                  className="w-12 h-12 rounded-full"
                />
              </Link>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li><NavLink to={"/"} className={({isActive}) => isActive ? "text-red-800  active" : "text-white"}>Home</NavLink></li>
                  <li><NavLink to={"/about"} className={({isActive}) =>isActive ? "text-red-800 active" : "text-white"}>About</NavLink></li>
                 <li><NavLink to={"/service"} className={({isActive}) =>isActive ? "text-red-800 active" : "text-white"}>Service</NavLink></li>
                </ul>
              </nav>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4 hidden md:flex">
                <NavLink className="rounded-md bg-purple-800 px-5 py-2.5 text-sm font-medium text-white shadow-sm" to={"/login"}>
                 {
                  isLogin ? "Login" : "Logout"
                 }
                </NavLink>
                <NavLink
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black"
                  to={"/signup"}
                >
                  Signup
                </NavLink>
              </div>

              {/* Hamburger Button */}
              <div className="block md:hidden">
                <button
                  ref={buttonRef}
                  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                  className="rounded-sm bg-gray-100 p-2 text-gray-600 hover:text-gray-800"
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMobileMenuOpen}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {isMobileMenuOpen ? (
                      // X icon when open
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      // Hamburger icon when closed
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav
              ref={menuRef}
              className="md:hidden mt-2 animate-fadeIn"
              aria-label="Mobile Navigation"
            >
              <ul className="flex flex-col gap-2 text-sm text-white bg-purple-300 p-4 rounded shadow-lg">
                  <li><NavLink to={"/"}  onClick={handleLinkClick} className={({isActive}) => isActive ? "text-red-800  active" : "text-white"}>Home</NavLink></li>
                  <li><NavLink to={"/about"}  onClick={handleLinkClick} className={({isActive}) => isActive ? "text-red-800  active" : "text-white"}>About</NavLink></li>
                  <li><NavLink to={"service"}  onClick={handleLinkClick} className={({isActive}) => isActive ? "text-red-800  active" : "text-white"}>service</NavLink></li>
                <li>
                   <NavLink
                    to="/login"
                    onClick={handleLinkClick}
                    className="block bg-purple-800 text-white py-2 px-3 rounded"
                  >

                   {
                    isLogin ? "Login" : "Logout"
                   }
                  </NavLink>
                  <NavLink
                    to={"/signup"}
                    onClick={handleLinkClick}
                    className="block bg-white text-black py-2 px-3 rounded"
                  >
                     Signup
                  </NavLink>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default HeaderComponent;
