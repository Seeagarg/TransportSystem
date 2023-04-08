import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Partner_register from './Partner_register'
import BlackPink from '../../Images/BlackPink.png'

function Partner() {
  return (
    <div>
    <Header/>
    <div  style={{backgroundImage:`url(${BlackPink})`,backgroundSize:"contain,cover"}}>
    <div className='col-sm-md-6'>
    <Partner_register/>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Partner
