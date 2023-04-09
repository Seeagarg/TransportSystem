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
  const [location,setLocation] = useState('');
  const [username,setUsername] = useState('');
  const [phoneNo,setPhoneNo] = useState('');

  const [myData,setMyData] = useState({
    username:'',
    phoneNo:'',
    location:''
  })
  
  // const onChange=(e)=>{
  //   // e.persist();
  
  //   setMyData({...myData,[e.target.name]:e.target.value})
  //   console.log(myData)
  // }

  
  
    let mystyle = {
        backCover: {
            // position: 'absolute',
            opacity: 0.8, 
            border: "1px solid grey",
          },
    }

    const onSubmit=async(e)=>{
      e.preventDefault();
      // console.log("----",myData)
      //  console.log("---",username)
      //  console.log("---",phoneNo)
      //  console.log("--",location)
      

      // localStorage.setItem("formData",JSON.stringify( {username:username, phoneNo:phoneNo,location:location} ));

      // const newData = {
      //   username:myData.username,
      //   location:myData.location,
      //   phoneNo:myData.phoneNo
      // }
      const newData = {
        "username":username,
        "location":location,
        "phoneNo":phoneNo
      }

      console.log("iijij ",newData);

      if(!username || !phoneNo || !location){
        toast("fields should not be empty should not be empty");
        console.log("usernmae not present");
       }
       else{
      axios.post('http://localhost:8080/customer',{
        name:username,
        address:location,
        phone:phoneNo
      })
      .then((res)=>{
        console.log(res.data);
        const serializedState = JSON.stringify(res.data);
        var a = localStorage.setItem('myData',serializedState);
        console.log("A: ",a);
        const user = res.data;
        // console.log("message",res.data.message);
        localStorage.setItem("user-application",JSON.stringify(res));
        navigate("/getCab");
      }).catch((err)=>{
        console.log(err)
      })
      console.log("Submitted")
    }   
    }

    

  
  
  return (
    <div>
    <ToastContainer style={{marginTop:"15vh"}}/>
      <Form className=" bg-light text-dark p-3 text-start w-50 rounded " style={mystyle.backCover}>
      <Form.Group className="mb-3 fw-bold" controlId="formBasicEmail">
        <Form.Label>Enter Your Location</Form.Label>
        <Form.Control type="text" placeholder="Location" name="location" value={location} onChange={(e)=>{setLocation(e.target.value)}}  className='m-0' required  />
      </Form.Group>
      <Form.Group className="mb-3 fw-bold" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="UserName" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}  required  />
      </Form.Group>
      <Form.Group className="mb-3 fw-bold" controlId="formBasicPassword">
        <Form.Label>Phone No.</Form.Label>
        <Form.Control type="Phone" placeholder="+91 987654321" name="phoneNo" value={phoneNo} onChange={(e)=>{setPhoneNo(e.target.value)}}  required />
      </Form.Group>
      <Button className='btn fw-bold fs-5  z-10 w-100'   type="submit" onClick={onSubmit}>
        Search
      </Button>
    </Form>
    
    </div>
  )
}

export default FormCar
