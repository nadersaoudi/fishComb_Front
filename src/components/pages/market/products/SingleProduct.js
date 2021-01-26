import React from 'react';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const SingleProduct = ( { markets }) => {
    return (
        <Fragment>
            <div className='col-md-2'>
                <div className='image_holder grid '>
                    <NavLink to={`/dashboard/singleproduct/${markets.id}`} >
                        <img src='https://picsum.photos/id/14/200/300' width="125" height="100" alt='market' />
                    </NavLink>
                <div className='description'>
                    <span>{markets && markets.name}</span><br /> 
                    <span> {markets && markets.price+'$'}</span>
                    
                </div>
            </div>
        </div>
        </Fragment>
    )
}
SingleProduct.propTypes = {
    markets: PropTypes.object.isRequired,
}
export default SingleProduct;