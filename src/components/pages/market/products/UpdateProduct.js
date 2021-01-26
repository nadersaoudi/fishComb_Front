import React from 'react' ;
import { Fragment ,useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from 'react-bootstrap/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Avatar } from "@material-ui/core";
import { updateProduct } from '../../../../Actions/Market';
const UpdateProduct = ({ updateProduct , market:{ product, categories }, loading}) => {
/**********************************/
const [category_id, setCategory_id] = useState('')
const [formData, setFormData] = useState({
    description: '',
    name: '',
    price: '',
    stock: '',
    status:'',
    image: 'jaw'
})
const { name,description, price, stock, status, image } = formData;
useEffect(() => {
    setFormData({
        name: loading || !product.name ? '' : product.name,
        category_id: loading || !product.category_id ? '' : product.category_id,
        description: loading || !product.description ? '' : product.description,
        price: loading || !product.price ? '' : product.price,
        stock: loading || !product.stock ? '' : product.stock,
        status: loading || !product.status ? '' : product.status,
    })
}, [loading])
const onchange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
const submit = e => {
    e.preventDefault();
    updateProduct({ 
        description,
        category_id,
        name,
        price,
        stock,
        status,
        image
    },product.id)
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
    setOpen2(false);
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
/**********************************/
    return (
        <Fragment>
            <div>
                <form  className='addProduct' onSubmit={e => submit(e)}>
                    <DialogContent>
                        <div className='row'>
                            <div className='col-sm-1 mr-2'>
                                
                            </div>
                            <div className='col-sm-10 pt-3'>
                                <div className='row'>
                                    <div className='row'>
                                        <div className='col-sm-12'>
                                           
                                        </div>
                                    </div>
                                <div className='row'>
                                    <div className='row pt-3'>
                                        <div className='col-sm-12'>
                                            <FormControl
                                                className='input_event'
                                                placeholder="Product Name"
                                                label="Product_name"
                                                name="name" value={name} onChange={e => onchange(e)}
                                                type="text"/>
                                        </div>
                                    </div>
                                <div className='row pt-3 pb-3'>
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
                                <div className='col-6 pt-3'>
                                    <FormControl
                                        className='input_event'
                                        placeholder="Price"
                                        margin="dense"
                                        name="price" value={price} onChange={e => onchange(e)}
                                        type="text"/>
                                </div>
                            </div>
                        <div className='row '>
                            <div className='col-12'>
                                <FormControl
                                    placeholder="Stock"
                                    className='input_event'
                                    margin="dense"
                                    name="stock" value={stock} onChange={e => onchange(e)}
                                    type="text"/>
                            </div>
                            <div className='col-12'>
                                <FormControl
                                    placeholder="1 or 0 "
                                    className='input_event'
                                    margin="dense"
                                    name="status" value={status} onChange={e => onchange(e)}
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
                            <div className='col-md-5'>
                                <Button  variant="outlined" style={{ backgroundColor: '#202c43', color: 'white', borderRadius: '0' }}  >
                                    <span>Upload Image </span>
                                </Button>
                            </div>
                            <div className='col-2'>
                            </div>
                            <div className='col-md-5'>
                                <Button type='submit'
                                    style={{ backgroundColor: "#f2f3f3", color: 'black', borderRadius: '0', width :'-webkit-fill-available' }} 
                                    onClick={handleClose2}>
                                    Update Product 
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
UpdateProduct.prototype= {
    auth: PropTypes.object.isRequired,
    updateProduct : PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    market:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth,
    events: state.events,
    market: state.market,
    updateProduct: state.market,
    categories: state.market
})
export default connect(mapStateToProps, { updateProduct }) (UpdateProduct) ;