import { useEffect } from "react";
import Header from "../../components/App/Header";
import Cta from "../../components/App/Cta";
import Embrace from "../../components/App/Embrace";
import Footer from "../../components/App/Footer";
import Faqs from "../../components/App/Faqs";
import FaqStatements from "../../components/App/FaqStatements";

const FAQpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "FAQ- site url"
  }, []);
  return (
    <>
      <Header active={5} />
      <Faqs />
    
      <Cta />
      <Embrace />
      <Footer />
    </>
  );
};

export default FAQpage;
