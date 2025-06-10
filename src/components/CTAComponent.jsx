import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'; // to access products from store

const CTAComponent = () => {
  // Search input state
  const [search, setSearch] = useState("");

  // Get products from Redux store
  const { products } = useSelector(state => state.proReducers);

  // Local state for displaying filtered products (optional)
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Filter products when search changes
  useEffect(() => {
    if (Array.isArray(products)) {
      const result = products.filter(pro =>
        pro.title?.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(result);
    }
  }, [search, products]);

  return (
    <div className='bg-purple-100 mt-16'>
      {/* Search Form */}
      <section className='mb-5 pt-5'>
        <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-black sr-only">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-white-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="block w-full p-4 ps-10 text-sm text-black border border-purple-800 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search products..."
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-purple-800 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
      </section>

      {/* CTA Section */}
      <section className="overflow-hidden bg-[url(https://i.pinimg.com/736x/71/6b/82/716b820a8a1d65e7f0bfd5bdb4636dca.jpg)] bg-cover bg-top bg-no-repeat">
        <div className="p-15 md:p-10 lg:px-10 lg:py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">VSV.Shop</h2>
            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              VSV.Shop is an online shopping platform built to make buying and selling products in 
              Cambodia easier, faster, and more affordable. 
              Your one-stop online shop for quality, convenience, and care.
            </p>
            <div className="mt-4 sm:mt-8">
              <a
                href="#"
                className="inline-block rounded-full bg-purple-800 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
              >
                Shop now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: Render filtered products */}
      {search && (
        <section className="max-w-screen-xl mx-auto px-4 py-8">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">Search Results:</h3>
          {filteredProducts.length === 0 ? (
            <p className="text-gray-600">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white shadow-md rounded p-4">
                  <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded"
                  />
                  <h4 className="mt-2 font-semibold">{product.title}</h4>
                  <p className="text-gray-700">${product.price}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default CTAComponent;
