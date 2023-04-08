import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link, Navigate, Outlet } from "react-router-dom" ;
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import {toast} from "react-toastify";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './FormCar.css'

function FormCar() {
  let navigate = useNavigate();
    let mystyle = {
        backCover: {
            // position: 'absolute',
            opacity: 0.8, 
            border: "1px solid grey",
           
          },
    }

    const onSubmit=async(e)=>{
      e.preventDefault();
      if(!username || !phoneNo || !location){
        toast("fields should not be empty should not be empty");
        console.log("usernmae not present");
        
       }
       else{
      axios.post('http://localhost:8080/customer',
      {name:username,
       phone:phoneNo,
       address:location,
      }
      )
      .then((res)=>{
        console.log(res.data);
        navigate("/getCab");
      }).catch((err)=>{
        console.log(err)
      })
      console.log("Submitted")
    }
      
    }

  
  const [location,setLocation] = useState('');
  const [username,setUsername] = useState('');
  const [phoneNo,setPhoneNo] = useState('');
  return (
    <div>
    <ToastContainer style={{marginTop:"15vh"}}/>
      <Form className=" bg-light text-dark p-3 text-start w-50 rounded " style={mystyle.backCover}>
      <Form.Group className="mb-3 fw-bold" controlId="formBasicEmail">
        <Form.Label>Enter Your Location</Form.Label>
        <Form.Control type="text" placeholder="Location"  onChange={(e)=>{setLocation(e.target.value)}} value={location} className='m-0' required  />
      </Form.Group>
      <Form.Group className="mb-3 fw-bold" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="UserName" onChange={(e)=>{setUsername(e.target.value)}} value={username} required  />
      </Form.Group>
      <Form.Group className="mb-3 fw-bold" controlId="formBasicPassword">
        <Form.Label>Phone No.</Form.Label>
        <Form.Control type="Phone" placeholder="+91 987654321"  onChange={(e)=>{setPhoneNo(e.target.value)}} value={phoneNo} required />
      </Form.Group>
      <Button className='btn fw-bold fs-5  z-10 w-100'   type="submit" onClick={onSubmit}>
        Search
      </Button>
    </Form>
    
    </div>
  )
}

export default FormCar
