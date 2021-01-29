import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { deleteProd, updateQuantity } from '../../../../Actions/cart';
import { Col, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import { GrAddCircle } from 'react-icons/gr';
import { Button } from '@material-ui/core';
const CartProduct = (  {cart  , deleteProd, loading,updateQuantity} ) => {
/**********************************/
const [formdata, setFormData] = useState({
    quantity: '',
});
const {
    quantity,
  } = formdata;
  useEffect(() => {
    setFormData({
    })
  }, [loading])
const onchange = e => setFormData({ ...formdata, [e.target.name]: e.target.value })

const onSubmit = e => {
 e.preventDefault();
    updateQuantity(formdata,cart.cart_id);
}
const [total,setTotal]=useState(cart.amount)
const [total1,setTotal1]=useState(0)
const handlechange=()=>{
    setTotal(quantity*cart.product.price)
    
}

/**********************************/
return (
    <Fragment>
        <Form onSubmit={e => onSubmit(e)} >
            <Row className='pb-5'>
                <Col xs={12}>
                    <Row className='pt-5'>
                        <Col xs={1}>#</Col>
                        <Col xs={3}>{cart && cart.product.name}</Col> 
                        <Col xs={2}>{cart && cart.product.price}</Col> 
                        <Col xs={2}>
                            <GrAddCircle />
                                <input className='col-6' value={quantity} type='number' min='1' name="quantity"  onChange={e => onchange(e)} onClick={handlechange}/>
                              
                            </Col>
                        <Col xs={1}>{total}</Col>
                        <Col xs={1}>
                            <Button>
                                <MdDelete onClick={e=>deleteProd(cart && cart.cart_id)}  />
                            </Button>
                        </Col>
                    </Row>
                </Col>    
            </Row>
        </Form>
    
    </Fragment>
)
}
CartProduct.propTypes = {
    cart:PropTypes.object.isRequired,
    deleteProd:PropTypes.func.isRequired,
    updateQuantity:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth,
    carts: state.cart
})
export default connect(mapStateToProps,{deleteProd, updateQuantity})(CartProduct)