import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import facebook_profile_image from "../../Images/facebook_profile_image.png";
import './About.css';

function About() {
  const myStyle={
    bg:{
      backgroundImage: `url(${facebook_profile_image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      // filter: "brightness(30%)",
      filter:"blur(5px)",
      paddingTop:"15vh"
    }
  }
  return (
    // <div>
    //   <Header />
      
    //   <div
    //     className="my-container z-1" style={myStyle.bg}>
    //     <div className="my-content z-5 text-light" >
    //      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi totam explicabo perferendis quis dolorem? Perspiciatis asperiores et sint laudantium voluptatum distinctio, ab modi maiores animi aspernatur facilis optio! Dignissimos qui modi commodi dolorem rem?Content
    //      </h1>
    //     </div>
    //   </div>
    //   <Footer />
    // </div>


    <div>
    <Header/>
      <div className=" z-1" style={{paddingTop:"15vh"}} >
        {/* <Header title={"Street Cab"}/> */}
        {/* <img src={facebook_profile_image} alt="" className='z-0' style={{position:"relative",}} /> */}
        <div className="p-3 m-0 text-dark z-250" style={{backgroundColor:"rgb(245,245,245)"}} >
          <p className="fs-1 fw-bold">About Fast Fleet</p>

      <div className="about-page-container" >
          <p className="fs-5 ">Fast Fleet is a leading provider of transportation services and vehicle rentals. Our mission is to provide high-quality and reliable transportation solutions to our customers. Whether you need to move goods, transport people, or rent a vehicle for personal use, Fast Fleet has the expertise and resources to meet your needs.</p>
          <p className="fs-5 ">With a wide range of vehicles to choose from, including cars, trucks, vans, and buses, we are confident that we can provide the right transportation solution for your needs. Our vehicles are well-maintained and regularly serviced, ensuring that they are always in excellent condition and ready to hit the road.</p>
      </div>
      </div>
      <div>
      <img src="https://thumbs.dreamstime.com/b/taxi-car-delivery-app-vector-illustration-set-cartoon-flat-delivering-mobile-transport-service-application-isolated-white-to-194206445.jpg"  alt="" className="text-center" style={{width:"90vw",alignSelf:"center",padding:"5vh"}} />
      <div className="p-3 m-0 text-dark z-250 fs-5" style={{backgroundColor:"rgb(245,245,245)"}}>
      <div className="p-3">
            <h2>The Services we are providing</h2>
            <p>Welcome to our transportation services website, where we provide a wide range of options for your transportation needs. We understand that getting from one place to another can be a hassle, which is why we offer reliable and efficient services such as cab rides, tempo services, ambulance services, bike rides, and auto services.</p>
            <ul>
              <li>Transportation services for moving goods and people.</li>
              <li>Logistics solutions for planning and executing transportation needs. </li>
              <li>Vehicle rentals for personal use, including cars, trucks, and buses.</li>
              <li>Competitive rates on all services.</li>
              <li>Well-maintained and regularly serviced vehicles.</li>
              <li>Sustainable transportation solutions to minimize environmental impact.</li>
              <li>Tailored transportation solutions to meet unique customer requirements.</li>
            </ul>

            <p> we are committed to providing exceptional value to our customers. We offer competitive rates on all our services, and we are always looking for ways to help our customers save money. Whether you need a one-time service or ongoing transportation support, we have flexible pricing options to suit your budget.</p>
      </div>
      </div>

      <div className="p-4  text-dark z-250 fs-5" style={{backgroundColor:"rgb(245,245,245)"}}>
            <h2>Scope </h2>
            <p>Overall, we strive to provide the best possible experience for our customers by overcoming these challenges and continuously improving our platform. With our convenient services, affordable prices, and commitment to quality, we are confident that we can help you make your project a success.</p>
      </div>

    </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
