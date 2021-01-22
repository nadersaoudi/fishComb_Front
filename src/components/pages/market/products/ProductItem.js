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

const ProductItem = ( { match, getProduct, deleteProduct, market :{ product }} ) => {
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
            <div className='row pt-5'>
                <div className='col-sm-1'></div>
                <div className='col-sm-5'>
                    <img src='https://picsum.photos/id/14/400/300'  alt='market' />
                </div>
                <div className='col-sm-6'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            { product && product.name }
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            { product && product.description }
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            { product && product.price }
                        </div> 
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            { product && product.stock }
                        </div>
                    </div>
                    <div className='row pt-5'>
                    <div className='col-sm-6 pt-5'>
                        <Button onClick={handleClickOpen} style={{ backgroundColor: "#f2f3f3", color: 'black', borderRadius: '0' }} >
                           Update Product 
                        </Button>
                        <Dialog open={open} onClose={handleClose} className='updateProd'>
                            <UpdateProduct />    
                        </Dialog> 
                    </div>
                    <div className='col-sm-6 pt-5'>
                        <Link className='delete_prod' to='/dashboard/marketplace' >
                            <Button  style={{ backgroundColor: "#f2f3f3", color: 'black', borderRadius: '0' }}  onClick={e=>deleteProduct(match.params.id)}>
                                 Delete Product
                            </Button>
                        </Link> 
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
    deleteProduct: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    market: state.market,
})
export default connect(mapStateToProps ,{ getProduct ,deleteProduct })(ProductItem);