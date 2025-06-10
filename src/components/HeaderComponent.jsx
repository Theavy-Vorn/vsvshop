import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { fetchAllCategories } from '../redux/actions/productAction';

const HeaderComponent = () => {
  const { isLogin } = useSelector((state) => state.authReducer);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const userMenuRef = useRef(null);
  const { categories } = useSelector((state) => state.proReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

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

      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
  };

  return (
    <div className="bg-purple-100">
      <header className="bg-purple-400 fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
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
                  <li><NavLink to="/" className={({ isActive }) => isActive ? "text-red-800 active" : "text-white"}>Home</NavLink></li>
                  <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-red-800 active" : "text-white"}>About</NavLink></li>
                  <li><NavLink to="/service" className={({ isActive }) => isActive ? "text-red-800 active" : "text-white"}>Service</NavLink></li>
                  <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-800 active" : "text-white"}>Contact</NavLink></li>
                  <li className="relative group">
                    <span className="cursor-pointer text-white group-hover:text-red-800">
                      Category
                    </span>
                    <ul className="absolute top-full left-0 hidden group-hover:block bg-purple-300 rounded shadow-lg text-black w-48 z-50 py-2">
                      {categories.map((cat) => (
                        <li key={cat.id}>
                          <NavLink
                            to={`/category/${cat.id}`}
                            className="block px-4 py-2 hover:bg-purple-400"
                          >
                            {cat.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              {/* <div className="hidden md:flex gap-4">
                <NavLink className="rounded-md bg-purple-800 px-5 py-2.5 text-sm font-medium text-white shadow-sm" to="/login">
                  {isLogin ? "Logout" : "Login"}
                </NavLink>
                <NavLink className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black" to="/signup">
                  Signup
                </NavLink>
              </div> */}

              {/* User Avatar */}
              <div className="relative" ref={userMenuRef}>
                <img
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  src="https://i.pinimg.com/736x/48/c4/cd/48c4cd0d71851a6c33dee9b486830c36.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-white"
                />
                {isUserMenuOpen && (
                  <ul className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded text-sm z-50">
                    <li>
                      <Link to="/profile" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/login" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100">
                        Logout
                      </Link>
                    </li>
                  </ul>
                )}
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav ref={menuRef} className="md:hidden mt-2 animate-fadeIn" aria-label="Mobile Navigation">
              <div className="flex items-center gap-2 pb-4 border-b border-white">
                <img
                  src="https://i.pinimg.com/736x/48/c4/cd/48c4cd0d71851a6c33dee9b486830c36.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-white text-sm">Hello, User</span>
              </div>
              <ul className="flex flex-col gap-2 text-sm text-white bg-purple-300 p-4 rounded shadow-lg">
                <li><NavLink to="/" onClick={handleLinkClick} className={({ isActive }) => isActive ? "text-red-800 active" : "text-white"}>Home</NavLink></li>
                <li><NavLink to="/about" onClick={handleLinkClick} className={({ isActive }) => isActive ? "text-red-800 active" : "text-white"}>About</NavLink></li>
                <li><NavLink to="/service" onClick={handleLinkClick} className={({ isActive }) => isActive ? "text-red-800 active" : "text-white"}>Service</NavLink></li>
                <li><NavLink to="/contact" onClick={handleLinkClick} className={({ isActive }) => isActive ? "text-red-800 active" : "text-white"}>Contact</NavLink></li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <NavLink to={`/category/${cat.id}`} onClick={handleLinkClick} className={({ isActive }) => isActive ? "text-red-800 active" : "text-white"}>
                      {cat.name}
                    </NavLink>
                  </li>
                ))}
                {/* <li>
                  <NavLink to="/login" onClick={handleLinkClick} className="block bg-purple-800 text-white py-2 px-3 rounded">
                    {isLogin ? "Logout" : "Login"}
                  </NavLink>
                  <NavLink to="/signup" onClick={handleLinkClick} className="block bg-white text-black py-2 px-3 rounded">
                    Signup
                  </NavLink>
                </li> */}
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
