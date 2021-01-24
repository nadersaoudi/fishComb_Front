import React ,{ useEffect, useState } from 'react';
import { NavLink } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Dialog from '@material-ui/core/Dialog';
import { getMarket, myProduct, getCategories ,search } from '../../../Actions/Market';
import "./Market.css"
import YourAccount from './YourAccount';
import AddProduct from './products/AddProduct';
import SingleProduct from './products/SingleProduct';
const Market =( {auth : {user}, getMarket  , markets:{ markets , categories  } ,myProduct,search } ) => {
/******************************/
useEffect(() => {
    getMarket()
}, [getMarket])
/**************************/
const [open2, setOpen2] = React.useState(false);
const handleClose2 = () => {
    setOpen1(false);
};
const handleOpen2 = () => {
    setOpen1(true);
};
/*******************************/  
const [open, setOpen] = React.useState(false);
const handleClickOpen = () => {
    setOpen(true);
};
const handleClose = () => {
    setOpen(false);
};
/*****************************/    
const [open1, setOpen1] = React.useState(false);
const handleClickOpen1 = () => {
    setOpen1(true);
};
const handleClose1 = () => {
    setOpen1(false);
};
/*********************************/
const [filter, setFilter] = React.useState('name');
const [value, setValue] = React.useState('');
const handleChange = (product) => {
    setFilter(product.target.value);

};
const handleChange1 = e => {
    setValue(e.target.value)
}
const onsubmit1 = e => {
    e.preventDefault();
    console.log(filter)
   // console.log(value)
    search(filter, value)
}
/*********************************/   
    return (
        <div>
            <div>
            <div className='row'>
                <div className='col-md-12 pt-5 mt-5'>        
                </div>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className="col-9 pb-3">
                <ul className="nav nav-pills nav-justified " id='navprofil'>
                    <li className="nav-item">
                    <NavLink to={`/dashboard/profile/order`} className="m"><span className='n'>Multimedia</span></NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to={`/dashboard/profile/order`} className="m"><span className='n'>Books</span></NavLink>
                    </li>
                    <li className="col-7 ">
                </li>
                <li className='nav-item'>
                  <NavLink to={`/dashboard/profile/order`} className="m"><span className='n'>Basket<ShoppingCartIcon/> </span></NavLink> 
                </li>
                </ul>
                </div>
                </div>
            <div className='row'>
            
                <div className='col-md-3  side_min_bar'> 
                <form onSubmit={e => onsubmit1(e)} >
                <div className="col-sm-12 px-0 header__input" >
                    <input type="text" placeholder='Search Marketplace' aria-label="Search" height='25px' value={value} onChange={handleChange1} />
                        <button className="col-sm-2  header__button" >       
                            <svg width="19px" height="19px"  version="1.1" xmlns="http://www.w3.org/1999/xlink">
                                <g id="fishcomb-product-icons-14">
                            <path d="M12.2518 1.61932e-15C12.3328 0.0283492 12.4155 0.051191 12.4995 0.0683699C15.6293 0.480702 18.1632 2.82089 18.8306 5.91537C19.498 9.00985 18.1549 12.1912 15.4749 13.8641C12.7948 15.5369 9.35588 15.3404 6.88257 13.3732C6.81668 13.3207 6.74396 13.2752 6.63263 13.1977L0.840723 19L0 18.1978L5.82371 12.3658C5.74646 12.2656 5.68965 12.1858 5.6283 12.106C4.09022 10.1285 3.64051 7.51038 4.43017 5.13067C5.21984 2.75096 7.14415 0.925279 9.55698 0.266643C9.95007 0.157251 10.3545 0.0866019 10.7522 0L12.2518 1.61932e-15ZM11.4884 13.7948C14.0295 13.8077 16.3277 12.2829 17.3102 9.93242C18.2926 7.58189 17.7654 4.86919 15.9748 3.06078C14.1841 1.25238 11.4832 0.704965 9.13291 1.67411C6.78265 2.64325 5.24665 4.93781 5.24202 7.48651C5.24318 10.9531 8.03216 13.7697 11.4884 13.7948L11.4884 13.7948Z" id="Shape" fill="#CDCDCD" stroke="none" />
                            </g>
                        </svg>
                    </button>
                </div>
               </form>
                <Button onClick={handleClickOpen1}>Your Account</Button><br/>
                <Button onClick={handleClickOpen}>Add Product</Button>
                <br/>
                <Button onClick={myProduct} >My Product</Button>
                    </div>
                        <Dialog open={open1} onClose={handleClose1} className='addProduct'>
                            <YourAccount />
                        </Dialog>                    
                <Dialog open={open} onClose={handleClose} className='addProduct'>
                     <AddProduct />    
                </Dialog>


                <div className='col-md-9 'id='body'>
                    <div className='row'>
                        <div className='col-md-12 pb-4'><h6><b>Featred</b></h6></div>
                    </div>
                   
                    <div className='row'>
                        <div className='col-md-3'> <div className='image_holder grid '>
                     <img src='https://picsum.photos/id/99/200/300' width="200" height="150" alt='event'/>
                     <div className='description'>
                     <span>25$</span> <br/>
                     <span>lorem ipsuem</span> <br/>
                       
                    </div>
                </div>
            </div>
                        <div className='col-md-3'>
                             <div className='image_holder grid '>

                     <img className='pic' src='https://picsum.photos/id/100/200/300' width="200" height="150" id='img' alt='event'/>
                     <div className='icon'> <InfoOutlinedIcon />  </div>    

                
                     <div className='description'>
                     <span>58$</span> <br/>
                     <span>lorem ipsuem</span> <br/>
                    </div>
                    </div>
                    </div>
                        <div className='col-md-3'> 
                        <div className='image_holder grid '>
                     <img src='https://picsum.photos/id/77/200/300' width="200" height="150" alt='event'/>
                     <div className='description'>
                     <span>41$</span> <br/>
                     <span>lorem ipsuem</span> <br/>
                    </div>
                    </div>
                    </div>
                    <div className='col-md-3'> 
                        <div className='image_holder grid '>
                     <img src='https://picsum.photos/id/98/200/300' width="200" height="150" alt='event'/>
                     <div className='description'>
                     <span>36$</span> <br/>
                     <span>lorem ipsuem</span> <br/>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 mt-5 mb-3'> <h6><b>All products</b></h6></div>
                        <div className='row'>
                        {markets && markets.map((markets) =>
                                (
                                    <SingleProduct key={markets.id} markets={markets} />)
                                )}

                        </div>
                    </div>
                    </div>
                    </div>
                     </div>
            </div>
            </div>       
         
    )
}
Market.prototype = {
    auth: PropTypes.object.isRequired,
    getMarket : PropTypes.func.isRequired,
    myProduct : PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    search : PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth, 
    markets: state.market,
    categories: state.categories,
})
export default connect(mapStateToProps , { getMarket, myProduct , search })(Market);
