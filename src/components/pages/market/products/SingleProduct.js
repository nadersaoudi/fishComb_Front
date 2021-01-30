import React from 'react';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCart } from '../../../../Actions/cart';
import '../Market.css';

const SingleProduct = ( { auth: {user} ,markets,addCart ,markets :{ product} }) => {
    
return (
    <Fragment>
        <div className='col-md-2'>
            <div className='image_holder grid '>
                <div className='image'>
                <NavLink to={`/dashboard/singleproduct/${markets.id}`} >
                    <img src={markets && markets.image}   width="150" height="100" alt='market' className='sing__prod'/>
                    </NavLink>
                </div>
            <div className='description'>
                <span className='product__name'>{markets && markets.name.charAt(0).toUpperCase() + markets.name.slice(1) }</span><br /> 
                <span className='product__price'> {markets && markets.price+'$'}</span>   
            </div>
            </div>
        </div>
    </Fragment>
)
}
SingleProduct.propTypes = {
    markets: PropTypes.object.isRequired,
    auth : PropTypes.object.isRequired,
    addCart:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth,
    market: state.market,
})
export default connect(mapStateToProps ,{addCart}) (SingleProduct);