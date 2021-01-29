import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { deleteProd, updateQuantity } from '../../../../Actions/cart';
import { Col, Form, Row } from 'react-bootstrap';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
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
const [total1,setTotal1]=useState(quantity*cart.product.price)
const handlechange=()=>{
    setTotal(quantity*cart.product.price)
    
}
/**********************************/
return (
    <Fragment>
        <Form onSubmit={e => onSubmit(e)} >
            <Row className=''>
                <Col xs={12}>
                    <Row className='mb-3 pt-2'>
                        <Col xs={1} className='border-right'>
                            <img src={cart && "http://77.68.24.35/storage/"+cart.product.image.slice(6)} width='70px' height='55px'/>
                        </Col>
                        <Col xs={3}className='border-right'>{cart && cart.product.name}</Col> 
                        <Col xs={2} className='border-right'>{cart && cart.product.price}</Col> 
                        <Col xs={2}className='border-right ml-2'>
                            
                                <input className='col-6' value={quantity} type='number' min='1' name="quantity"  onChange={e => onchange(e)} onClick={handlechange}/>
                              
                            </Col>
                        <Col xs={2}className='border-right'>{total}</Col>
                        <Col xs={1} >
                            <Button>
                                <DeleteOutlineRoundedIcon onClick={e=>deleteProd(cart && cart.cart_id)}  />
                            </Button>
                        </Col>
                    </Row>
                    <hr/>
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