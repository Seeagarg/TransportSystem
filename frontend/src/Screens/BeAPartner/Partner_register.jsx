import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Partner_register() {
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
    const onSubmit=async(e)=>{
        e.preventDefault();
        
        
      }

  const [location,setLocation] = useState('');
  const [username,setUsername] = useState('');
  const [phoneNo,setPhoneNo] = useState('');
  const [gender,setGender] = useState(' ');
  const [licence,setLicence] = useState(' ');
  const [carNo,setCarNo] = useState(' ');
  const [carColor,setCarColor] = useState(' ');
  const [carType,setCarType] = useState(' ');


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
        <Form.Control type="Phone" placeholder="+91 987654321"  onChange={(e)=>{setLicence(e.target.value)}} value={phoneNo} required />
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
        <Form.Control type="text" placeholder="pb-9551"  onChange={(e)=>{setCarNo(e.target.value)}} value={phoneNo} required />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3 fw-bold w-100" controlId="formBasicPassword">
        <Form.Label>Car Color</Form.Label>
        <Form.Control type="text" placeholder="Black"  onChange={(e)=>{setCarColor(e.target.value)}} value={phoneNo} required />
      </Form.Group>
      </Col>
      </Row>
      
      <Form.Group className="mb-3 fw-bold w-50" controlId="formBasicPassword">
        <Form.Label>Car Type</Form.Label>
        <Form.Control type="text" placeholder="Jeep"  onChange={(e)=>{setCarType(e.target.value)}} value={phoneNo} required />
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
