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
    quantity: cart.quantity,
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
const [total1,setTotal1]=useState(cart.product.price)
const handlechange=()=>{   
    updateQuantity(formdata,cart.cart_id);
}
const sum=()=> {
    // setTotal1(cart.reduce((totalamount,cart)=>totalamount+cart.price,0))
     console.log(total1)
}
/**********************************/
return (
    <Fragment>
        <Form onSubmit={e => onSubmit(e)} >
            <Row className='pt-3 pb-3'>
                <Col xs={12}>
                    <Row className=''>
                        <Col xs={1} className='border-right'>
                            <img src={cart && "http://77.68.24.35/storage/"+cart.product.image.slice(6)} width='70px' height='55px' style={{borderRadius:'4px'}}/>
                        </Col>
                        <Col xs={3}className='border-right'>
                            <Row>
                                <Col >
                                 <h5> { cart && cart.product.name.charAt(0).toUpperCase() + cart.product.name.slice(1) }</h5>
                                </Col>
                            </Row>
                           <Row>
                               <Col>
                                <h6>{cart && cart.product.description}</h6>
                               </Col>
                           </Row>
                        </Col> 
                        <Col xs={1} className='border-right'>{cart && cart.product.price} £</Col> 
                        <Col xs={2}className='border-right ml-2'>
                                <input className='col-6' value={quantity} type='number'    
                         min="1" max="100"  name="quantity"  onChange={e => onchange(e)} onClick={handlechange} defaultValue={quantity} />
                            </Col>
                        <Col xs={2}className='border-right'>{cart.amount} £</Col>
                        <Col xs={1} >
                            <Button onClick={e=>deleteProd(cart && cart.cart_id)}>
                                <DeleteOutlineRoundedIcon   />
                            </Button>
                        </Col>
                    </Row>
                    
                </Col>    
            </Row>
            <hr/>
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