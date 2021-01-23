import Single from './single'
import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { getevent, deleteEvent, subscribEevent, invite, getfriends, update } from '../../../Actions/events'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Events.css'
import { IoShareSocialOutline } from "react-icons/io5";
import { Avatar, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Slide } from '@material-ui/core'
import { FormControl } from 'react-bootstrap'
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { ReactTinyLink } from 'react-tiny-link';
import UpdateRoundedIcon from '@material-ui/icons/UpdateRounded';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import { NavLink } from 'react-bootstrap';
import Switch from '@material-ui/core/Switch';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Eventitem = ({ match, getevent, events: { event, friends, events, categories, loading }, deleteEvent, auth: { user }, getfriends, invite, update }) => {
    useEffect(() => {
        getevent(match.params.id);
    }, [getevent, match.params.id]
    )
    useEffect(() => {
        getfriends()
    }, [getfriends]
    )
    const [state, setState] = React.useState({
        checkedA: true

    });


    const increment = useCallback(() => {

        getevent(event.next_event)
    }, [event && event.next_event])

    const decrement = useCallback(() => {

        getevent(event.previous_event)
    }, [event && event.previous_event])


    const [open1, setOpen1] = React.useState(false);


    const [open2, setOpen2] = React.useState(false);
    const handleClose2 = () => {
        setOpen2(false);
    };

    const handleOpen2 = () => {
        setOpen2(true);
    };
    const handleClickOpen2 = () => {
        setOpen2(true);
    };
    const [open3, setOpen3] = React.useState(false);
    const handleClose3 = () => {
        setOpen3(false);
    };

    const handleOpen3 = () => {
        setOpen3(true);
    };
    const [open, setOpen] = React.useState(false);






    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleClose1 = () => {
        setOpen1(false);
    };

    const handleOpen1 = () => {
        setOpen1(true);
    };
    const [user_id, setUser] = useState('');

    const onsubmit = e => {
        e.preventDefault();
        invite(user_id, event.id)
    }

    const [uid, setText] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        location: '',
        date: '',
        cover: 'non',
        video_link: '',
        status: '',

    })
    const [category_id, setCategory_id] = useState('')
    const { name, description, location, date, cover, video_link, status } = formData;
    const handleswitch = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        if (event.target.checked === true) {
            setFormData({ status: true })
        }
        else { setFormData({ status: false }) }
        console.log(status)
    };
    useEffect(() => {
        setFormData({
            location: loading || !event.location ? '' : event.location,
            name: loading || !event.name ? '' : event.name,
            description: loading || !event.description ? '' : event.description,
            cover: loading || !event.cover ? '' : event.cover,
            video_link: loading || !event.video_link ? '' : event.video_link,
            status: loading || !event.status ? '' : event.status,
            date: loading || !event.date ? '' : event.date,
        })
    }, [loading])

    const onchange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const submit = e => {
        e.preventDefault();
        // console.log(formData)
        update({
            name,
            description,
            category_id,
            location,
            date,
            cover: 'non',
            video_link,
            status,

        }, event.id)
        e.target.reset();
    }
    const [disable, setdisable] = useState(false);
    return (
        <div>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className="col-8 ">
                    <ul className="nav nav-pills nav-justified" id='navprofil'>
                        <li className="nav-item">
                            <NavLink to={`/NavEvents`} className="m"><span className="n">General event</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/MyStream`} className="m"><span className="n">My Streams</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/invited`} className="m"><span className="n">Invited Webinars</span></NavLink>
                        </li>

                    </ul>

                </div>

                <Dialog open={open2} onClose={handleClose2} aria-labelledby="form-dialog-title1"    >
                    <form onSubmit={e => submit(e)}>
                        <DialogTitle id="form-dialog-title1">update event</DialogTitle>
                        <DialogContent>
                            <div className="row pt-1">
                                <div className=' col-sm-12'>
                                    <FormControl
                                        className='input_event'
                                        placeholder={event && event.name}
                                        margin="dense"
                                        id="Title"
                                        label="Title"
                                        type="text"

                                        name="name" value={name} onChange={e => onchange(e)}
                                    /></div></div>
                            <div className="row pt-3">
                                <div className='col-6'>
                                    <FormControl
                                        className='input_event'
                                        margin="dense"
                                        id="Date"
                                        type="Date"

                                        name="date" value={date} onChange={e => onchange(e)}
                                    />

                                </div>
                                <div className='col-6'>


                                    <Select
                                        labelId="demo-controlled-open-select-label1"
                                        id="demo-controlled-open-select1"
                                        open={open3}
                                        onClose={handleClose3}
                                        onOpen={handleOpen3}
                                        value={category_id}
                                        onChange={e => setCategory_id(e.target.value)}>

                                        {categories && categories.map(c =>
                                            (<MenuItem key={c.id} value={c.id} >{c.name} </MenuItem>)

                                        )}

                                    </Select>


                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className='col-sm-12'>
                                    <FormControl
                                        placeholder={event && event.location}
                                        margin="dense"
                                        id="Location"
                                        className='input_event'
                                        type="text"
                                        fullWidth
                                        name="location" value={location} onChange={e => onchange(e)}
                                    /></div></div>
                            <div className="row pt-3">
                                <div className='col-sm-12'>
                                    <FormControl
                                        placeholder={event && event.description}
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
                                        placeholder={event && event.video_link}
                                        className='input_event'
                                        margin="dense"
                                        id="video"

                                        type="textarea"
                                        fullWidth
                                        name="video_link" value={video_link} onChange={e => onchange(e)}
                                    />
                                    <FormControl
                                        placeholder={event && event.status}
                                        className='input_event'
                                        margin="dense"
                                        id="status"
                                            hidden='true'
                                        type="textarea"
                                        fullWidth
                                        name="status" value={status} onChange={e => onchange(e)}
                                    />
                                    disable event
                                    <Switch
                                        checked={state.checkedA}
                                        onChange={handleswitch}
                                        name="checkedA"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    /> enable event

                                </div></div>
                            <div className='row pt-3'><div className='col-sm-8'></div><div className='col-sm-4'>
                                <Button type='submit' style={{ backgroundColor: "#f2f3f3", color: 'black', borderRadius: '0' }} onClick={handleClose}>
                                    update Event
          </Button></div></div>
                        </DialogContent>



                    </form>
                </Dialog>



            </div>

            <div className='row pt-2 pb-2'>
                <div className='col-sm-10'></div>
                <div className='col-sm-2 Top__section'> <button onClick={increment}>Next {'>>'} </button> -<button onClick={decrement}>{'<<'} Preview</button>
                </div>



            </div>
            <div className='row pt-5'>
                <div className="col-sm-1"></div>
                <div className='col-sm-9'>
                    <div className='row'>
                        <div className='col-sm-4'>  {event && <ReactTinyLink cardSize="large" showGraphic={true} maxLine={2} minLine={1} url={event.video_link} />}</div>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-7'>
                            <div className='row'>
                                <div className='col-sm-8'> <h4><b>{event && event.name}</b></h4>
                                    <div className='row'>
                                        <div className='col-sm-3 '>  {event && event.location} </div>

                                        <div className='col-sm-4 '>  {event && event.date} </div></div>

                                    <div className='row'><div className='col-sm-10 pb-3 pt-2'>{event && event.description}
                                    </div></div>

                                </div><div className='col-sm-1'><IoShareSocialOutline />
                                    <div>  <AddBoxIcon onClick={handleClickOpen} /></div>

                                    <div>
                                        {event && user && user.id === event.user.data.user_id ?

                                            <UpdateRoundedIcon onClick={handleClickOpen2} />
                                            : <div></div>} </div>
                                    <div>{event && user && user.id === event.user.data.user_id ? <Link to='/dashboard/events'><DeleteOutlineRoundedIcon onClick={e => deleteEvent(match.params.id)} style={{ color: '#212529' }} />
                                    </Link> : <div></div>}</div>
                                </div></div>

                            <div className='row'><div className='col-sm-6'>participants {event && event.participants.length}
                            </div></div>

                            <div className="bot__section">
                                <div className='row '>
                                    {event && event.is_subscribed === false ? <div className='col-sm-2 pt-5' id='attend'>
                                        <button onClick={subscribEevent(event.id, 1)}  >Attend</button>
                                    </div> : <div className='col-sm-2 pt-5' id='attend'>
                                            <button disabled={true}>Already subscribed</button>
                                        </div>}



                                    <div className='col-sm-2' id='Invite'>


                                    </div>

                                    <Dialog className='invite_form'
                                        open={open}
                                        TransitionComponent={Transition}
                                        keepMounted
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-slide-title"
                                        aria-describedby="alert-dialog-slide-description"
                                    >

                                        <form onSubmit={e => onsubmit(e)}>
                                            <DialogTitle id="alert-dialog-slide-title">{"invite"}</DialogTitle>

                                            <DialogContent>
                                                <div className='row'>

                                                    <FormControl
                                                        className='input_name'
                                                        placeholder='Name'
                                                        margin='dense'
                                                        type='text'
                                                        value={uid}


                                                    /></div>
                                                <div className='row pt-2'>

                                                    <div className='col-md-7 ' id='user_data'>

                                                        {friends && friends.map((c, index) =>
                                                        (
                                                            <div className='col-md-6'>
                                                                <form onSubmit={e => onsubmit(e)}>
                                                                    <div className='col-md-12 pb-2 mt-3 friends'>
                                                                        <div className='col-md-2 '><Avatar className='mr-2 pr-1 pb-2' src={c.data.attributes.profile_image} /></div> <div className='col-md-8'> {c.data.attributes.name}</div>
                                                                        <div className='col-md-2'> <AddBoxIcon onClick={e => invite(c.data.user_id, event.id)} /></div>

                                                                    </div>
                                                                </form>
                                                                <div className='col-md-1'>

                                                                </div>
                                                            </div>
                                                        )
                                                        )}

                                                    </div>

                                                </div>


                                                <div>

                                                </div>



                                            </DialogContent>
                                            <DialogActions>

                                            </DialogActions>
                                        </form>
                                    </Dialog>


                                    <div className='col-sm-2 pt-5' >
                                        <button id='cancel'>Cancel</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='mt-4 mb-2'><hr /></div>
                        <div className='mt-2'>
                            <h6><b>Similar Events</b></h6>
                            <div className='row '>
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
Eventitem.propTypes = {
    events: PropTypes.object.isRequired,
    getevent: PropTypes.func.isRequired,
    deleteEvent: PropTypes.func.isRequired,
    subscribEevent: PropTypes.func.isRequired,
    getfriends: PropTypes.func.isRequired,
    invite: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired

}
const mapStateToProps = state => ({
    events: state.events,
    auth: state.auth,
    categories: state.categories,

})
export default connect(mapStateToProps, { update, getevent, deleteEvent, subscribEevent, getfriends, invite })(Eventitem)