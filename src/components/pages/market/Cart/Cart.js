import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showCart } from '../../../../Actions/Market';
import { Card, Col, Row } from 'react-bootstrap';
import { Fragment } from 'react';
import CartProduct from './CartProduct';
import './Cart.css';
const Cart = ( { showCart, cart} ) => {
    useEffect(() => {
        showCart()
    }, [showCart])
    return (
       <Fragment>
           <Row className='pt-5 '>
                <Col sm={2} ></Col>
                <Col sm={8} className='card__shop'>
                    <Card>
                        <h2 className='title'><b>Your Shop Cart</b></h2>
                        <div>
                         {cart && cart.map((cart) =>
                                (
                                    <CartProduct key={cart.id} cart={cart} />)
                                )}
                        </div>
                            
                    </Card>                 
                </Col>
                <Col sm={2} ></Col>
           </Row>
       </Fragment>
    )
}
Cart.prototype={
    showCart: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    cart : state.cart
})
export default connect(mapStateToProps, { showCart }) (Cart);
