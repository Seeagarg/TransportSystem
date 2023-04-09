import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {toast} from "react-toastify";
import axios from 'axios';
import { Link, Navigate, Outlet } from "react-router-dom" ;
import { useNavigate } from "react-router-dom";

function Partner_register(){

    let navigate = useNavigate();
    let mystyle = {
        backCover: {
            // position: 'absolute',
            opacity: 0.7, 
            border: " solid ",
            width:"70vw",
            marginLeft:"10vw",
            // marginTop:"10vh"
           
          },
    }

  const [location,setLocation] = useState('');
  const [username,setUsername] = useState('');
  const [phoneNo,setPhoneNo] = useState('');
  const [gender,setGender] = useState('');
  const [licence,setLicence] = useState('');
  const [carNo,setCarNo] = useState('');
  const [carColor,setCarColor] = useState('');
  const [carType,setCarType] = useState('');

  const onSubmit=async(e)=>{
    e.preventDefault();
    if(!username || !phoneNo || !location || !licence || !carType || !carNo || !carColor){
      toast("fields should not be empty should not be empty");
      console.log("usernmae not present");
     }
     else{
    axios.post('http://localhost:8080/driver',
    {name:username,
     phone:phoneNo,
     address:location,
     CarType:carType,
     licence:licence,
     carNo:carNo,
     carColor:carColor,
     carType:carType,
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

  return (
    <div>
    <div style={mystyle.backCover}  >
    <div style={{marginTop:"20vh"}}>
    <p className='fs-3 fw-bold text-light'>Register Your Vehicle here...</p>
      <Form className=" bg-light text-dark p-3 text-start  rounded " >
      <p className='fs-5 fw-bold text-center'>Personal Details</p>
      <hr />
      <Row>
      <Col>
      
      <Form.Group className="mb-3 fw-bold w-100" controlId="formBasicEmail">
        <Form.Label>Enter Your Location</Form.Label>
        <Form.Control type="text" placeholder="Location"  onChange={(e)=>{setLocation(e.target.value)}} value={location} className='m-0' required  />
      </Form.Group>
      </Col>
      <Col>
     
      <Form.Group className="mb-3 fw-bold w-100" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="UserName" onChange={(e)=>{setUsername(e.target.value)}} value={username} required  />
      </Form.Group>
      
      </Col>
      </Row>
      <Row>
      <Col>
      <Form.Group className="mb-3 fw-bold w-100" controlId="formBasicPassword">
        <Form.Label>Phone No.</Form.Label>
        <Form.Control type="Phone" placeholder="+91 987654321"  onChange={(e)=>{setPhoneNo(e.target.value)}} value={phoneNo} required />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3 fw-bold w-100" controlId="formBasicPassword">
        <Form.Label>Licence No.</Form.Label>
        <Form.Control type="Phone" placeholder="+91 987654321"  onChange={(e)=>{setLicence(e.target.value)}} value={licence} required />
      </Form.Group>
      </Col>
      </Row>
      <p className='fs-5 fw-bold'>Gender</p>
      {[ 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Male"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Female"
            name="group1"
            type={type}
            id={`inline-${type}-2`}

          />
          
        </div>
      ))}
      
      <p className='fs-5 fw-bold text-center'>Car Details</p>
      <hr />
      <Row>
      <Col>
      <Form.Group className="mb-3 fw-bold w-100" controlId="formBasicPassword">
        <Form.Label>Car No.</Form.Label>
        <Form.Control type="text" placeholder="pb-9551"  onChange={(e)=>{setCarNo(e.target.value)}} value={carNo} required />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3 fw-bold w-100" controlId="formBasicPassword">
        <Form.Label>Car Color</Form.Label>
        <Form.Control type="text" placeholder="Black"  onChange={(e)=>{setCarColor(e.target.value)}} value={carColor} required />
      </Form.Group>
      </Col>
      </Row>
      
      <Form.Group className="mb-3 fw-bold w-100" controlId="formBasicPassword">
        <Form.Label>Car Type</Form.Label>
        <Form.Control type="text" placeholder="Jeep"  onChange={(e)=>{setCarType(e.target.value)}} value={carType} required />
      </Form.Group>
      <Form.Group className="mb-3 fw-bold w-100" controlId="formBasicPassword">
        <Form.Label>Rate/km</Form.Label>
        <Form.Control type="text" placeholder="rs."  onChange={(e)=>{setLicence(e.target.value)}}  required />
      </Form.Group>

      <Button className='btn fw-bold fs-5  z-10 w-100'   type="submit" onClick={onSubmit}>
        Register
      </Button>
    </Form>
    <div>
      <p className='fs-3 fw-bold text-light text-center m-3'>"Join the movement, register your vehicle today and be a part of our reliable and efficient transport services!"</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Partner_register
