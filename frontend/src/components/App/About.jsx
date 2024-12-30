// @ts-nocheck
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* Header Section */}
      <section className="relative h-[50vh] bg-cover bg-center rounded-t-[30px] bg-[url('/path-to-background-image.jpg')]">
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>
        </div>
      </section>

      {/* About Us Content Section */}
      <section className="py-12 px-4 md:px-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#0D874C]/70 mb-5">
            Welcome to Zion Networks
          </h2>
          <p className="text-gray-700 text-lg mb-10">
            At Zion Networks, we specialize in high-speed internet, cutting-edge tech solutions, and sustainable energy systems, making your digital world smarter, safer, and more efficient.
          </p>

          <h3 className="text-2xl font-semibold text-[#0D874C]/70 mb-5">
            Our Mission
          </h3>
          <p className="text-gray-700 text-lg mb-10">
            Our mission is to redefine connectivity and deliver exceptional services, from high-speed internet to solar power installations, making the digital experience smarter, faster, and more sustainable.
          </p>

          <h3 className="text-2xl font-semibold text-[#0D874C]/70 mb-5">
            Our Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="font-medium text-lg text-gray-800">High-Speed Internet</h4>
              <p className="text-gray-600">Reliable, fast internet connections for homes and businesses.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-lg text-gray-800">CCTV Installation</h4>
              <p className="text-gray-600">State-of-the-art security solutions with professional CCTV installation services.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-lg text-gray-800">Solar Power Solutions</h4>
              <p className="text-gray-600">Sustainable energy solutions to reduce costs and environmental impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Carousel Section */}
      <section className="py-10 px-4 md:px-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.h3
            className="text-2xl font-semibold text-[#0D874C]/70 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Work & Team
          </motion.h3>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex overflow-x-auto space-x-4 transition-all duration-300">
              <div className="w-[300px] h-[200px] bg-gray-200 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/path-to-image1.jpg"
                  alt="Our Work"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-[300px] h-[200px] bg-gray-200 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/path-to-image2.jpg"
                  alt="Team"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-[300px] h-[200px] bg-gray-200 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/path-to-image3.jpg"
                  alt="Establishment"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#0D874C]/70 text-white py-12 text-center">
        <div className="max-w-4xl mx-auto space-y-5">
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Ready to Upgrade Your Connectivity?
          </motion.h2>
          <p className="text-lg">
            Get in touch with Zion Networks today to explore how our high-speed internet and cutting-edge services can elevate your digital experience and improve operational efficiency.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#0D874C] font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
