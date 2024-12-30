// @ts-nocheck

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { useState } from "react";
import Motion from "../../components/App/motion";
import { SERVICES_DATA } from "../../data/data";
import Services from "../../components/App/Services";
import Header from "../../components/App/Header";
import Footer from "../../components/App/Footer";

const Servicespage = () => {
  return (
    <>
      <Header active={1} />
      <Services />
      {/* <Cta />
      <Embrace /> */}
      <Footer />
    </>
  );
};

export default Servicespage;
