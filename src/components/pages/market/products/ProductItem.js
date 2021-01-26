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



const ProductItem = ( { auth:{user}, match, getProduct, deleteProduct,  market :{ product,markets  } ,addCart}  ) => {
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
                            <div className='col-sm-4' >
                                <img src={product && product.image} width="400" height="300" alt='market' className='img_product' />
                            </div>           
                <div className='col-sm-2'></div>
                <div className='col-sm-6'>
                   <div className='row'>
                       <div className='row'>
                        <div className='col-sm-10'>
                      <label className='prod_details'>Product Name :</label> { product && product.name }
                 </div>
                 <div className='col-sm-1'>
                    {user && user.id === product.user_id ?
                       <Button onClick={handleClickOpen} >  <BiEditAlt  /> </Button> : (<div></div>)}
                        <Dialog open={open}
                         onClose={handleClose}
                          className='updateProd'>
                          <UpdateProduct />  
                        </Dialog> 
                        
                        </div> 
                        </div>
                        
                 <div className='row'>
                        <div className='col-sm-10'>
                         <label className='prod_details'>Price : </label>{ product && product.price }
                         </div>
                         
                    <div className='col-sm-1 '>
                    {user && user.id === product.user_id ?
                        <Link className='delete_prod' to='/dashboard/marketplace' >
                           <Button className='pt-3'> <DeleteOutlineRoundedIcon onClick={e=>deleteProduct(match.params.id)} /> </Button>                      
                        </Link>
                        : (<div></div>)}
                           <Button className='pt-3'> <MdAddShoppingCart onClick={e=>addCart(product.id)} /> </Button>                      
                    </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-sm-8'>
                           <label className='prod_details'>Quantity : </label> { product && product.stock }
                           </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-8'>
                     <label className='prod_details'> Description</label>       { product && product.description }         
                    </div>
                    
                      
                    </div>    
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
    getProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    addCart:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    market: state.market,
    auth : state.auth
    
})
export default connect(mapStateToProps ,{ getProduct ,deleteProduct,addCart })(ProductItem);
