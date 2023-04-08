import React from 'react'
// import Header from '../Components/Header'
import Black_tag from '../../Images/Black_tag.jpg'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import Footer from '../../Components/Footer';
import InfoIcon from '@mui/icons-material/Info';

function GetCabPage() {
  const cars = [
  {

  },
  {

  }
  ]
    const mystyle={
       img:{
        border:"1px solid black",
        borderRadius:"50%",
        height:"30vh",
        width:"15vw"
       }
    }
  return (
    <div className=''>
    <div className="bg z-1" >
    <div className="bg-black z-1 p-3 text-light">
    <div className="row z-150">
    <div className="col"><img src={Black_tag} alt="" style={{height:"15vh",width:"15vw"}} /></div>
    <div className="col fs-2 fw-bold "><span>What are you Looking for.....</span> </div>
    </div>
    <div className="row">
        <div className="col">
        </div>
        <div className="col">
        <div className="search"> <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form></div>
        </div>
    </div>
    </div>
    
    
        <div className="services " style={{backgroundColor:"rgb(245,245,245)"}}>
        <Carousel>
      <Carousel.Item>
      <div className="row p-3 text-center">
        <div className="col">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQCkacmiwq5WEA8UF-3FFlwwJ7EHzWZndVT9LZVVg&s" alt="" style={mystyle.img}/>
        <p className='fs-3 fw-bold'>Cab</p>
        </div>
        <div className="col">
        <img src="https://cvimg1.cardekho.com/p/630x420/in/piaggio/ape-xtra-ldx-bs6/piaggio-ape-xtra-ldx-bs6-71253.jpg?impolicy=resize&imwidth=480" alt="" style={mystyle.img}/>
        <p className='fs-3 fw-bold'>Tempo</p>
        </div>
        <div className="col">
           <img src="https://5.imimg.com/data5/SELLER/Default/2021/7/BU/WC/FS/3027728/suzuki-gixxer-sf-150cc-bike-500x500.jpg" alt="" style={mystyle.img} />
        <p className='fs-3 fw-bold'>Bike</p>
        </div>
        <div className="col">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSph_vPilWypQxvj0kQ83h53BYSzPWcTeB92fQX75v-P8jOvjkwuAMLpShExk55urra-Wuu07ZVuTQ&usqp=CAU&ec=48600112" alt=""  style={mystyle.img} />
          <p className='fs-3 fw-bold'>Auto</p>
          </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="row p-3 text-center">
          
          <div className="col">
          <img src="https://5.imimg.com/data5/SELLER/Default/2022/9/KT/NK/NS/101619802/sb1-500x500.png" alt="" style={mystyle.img} />
          <p className='fs-3 fw-bold'>Bus</p>
          </div>
          <div className="col">
          <img src="https://cdn.britannica.com/42/124942-050-5057EA58/Bulldozer.jpg" alt="" style={mystyle.img} />
          <p className='fs-3 fw-bold'>Buldozer</p>
          </div>
          <div className="col">
        <img src="https://media.istockphoto.com/id/482268246/photo/mobile-crane.jpg?s=612x612&w=0&k=20&c=6O_O73DRIX18e3UPfHKndIoeOdFpeNMp9uplMt31n7I=" alt="" style={mystyle.img}/>
        <p className='fs-3 fw-bold'>Crane</p>
        </div>
        <div className="col">
        <img src="https://www.financialexpress.com/wp-content/uploads/2018/09/1-120.jpg" alt="" style={mystyle.img}/>
        <p className='fs-3 fw-bold'>Truck</p>
        </div>
        </div>
      </Carousel.Item>
      
    </Carousel>
        </div>

    <div className=" bg-black" style={{border:"1px solid white"}}>
      <div className="container p-3 "  >
      <div className="row " >
        <div className="col-4">
        <img src="https://www.financialexpress.com/wp-content/uploads/2018/09/1-120.jpg" alt="" style={mystyle.img} />
        </div>
        <div className="col-4 text-light ">
       <p className="fs-3 fw-bold"> Car-Type</p>
       <p className='fs-4'> Driver Name</p>
       <p className='fs-4'> Phone No</p>
        </div>
        <div className="col-4 text-end">
        <InfoIcon fontSize='large' style={{color:"white"}}/>
        <p className='text-light'>more</p>

        </div>
        </div>
      </div>
    </div>
    </div>
    
      <Footer/>
    </div>
  )
}

export default GetCabPage
