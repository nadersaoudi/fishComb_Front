import React from 'react';
import { Fragment, useState} from 'react';
import { Avatar } from "@material-ui/core";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DialogContent from '@material-ui/core/DialogContent';
import { addProduct } from '../../../../Actions/Market';
import FormControl from 'react-bootstrap/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import MenuItem from '@material-ui/core/MenuItem';
const AddProduct = ( { auth: { user }, addProduct ,market: { categories }} ) => {
/*****************************/
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
/*******************************/  
    return (
        <Fragment>
    
</Fragment>
)
}
AddProduct.prototype = {
    auth: PropTypes.object.isRequired,
    addProduct : PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    market:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth,
    market: state.market,
    addProduct: state.market,
    categories: state.market
})
export default connect(mapStateToProps , { addProduct })(AddProduct);