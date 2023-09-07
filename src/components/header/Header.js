import React,{useContext} from 'react'
import {Nav} from 'react-bootstrap'
import './header.css'
import {useNavigate} from 'react-router-dom'
const Header = () => {
    const url = window.location.href
    const navigate = useNavigate()

  return (
    <Nav className='my-nav'>
        <Nav.Link onClick={()=>navigate('/')} className={`${url==='http://localhost:3000/' ? 'active' : ''}`} >Home</Nav.Link>
        <Nav.Link onClick={()=>navigate('/product')} className={`${url==='http://localhost:3000/product' ? 'active' : ''}`}>Products</Nav.Link>
    </Nav>
  )
}

export default Header