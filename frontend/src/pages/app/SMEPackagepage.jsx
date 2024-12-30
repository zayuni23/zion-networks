// @ts-nocheck

import React, { useEffect } from "react";
import Header from "../../components/App/Header";
import Cta from "../../components/App/Cta";
import Embrace from "../../components/App/Embrace";
import Footer from "../../components/App/Footer";
import Plans from "../../components/App/Plans";
import Breadcramp from "../../components/App/Breadcramp";
import SMEBreadCramp from "../../components/App/SMEBreadCramp";
import SMEPlans from "../../components/App/SMEPlans";

const SMEPackagepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header active={4} />
      <SMEBreadCramp />
      <SMEPlans/>
      <Cta />
      <Embrace />
      <Footer />
    </div>
  );
};

export default SMEPackagepage;
