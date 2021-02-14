import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { IoBasketSharp } from 'react-icons/io5';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { getMarket, myProduct, getCategories, search } from '../../../Actions/Market';
import { showCart } from '../../../Actions/cart';
import "./Market.css";
import DialogContent from '@material-ui/core/DialogContent';
import { addProduct } from '../../../Actions/Market';
import FormControl from 'react-bootstrap/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import YourAccount from './YourAccount';
import { Avatar } from "@material-ui/core";
import SingleProduct from './products/SingleProduct';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const Market = ({ auth: { user }, getMarket, markets: { markets, categories }, myProduct, search, addProduct, cart: { cart }, showCart }) => {
    /******************************/
    useEffect(() => {
        getMarket()
    }, [getMarket])
    useEffect(() => {
        showCart()
    }, [showCart])

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
    const [name, setname] = useState('')
    const [description, setdescription] = useState('')
    const [category_id, setcategoryid] = useState('')
    const [price, setprice] = useState('')
    const [stock, setstock] = useState('')
    const [image, setimage] = useState('')
    const onnamechange = e => {
        setname(e.target.value)
    }

    const ondescchange = e => {
        setdescription(e.target.value)
    }

    const oncategorychange = e => {
        setcategoryid(e.target.value)
    }

    const onpricechange = e => {
        setprice(e.target.value)
    }

    const onstockchange = e => {
        setstock(e.target.value)
    }
    const onimagechange = e => {
        setimage(e.target.files[0])
    }
    const submit = e => {
        e.preventDefault();
        const file = new FormData();
        file.append('name', name);
        file.append('description', description);
        file.append('category_id', category_id);
        file.append('price', price);
        file.append('stock', stock);
        file.append('image', image);
        file.append('status', 1);
        addProduct(file)
        e.target.reset();
    }
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
    /*********************************/
    return (
        <div>
            <div>
                <div className='row'>
                    <div className='col-md-12  mt-5'>
                    </div>
                    <div className='row pb-3'>
                        <div className='col-md-3'></div>
                        <div className="col-sm-9  pb-3">
                            <ul className="nav nav-pills nav-justified " id='navprofil'>
                                <li className="nav-item">
                                    <NavLink to={`#`} className="link_cart"><span className='n'>Multimedia</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={`#`} className="link_cart"><span className='n'>Books</span></NavLink>
                                </li>
                                <li className="col-sm-7">
                                </li>
                                <li className='nav-item'>
                                    <button className='btn btn-outline-dark button__cart'><NavLink to={'/dashboard/cart'} className="link__cart"><span className='cart__span'>Basket <IoBasketSharp />{cart && cart.carts ? <div>{cart.carts.length}</div> : <div></div>}</span></NavLink> </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='row pt-4'>
                        <div className='col-md-3  side_min_bar'>
                            <form onSubmit={e => onsubmit1(e)} >
                                <div className="col-sm-11 px-0 header__input" >
                                    <input type="text" placeholder='Search Product' aria-label="Search" value={value} onChange={handleChange1} />
                                    <button className="col-sm-2  header__button" >
                                        <svg width="19px" height="19px" version="1.1" xmlns="http://www.w3.org/1999/xlink">
                                            <g id="fishcomb-product-icons-14">
                                                <path d="M12.2518 1.61932e-15C12.3328 0.0283492 12.4155 0.051191 12.4995 0.0683699C15.6293 0.480702 18.1632 2.82089 18.8306 5.91537C19.498 9.00985 18.1549 12.1912 15.4749 13.8641C12.7948 15.5369 9.35588 15.3404 6.88257 13.3732C6.81668 13.3207 6.74396 13.2752 6.63263 13.1977L0.840723 19L0 18.1978L5.82371 12.3658C5.74646 12.2656 5.68965 12.1858 5.6283 12.106C4.09022 10.1285 3.64051 7.51038 4.43017 5.13067C5.21984 2.75096 7.14415 0.925279 9.55698 0.266643C9.95007 0.157251 10.3545 0.0866019 10.7522 0L12.2518 1.61932e-15ZM11.4884 13.7948C14.0295 13.8077 16.3277 12.2829 17.3102 9.93242C18.2926 7.58189 17.7654 4.86919 15.9748 3.06078C14.1841 1.25238 11.4832 0.704965 9.13291 1.67411C6.78265 2.64325 5.24665 4.93781 5.24202 7.48651C5.24318 10.9531 8.03216 13.7697 11.4884 13.7948L11.4884 13.7948Z" id="Shape" fill="#CDCDCD" stroke="none" />
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </form>
                            <div className='row pt-2'>
                                <div className='col-sm-4'>
                                    <Button className='marketbotton ' onClick={handleClickOpen1}><h6>Your Account</h6></Button>
                                </div>
                            </div>
                            <div className='row pt-2'>
                                <div className='col-sm-4'>
                                    <Button className='marketbotton' onClick={handleClickOpen}><h6>Add Product</h6></Button>
                                </div>
                            </div>
                            <div className='row pt-2'>
                                <div className='col-sm-4'>
                                    <Button className='marketbotton' onClick={myProduct} ><h6>My Product</h6></Button>
                                </div>
                            </div>
                        </div>
                        <Dialog className='addProduct'>
                            <YourAccount />
                        </Dialog>
                        <Dialog open={open} onClose={handleClose} className='addProduct'>
                            <div>
                                <form className='addProduct' onSubmit={e => submit(e)}>
                                    <DialogContent>
                                        <div className='row'>
                                            <div className='col-sm-1 mr-2'>
                                                <Avatar src={user && user.attributes.profile_image} />
                                            </div>
                                            <div className='col-sm-10 pt-3'>
                                                <div className='row'>
                                                    <div className='row pb-2'>
                                                        <div className='col-sm-12'>
                                                            <h6><b>{user && user.attributes.first_name.charAt(0).toUpperCase() + user.attributes.first_name.slice(1)}  {user && user.attributes.last_name.charAt(0).toUpperCase() + user.attributes.last_name.slice(1)}</b></h6>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='row pt-3'>
                                                            <div className='col-sm-12'>
                                                                <Row>
                                                                    <Col xs={4}>
                                                                        <Form.Label>Name Product</Form.Label>
                                                                    </Col>
                                                                    <Col xs={8}>
                                                                        <FormControl
                                                                            className='input_event'
                                                                            placeholder="Product Name"
                                                                            margin="dense"
                                                                            label="Product_name"
                                                                            name="name" value={name} onChange={onnamechange}
                                                                            type="text" />
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                        <div className='row pt-3 '>
                                                            <div className='col-12'>
                                                                <Row>
                                                                    <Col xs={4}>
                                                                        <Form.Label>Price</Form.Label>
                                                                    </Col>
                                                                    <Col xs={8}>
                                                                        <FormControl
                                                                            className='input_event'
                                                                            placeholder="Price"
                                                                            margin="dense"
                                                                            name="price" value={price} onChange={onpricechange}
                                                                            type="text" />
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                        <Row className='pt-3 pb-2'>
                                                            <Col xs={12}>
                                                                <Row>
                                                                    <Col xs={4}></Col>
                                                                    <Col xs={8}>
                                                                        <select
                                                                            className='col-md-12'
                                                                            // placeholder='Category Event'
                                                                            value={category_id}
                                                                            name="category_id"
                                                                            onChange={oncategorychange}>
                                                                            {categories && categories.map(c =>
                                                                                (<option key={c.id} value={c.id}>{c.name} </option>)
                                                                            )}
                                                                        </select>
                                                                    </Col>
                                                                    </Row>
                                                            </Col>
                                                        </Row>
                                                        <div className='row pt-3'>
                                                            <div className='col-12'>
                                                                 <Row>
                                                                    <Col xs={4}>
                                                                        <Form.Label>Quantity</Form.Label>
                                                                    </Col>
                                                                    <Col xs={8}>
                                                                        <FormControl
                                                                            placeholder="Quantity"
                                                                            className='input_event'
                                                                            margin="dense"
                                                                            name="stock" value={stock} onChange={onstockchange}
                                                                            type="text" />
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                        <div className='row pt-3'>
                                                            <div className='col-12'>
                                                                <Row>
                                                                    <Col xs={4}>
                                                                        <Form.Label>Description</Form.Label>
                                                                    </Col>
                                                                    <Col xs={8}>
                                                                        <FormControl
                                                                            placeholder="Description"
                                                                            className='input_event'
                                                                            margin="dense"
                                                                            id="Description"
                                                                            as="textarea" aria-label="With textarea"
                                                                            name="description" value={description} onChange={ondescchange}
                                                                            type="textarea" />
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                        <div className='row pt-3 pb-2'>
                                                            <div className='col-12'>
                                                                <div className='row pt-3'>
                                                                    <div className="btn-group btn-group-toggle col-md-12  ">
                                                                        <div className='col-md-4'> Upload image </div><input accept="image/*" id="icon-button-file" type="file" onChange={onimagechange} />
                                                                        {   /*<Button variant="outlined" style={{ backgroundColor: '#202c43', color: 'white', borderRadius: '0' }}  >
                                                                            <span  >Upload Video </span>
                                                                            </Button>*/}
                                                                    </div>  </div> </div>
                                                            <div className='col-12'>
                                                                <div className='row pt-3'>
                                                                    <div className="btn-group btn-group-toggle col-md-12  ">
                                                                        <div className='col-md-4'>Upload File </div><input accept="image/*" id="icon-button-file" type="file" placeholder='file product' />
                                                                        { /*<Button variant="outlined" style={{ backgroundColor: '#202c43', color: 'white', borderRadius: '0' }}  >
                                                                            <span  >Upload Video </span>
                                                                            </Button>*/}
                                                                    </div> </div> </div>
                                                            <div className='col-2'></div>
                                                        </div>
                                                    </div>
                                                    <Row className='pb-4 pt-3'>
                                                        <Col xs={8}></Col>
                                                        <Col xs={4}>
                                                            <Button type='submit'
                                                                    variant="contained" color="primary"
                                                                    onClick={handleClose} className='float-right'>
                                                                    Save Product
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </form>
                            </div>
                        </Dialog>
                        <div className='col-md-9 ' id='body'>
                            <div className='row'>
                                <div className='col-md-12 pb-4'><h6><b>Featured</b></h6></div>
                            </div>

                            <div className='row'>
                                <div className='col-md-3 '> <div className='image_holder grid'>
                                    <img src='https://picsum.photos/id/99/200/300' width="200" height="180" alt='event' style={{ borderRadius: '5px' }} className='product' />
                                    <div className='description'>
                                        <span>25$</span> <br />
                                        <span>lorem ipsuem</span> <br />

                                    </div>
                                </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='image_holder grid '>

                                        <img className='pic' src='https://picsum.photos/id/100/200/300' width="200" height="180" id='img' style={{ borderRadius: '5px' }} alt='event' className='product' />
                                        <div className='icon'> </div>


                                        <div className='description'>
                                            <span>58$</span> <br />
                                            <span>lorem ipsuem</span> <br />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='image_holder grid '>
                                        <img src='https://picsum.photos/id/77/200/300' width="200" height="180" alt='event' style={{ borderRadius: '5px' }} className='product' />
                                        <div className='description'>
                                            <span>41$</span> <br />
                                            <span>lorem ipsuem</span> <br />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='image_holder grid '>
                                        <img src='https://picsum.photos/id/98/200/300' width="200" height="180" style={{ borderRadius: '5px' }} alt='event' className='product' />
                                        <div className='description'>
                                            <span>36$</span> <br />
                                            <span>lorem ipsuem</span> <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-12 mt-5 mb-3'> <h6><b>All products</b></h6></div>
                                <div className='row'>
                                    {markets && markets.map((markets) =>
                                    (
                                        <SingleProduct key={markets.id} markets={markets} className='products' />)
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
    getMarket: PropTypes.func.isRequired,
    myProduct: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    search: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired,
    cart: PropTypes.object.isRequired,
    showCart: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth,
    markets: state.market,
    categories: state.categories,
    cart: state.cart,
    carts: state.cart
})
export default connect(mapStateToProps, { getMarket, myProduct, search, addProduct, showCart })(Market);
