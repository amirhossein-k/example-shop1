import React, { memo, useContext } from 'react'
import Header from '../../components/header/Header'
import './singleproduct.css'
import {ProductContext} from '../../App'
import { useParams } from 'react-router-dom'
const SingleProduct = () => {
    const products =useContext(ProductContext)
    const {productId}= useParams()
 
  return (
    <div className='row container-singleproduct'>
        <header>
            <Header/>
        </header>
        <section>
            {products[0] ? (
                 products[0]?.filter(item=> item.id=== Number(productId)).map(product=>{
                    return(
                            <div className='col-8 col-sm-9 col-lg-11 my-col-card' key={product.id}>
                                <div className='my-card row' >
                                <div className='box-img col-12'>
                                    <img src={product.image} alt='photo' style={{    width: 200}}/>
                                </div>
                                <div className='card-title col-12'>
                                    {product.title}
                                </div>
                                <div className='price col-12'>
                                    <span>{product.price}</span>
                                </div>
                                <div className='discription col-12'>
                                    <p>
                                    {product.description.slice(0,50)}
                                    </p>
                                  
                                </div>
                                </div>
                            </div>
                        )
                 })
             
            ) : (
                <p>please waite</p>
            )}
        </section>
    </div>
  )
}

export default SingleProduct