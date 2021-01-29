import React from 'react'
import { Col, Row } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';

const StripePay =()=>{


    const handleToken =(token,address)=>{
        console.log({token,address})
    }
    return (
        <Row>  <Col sm={3} md={3}></Col> <Col sm={3} md={3}><StripeCheckout
       token={handleToken}
        stripeKey={"pk_test_51IEjvvIXwitv1UEDISBXIR9khWNK1XSnOmEGQIHNNin0nEKV93qnzvECKAxFKOqMecX1u3Jhr2Q14ytPr28MbBCK00EL9G80iZ"}
       amount={1000}
       billingAddress
       shippingAddress
       name='test'
      /></Col></Row>
         
    )
}
export default StripePay;