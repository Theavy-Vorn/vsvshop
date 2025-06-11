// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ProductDetailPage = () => {
//     const [product,setProduct] = useState({
//         title:"Default title",
//         decription:"Default description",
//         image:[
//             "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
//         ]
//     })
//     let {id} = useParams()
//     let fectchDetailProduct = (id) =>{
//         fetch(` https://api.escuelajs.co/api/v1/products/${id}`)
//         .then(res => res.json())
//         .then(res=>setProduct(res))
//     }
//     useEffect(() =>{
//         fectchDetailProduct(id)
//     },[])
   
//     return (
//        <div className='pt-20 bg-white px-6 py-10'>
//          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
//           <div>
//             <a href="#" className="group relative block overflow-hidden ibg-purple-500 shadow-lg shadow-purple-500/50 rounded-2xl">
//             <button
//                 className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
//             >
//                 <span className="sr-only">Wishlist</span>

//                 <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="size-4"
//                 >
//                 <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//                 />
//                 </svg>
//             </button>

//             <img
//                 src={product.images}
//                 alt={product.title}
//                 crossOrigin="anonymous"
//                 className="h-50 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
//             />

//             <div className="relative border border-gray-100 bg-white p-6">
//                 <p className="text-red-700 font-bold ">
//                 {product.price}
//                 <span className="text-gray-400 line-through ml-5">$80</span>
//                 </p>

//                 <h3 className="mt-1.5 text-lg  font-medium text-gray-900 line-clamp-2">{product.title}</h3>

//                 <p className="mt-1.5  text-gray-700 line-clamp-5">
//                 {product.description}
//                 </p>

//                 <form className="mt-4 flex gap-4">
//                 <button
//                     className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
//                 >
//                     Add to Cart
//                 </button>

//                 <button
//                     type="button"
//                     className="block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
//                 >
//                     Buy Now
//                 </button>
//                 </form>
//             </div>
//             </a>
//           </div>
//           <div>
//             card
//           </div>
//         </div>
//        </div>
//     );
// }

// export default ProductDetailPage;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

const paymentOptions = [
  { id: 'aba', label: 'ABA Bank' },
  { id: 'acleda', label: 'Acleda Bank' },
  { id: 'wing', label: 'Wing Mobile Payment' },
];

const ProductDetailPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({
    title: 'Loading...',
    description: '',
    images: ['https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg'],
    price: 0,
  });

  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('aba');
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Fetch product details
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
        setCurrentImage(0);
      });

    // Fetch user profile from backend (mocked here)
    fetch('/api/user/profile', {
      headers: {
        Authorization: `Bearer ${secureLocalStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserInfo({
          name: data.name || '',
          phone: data.phone || '',
        });
      })
      .catch(() => {
        // Fallback or guest user
        setUserInfo({
          name: 'Guest User',
          phone: 'N/A',
        });
      });
  }, [id]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handlePay = () => {
    alert(
      `Processing payment for ${product.title} ($${product.price.toFixed(
        2
      )}) via ${paymentOptions.find((p) => p.id === paymentMethod)?.label}\nUser: ${
        userInfo.name
      }, Phone: ${userInfo.phone}`
    );
    // TODO: Add real payment gateway integration for Cambodian banks/mobile payment here
  };

  return (
    <div className="mt-15 bg-white text-gray-900 py-10 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
      {/* Product Detail Card */}
      <section className="rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="relative h-70 bg-gray-100">
          <img
            src={product.images[currentImage]}
            alt={product.title}
            className="object-contain w-full h-full"
            crossOrigin="anonymous"
          />
          {product.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                aria-label="Previous Image"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-purple-700 hover:bg-purple-800 text-white rounded-full p-3 transition"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                aria-label="Next Image"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-700 hover:bg-purple-800 text-white rounded-full p-3 transition"
              >
                ›
              </button>
            </>
          )}
        </div>
        <div className="p-8 space-y-3">
          <h1 className="text-3xl font-extrabold tracking-tight">{product.title}</h1>
          <p className="text-gray-700 max-h-36 overflow-auto whitespace-pre-wrap">{product.description}</p>
          <p className="text-3xl font-bold text-purple-700">${product.price.toFixed(2)}</p>
        </div>
      </section>

      {/* Payment Section */}
      <section className="bg-purple-50 rounded-xl shadow-md p-8 flex flex-col justify-between border border-purple-300">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 border-b border-purple-300 pb-4">
          Payment Information
        </h2>

        <div className="mb-8 text-gray-800 text-lg space-y-4">
          <div>
            <span className="font-semibold">Full Name:</span> {userInfo.name}
          </div>
          <div>
            <span className="font-semibold">Phone Number:</span> {userInfo.phone}
          </div>
        </div>

        <div className="mb-8">
          <p className="font-semibold text-purple-700 mb-4 text-lg">Choose Payment Method:</p>
          <div className="space-y-3">
            {paymentOptions.map((option) => (
              <label
                key={option.id}
                className={`flex items-center cursor-pointer rounded-lg border px-5 py-3 transition ${
                  paymentMethod === option.id
                    ? 'bg-purple-600 text-white border-purple-600 font-semibold shadow-lg'
                    : 'border-gray-300 hover:bg-purple-100'
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={option.id}
                  checked={paymentMethod === option.id}
                  onChange={() => setPaymentMethod(option.id)}
                  className="mr-4 cursor-pointer"
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={handlePay}
          className="w-full py-4 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-lg shadow-md transition"
        >
          Pay ${product.price.toFixed(2)}
        </button>
      </section>
    </div>
  );
};

export default ProductDetailPage;
