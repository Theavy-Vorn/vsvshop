import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../redux/actions/productAction';

const CategoryPage = () => {
  const { id } = useParams(); // category ID from URL
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.proReducers);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchAllProducts()); // fetch if not already fetched
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(products)) {
      const filtered = products.filter(
        (product) =>
          product.category?.id?.toString() === id || // if category is object
          product.category?.toString() === id        // if category is just an ID
      );
      setFilteredProducts(filtered);
    }
  }, [products, id]);

  return (
    <div className="p-4 pt-20 bg-purple-100">
      <h2 className="text-2xl font-bold text-center text-purple-700">Category Products</h2>
      {filteredProducts.length === 0 ? (
        <p className="text-gray-600">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10 p-6 w-[90%] m-auto ">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl  p-4 ibg-purple-500 shadow-lg shadow-purple-500/50">
              <Link to={`/products/${product.id}`}>
                <img src={product.images?.[0]} alt={product.title} className="w-full h-50 object-cover rounded" />
              </Link>
              <h3 className="text-lg font-semibold mt-5">{product.title}</h3>
              <p className="text-sm text-gray-700 mb-5 mt-3 font-bold text-red-500">${product.price}</p>
              <div>
                <Link to={`/products/${product.id}`}>
                  <button
                    className="block w-full rounded-sm bg-purple-800 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                  >
                    See detail
                  </button>
                </Link>
              </div>
            </div>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
