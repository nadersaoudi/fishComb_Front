import React, { useEffect,useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showCart,deleteProd } from '../../../../Actions/cart';
import { Card, Col, Row } from 'react-bootstrap';
import { Fragment } from 'react';
import CartProduct from './CartProduct';
import './Cart.css';
import { IoBagCheckOutline } from 'react-icons/io5';
import { Button } from '@material-ui/core';
import Checkout from './Checkout'
const Cart = ( { showCart, cart :{ cart}   ,deleteProd }  ) => {
/******************************/    
useEffect(() => {
  showCart()
},[showCart])
const [hidden,sethidden]=useState(true)
/******************************/ 
return (
    <Fragment>
        <Row className='pt-5 pb-5 '>
            <Col sm={2} ></Col>
            <Col sm={8} className='card__shop'>
                <Card>
                    <Row className='pt-3'> 
                        <Col xs={1}></Col>
                        <Col xs={10}>
                            <h2 className='title'><b>Your Shop Cart</b></h2>
                        </Col>  
                    </Row>
                    <Row className='pt-5'>
                        <Col xs={1}></Col>
                        <Col xs={3}>Name Product</Col> 
                        <Col xs={2}>Price</Col> 
                        <Col xs={2}>Quantity</Col>
                        <Col xs={2}>total</Col> 
                    </Row>
                    <hr /> 
                    <Row>
                        <Col xs={12}>
                            {cart && cart.carts.map((cart) =>
                                (
                                <CartProduct key={cart.cart_id} cart={cart} />)
                                )}
                        </Col>
                    </Row>
                    <Row className='pt-2'>
                        <Col xs={12}>
                            Total = {cart && cart.total_amount }
                        </Col>
                    </Row>
                    <Row className='pt-2'>
                        <Col xs={5}>
                            <Button className='Button_checkout'>
                                <IoBagCheckOutline />
                            </Button>
                        </Col>
                    </Row>
                </Card>             
            </Col>
            <Col sm={2} ></Col>
       </Row>
       <Row>
           <Col sm={10} md={10}></Col>
          
           <Col sm={1} md={1}><Button onClick={e=>sethidden(false)}>Checkout</Button></Col>
       </Row>
       <Row hidden={hidden}><Col sm={1} md={1}></Col> <Col sm={5} md={5}><h3>Checkout</h3></Col>
       <Row>
       <Col sm={1} md={1}></Col><Col sm={11} md={11}><Checkout/></Col>
       </Row>
       </Row>
    </Fragment>
)
}
Cart.prototype={
    showCart: PropTypes.func.isRequired,
    deleteProd: PropTypes.func.isRequired,
    cart: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    cart : state.cart,
})
export default connect(mapStateToProps, { showCart,deleteProd }) (Cart);