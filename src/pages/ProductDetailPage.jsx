import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // used to extract product ID from the URL
import secureLocalStorage from 'react-secure-storage'; // to access token if needed
import { useDispatch, useSelector } from "react-redux"; // Redux for state management
import { profileUser } from "../redux/actions/authAction"; // Action to fetch user profile

// Mocked payment options
const paymentOptions = [
  { id: 'aba', label: 'ABA Bank' },
  { id: 'acleda', label: 'Acleda Bank' },
  { id: 'wing', label: 'Wing Mobile Payment' },
];

const ProductDetailPage = () => {
  const { id } = useParams(); // extract product ID from route
  const dispatch = useDispatch();

  // Get auth state from Redux (user info, loading, error)
  const { auth, loading, error } = useSelector((state) => state.authReducer);

  // Product state - initially shows loading placeholder
  const [product, setProduct] = useState({
    title: 'Loading...',
    description: '',
    images: ['https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg'],
    price: 0,
  });

  const [paymentMethod, setPaymentMethod] = useState('aba'); // default selected payment method
  const [currentImage, setCurrentImage] = useState(0); // index of the current image displayed

  // Fetch product data from API when component mounts or ID changes
  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);       // Update product state
        setCurrentImage(0);    // Reset image index
      });
  }, [id]);

  // Fetch user profile from server via Redux (if not already loaded)
  useEffect(() => {
    if (!auth?.user) {
      dispatch(profileUser());
    }
  }, [dispatch, auth?.user]);

  // Navigate to next image in the array
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  // Navigate to previous image
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  // Called when the user clicks the "Pay" button
  const handlePay = () => {
    alert(
      `Processing payment for ${product.title} ($${product.price.toFixed(2)}) via ${paymentOptions.find((p) => p.id === paymentMethod)?.label}\nUser: ${auth?.user?.name}, Email: ${auth?.user?.email}`
    );
    // You can replace this alert with a real payment API integration
  };

  return (
    <div className="mt-15 bg-white text-gray-900 py-10 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
      {/* Left side: Product Details */}
      <section className="rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="relative h-70 bg-gray-100">
          {/* Product image */}
          <img
            src={product.images[currentImage]}
            alt={product.title}
            className="object-contain w-full h-full"
            crossOrigin="anonymous"
          />

          {/* Image navigation buttons */}
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

        {/* Product text content */}
        <div className="p-8 space-y-3">
          <h1 className="text-3xl font-extrabold tracking-tight">{product.title}</h1>
          <p className="text-gray-700 max-h-36 overflow-auto whitespace-pre-wrap">{product.description}</p>
          <p className="text-3xl font-bold text-purple-700">${product.price.toFixed(2)}</p>
        </div>
      </section>

      {/* Right side: Payment Section */}
      <section className="bg-purple-50 rounded-xl shadow-md p-8 flex flex-col justify-between border border-purple-300">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 border-b border-purple-300 pb-4">
          Payment Information
        </h2>

        {/* User Info */}
        <div className="mb-8 text-gray-800 text-lg space-y-4">
          <div>
            <span className="font-semibold">Full Name:</span> {auth?.user?.name || "Loading..."}
          </div>
          <div>
            <span className="font-semibold">Email:</span> {auth?.user?.email || "Loading..."}
          </div>
        </div>

        {/* Payment Method Selection */}
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

        {/* Pay Button */}
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
