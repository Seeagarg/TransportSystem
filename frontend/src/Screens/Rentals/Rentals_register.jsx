import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Rentals_register() {

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log({
        //   name,
        //   address,
        //   mobileNo,
        //   vehicleNo,
        //   vehicleType,
        //   rentPrice
        // });
    }

    const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [rentPrice, setRentPrice] = useState("");
  const [discription, setDescription] = useState("");
  return (
    <div>
      <Form className=" bg-light text-dark p-3 text-start  rounded " >
      <p className='fs-5 fw-bold text-center'>Personal Details</p>
      <hr />
      <Row>
      <Col>
     
     <Form.Group className="mb-3 fw-bold w-100" controlId="formBasicPassword">
       <Form.Label>Name</Form.Label>
       <Form.Control type="text" placeholder="UserName" onChange={(e)=>{setName(e.target.value)}} value={name} required  />
     </Form.Group>
     
     </Col>

      <Col>
      
      <Form.Group className="mb-3 fw-bold w-100" controlId="formBasicEmail">
        <Form.Label>Enter Your Location</Form.Label>
        <Form.Control type="text" placeholder="Location"  onChange={(e)=>{setAddress(e.target.value)}} value={address} className='m-0' required  />
      </Form.Group>
      </Col>
     
      </Row>
      <Row>
      <Col>
      <Form.Group className="mb-3 fw-bold w-100" controlId="formBasicPassword">
        <Form.Label>Phone No.</Form.Label>
        <Form.Control type="Phone" placeholder="+91 987654321"  onChange={(e)=>{setMobileNo(e.target.value)}} value={mobileNo} required />
      </Form.Group>
      </Col>
      {/* <Col>
      <Form.Group className="mb-3 fw-bold w-100" controlId="formBasicPassword">
        <Form.Label>Vehicle No.</Form.Label>
        <Form.Control type="Phone" placeholder="+91 987654321"  onChange={(e)=>{setLicence(e.target.value)}} value={licence} required />
      </Form.Group>
      </Col> */}
      </Row>
      {/* <p className='fs-5 fw-bold'>Gender</p>
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
      ))} */}
      
      <p className='fs-5 fw-bold text-center'>Car Details</p>
      <hr />
      <Row>
      <Col>
      <Form.Group className="mb-3 fw-bold w-100" controlId="formBasicPassword">
        <Form.Label>Vehicle No.</Form.Label>
        <Form.Control type="text" placeholder="pb-9551"  onChange={(e)=>{setVehicleNo(e.target.value)}} value={vehicleNo} required />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3 fw-bold w-100" controlId="formBasicPassword">
        <Form.Label>Vehicle Type</Form.Label>
        <Form.Control type="text" placeholder="Black"  onChange={(e)=>{setVehicleType(e.target.value)}} value={vehicleType} required />
      </Form.Group>
      </Col>
      </Row>
      
      <Form.Group className="mb-3 fw-bold w-100" controlId="formBasicPassword">
        <Form.Label>Rent Rate</Form.Label>
        <Form.Control type="text" placeholder="Jeep"  onChange={(e)=>{setRentPrice(e.target.value)}} value={rentPrice} required />
      </Form.Group>
      <Form.Group className="mb-3 fw-bold w-100" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Tell me about vehicle"  onChange={(e)=>{setDescription(e.target.value)}} value={discription} required />
      </Form.Group>

      <Button className='btn fw-bold fs-5  z-10 w-100'   type="submit" onClick={onSubmit}>
        Register
      </Button>
    </Form>
    </div>
  )
}

export default Rentals_register
