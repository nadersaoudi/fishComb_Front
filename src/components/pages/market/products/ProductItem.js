import React from 'react' ;
import { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCart } from '../../../../Actions/cart';
import { addProduct, deleteProduct, getProduct } from '../../../../Actions/Market';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import UpdateProduct from './UpdateProduct';
import Dialog from '@material-ui/core/Dialog';
import { MdAddShoppingCart } from 'react-icons/md';
import '../Market.css';
import UpdateRoundedIcon from '@material-ui/icons/UpdateRounded';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import SingleProduct from './SingleProduct';
import { BiEditAlt } from 'react-icons/bi';
import { Card, Col, Image, Row } from 'react-bootstrap';



const ProductItem = ( { auth: { user }, match, getProduct, deleteProduct,  market :{ product,markets  } ,addCart}  ) => {
/****************************/
useEffect(() => {
    getProduct(match.params.id);
},  [getProduct, match.params.id]
)
/****************************/
const [open, setOpen] = React.useState(false);
const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};
/****************************/    
return( 
    <Fragment>
        <Row className='pt-5'>
            <Col xs={1}></Col>
            <Col xs={6}>
            <Card>
            <Col xs={4} className='pt-5'>
               
                    <Image src={product && product.image} height='250' width='360' />
               
            </Col>
            <Col xs={4} className='pt-5'>
                
                    <Row>
                        <Col>
                            <span><h3>{product && product.name}</h3></span>
                        </Col> 
                    </Row>
                    <Row>
                        <Col>
                            <span><h3>{product && product.price}</h3></span>
                        </Col> 
                    </Row>
                    <Row>
                        <Col>
                            <span><h3>{product && product.stock}</h3></span>
                        </Col> 
                    </Row>
                    <Row>
                        <Col>
                            <span><h4>{product && product.description}</h4></span>
                        </Col> 
                    </Row>
                    <Row>
                    {user  && product && user.user_id ===   product.user.id?
                         <div className='col-sm-1'>
                   
                       <Button onClick={handleClickOpen} >  <BiEditAlt  /> </Button> 
                        <Dialog open={open}
                         onClose={handleClose}
                          className='updateProd'>
                          <UpdateProduct />  
                        </Dialog> 
                        
                        </div> 
                        : (<div></div>)}
                         {user &&  product && user.user_id===   product.user.id ?
                        <Link className='delete_prod' to='/dashboard/marketplace' >
                           <Button className=''> <DeleteOutlineRoundedIcon onClick={e=>deleteProduct(match.params.id)} /> </Button>                      
                        </Link>
                        : (<div></div>)}
                           <Button className=''> <MdAddShoppingCart onClick={e=>addCart(product.id)} /> Add To Cart </Button>                      
                    
                    
                       
                    </Row>
                
            </Col>
            </Card>
            </Col> 
        </Row>
        <Row>
        </Row>  
    </Fragment>
)    
}
ProductItem.propTypes = {
    market: PropTypes.object.isRequired,
    auth :PropTypes.object.isRequired,
    getProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    addCart:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    auth : state.auth,
    market: state.market,
})
export default connect(mapStateToProps ,{ getProduct ,deleteProduct,addCart })(ProductItem);
