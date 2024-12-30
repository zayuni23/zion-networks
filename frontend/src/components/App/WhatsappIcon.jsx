// @ts-nocheck

import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'; // For page-based dynamic messages

const WhatsappIcon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const location = useLocation();

  const whatsappNumber = 254769677143;
  const baseMessage = encodeURIComponent("Hi, I'm interested in your services!");

  // Define messages based on different pages
  const messages = [
    "Let's Connect!",
    "Let's Chat",
    "Talk to Us",
    "Get Support",
    "Need Help? Chat with us!",
    "We're here to assist you!"
  ];

  // Dynamically change the message based on the page
  useEffect(() => {
    const pageMessages = {
      '/home': ["Welcome! Let's Connect!", "Need help? Chat with us!", "We're here to assist!"],
      '/products': ["Explore our products", "Find what you need!", "Let's chat about our offers!"],
      '/contact': ["We'd love to hear from you", "Get in touch with us!", "Talk to us about your needs!"]
    };

    const pagePath = location.pathname;
    const customMessages = pageMessages[pagePath] || messages;
    setMessageIndex((prevIndex) => (prevIndex + 1) % customMessages.length);

  }, [location]);

  // Change the message at intervals
  useEffect(() => {
    const messageTimer = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(messageTimer);
  }, [messages.length]);

  useEffect(() => {
    // Delay visibility for animation effect
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleRedirect = () => {
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${baseMessage}`;
    try {
      window.open(whatsappURL, '_blank');
    } catch (error) {
      console.error('Error redirecting to WhatsApp:', error);
    }
  };

  return (
    <>
      <div
        className={`fixed bottom-12 left-12 p-4 rounded-full cursor-pointer 
        text-white transition-all duration-500 ease-in-out transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        hover:bg-green-600 bg-green-500 shadow-lg hover:shadow-xl 
        hover:scale-110 active:scale-95`}
        onClick={handleRedirect}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        title='Chat with us on WhatsApp'
      >
        <FaWhatsapp size={32} />
      </div>

      {/* Tooltip with smooth animation */}
      <div
        className={`absolute bottom-20 left-12 z-20 p-3 bg-gray-800 text-white rounded-lg opacity-0 pointer-events-none transition-opacity duration-300 
        ${tooltipVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '0.5s' }}
      >
        {messages[messageIndex]}
        <div className="tooltip-arrow absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] w-0 h-0 border-x-[5px] border-x-transparent border-t-[5px] border-t-gray-800"></div>
      </div>
    </>
  );
};

export default WhatsappIcon;
