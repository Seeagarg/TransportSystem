import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Footer from './Footer';
import logo_transparent from '../Images/logo_transparent.png';
import Black_tag from '../Images/Black_tag.jpg'
import logo_demo from '../Images/logo_demo.png'

// import { useState } from 'react';

function Header(props) {
  const[showSidebar,setShowSidebar] = useState(false);
  const mystyle={
    navbar:{
      backgroundColor:"black",
      opacity:0.9,
      // position:"fixed"
      // z-index:1
    }
  //   '&:hover':{
  //     color:"yellow",
  //   }
  }
  
  return (
    <>
    <div>
      <Navbar  expand="lg" variant="light" className='px-5 position-fixed w-100 z-3' style={mystyle.navbar}  >
      <Navbar.Brand className='fs-1 font-Josefin-Sans text-light fw-bold' ><img src={Black_tag}  alt="" style={{height:"10vh",width:"15vw"}} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
        <Nav className=" nav ml-auto fs-4 fw-bold text-light" style={mystyle.nav}>
        <Link to="/" className='link' style={{textDecoration:'none',color:'white',marginLeft:'20px',marginRight:'20px',}}>
        Home
        </Link>
          <Link to="/about" style={{textDecoration:'none',color:'white',marginLeft:'20px',marginRight:'20px'}}>
          About
          </Link>
          <Link to="/partner" style={{textDecoration:'none',color:'white',marginLeft:'20px',marginRight:'20px'}}>
          Be a Partner 
          </Link>
          <Link to="/rentals" style={{textDecoration:'none',color:'white',marginLeft:'20px',marginRight:'20px'}}>
          Rentals
          </Link>
          {/* <Link to='/sidebar' style={{textDecoration:'none',color:'black',marginLeft:'10px',marginRight:'10px'}}> */}
          <AccountCircleIcon fontSize='large' onClick={()=>{setShowSidebar(!showSidebar)}}/>
          {/* </Link> */}
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      
    </div>
    
    </>

  )
}

export default Header
