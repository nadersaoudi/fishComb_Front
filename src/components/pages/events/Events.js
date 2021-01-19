import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import './Events.css';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { addEvent, getevents, sortEvents,myevents,search } from '../../../Actions/events'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Single from './single'
import FormControl from 'react-bootstrap/FormControl'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import SortIcon from '@material-ui/icons/Sort';
const useStyles = makeStyles({
    root: {
        //  maxWidth: '2200px'
        // width:'2200px',



    },
});
const Events = ({ addEvent, getevents, events: { events, categories },sortEvents,myevents,search }) => {
    useEffect(() => {
        getevents()
    }, [getevents])
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category_id: '',
        location: '',
        date: '',
        cover: 'non',
        video_link: '',
        status: '1'
    })
    const [open1, setOpen1] = React.useState(false);
    const handleClose1 = () => {
        setOpen1(false);
    };

    const handleOpen1 = () => {
        setOpen1(true);
    };

    // eslint-disable-next-line
    const { name, description, category_id, location, date, cover, video_link, status } = formData;
    const onchange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const submit = e => {
        e.preventDefault();
        addEvent({
            name,
            description,
            category_id,
            location,
            date,
            cover: 'non',
            video_link,
            status: '1'
        })
        e.target.reset();
    }
    /****************************************** */
    const [loc,setlocation]=useState({
        location1:'location',
        asc:'asc'
    })
    const {location1 ,asc}=loc;
    const onchange1 = e => setlocation({ ...loc, [e.target.name]: e.target.value });
    const submit1 = e => {
        e.preventDefault();
        console.log(location1+'*****'+asc)
        sortEvents(loc);
    }
    const [filter, setFilter] = React.useState('name');
    const [value,setValue] =React.useState('');
    const handleChange = (event) => {
      setFilter(event.target.value);
    };
    const handleChange1 =e=>{
        setValue(e.target.value)
    }
    const onsubmit1=e=>{
        e.preventDefault();
        console.log(filter)
        search(filter,value)
    }
    return (
        <div>
            <div className='row'>
                <div className='col-md-12 pt-5 mt-5'>
                </div>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className="col-8 pb-4">
                        <ul className="nav nav-pills nav-justified " id='navprofil'>
                            <li className="nav-item">
                                <NavLink to={`/NavEvents`} className="m"><span className="n">All Webinars</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/MyStream`} className="m"><span className="n">My Streams</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/invited`} className="m"><span className="n">Invited Webinars</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <span className="filter">Filter</span>
                                <form onSubmit={e=>submit1(e)}>
                                <div className='row'>
                                <div className='col-sm-1'>

                                    <div className='col-sm-1 filtre'>

                                       <div className='col-xs-2 mr-2'> <select  value={location1}

                                                name="location1"
                                                onChange={e => onchange1(e)} >
                                            <option value='location'>
                                                                      Location
                                    </option>
                                            <option value='category'>
                                                Categories
                                    </option>
                                        </select></div>
                                   <div className='col-xs-2 mr-2'> <select value={asc}

                                                name="asc"
                                                onChange={e => onchange1(e)} >
                                        <option value='asc'>&#8593;</option>
                                        <option value='desc'>&#8595;</option>
                                    </select></div>
                                    <div className='col-xs-3'><button type='submit' id='button_sort'> <SortIcon/> Sort Event</button></div>
                                </div>
                                </div>
                                </div>
                                
                                
                                </form>
                                        

                            </li>
                        </ul>

                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3  side_min_bar'>
                    <form onSubmit={e => onsubmit1(e)} >
                        <div className="col-md-12 header__input" >
                        
     
    
                            <input type="text" placeholder='Search Fishcomb' aria-label="Search" height='25px' value={value} onChange={handleChange1}/>
                            <RadioGroup  className="radio_input col-md-5" aria-label="gender" name="gender1" value={filter} onChange={handleChange}>
                                     <FormControlLabel value="username" control={<Radio />} label="By user" />
                        </RadioGroup>
                            <button className="col-1  header__button" >
                                <svg width="19px" height="19px" version="1.1" xmlns="http://www.w3.org/1999/xlink">
                                    <g id="fishcomb-product-icons-14">
                                        <path d="M12.2518 1.61932e-15C12.3328 0.0283492 12.4155 0.051191 12.4995 0.0683699C15.6293 0.480702 18.1632 2.82089 18.8306 5.91537C19.498 9.00985 18.1549 12.1912 15.4749 13.8641C12.7948 15.5369 9.35588 15.3404 6.88257 13.3732C6.81668 13.3207 6.74396 13.2752 6.63263 13.1977L0.840723 19L0 18.1978L5.82371 12.3658C5.74646 12.2656 5.68965 12.1858 5.6283 12.106C4.09022 10.1285 3.64051 7.51038 4.43017 5.13067C5.21984 2.75096 7.14415 0.925279 9.55698 0.266643C9.95007 0.157251 10.3545 0.0866019 10.7522 0L12.2518 1.61932e-15ZM11.4884 13.7948C14.0295 13.8077 16.3277 12.2829 17.3102 9.93242C18.2926 7.58189 17.7654 4.86919 15.9748 3.06078C14.1841 1.25238 11.4832 0.704965 9.13291 1.67411C6.78265 2.64325 5.24665 4.93781 5.24202 7.48651C5.24318 10.9531 8.03216 13.7697 11.4884 13.7948L11.4884 13.7948Z" id="Shape" fill="#CDCDCD" stroke="none" />
                                    </g>
                                </svg>
                               
                            </button>
                        </div>
                       
                       
                        </form>
                        <Button className="event" onClick={myevents}>My Events</Button><br />



                        <Button className="event" onClick={handleClickOpen}>
                            Add Events
                                 </Button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className='dialogForm'   >
                            <form className='add__event'onSubmit={e => submit(e)}>
                                <DialogTitle id="form-dialog-title">Add event</DialogTitle>
                                <DialogContent>
                                    <div className="row pt-3">
                                        <div className=' col-md-12'>
                                            <FormControl
                                                className='input_event'
                                                placeholder="Title"
                                                margin="dense"
                                                id="Title"
                                                label="Title"
                                                type="text"

                                                name="name" value={name} onChange={e => onchange(e)}
                                            /></div></div>
                                    <div className="row pt-3">
                                        <div className='col-8'>
                                            <FormControl
                                                className='input_event'
                                                margin="dense"
                                                id="Date"
                                                type="Date"

                                                name="date" value={date} onChange={e => onchange(e)}
                                            />

                                        </div>
                                        <div className='col-2'>


                                            <Select
                                                labelId="demo-controlled-open-select-label"
                                                id="demo-controlled-open-select"
                                                open={open1}
                                                onClose={handleClose1}
                                                onOpen={handleOpen1}
                                                value={category_id}
                                                name="category_id"
                                                onChange={e => onchange(e)}
                                            >

                                                {categories && categories.map(c =>
                                                    (<MenuItem key={c.id} value={c.id} >{c.name} </MenuItem>)

                                                )}

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
                                                fullWidth
                                                name="location" value={location} onChange={e => onchange(e)}
                                            />
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

                                                name="description" value={description} onChange={e => onchange(e)}
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
                                                name="video_link" value={video_link} onChange={e => onchange(e)}
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



                    </div>

                    <div className='col-md-9 ' id='body'>
                        <div className='row'>
                            <div className='col-md-12 pb-4'><h6 className="h66"><b>Featred</b></h6></div>
                        </div>

                        <div className='row'>
                            <div className='col-md-3'> <div className='image_holder grid '>
                                <img src='https://picsum.photos/id/99/200/300' width="200" height="150" alt='event' />
                                <div className='description'>
                                   <span>lorem ipsuem</span> <br />

                                    <span>lorem ipsuem</span> <br />

                                </div>
                            </div>
                            </div>
                            <div className='col-md-3'> <div className='image_holder grid '>
                                <img src='https://picsum.photos/id/100/200/300' width="200" height="150" alt='event' />
                                <div className='description'>
                                    <span>lorem ipsuem</span> <br />
                                    <span>lorem ipsuem</span> <br />
                                </div>
                            </div></div>
                            <div className='col-md-3'>
                                <div className='image_holder grid '>
                                    <img src='https://picsum.photos/id/77/200/300' width="200" height="150" alt='event' />
                                    <div className='description'>
                                        <span>lorem ipsuem</span> <br />
                                        <span>lorem ipsuem</span> <br />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='image_holder grid '>
                                    <img src='https://picsum.photos/id/98/200/300' width="200" height="150" alt='event' />
                                    <div className='description'>
                                        <span>lorem ipsuem</span> <br />
                                        <span>lorem ipsuem</span> <br />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-md-12 mt-5 mb-3'> <h6 className="h66"><b>All Events</b></h6></div>
                            <div className='row'>
                                {events && events.map((event) =>
                                (
                                    <Single key={event.id} event={event} />)
                                )}

                            </div>
                        </div>

                    </div>


                </div>
            </div>



        </div>
    )
}

Events.prototype = {
    addEvent: PropTypes.func.isRequired,
    getevents: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    sortEvents: PropTypes.func.isRequired,
    myevents: PropTypes.func.isRequired,
    search:PropTypes.func.isRequired
};
const mapStateToProps = state => ({

    addEvent: state.addEvent,
    events: state.events,
    categories: state.categories,

})
export default connect(mapStateToProps, { addEvent, getevents, sortEvents,myevents,search })(Events);
