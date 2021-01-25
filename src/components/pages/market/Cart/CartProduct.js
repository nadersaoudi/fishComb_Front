import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showCart } from '../../../../Actions/Market';
const CartProduct = ( { showCart, market: {cart , product}}) => {
    return (
        <div>
            <span>
                {cart && cart.cart_id}
            </span>
            
        </div>
    )
}
CartProduct.prototype={
    showCart: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    cart : state.cart,
    market: state.market
})

export default connect(mapStateToProps, { showCart}) (CartProduct)
