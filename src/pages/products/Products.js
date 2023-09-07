import React,{useContext, useEffect} from 'react'
import Header from '../../components/header/Header'
import './product.css'
import {ProductContext} from '../../App'
import Cards from '../../components/card/Cards'

const Products = () => {

  const products =useContext(ProductContext)

  useEffect(()=>{},[products])
  return (
    <div className='container-fulid'>
      <header>
        <Header/>
      </header>
      <section>
        <Cards products={products}/>
      </section>
    </div>
  )
}

export default Products