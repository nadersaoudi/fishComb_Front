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
import MenuItem from '@material-ui/core/MenuItem';
const AddProduct = ( { auth: { user }, addProduct ,market: { categories }} ) => {
/****************************/
const [formData, setFormData] = useState({
    description: '',
    category_id: '',
    name: '',
    price: '',
    stock: '',
    status:'1',
    image: 'jaw'
})
const { name, category_id, description, price, stock, status,image } = formData;
const onchange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
const submit = e => {
    e.preventDefault();
    addProduct({
        category_id,
        description,
        name,
        price,
        stock,
        status,
        image
    })
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
            <div>
                <form  className='addProduct' onSubmit={e => submit(e)}>
                    <DialogContent>
                        <div className='row'>
                            <div className='col-sm-1 mr-2'>
                                <Avatar src={user && user.profile_image}/>
                            </div>
                            <div className='col-sm-10 pt-3'>
                                <div className='row'>
                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <h6> {user && user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1)}  {user && user.last_name.charAt(0).toUpperCase() + user.last_name.slice(1)}</h6>
                                        </div>
                                    </div>
                                <div className='row'>
                                    <div className='row pt-3'>
                                        <div className='col-sm-12'>
                                            <FormControl
                                                className='input_event'
                                                placeholder="Product Name"
                                                margin="dense"
                                                label="Product_name"
                                                name="name" value={name} onChange={e => onchange(e)}
                                                type="text"/>
                                        </div>
                                    </div>
                                <div className='row pt-3'>
                                    <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={open1}
                                        onClose={handleClose2}
                                        onOpen={handleOpen2}
                                        value={category_id}
                                        name="category_id"
                                        onChange={e => onchange(e)}>
                                        {categories && categories.map(c =>
                                        (<MenuItem key={c.id} value={c.id} >{c.name}</MenuItem>)
                                        )}
                                    </Select>
                                <div className='col-6'>
                                    <FormControl
                                        className='input_event'
                                        placeholder="Price"
                                        margin="dense"
                                        name="price" value={price} onChange={e => onchange(e)}
                                        type="text"/>
                                </div>
                            </div>
                        <div className='row pt-3'>
                            <div className='col-12'>
                                <FormControl
                                    placeholder="Stock"
                                    className='input_event'
                                    margin="dense"
                                    name="stock" value={stock} onChange={e => onchange(e)}
                                    type="text"/>
                            </div>
                        </div>
                        <div className='row pt-3'>
                            <div className='col-12'>
                                <FormControl
                                    placeholder="Description"
                                    className='input_event'
                                    margin="dense"
                                    id="Description"
                                    as="textarea" aria-label="With textarea"
                                    name="description" value={description} onChange={e => onchange(e)}
                                    type="textarea"/>
                             </div>
                        </div>
                        <div className='row pt-3 pb-2'>
                            <div className='col-4'>
                                <Button  variant="outlined" style={{ backgroundColor: '#202c43', color: 'white', borderRadius: '0' }}  >
                                    <span>Upload Image </span>
                                </Button>
                            </div>
                            <div className='col-4'>
                            </div>
                            <div className='col-md-4'>
                                <Button type='submit'
                                    style={{ backgroundColor: "#f2f3f3", color: 'black', borderRadius: '0' }} 
                                    onClick={handleClose}>
                                    Save Product
                                </Button>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DialogContent>
</form>
</div>
</Fragment>
)
}
AddProduct.prototype = {
    auth: PropTypes.object.isRequired,
    addProduct : PropTypes.func.isRequired,
    ccategories: PropTypes.object.isRequired,
    market:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth,
    market: state.market,
    addProduct: state.market,
    categories: state.market
})
export default connect(mapStateToProps , { addProduct })(AddProduct);