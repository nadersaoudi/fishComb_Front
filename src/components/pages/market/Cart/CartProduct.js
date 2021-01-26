import React from 'react';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { deleteProd } from '../../../../Actions/Market';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Fragment } from 'react';
const CartProduct = (  {cart , deleteProd } ) => {

return (
    <Fragment>
        <Row className='pb-5'>
            <Col xs={12}>
                <Row className='pt-5'>
                    <Col xs={1}>#</Col>
                    <Col xs={3}>{cart && cart.product.name}</Col> 
                    <Col xs={2}>{cart && cart.product.price}</Col> 
                    <Col xs={1}>{cart && cart.product.stock}</Col>
                    <Col xs={3}><input type="number"/></Col>
                    <Col xs={1}>
                        <button>
                            <MdDelete />
                        </button>
                    </Col>
                </Row>
            </Col>    
        </Row>
    </Fragment>
)
}
CartProduct.propTypes = {
    cart : PropTypes.object.isRequired,
    deleteProd : PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    auth: state.auth,
})
export default connect(mapStateToProps , {deleteProd})(CartProduct)
