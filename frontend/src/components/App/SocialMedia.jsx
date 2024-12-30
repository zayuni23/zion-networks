// @ts-nocheck
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; // Directly importing the icons

// Example footerSocialLinks with placeholder links
const footerSocialLinks = [
  {
    link: "https://www.zionnetworks.com/facebook", // Placeholder link for Facebook
    icon: FaFacebookF, // Using the imported icon directly
  },
  {
    link: "https://www.zionnetworks.com/twitter", // Placeholder link for Twitter
    icon: FaTwitter, // Using the imported icon directly
  },
  {
    link: "https://www.zionnetworks.com/instagram", // Placeholder link for Instagram
    icon: FaInstagram, // Using the imported icon directly
  },
  {
    link: "https://www.zionnetworks.com/linkedin", // Placeholder link for LinkedIn
    icon: FaLinkedinIn, // Using the imported icon directly
  },
];

const SocialMedia = () => {
  return (
    <div>
      <div className="fixed top-0 left-4 bottom-0 flex flex-col justify-center">
        {footerSocialLinks.map((item, index) => (
          <div key={index} className="mb-3 mr-6 ml-6">
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="bg-white p-2 rounded-md text-green-700 hover:text-white hover:bg-green-700 flex items-center hover:translate-x-3 transition-transform duration-300 ease-in-out"
            >
              <item.icon size={30} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
