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
import { FaShopify } from "react-icons/fa6";

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
      { title: "Our Team", url: "/about" },
      { title: "Our Mission", url: "/about/mission" },
      { title: "Careers", url: "/careers" },
    ],
  },
  {
    title: "Services",
    url: "/services",
    icon: MdHomeRepairService,
  },
  {
    title: "Store",
    url: "/store",
    icon: FaShopify,
  },
  {
    title: "Packages",
    url: "/packages",
    icon: FaCartShopping,
    subItems: [
      { title: "ZION HOME", url: "/home-packages" },
      { title: "ZION SME", url: "/sme-packages" },
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
    title: "Solar & Backup Power Solutions",
    description:
      "At Zion Networks, we provide cutting-edge Solar and Backup Power Solutions tailored for residential areas, industries, and businesses. Our services empower families and enterprises with affordable, reliable off-grid power solutions, ensuring uninterrupted energy for daily activities and operations. Whether you're a small household or a large industry, Zion Networks delivers sustainable energy systems that bring independence and peace of mind.",
    link: "https//www.wa.me//+254756881148",
  },
  {
    id: 2,
    image: "https://placehold.co/600x400/png",
    title: "Mounting, Dissmounting and Drilling Services",
    description:
      "Zion Networks offers expert Mounting, Dismounting, and Drilling Services for TVs, signboards, shelves, and more. Whether you're enhancing your home or elevating your business space, we ensure precision, safety, and durability in every installation. From clean drilling to secure mounting, our services are designed to make your projects hassle-free and professionally executed.",
    link: "https//www.wa.me//+254756881148",
  },
  {
    id: 3,
    image: "https://placehold.co/600x400/png",
    title: "Your Trusted Partner for All Government Services",
    description:
      "Zion Networks is your go-to solution for all Kenyan Government, County, and Local services. From passport applications, civil registrations (birth, death, marriage), and HELB loans to CRB, EACC, and KRA services (PINs, tax returns), we’ve got you covered. We also assist with NTSA driver’s licenses, job applications, and more—making these processes quick and convenient. Just reach out, and we’ll handle the rest!",
    link: "#",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/png",
    title: "Hardware repair, motherboard and software",
    description: "At Zion Networks, we specialize in reliable and efficient tech repair services. Whether it’s fixing hardware issues, diagnosing and repairing motherboards, or resolving software problems, we’ve got you covered. Our team ensures your devices are back to optimal performance with minimal downtime. Trust us to handle your tech challenges with precision and care—just reach out, and we’ll do the rest!",
    link: "#",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/png",
    title: "Bringing Your Ideas to Life with Expert Web App Development",
    description: "At Zion Networks, we create custom web applications tailored to meet your business needs. From user-friendly interfaces to robust back-end systems, we build solutions that are scalable, secure, and efficient. Whether you're looking to enhance your online presence or develop a complex platform, our team is here to turn your vision into reality. Reach out today, and let’s build something great together!",
    link: "#",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/png",
    title: "Transforming Ideas into Stunning Visuals",
    description: "At Zion Networks, we offer top-tier Graphic Design and Video Editing services to bring your creative vision to life. Whether you need eye-catching logos, engaging social media content, or professional video editing, our team crafts visuals that resonate with your audience. We ensure every design and video is tailored to your needs, creating impactful and memorable experiences. Reach out today, and let's create something amazing together!",
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
