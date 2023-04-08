import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

function Lil_intro() {
  
  return (
    <div className='text-center mt-4 mb-0'>
   <span className='fw-bold fs-2'>
   "Connecting you to seamless transport solutions - anytime, anywhere."
   </span>
   <div>
    <img className='w-50 h-25 mt-0 mb-0' src="https://png.pngtree.com/png-vector/20221023/ourmid/pngtree-taxi-service-carsharing-car-mobile-png-image_6345103.png" alt="" />
   </div>
   <div className='fs-4 fw-bold'>
    Our Services......
   </div>
   <div>
        <div class="container text-center">
        <div class="row mt-5">
          <div class="col">
           <img style={{width:"30vh", height:"30vh",borderRadius:"50%"}} src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Urus/4418/Lamborghini-Urus-V8/1621927166506/front-left-side-47.jpg?tr=h-48" alt="" />
           <div className='fw-bold fs-5'>Taxi</div>
          </div>
          <div class="col">
            <img style={{width:"30vh", height:"30vh",borderRadius:"50%"}} src="https://images.pexels.com/photos/9266562/pexels-photo-9266562.jpeg?cs=srgb&dl=pexels-rahul-soni-9266562.jpg&fm=jpg" alt="" />
            <div className='fw-bold fs-5'>Bike</div>
          </div>
          <div class="col">
           <img style={{width:"30vh", height:"30vh",borderRadius:"50%"}} src="https://thumbs.dreamstime.com/z/indian-auto-rickshaw-most-popular-transport-india-three-wheeler-tempo-picture-november-jharkhand-167757937.jpg" alt="" />
           <div className='fw-bold fs-5'>Tempo</div>
          </div>
          <div className="col">
            <img style={{width:"30vh", height:"30vh",borderRadius:"50%"}} src="https://thumbs.dreamstime.com/b/ambulance-car-standby-garage-92820070.jpg" alt="" />
            <div className='fw-bold fs-5'>Ambulance</div>
          </div>
          <div className="col">
            <img style={{width:"30vh", height:"30vh",borderRadius:"50%"}} src="https://thumbs.dreamstime.com/b/auto-rickshaw-18533458.jpg" alt="" />
            <div className='fw-bold fs-5'>Auto</div>
          </div>
        </div>
      </div>
   </div>
   <div>
    <p className='fs-5 p-3 pt-5'>In addition to our commitment to customer service and value, we are also committed to sustainability. We understand the impact that transportation can have on the environment, and we are always looking for ways to reduce our carbon footprint. We invest in the latest technology and equipment to improve fuel efficiency, and we work with our customers to develop sustainable transportation solutions that minimize environmental impact.
</p>
   </div>
   <div className='text-end m-5 fs-5 fw-bold'>
   <Link to='/about' style={{textDecoration:"none",color:"black"}}>

    Know More About Us..
     <ArrowForwardIcon/> 
   </Link>
   </div>
   
    </div>
  )
}

export default Lil_intro
