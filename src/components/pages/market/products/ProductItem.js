import React from 'react' ;
import { Fragment ,useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { IoBasketSharp } from 'react-icons/io5';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from 'react-bootstrap/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Avatar } from "@material-ui/core";
import { updateProduct } from '../../../../Actions/Market';
import { addCart } from '../../../../Actions/cart';
import {  deleteProduct, getProduct,getMarket } from '../../../../Actions/Market';
import { showCart } from '../../../../Actions/cart';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import { MdAddShoppingCart } from 'react-icons/md';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../Market.css';
import { FaEdit } from 'react-icons/fa';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import SingleProduct from './SingleProduct';
import UpdateProduct from './UpdateProduct';
import { Col } from 'reactstrap';
import { Row } from 'react-bootstrap';
const ProductItem = ( { auth: { user },getMarket, match, getProduct, deleteProduct,  market:{ product,categories} ,addCart ,updateProduct , loading , markets:{ markets},cart:{cart}, showCart }) => {
     
/****************************/
useEffect(() => {
    getMarket()
}, [getMarket])
useEffect(() => {
    showCart()
  },[showCart])
useEffect(() => {
    getProduct(match.params.id);
},  [getProduct, match.params.id]
)
/****************************/
/****************************/
/*****************************/    
const [open1, setOpen1] = React.useState(false);
const handleClickOpen1 = () => {
    setOpen1(true);
};
const handleClose1 = () => {
    setOpen1(false);
};
const [open2, setOpen2] = React.useState(false);
const handleClose2 = () => {
    setOpen1(false);
};
const handleOpen2 = () => {
    setOpen1(true);
};
/*********************************/ 
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
            <div className='pt-5'>
                <Row >
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <Row>
                            <Col sm={10}></Col>
                            <Col sm={2}>
                                <button className='btn btn-outline-dark button__cart'>
                                    <NavLink to={'/dashboard/cart'} className="link__cart">
                                        <span className='cart__span'>Basket <IoBasketSharp/>{cart && cart.carts ? <div>{cart.carts.length}</div>:<div></div>}
                                        </span>
                                    </NavLink>
                                </button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className='row pt-3'>
                <div className='col-sm-10 pl-5 ml-5'>
                    <div className='card'> 
                        <div className='card-body'>
                            <div className='row'>
                            <div className='col-sm-4 ' >
                                <img src={product && product.image} width="100%" height="300px" alt='market' />
                            </div>           
                <div className='col-sm-8 border py-3 pl-3'>
                    <div className='row float-right'> <div className='col-md-12'><Button className='cart__btn' onClick={e=>addCart(product.id)}> <MdAddShoppingCart  style={{fontSize:'19px'}} /> Add to Cart</Button>                      
                    </div> </div>
                   <div className='row '>
                       <div className='row '>
                        <div className='col-sm-10 pl-2'>
                            <div className='row'>
                            <div className='col-sm-4'>
                            <label className='prod_details'>Product Name:</label> 
                            </div>
                            <div className='col-sm-5'>
                            <label className='prod_details'> {product && product.name.charAt(0).toUpperCase() + product.name.slice(1) }</label>
                            </div>
                            </div>
                 </div>
                 <div className='row'>
                        <div className='col-sm-10 pl-2'>
                        <div className='row'>
                        <div className='col-sm-4' >
                         <label className='prod_details'>Price :</label>
                         </div>
                         <div className='col-sm-5' >
                          <label className='prod_details'>{ product && product.price } $</label>
                         </div>
                    </div>
                    </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-8 pl-2'>
                        <div className='row'>
                        <div className='col-sm-4' >
                            <label className='prod_details'>Quantity :</label>
                            </div>
                            <div className='col-sm-5'>
                            <label className='prod_details'> { product && product.stock }</label>
                            </div>   
                           </div>
                        </div>  
                    </div>
                    <div className='row'>
                        <div className='col-md-9 pl-2'>
                            <div className='row'>
                                <div className='col-sm-4'>
                                    <label className='prod_details'>
                                    Description:
                                    </label> 
                                </div>
                         <div className='col-sm-8'>
                         <label className='prod_details'>
                         { product && product.description } 
                         </label> 
                         </div>
                            </div>      
                                   </div>
                                     </div>    
                                   </div> 
                                                 
                                     </div>
                                     <div className='row mt-5'></div>
                                     <div className='row'>
                            <div className='col-md-10 '>{user  && product && user.user_id ===   product.user.id?
                 <div className='col-sm-12 pt-5'>
                       <Button onClick={handleClickOpen} ><FaEdit style={{fontSize:'19px'}} /> Edit Product  </Button> 
                        <Dialog open={open} onClose={handleClose}
                          className='updateProd'>
                                <UpdateProduct />
             
                        </Dialog> 
                        
                        </div> 
                        : (<div></div>)}
                        </div>
                            <div className='col-md-2 pt-5 '>  {user &&  product && user.user_id===   product.user.id ?
                        <Link className='delete_prod' to='/dashboard/marketplace' >
                           <Button className='' onClick={e=>deleteProduct(match.params.id)}> <DeleteOutlineRoundedIcon  style={{fontSize:'19px'}} /> Delete </Button>                      
                        </Link>
                        : (<div></div>)}</div>
                           
                        </div>
                                </div>
                                       
                            </div> 
                        </div>
                    </div>
                    
                             <hr/>
                <div className='bot_section ' className='pt-3 '>
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-11'><h5>Similar Products</h5></div> 
                        <div className='row'>
                        <OwlCarousel className="slider-items owl-carousel pt-4"  autoplay='true' autoplaySpeed='2000'>
                        {markets && markets.map((markets) =>
                                (
                                    <div>
                                    <Col key={markets.id} markets={markets}  className='products'>
                                    <Col><img src={markets.image} width='180px' height='250' style={{borderRadius:'5px'}}  className='pb-2'/></Col>
                                    </Col>
                                    </div>
                                    )
                                )}
                        </OwlCarousel>
                        </div>     
                          </div>
                    </div>            
              </div>
        </div> 
  </div>

        </Fragment>
    )

}
ProductItem.propTypes = {
    market: PropTypes.object.isRequired,
    auth :PropTypes.object.isRequired,
    getProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    addCart:PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    updateProduct : PropTypes.func.isRequired,
    getMarket: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth,
    market: state.market,
    updateProduct: state.market,
    categories: state.market,
    product : state.product,
    updateProduct: state.market,
    markets: state.market,
    cart: state.cart,
    carts: state.cart
})
export default connect(mapStateToProps ,{ getProduct , deleteProduct, addCart, updateProduct, getMarket, showCart })(ProductItem);