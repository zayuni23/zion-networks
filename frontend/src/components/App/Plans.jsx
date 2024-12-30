// @ts-nocheck

import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const Plans = () => {
  const whatsappNumber = "254712345678"; // Replace with your company's WhatsApp number
  const companyEmail = "info@yourcompany.com"; // Replace with your company's email address

  // const dataCard = [
  //   {
  //     plan: "Individual Plan",
  //     user: "Perfect for Solo Users",
  //     options: [
  //       "Moderate Web Browsing",
  //       "High-Speed Internet (up to 6Mbps)",
  //       "Unlimited Data Usage",
  //       "YouTube Streaming and E-Mails",
  //       "Support for Basic File Attachments",
  //     ],
  //     price: 1500,
  //   },
  //   {
  //     plan: "Home Plan",
  //     user: "Ideal for Families",
  //     options: [
  //       "Free Installation",
  //       "High-Speed Internet (up to 10Mbps)",
  //       "Unlimited Data Usage",
  //       "Social Media Browsing",
  //       "Continuous TV Streaming Services",
  //     ],
  //     price: 2000,
  //   },
  //   {
  //     plan: "Business Plan",
  //     user: "Designed for Small Businesses",
  //     options: [
  //       "Fast Web Browsing",
  //       "High-Speed Internet (up to 15Mbps)",
  //       "Unlimited Data Usage",
  //       "HD Video Streaming",
  //       "Reliable CCTV and Security Monitoring",
  //     ],
  //     price: 2500,
  //   },
  //   {
  //     plan: "Premium Plan",
  //     user: "Ultimate Plan for Enterprises",
  //     options: [
  //       "Seamless File Sharing",
  //       "High-Speed Internet (up to 20Mbps)",
  //       "Unlimited Data Usage",
  //       "4K Video Streaming Capabilities",
  //       "Video Conferencing and Collaboration",
  //     ],
  //     price: 3000,
  //   },
  // ];

  const handleInquiry = (plan) => {
    const message = `Hello, I am interested in the ${plan}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    const mailtoUrl = `mailto:${companyEmail}?subject=Plan Inquiry&body=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp and fallback to email
    window.open(whatsappUrl, "_blank");
    setTimeout(() => {
      window.open(mailtoUrl, "_blank");
    }, 3000);
  };

  const products = [
    {
      id: 1,
      title: "BRONZE",
      speed: "10 Mbps",
      description: "Ideal for 1-10 users",
      details: "Unlimited internet speeds up to 8 Mbps",
      support: "24/7 support",
      price: "Ksh.5,000/Month",
      imgUrl: "https://placehold.co/600x400/png",
    },
    {
      id: 2,
      title: "SILVER",
      speed: "15 Mbps",
      description: "Ideal for 10-20 users",
      details: "Unlimited internet speeds up to 15 Mbps",
      support: "24/7 support",
      price: "Ksh.8,500/Month",
      imgUrl: "https://placehold.co/600x400/png",
    },
    {
      id: 3,
      title: "GOLD",
      speed: "20 Mbps",
      description: "Ideal for 20-30 users",
      details: "Unlimited internet speeds up to 20 Mbps",
      support: "24/7 support",
      price: "Ksh.10,000/Month",
      imgUrl: "https://placehold.co/600x400/png",
    },
  ];

  return (
    // <div
    //   className="w-full bg-cover bg-center flex h-auto justify-center py-10"
    //   style={{
    //     backgroundImage: `url('https://source.unsplash.com/1600x900/?technology,networking,ai')`,
    //   }}
    // >
    //   <div className="flex flex-col items-center justify-center w-full max-w-6xl bg-white bg-opacity-90 rounded-lg shadow-lg p-10">
    //     <motion.h1
    //       className="text-center text-black text-4xl font-extrabold mb-6"
    //       initial={{ opacity: 0, y: -20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6 }}
    //     >
    //       Affordable Internet Plans for Every Need
    //     </motion.h1>
    //     <motion.p
    //       className="text-center text-lg text-gray-700 mb-8"
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.8 }}
    //     >
    //       Experience reliable, high-speed internet services tailored for
    //       individuals, families, and businesses. Connect your home or business
    //       to blazing fast internet with speeds of up to 100Mbps and unlimited
    //       data usage.
    //     </motion.p>
    //     <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    //       {dataCard.map((card, index) => (
    //         <motion.div
    //           key={index}
    //           className="relative bg-white text-gray-800 p-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
    //           whileHover={{ scale: 1.05 }}
    //         >
    //           <div>
    //             <h2 className="text-2xl font-bold mb-3">{card.plan}</h2>
    //             <p className="text-sm mb-5 text-gray-600">{card.user}</p>
    //             <ul className="space-y-3 mb-6">
    //               {card.options.map((option, i) => (
    //                 <li key={i} className="flex items-center space-x-2">
    //                   <FaCheckCircle className="text-green-600" />
    //                   <span className="text-sm">{option}</span>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //           <div>
    //             <p className="text-xl font-bold mb-4">Ksh {card.price}</p>
    //             <motion.button
    //               className="w-full bg-gradient-to-r from-teal-500 to-[#0D874C]/70 text-white px-4 py-2 rounded-md shadow-md hover:from-teal-600 hover:to-green-700 hover:shadow-lg transform transition-all duration-300"
    //               whileHover={{ scale: 1.1 }}
    //               onClick={() => handleInquiry(card.plan)}
    //             >
    //               Order Plan
    //             </motion.button>
    //           </div>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-50">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-80 rounded-lg shadow-lg bg-white border border-gray-200"
        >
          <div className="bg-green-600 text-white text-center py-2 rounded-t-lg font-semibold">
            {product.title}
          </div>
          <div className="p-4 text-center">
            <img
              src={product.imgUrl}
              alt={product.title}
              className="mx-auto mb-4 w-32 h-20"
            />
            <h2 className="text-2xl font-bold text-gray-800">
              {product.speed}
            </h2>
            <p className="text-gray-500">{product.description}</p>
            <div className="flex justify-between items-center mt-4 bg-gray-100 p-3 rounded">
              <p className="text-gray-600">
                {product.details} <br />
                <span className="font-bold">
                  {product.details.split(" ")[3]}
                </span>
              </p>
              <p className="text-gray-600 font-bold">{product.support}</p>
            </div>
            <div className="mt-6 text-green-600 text-xl font-bold">
              {product.price}
            </div>
            <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              Buy Internet Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plans;
