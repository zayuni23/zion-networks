// @ts-nocheck
import {
  FaArrowsAltH,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FaCartShopping,
  FaCircleInfo,
  FaHouse,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { AiFillQuestionCircle } from "react-icons/ai";
import { MdHomeRepairService } from "react-icons/md";

// navigation Data
export const navItems = [
  {
    title: "Home",
    url: "/",
    icon: FaHouse,
  },
  {
    title: "About us",
    url: "/about",
    icon: FaCircleInfo,
    subItems: [
      { title: "Our Team", url: "/about/team" },
      { title: "Our Mission", url: "/about/mission" },
    ],
  },
  {
    title: "Services",
    url: "/services",
    icon: MdHomeRepairService,
  },
  {
    title: "Packages",
    url: "/packages",
    icon: FaCartShopping,
    subItems: [
      { title: "ZION HOME", url: "/zion-home" },
      { title: "ZION SME", url: "/zion-sme" },
    ],
  },
  {
    title: "FAQ",
    url: "/faq",
    icon: AiFillQuestionCircle,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: FaPhone,
  },
];

// breadCramp data
export const breadCramp = [
  {
    item: "About Us",
    itemLink: "/about",
    home: "Home",
    homeLink: "/",
    icon: FaArrowsAltH,
    image: "",
  },
  {
    item: "Services",
    itemLink: "/services",
    home: "Home",
    homeLink: "/",
    icon: FaArrowsAltH,
    image: "",
  },
  {
    item: "Packages",
    itemLink: "/packages",
    home: "Home",
    homeLink: "/",
    icon: FaArrowsAltH,
    image: "",
  },
  {
    item: "FAQs",
    itemLink: "/faq",
    home: "Home",
    homeLink: "/",
    icon: FaArrowsAltH,
    image: "",
  },
  {
    item: "Contact",
    itemLink: "/contact",
    home: "Home",
    homeLink: "/",
    icon: FaArrowsAltH,
    image: "",
  },
];

// config Your Business Number Later
export const PhoneNumber = +254799703637;
export const ServerApi = "http://localhost:5000";

// FOOTER LINKS
// Footer contact info
export const footerContactInfo = [
  {
    item: "<span>+254 769 677143 </span>",
    icon: FaPhone,
  },
  {
    item: "<span>+254 756 881148  </span>",
    icon: FaPhone,
  },
  {
    item: "<span>intertechzion@gmail.com</span>",
    icon: FaEnvelope,
  },
  {
    item: "Al-Yusra Building, Gwakairo, Ruiru, Kenya",
    icon: FaMapMarkerAlt,
  },
];

//footer  My Account
export const footerAccount = [
  {
    item: "Manage My Account",
    link: "/dashboard",
  },
  {
    item: "Payment Info",
    link: "/payment",
  },
  {
    item: "Subscriptions",
    link: "/packages",
  },
  {
    item: "Login",
    link: "/login",
  },
];

// footer support links
export const footerSupport = [
  {
    item: "FAQs",
    link: "/faq",
  },
  {
    item: "Privacy & Policy",
    link: "/privacy",
  },
  {
    item: "Terms & Conditions",
    link: "/terms",
  },
  {
    item: "Payment Options",
    link: "/payment",
  },
];

// footer website Links
export const footerWebsiteLinks = [
  {
    item: "Iconnect",
    link: "/",
  },
  {
    item: "About Us",
    link: "/about",
  },
  {
    item: "Services",
    link: "/services",
  },
  {
    item: "Contact",
    link: "/contact",
  },
];

// footer Social Links
export const footerSocialLinks = [
  {
    icon: FaFacebook,
    link: "https://www.facebook.com/iconnect.ng",
  },
  {
    icon: FaWhatsapp,
    link: "https://twitter.com/iconnect_ng",
  },
  {
    icon: FaTwitter,
    link: "https://twitter.com/iconnect_ng",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/iconnect.ng/",
  },
  {
    icon: FaLinkedin,
    link: "https://www.instagram.com/iconnect.ng/",
  },
];

// hAPA YOU WILL LIST ALL THE SERVICES , DESCRIPTION, IMAGES
export const SERVICES_DATA = [
  {
    id: 1,
    image: "https://placehold.co/600x400/png",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions...",
    link: "#",
  },
  {
    id: 2,
    image: "https://placehold.co/600x400/png",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions...",
    link: "#",
  },
  {
    id: 3,
    image: "https://placehold.co/600x400/png",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions...",
    link: "#",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/png",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions...",
    link: "#",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/png",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions...",
    link: "#",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/png",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions...",
    link: "#",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/png",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions...",
    link: "#",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/png",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions...",
    link: "#",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/png",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions...",
    link: "#",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/png",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions...",
    link: "#",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/png",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions...",
    link: "#",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/png",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions...",
    link: "#",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/png",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions...",
    link: "#",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/png",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions...",
    link: "#",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/png",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions...",
    link: "#",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/png",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions...",
    link: "#",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/png",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions...",
    link: "#",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/png",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions...",
    link: "#",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/png",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions...",
    link: "#",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/png",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions...",
    link: "#",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/png",
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions...",
    link: "#",
  },
  // Add more objects as needed...
];
