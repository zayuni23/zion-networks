// @ts-nocheck

import React, { useEffect } from "react";
import Hero from "../../components/App/Hero";
import Plans from "../../components/App/Plans";
import Embrace from "../../components/App/Embrace";
import Header from "../../components/App/Header";
import Footer from "../../components/App/Footer";
import Cta from "../../components/App/Cta";

const Homepage = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <Header active={1} />
      <Hero />
      <Plans />
      <Cta />
      <Embrace />
      <Footer />
    </>
  );
};

export default Homepage;
