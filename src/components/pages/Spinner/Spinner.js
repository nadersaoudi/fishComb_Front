import React from 'react'
import { Row, Col,Image } from 'react-bootstrap';
import './Spinner.css'
const Spinner =()=>{
return <Row>
    <Col sm={6}></Col>
   <Col sm={2}> <Image src='logofish.png'  alt='fishcomb spinner' className='rotate' /></Col></Row>
 
}
export default Spinner;