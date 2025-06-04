import React, { useState, useEffect } from 'react';
import LoadingComponent from './LoadingComponent';
import { Link } from 'react-router-dom';
import { fetchProduct } from '../Services/productAction';

const CardComponent = () => {

    const [products, setProduct] = useState([]);
    const [loading , setLoading] = useState(true);

  useEffect(() => {
    fetchProduct()
    .then(res =>{
      setLoading(false)
      setProduct(res)
    })
     
  }, []);

  return (
    <div>
      <section className='text-2xl font-bold text-center m-5 text-purple-800'>
        Go to See Products
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-10 p-6 w-[90%] m-auto ">
          {
            loading ? 
            (
            <div>
                <LoadingComponent />
            </div>
            )
            : 
            ( products.map((pro) => (
            <Link key={pro.id} to={`products/${pro.id}`} className="group relative block overflow-hidden ibg-purple-500 shadow-lg shadow-purple-500/50 rounded-2xl ">
              <button
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
              >
                <span className="sr-only">Wishlist</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <img
                src={pro.images}
                alt={pro.title}
                className="h-50 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-50"
              />

              <div className="relative border border-gray-100 bg-white p-6">
                <p className="text-red-700 font-bold">
                  ${pro.price}
                </p>

                <h3 className="mt-1.5 text-lg font-medium text-gray-900  line-clamp-2 ">{pro.title}</h3>
                <form className="mt-4 flex gap-4">
                  <button
                    className="block w-full rounded-sm bg-purple-800 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                  >
                    See detail
                  </button>

                 
                </form>
              </div>
            </Link>
          ))
        )
          }
        </div>
      </section>
    </div>
  );
};

export default CardComponent;
