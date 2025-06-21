import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAllCategories,
  fetchAllProducts,
} from "../redux/actions/productAction";

const CategoryDashboard = () => {
  const dispatch = useDispatch();

  // Select categories, products, loading and error states from Redux store
  const {
    categories = [],
    loading: categoriesLoading = false,
    error: categoriesError = null,
  } = useSelector((state) => state.proReducers || {});

  const {
    products = [],
    loading: productsLoading = false,
    error: productsError = null,
  } = useSelector((state) => state.proReducers || {});

  // Fetch categories and products once on mount
  useEffect(() => {
    dispatch(fetchAllCategories());
    dispatch(fetchAllProducts());
  }, [dispatch]);

  // Count products per category ID
  const productCountByCategory = categories.reduce((acc, category) => {
    const count = products.filter((product) => {
      if (product.categoryId) {
        return product.categoryId === category.id;
      } else if (product.category && product.category.id) {
        return product.category.id === category.id;
      }
      return false;
    }).length;

    acc[category.id] = count;
    return acc;
  }, {});

  return (
    <div className="p-4 sm:ml-64 w-[80%]">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <h1 className="text-xl font-bold mb-4 text-purple-800">Category Cards</h1>

        {(categoriesLoading || productsLoading) && (
          <p className="text-gray-500">Loading data...</p>
        )}

        {(categoriesError || productsError) && (
          <p className="text-red-600">
            Error loading data: {categoriesError || productsError}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {!categoriesLoading &&
            !categoriesError &&
            (categories.length === 0 ? (
              <p className="text-gray-500 mt-4">No categories found.</p>
            ) : (
              categories.map((cat) => {
                const productsForCategory = products.filter((product) => {
                  if (product.categoryId) return product.categoryId === cat.id;
                  if (product.category && product.category.id)
                    return product.category.id === cat.id;
                  return false;
                });

                return (
                  <Link
                    to={`/category/${cat.id}`}
                    key={cat.id}
                    className="block focus:outline-none focus:ring-2 focus:ring-purple-500"
                    aria-label={`View category ${cat.name}`}
                  >
                    <div className="flex flex-col items-center justify-start h-auto rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md hover:bg-purple-100 transition p-4">
                      <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
                        {cat.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        Products: {productsForCategory.length}
                      </p>
                    </div>
                  </Link>
                );
              })
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDashboard;
