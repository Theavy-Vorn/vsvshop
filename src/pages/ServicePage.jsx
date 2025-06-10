import React from 'react';

const ServicePage = () => {
  const services = [
    {
      title: "🚚 Fast Delivery",
      description: "We offer nationwide delivery within 1–3 business days.",
    },
    {
      title: "💰 Easy Payment Options",
      description: "Pay via ABA, Wing, TrueMoney, or cash on delivery.",
    },
    {
      title: "🔒 Secure Shopping",
      description: "Your purchases on VSVShop are safe and guaranteed.",
    },
    {
      title: "📞 24/7 Customer Support",
      description: "Get support anytime via Telegram, Facebook, or phone.",
    },
    {
      title: "🔄 Easy Return Policy",
      description: "Products can be returned within 3 days if defective.",
    },
  ];

  return (
    <div className="pt-20 bg-white px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">Our Services at VSVShop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-purple-900 mb-2">{service.title}</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
