import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Rentals_register from './Rentals_register';

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
      <Rentals_register/>






    <form >
      <label>
        Name:
        <input type="text" value={name}onChange={(event) => setName(event.target.value)}/>
      </label>
      <br />
      <label>
        Address:
        <input type="text" value={address} onChange={(event) => setAddress(event.target.value)}/>
      </label>
      <br />
      <label>
        Mobile No:
        <input type="text" value={mobileNo} onChange={(event) => setMobileNo(event.target.value)}/>
      </label>
      <br />
      <label>
        Vehicle No:
        <input type="text" value={vehicleNo} onChange={(event) => setVehicleNo(event.target.value)}/>
      </label>
      <br />
      <label>

        Vehical Type:
        <input type="text" value={vehicleType} onChange={(event) => setVehicleType(event.target.value)}/>
      </label>
      <br />
      <label>
        Rent Price:
        <input type="text" value={rentPrice} onChange={(event) => setRentPrice(event.target.value)}/>
      </label>
      <br />
      <label>
        Tell me about your Vehical: <br/>
        <input type="text" value={discription} onChange={(event) => setDescription(event.target.value)}/>
      </label>

      <Button className='btn fw-bold fs-5  z-10 w-100' type="submit" onClick={onSubmit}>
        Submit Details
      </Button>
    </form>
  );




      <Footer/>
    </div>
  )
}

export default Rentals
