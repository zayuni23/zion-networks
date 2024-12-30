// @ts-nocheck
import React, { useEffect } from 'react'
import Header from '../../components/App/Header'
import Footer from '../../components/App/Footer'
import About from '../../components/App/About'
import Embrace from '../../components/App/Embrace'
import Cta from '../../components/App/Cta'

const Aboutpage = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
        <>
        <Header active={2}/>
        <About />
        <Cta/>
        <Embrace />
        <Footer />
        </>
    </div>
  )
}

export default Aboutpage