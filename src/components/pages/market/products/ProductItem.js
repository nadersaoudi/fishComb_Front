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
import { FaEdit } from 'react-icons/fa';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import SingleProduct from './SingleProduct';
import { BiEditAlt } from 'react-icons/bi';
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
            <div className='pt-5'>
                <div className='row pt-5'>
                <div className='col-sm-10 pl-5 ml-5'>
                    <div className='card'> 
                        <div className='card-body'>
                            <div className='row'>
                            <div className='col-sm-4 mt-4' >
                                <img src={product && product.image} width="400" height="300" alt='market' className='img_product' />
                            </div>           
        
                <div className='col-sm-8 border py-3 pl-3'>
                    <div className='row float-right'> <div className='col-md-12'><Button className='cart__btn'> <MdAddShoppingCart onClick={e=>addCart(product.id)} style={{fontSize:'19px'}} /> Add to Cart</Button>                      
                    </div> </div>
                   <div className='row '>
                       <div className='row '>
                        <div className='col-sm-10 pl-2'>
                      <label className='prod_details'>Product Name :</label> { product && product.name }
                 </div>
                
                 <div className='row'>
                        <div className='col-sm-10 pl-2'>
                         <label className='prod_details'>Price : </label>{ product && product.price }
                         </div>
                    
                    </div>
                    <div className='row'>
                        <div className='col-sm-8 pl-2'>
                           <label className='prod_details'>Quantity : </label> { product && product.stock }
                           </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-8 pl-2'>
                     <label className='prod_details'> Description</label> { product && product.description }         
                                                </div>
                                             </div>    
                                         </div> 
                                                 
                                     </div>
                                     <div className='row mt-5'></div>
                                     <div className='row'>
                            <div className='col-md-10 p-3'>{user  && product && user.user_id ===   product.user.id?
                 <div className='col-sm-12'>
                       <Button onClick={handleClickOpen} >  <FaEdit style={{fontSize:'19px'}} /> Edit Product  </Button> 
                        <Dialog open={open}
                         onClose={handleClose}
                          className='updateProd'>
                          <UpdateProduct />  
                        </Dialog> 
                        
                        </div> 
                        : (<div></div>)}</div>
                            <div className='col-md-2 p-3 '>  {user &&  product && user.user_id===   product.user.id ?
                        <Link className='delete_prod' to='/dashboard/marketplace' >
                           <Button className=''> <DeleteOutlineRoundedIcon onClick={e=>deleteProduct(match.params.id)} style={{fontSize:'19px'}} /> Delete </Button>                      
                        </Link>
                        : (<div></div>)}</div>
                           
                        </div>
                                </div>
                                       
                            </div> 
                        </div>
                    </div>
                    
                                <hr/>
                <div className='bot_section'>
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-11'><h4>Similar Products</h4></div>      
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
    addCart:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    auth : state.auth,
    market: state.market,
})
export default connect(mapStateToProps ,{ getProduct ,deleteProduct,addCart })(ProductItem);
