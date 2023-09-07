import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import './home.css'
const Home = () => {
  return (
    <div className='container-fulid container-home'>
        <header>
            <Header/>
        </header>
    </div>
  )
}

export default Home