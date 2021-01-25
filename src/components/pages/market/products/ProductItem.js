import React from 'react' ;
import { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteProduct, getProduct } from '../../../../Actions/Market';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import UpdateProduct from './UpdateProduct';
import Dialog from '@material-ui/core/Dialog';
import '../Market.css';
import UpdateRoundedIcon from '@material-ui/icons/UpdateRounded';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import SingleProduct from './SingleProduct';
import { BiEditAlt } from 'react-icons/bi';



const ProductItem = ( { match, getProduct, deleteProduct,  market :{ product,markets  }}  ) => {
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
                                <img src='https://picsum.photos/id/14/400/300'  alt='market' className='img_product' />
                            </div>           
   
                <div className='col-sm-8'>
                   <div className='row'>
                       <div className='row'>
                        <div className='col-sm-10'>
                      <label className='prod_details'>Product Name :</label> { product && product.name }
                 </div>
                 <div className='col-sm-1'>
                        <BiEditAlt onClick={handleClickOpen}/>  
                        <Dialog open={open} onClose={handleClose} className='updateProd'>
                            <BiEditAlt />    
                        </Dialog> 
                        </div>
                        </div>
                 <div className='row'>
                        <div className='col-sm-10'>
                         <label className='prod_details'>Price : </label>{ product && product.price }
                         </div>
                         
                    <div className='col-sm-1'>
                        <Link className='delete_prod' to='/dashboard/marketplace' >
                            <DeleteOutlineRoundedIcon onClick={e=>deleteProduct(match.params.id)} />                      
                        </Link> 
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
      

}
const mapStateToProps = state => ({
    market: state.market,
    
})
export default connect(mapStateToProps ,{ getProduct ,deleteProduct, })(ProductItem);