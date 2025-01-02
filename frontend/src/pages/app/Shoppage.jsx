import ProductsSection from '../../components/products/ProductsSection'
import Embrace from '../../components/App/Embrace'
import Footer from '../../components/App/Footer'
import Header from '../../components/App/Header'
import React from 'react'

const Shoppage = () => {
  return (
    <div>
        <Header />
        <ProductsSection/>
        <Embrace />
        <Footer/>
    </div>
  )
}

export default Shoppage