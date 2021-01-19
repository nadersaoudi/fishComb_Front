import React from 'react';
import { NavLink } from 'react-bootstrap';
import { Avatar } from "@material-ui/core";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import FormControl from 'react-bootstrap/FormControl';
import "./Market.css"
const Market =( {auth : {user}}) => {
/****************************/    
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
                <div className="col header__input" >
                    <input type="text" placeholder='Search Marketplace' aria-label="Search" height='25px' />
                        <button className="col-1  header__button" >       
             <svg width="19px" height="19px"  version="1.1" xmlns="http://www.w3.org/1999/xlink">
                <g id="fishcomb-product-icons-14">
              <path d="M12.2518 1.61932e-15C12.3328 0.0283492 12.4155 0.051191 12.4995 0.0683699C15.6293 0.480702 18.1632 2.82089 18.8306 5.91537C19.498 9.00985 18.1549 12.1912 15.4749 13.8641C12.7948 15.5369 9.35588 15.3404 6.88257 13.3732C6.81668 13.3207 6.74396 13.2752 6.63263 13.1977L0.840723 19L0 18.1978L5.82371 12.3658C5.74646 12.2656 5.68965 12.1858 5.6283 12.106C4.09022 10.1285 3.64051 7.51038 4.43017 5.13067C5.21984 2.75096 7.14415 0.925279 9.55698 0.266643C9.95007 0.157251 10.3545 0.0866019 10.7522 0L12.2518 1.61932e-15ZM11.4884 13.7948C14.0295 13.8077 16.3277 12.2829 17.3102 9.93242C18.2926 7.58189 17.7654 4.86919 15.9748 3.06078C14.1841 1.25238 11.4832 0.704965 9.13291 1.67411C6.78265 2.64325 5.24665 4.93781 5.24202 7.48651C5.24318 10.9531 8.03216 13.7697 11.4884 13.7948L11.4884 13.7948Z" id="Shape" fill="#CDCDCD" stroke="none" />
            </g>
          </svg>
         </button>
      </div>
                <Button>Your Account</Button><br/>
                <Button onClick={handleClickOpen}>Add Product</Button>
                    </div>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <form >
                                <DialogTitle id="form-dialog-title">
                                    <Avatar />
                                </DialogTitle>
                                <DialogContent>
                                    <div className="row pt-3">
                                        <div className=' col-md-12'>
                                            <FormControl
                                                className='input_event'
                                                placeholder="Title"
                                                margin="dense"
                                                id="Title"
                                                label="Title"
                                                type="text"/>
                                            </div>
                                            </div>
                                    <div className="row pt-3">
                                        <div className='col-8'>
                                            <FormControl
                                                className='input_event'
                                                margin="dense"
                                                id="Date"
                                                type="Date"/>
                                        </div>
                                        <div className='col-2'>
                                            <Select
                                                labelId="demo-controlled-open-select-label"
                                                id="demo-controlled-open-select"
                                                name="category_id"
                                                >
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="row pt-3">
                                        <div className='col-sm-12'>
                                            <FormControl
                                                placeholder="Location"
                                                margin="dense"
                                                id="Location"
                                                className='input_event'
                                                type="text"
                                                fullWidth />
                                            </div>
                                        </div>
                                    <div className="row pt-3">
                                        <div className='col-sm-12'>
                                            <FormControl
                                                placeholder="Description"
                                                className='input_event'
                                                margin="dense"
                                                id="Description"
                                                as="textarea" aria-label="With textarea"
                                                type="textarea"
                                            /></div></div>
                                    <div className='row pt-3'>
                                        <div className="btn-group btn-group-toggle col-md-12  ">
                                            <Button variant="outlined" style={{ backgroundColor: '#202c43', color: 'white', borderRadius: '0' }}  >
                                                <span  >Upload Video </span>

                                            </Button>
                                        </div>  </div>
                                    <div className="row pt-3">
                                        <div className='col-sm-12'>
                                            <FormControl
                                                placeholder="Video Link"
                                                className='input_event'
                                                margin="dense"
                                                id="video"

                                                type="textarea"
                                                fullWidth
                                                name="video_link" 
                                            /></div></div>
                                    <div className='row pt-2 px-0'>
                                        <div className='col-md-9'></div>
                                        <div className='col-md-3'>
                                        <Button type='submit'
                                         style={{ backgroundColor: "#f2f3f3", color: 'black', borderRadius: '0' }} 
                                         onClick={handleClose}>
                                        Add Event
                                        </Button>
                                        </div>
                                </div>
                            </DialogContent>



                            </form>
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
                    <div className='col-md-2'> 
                        <div className='image_holder grid '>
                 <img src='https://picsum.photos/id/14/200/300' width="125" height="100" alt='event'/>
                 <div className='description'>
                             <span>74$</span> <br/>
                             <span>lorem ipsuem</span> <br/>
                    </div>
                 </div>
            </div>
            <div className='col-md-2 mb-4'> 
                        <div className='image_holder grid '>
                 <img src='https://picsum.photos/id/10/200/300' width="125" height="100" alt='event'/>
                 <div className='description'>
                             <span>16$</span> <br/>
                             <span>lorem ipsuem</span> <br/>
                    </div>
                 </div>
            </div>
            <div className='col-md-2 mb-4'> 
                        <div className='image_holder grid '>
                 <img src='https://picsum.photos/id/7/200/300' width="125" height="100" alt='event'/>
                 <div className='description'>
                             <span>156$</span> <br/>
                             <span>lorem ipsuem</span> <br/>
                    </div>
                 </div>
            </div>
            <div className='col-md-2 mb-4'> 
                        <div className='image_holder grid '>
                 <img src='https://picsum.photos/id/6/200/300' width="125" height="100" alt='event'/>
                 <div className='description'>
                             <span>36$</span> <br/>
                             <span>lorem ipsuem</span> <br/>
                    </div>
                 </div>
            </div>
            <div className='col-md-2 mb-4'> 
                        <div className='image_holder grid '>
                 <img src='https://picsum.photos/id/32/200/300' width="125" height="100" alt='event'/>
                 <div className='description'>
                             <span>33$</span> <br/>
                             <span>lorem ipsuem</span> <br/>
                    </div>
                 </div>
            </div>
            <div className='col-md-2 mb-4'> 
                        <div className='image_holder grid '>
                 <img src='https://picsum.photos/id/4/200/300' width="125" height="100" alt='event'/>
                 <div className='description'>
                             <span>77$</span> <br/>
                             <span>lorem ipsuem</span> <br/>
                    </div>
                 </div>
            </div>
            <div className='col-md-2 mb-4'> 
                        <div className='image_holder grid '>
                 <img src='https://picsum.photos/id/16/200/300' width="125" height="100" alt='event'/>
                 <div className='description'>
                             <span>53$</span> <br/>
                             <span>lorem ipsuem</span> <br/>
                    </div>
                 </div>
            </div>
            <div className='col-md-2 mb-4'> 
                        <div className='image_holder grid '>
                 <img src='https://picsum.photos/id/12/200/300' width="125" height="100" alt='event'/>
                 <div className='description'>
                             <span>1$</span> <br/>
                             <span>lorem ipsuem</span> <br/>
                    </div>
                 </div>
            </div>
            <div className='col-md-2 mb-4'> 
                        <div className='image_holder grid '>
                 <img src='https://picsum.photos/id/17/200/300' width="125" height="100" alt='event'/>
                 <div className='description'>
                             <span>65$</span> <br/>
                             <span>lorem ipsuem</span> <br/>
                    </div>
                 </div>
            </div>
            <div className='col-md-2 mb-4'> 
                        <div className='image_holder grid '>
                 <img src='https://picsum.photos/id/24/200/300' width="125" height="100" alt='event'/>
                 <div className='description'>
                             <span>30$</span> <br/>
                             <span>lorem ipsuem</span> <br/>
                    </div>
                 </div>
            </div>
            <div className='col-md-2 mb-4'> 
                        <div className='image_holder grid '>
                 <img src='https://picsum.photos/id/41/200/300' width="125" height="100" alt='event'/>
                 <div className='description'>
                             <span>62$</span> <br/>
                             <span>lorem ipsuem</span> <br/>
                    </div>
                 </div>
            </div>
            <div className='col-md-2 mb-4'> 
                        <div className='image_holder grid '>
                 <img src='https://picsum.photos/id/52/200/300' width="125" height="100" alt='event'/>
                 <div className='description'>
                             <span>100$</span> <br/>
                             <span>lorem ipsuem</span> <br/>
                    </div>
                 </div>
            </div>
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
}
const mapStateToProps = state => ({
    auth: state.auth,  
})
export default connect(mapStateToProps)(Market);
