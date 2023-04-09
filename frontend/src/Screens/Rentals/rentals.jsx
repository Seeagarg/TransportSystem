import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Rentals_register from './Rentals_register';
import BlackPink from '../../Images/BlackPink.png'

function Rentals() {
 

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [rentPrice, setRentPrice] = useState("");
  const [discription, setDescription] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      address,
      mobileNo,
      vehicleNo,
      vehicleType,
      rentPrice
    });

  };
  return (
    <div>
      <Header/>
      
      <div  style={{backgroundImage:`url(${BlackPink})`,backgroundSize:"contain,cover"}}>
    <div className='col-sm-md-6'>
    <Rentals_register/>
    </div>
    </div>
      <Footer/>
    </div>
  )
}

export default Rentals
