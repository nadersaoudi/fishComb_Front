import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showCart } from '../../../../Actions/Market';
import { Card, Col, Row } from 'react-bootstrap';
import { Fragment } from 'react';
import CartProduct from './CartProduct';
import './Cart.css';
const Cart = ( { showCart, market: { cart }} ) => {
    useEffect(() => {
        showCart()
    }, [showCart])
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
                            <Col xs={1}>#</Col>
                            <Col xs={3}>Name Product</Col> 
                            <Col xs={2}>Price</Col> 
                            <Col xs={2}>stock</Col>
                            <Col xs={2}>Quantity</Col> 
                        </Row>
                      <hr /> 
                    <Row>
                    <Col xs={12}>
                        {cart && cart.map((cart) =>
                            (
                            <CartProduct key={cart.cart_id} cart={cart} />)
                            )} 
                    </Col>
                    </Row>
                
                    </Card>             
                </Col>
                <Col sm={2} ></Col>
           </Row>
       </Fragment>
    )
}
Cart.prototype={
    showCart: PropTypes.func.isRequired,
    market :  PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    cart : state.cart,
    market : state.market
})
export default connect(mapStateToProps, { showCart }) (Cart);
