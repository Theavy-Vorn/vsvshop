import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
    const [product,setProduct] = useState({
        title:"Default title",
        decription:"Default description",
        image:[
            "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
        ]
    })
    let {id} = useParams()
    let fectchDetailProduct = (id) =>{
        fetch(` https://api.escuelajs.co/api/v1/products/${id}`)
        .then(res => res.json())
        .then(res=>setProduct(res))
    }
    useEffect(() =>{
        fectchDetailProduct(id)
    },[])
   
    return (
       <div className='min-h-screen bg-purple-100 flex items-center justify-center'>
         <div className='w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl  bg-white rounded-xl shadow-md'>
          <a href="#" className="group relative block overflow-hidden ibg-purple-500 shadow-lg shadow-purple-500/50 rounded-2xl">
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
                src={product.images}
                alt=""
                className="h-50 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />

            <div className="relative border border-gray-100 bg-white p-6">
                <p className="text-red-700 font-bold ">
                {product.price}
                <span className="text-gray-400 line-through ml-5">$80</span>
                </p>

                <h3 className="mt-1.5 text-lg  font-medium text-gray-900 line-clamp-2">{product.title}</h3>

                <p className="mt-1.5  text-gray-700 line-clamp-5">
                {product.description}
                </p>

                <form className="mt-4 flex gap-4">
                <button
                    className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
                >
                    Add to Cart
                </button>

                <button
                    type="button"
                    className="block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                >
                    Buy Now
                </button>
                </form>
            </div>
            </a>
        </div>
       </div>
    );
}

export default ProductDetailPage;
