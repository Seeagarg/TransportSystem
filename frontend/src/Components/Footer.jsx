import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

function Footer() {
    const bg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHh5inkFL20U3WgD4v-Qgmj4ZChoq0f5AEneiBb6O6g&usqp=CAU&ec=48600112"
  return (
    <div>
    <footer class="py-5 bg-black text-light px-5">
    <div class="row">
      <div class="col-6 col-md-2 mb-3 ">
        <h5>Section</h5>
        <ul class="nav flex-column ">
          <li class="nav-item mb-2 "><Link to="#" class="nav-link p-0  text-light">Home</Link></li>
          <li class="nav-item mb-2 "><Link to="/about" class="nav-link p-0 text-light">About</Link></li>
          <li class="nav-item mb-2 "><Link to="#" class="nav-link p-0 text-light">Pricing</Link></li>
          <li class="nav-item mb-2 "><Link to="#" class="nav-link p-0 text-light">FAQs</Link></li>
          <li class="nav-item mb-2 "><Link to="#" class="nav-link p-0 text-light">About</Link></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-light">Home</Link></li>
          <li class="nav-item mb-2"><Link to="/about" class="nav-link p-0 text-light">About</Link></li>
          <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-light">Pricing</Link></li>
          <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-light">FAQs</Link></li>
          <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-light">About</Link></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-light">Home</Link></li>
          <li class="nav-item mb-2"><Link to="/about" class="nav-link p-0 text-light">About</Link></li>
          <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-light">Pricing</Link></li>
          <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-light">FAQs</Link></li>
          <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-light">About</Link></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address" fdprocessedid="htvjog"/>
            <button class="btn btn-primary" type="button" fdprocessedid="n23xek">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2023 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><Link class="link-light" to="#"><InstagramIcon className='m-2 mt-0'/></Link></li>
        <li class="ms-3"><Link class="link-light" to="#"><FacebookIcon className='m-2 mt-0'/></Link></li>
        <li class="ms-3"><Link class="link-light" to="#"><TwitterIcon className='m-2 mt-0'/></Link></li>
        <li class="ms-3"><Link class="link-light" to="#"><EmailIcon className='m-2 mt-0'/></Link></li>
      </ul>
    </div>
  </footer>
    {/* <div className="  shadow-lg p-5  w-100 h-50 bg-black border-top border-white text-center" style={{backgroundSize:"cover"}}>
    
    <div className='  text-light' >
    <span>copyright@seeaGarg</span>
    <div className='m-3'>
    <InstagramIcon className='m-2 mt-0'/>
    <FacebookIcon className='m-2 mt-0'/>
    <TwitterIcon className='m-2 mt-0'/>
    <EmailIcon className='m-2 mt-0'/>
    </div>
    
    </div>
    
    </div> */}
    </div>
  )
}

export default Footer
