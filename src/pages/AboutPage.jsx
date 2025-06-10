import React from 'react';

const AboutPage = () => {
  return (
    <div className="pt-15 bg-purple-50 min-h-screen">
      {/* Hero */}
      <section className="text-center py-16 bg-purple-100">
        <h1 className="text-4xl font-bold text-purple-800">About VSV Shop</h1>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Your one-stop online shop for quality, convenience, and care.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-5xl mx-auto p-6 md:flex gap-8 items-center">
        <img
          src="https://i.pinimg.com/736x/dd/9c/da/dd9cda5f517eef649341b406e1fe32eb.jpg"
          alt="About us"
          className="w-full md:w-1/2 rounded-xl shadow-lg"
        />
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold text-purple-700 mb-3">Who We Are</h2>
          <p className="text-gray-700">
            At VSV Shop, we’re more than just an e-commerce store. We’re passionate about
            helping customers access top-quality products easily and affordably.
            With a commitment to service, selection, and simplicity, our goal is
            to make your online shopping experience truly delightful.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-purple-800">Our Mission & Vision</h2>
          <p className="mt-4 text-gray-600">
            <strong>Mission:</strong> To offer a seamless online shopping experience with a wide range of affordable and quality products.<br />
            <strong>Vision:</strong> To become Cambodia’s most trusted and loved online store.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-purple-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-purple-800">Why Choose VSV Shop?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-left">
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-lg font-semibold text-purple-700">Affordable Prices</h3>
              <p className="text-gray-600 mt-2">Get great deals without compromising on quality.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-lg font-semibold text-purple-700">Fast Delivery</h3>
              <p className="text-gray-600 mt-2">We ship quickly so you get what you need on time.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-lg font-semibold text-purple-700">Customer Support</h3>
              <p className="text-gray-600 mt-2">Friendly help whenever you need it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="text-center py-12">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Ready to start shopping?</h2>
        <a
          href="/"
          className="inline-block bg-purple-800 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition"
        >
          Go to Shop
        </a>
      </section> */}
      {/* FQA */}
      <div className="space-y-4 p-10 bg-purple-100">
        <h1 className='text-center text-purple-800 font-bold text-3xl'>ABOUT US</h1>
            <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                <summary
                className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900"
                >
                <h2 className="text-lg font-medium">What is VSVShop?</h2>

                <svg
                    className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
                </summary>

                <p className="px-4 pt-4 text-gray-900">
                VSVShop is an online shopping platform in Cambodia that offers quality products at 
                affordable prices with fast delivery and easy online payments.
                </p>
            </details>

            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900"
                >
                <h2 className="text-lg font-medium">Do I need to create an account to order?</h2>

                <svg
                    className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
                </summary>

                <p className="px-4 pt-4 text-gray-900">
                No, you can browse freely. But to order, you’ll need to create a 
                free account for tracking and support.
                </p>
            </details>

            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900"
                >
                <h2 className="text-lg font-medium">How do I search for products?</h2>

                <svg
                    className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
                </summary>

                <p className="px-4 pt-4 text-gray-900">
                Use the search bar on the homepage to find products by name, category, or keyword.
                </p>
            </details>
            </div>
        </div>
  );
};

export default AboutPage;
