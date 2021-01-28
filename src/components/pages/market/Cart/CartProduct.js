import React from 'react';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { deleteProd } from '../../../../Actions/cart';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import { GrAddCircle } from 'react-icons/gr';
import { Button } from '@material-ui/core';
const CartProduct = (  {cart  , deleteProd } ) => {
return (
    <Fragment>
        <Row className='pb-5'>
            <Col xs={12}>
                <Row className='pt-5'>
                    <Col xs={1}>#</Col>
                    <Col xs={3}>{cart && cart.product.name}</Col> 
                    <Col xs={2}>{cart && cart.product.price}</Col> 
                    <Col xs={2}>
                        <GrAddCircle />
                        {cart && cart.quantity}
                        </Col>
                    <Col xs={1}>{cart && cart.amount}</Col>
                    <Col xs={1}>
                        <Button>
                            <MdDelete onClick={e=>deleteProd(cart && cart.cart_id)}  />
                        </Button>
                    </Col>
                </Row>
            </Col>    
        </Row>
    </Fragment>
)
}
CartProduct.propTypes = {
    cart:PropTypes.object.isRequired,
    deleteProd:PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    auth: state.auth,
    carts: state.cart
})
export default connect(mapStateToProps,{deleteProd})(CartProduct)