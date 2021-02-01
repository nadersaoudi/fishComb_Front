import React from 'react'
import { Col, Row } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import {stripelog} from '../../../../Actions/cart'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const StripePay =({stripelog,cart :{order}})=>{


    const handleToken =(token,address)=>{
        stripelog(token,address)
    }
    return (
        <Row>  <Col sm={3} md={3}></Col> <Col sm={3} md={3}><StripeCheckout
       token={handleToken}
        stripeKey={"pk_test_51IEjdFKKRkm2jfjKQ46eifger6zWp30iM4SzIGNVKSxaHUOKrfVOytseDJpKHIz43fTtvUwcq98BD7XoyPpG6ss400dIHQtQX9"}
        description={order && order.description}
        name={"Total amount: "+order.sub_total}
        email={order && order.email}
       amount={order && order.sub_total}
       billingAddress
       shippingAddress={order &&order.shipping_address}
       currency="USD"
      /></Col></Row>
         
    )
}
StripePay.propTypes={
 stripelog:PropTypes.func.isRequired,
 cart:PropTypes.object.isRequired
}
const mapStateToProps =state =>({
    cart:state.cart
})
export default connect(mapStateToProps,{stripelog}) (StripePay);