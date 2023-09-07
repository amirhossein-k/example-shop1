import React,{memo} from 'react'
import './card.css'
import { useNavigate } from 'react-router-dom'
const Card = ({products}) => {
  const navigate=useNavigate()
  return (
    <div className=' row container-cards'>
        {products[0] && (
         
         products[0].map((product)=>{
           return(
            <div className='col-6 col-sm-4 col-lg-3 my-col-card' key={product.id}>
              <div className='my-card row' >
                <div className='box-img col-12'>
                  <img src={product.image} alt='photo'/>
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
                  <span onClick={()=>navigate(`/product/${product.id}`)}>more</span>
               </div>
              </div>
            </div>
           )
         })
       )}
      
    </div>
  )
}

export default Card