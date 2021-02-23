import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
    getevent,
    deleteEvent,
    subscribEevent,
    invite,
    getfriends,
    update,
    getevents
} from '../../../Actions/events'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Events.css'
import { IoShareSocialOutline } from "react-icons/io5";
import {
    Avatar,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MenuItem,
    Slide
} from '@material-ui/core'
import { FormControl } from 'react-bootstrap'
import Button from '@material-ui/core/Button';
import UpdateRoundedIcon from '@material-ui/icons/UpdateRounded';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import Switch from '@material-ui/core/Switch';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Card, Col, Row } from 'react-bootstrap';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ReactPlayer from 'react-player';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import FeaturedDialog from './FeaturedDialog'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import Moment from "react-moment";
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Dropdown from 'react-bootstrap/Dropdown'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up"
        ref={ref}
        {...props} />;
});
const Eventitem = ({
    match,
    getevent,
    events: {
        event,
        friends,
        events,
        categories,
        loading
    },
    deleteEvent,
    auth: {
        user
    },
    getfriends,
    invite,
    update,
    getevents
}) => {
    useEffect(() => {
        getevent(match.params?.id);
    }, [getevent, match.params?.id])
    useEffect(() => {
        getfriends()
    }, [getfriends])
    useEffect(() => {
        getevents()
    }, [getevents])
    const [state, setState] = React.useState({ checkedA: true });
    const anchorRef = React.useRef(null);
    const [open1, setOpen1] = React.useState(false);
    const handleClosePoint = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen1(false);
    };
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen1(false);
        }
    }
    const prevOpen = React.useRef(open1);
    React.useEffect(() => {
        if (prevOpen.current === true && open1 === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open1;
    }, [open1]);
    const handleToggle = () => {
        setOpen1((prevOpen) => !prevOpen);
    };
    const handleClickOpen1 = () => {
        setOpen1(true);
    };
    const increment = useCallback(() => {
        getevent(event.next_event)

    }, [event && event.next_event])

    const decrement = useCallback(() => {
        getevent(event.previous_event)

    }, [event && event.previous_event])

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

    const [user_id, setUser] = useState('');

    const onsubmit = e => {
        e.preventDefault();
        invite(user_id, event.id)
    }

    const [uid, setText] = useState('');
    const [disable, setdisable] = useState(false);
    const [name, setname] = useState('')
    const [description, setdescription] = useState('')

    const [location, setlocation1] = useState('')
    const [date, setdate] = useState('')
    const [video_link, setvideolink] = useState('')
    const [cover, setcover] = useState('')
    const [status, setStatus] = useState('')
    const [category_id, setCategory_id] = useState('')

    const onnamechange = e => {
        setname(e.target.value)
    }

    const ondescchange = e => {
        setdescription(e.target.value)
    }


    const onlocationchange = e => {
        setlocation1(e.target.value)
    }

    const ondatechange = e => {
        setdate(e.target.value)
    }
    const oncoverchange = e => {
        setcover(e.target.files[0])
    }
    const onlinkchange = e => {
        setvideolink(e.target.value)
    }

    const onstatuschange = e => {
        setStatus(e.target.value)
    }
    useEffect(() => {
        setlocation1(loading || !event?.location ? '' : event?.location)
    }, [loading])
    useEffect(() => {
        setname(loading || !event?.name ? '' : event?.name)
    }, [loading])
    useEffect(() => {
        setdescription(loading || !event?.description ? '' : event?.description)
    }, [loading])

    useEffect(() => {
        setvideolink(loading || !event?.video_link ? '' : event?.video_link)
    }, [loading])
    useEffect(() => {
        setStatus(loading || !event?.status ? 1 : event?.status)
    }, [loading])
    useEffect(() => {
        setdate(loading || !event?.date ? '' : event?.date)
    }, [loading])
    useEffect(() => {
        setcover(loading || !event?.cover ? '' : event?.cover)

    }, [loading])
    useEffect(() => {
        setCategory_id(loading || !event?.category.id ? '' : event?.category.id)

    }, [loading])
    const handleswitch = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked
        });
        if (event.target.checked === true) {
            setStatus(1)
        } else {
            setStatus(0)
        }
        console.log(status)
    };
    const getlink = () => {
        console.log(window.location.href);
    }
    const submit = e => {
        e.preventDefault();
        const file = new FormData();
        file.append('name', name);
        file.append('description', description);
        file.append('category_id', category_id);
        file.append('location', location);
        file.append('date', date);
        file.append('cover', cover);
        file.append('video_link', video_link);
        file.append('status', status);
        update(file, event.id)
        e.target.reset();
    }
    const [open5, setOpen5] = React.useState(false);

    const handleClickOpen5 = () => {
        setOpen5(true);
    };

    const handleClose5 = () => {
        setOpen5(false);
    };
    return (
        <div>
            <title>{event?.name} | FishComb</title>
            {/*****************************Update Dialog*********************************** */}
            <Dialog open={open2}
                onClose={handleClose2}
                aria-labelledby="form-dialog-title1" className='dialogForm'>
                <form onSubmit={
                    e => submit(e)} className='add__event'>
                    <DialogTitle id="form-dialog-title1">update event</DialogTitle>
                    <DialogContent>
                        <div className="row pt-1">
                            <div className=' col-sm-12'>
                                <FormControl className='input_event'
                                    placeholder={
                                        event && event.name
                                    }
                                    margin="dense"
                                    id="Title"
                                    label="Title"
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={onnamechange} /></div>
                        </div>
                        <div className="row pt-3">
                            <div className='col-6'>
                                <FormControl className='input_event' margin="dense" id="Date" type="Date" name="date"
                                    value={date}
                                    onChange={ondatechange} />
                            </div>
                            <div className='col-md-6'>
                                <select
                                    value={category_id}
                                    onChange={
                                        e => setCategory_id(e.target.value)
                                    }>
                                    {
                                        categories && categories.map(c => (
                                            <option key={
                                                c.id
                                            }
                                                value={
                                                    c.id
                                                }>
                                                {
                                                    c.name
                                                } </option>
                                        ))
                                    } </select>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className='col-sm-12'>
                                <FormControl placeholder={
                                    event && event.location
                                }
                                    margin="dense"
                                    id="Location"
                                    className='input_event'
                                    type="text"
                                    fullWidth
                                    name="location"
                                    value={location}
                                    onChange={onlocationchange} /></div>
                        </div>
                        <div className="row pt-3">
                            <div className='col-sm-12'>
                                <FormControl placeholder={
                                    event && event.description
                                }
                                    className='input_event'
                                    margin="dense"
                                    id="Description"
                                    as="textarea"
                                    aria-label="With textarea"
                                    type="textarea"

                                    name="description"
                                    value={description}
                                    onChange={ondescchange} /></div>
                        </div>
                        <div className='row pt-3'>
                        </div>
                        <Col sm={12}
                            md={12}
                            xl={12}
                            className="btn-group btn-group-toggle ">
                            <input accept="image/*" id="icon-button-file" type="file"
                                onChange={oncoverchange}
                                name="cover" />
                        </Col>
                        <div className="row pt-3">
                            <div className='col-sm-12'>
                                <FormControl placeholder={
                                    event && event.video_link
                                }
                                    className='input_event'
                                    margin="dense"
                                    id="video"
                                    type="textarea"
                                    fullWidth
                                    name="video_link"
                                    value={video_link}
                                    onChange={onlinkchange} />
                                <FormControl // placeholder={event && event.status}
                                    className='input_event'
                                    hidden='true'
                                    id="status"
                                    name="status"
                                    value={
                                        status.toString()
                                    }
                                    type="textarea"
                                    fullWidth
                                    onChange={onstatuschange} />
                                disable event
                                <Switch checked={
                                    state.checkedA
                                }
                                    onChange={handleswitch}
                                    name="checkedA"
                                    inputProps={
                                        { 'aria-label': ' checkbox' }
                                    } />
                                enable event
                            </div>
                        </div>
                        <div className='row pt-3'>
                            <div className='col-sm-8'></div>
                            <div className='col-sm-4'>
                                <Button type='submit'
                                    style={
                                        {
                                            backgroundColor: "#f2f3f3",
                                            color: 'black',
                                            borderRadius: '0'
                                        }
                                    }
                                    onClick={handleClose}>
                                    update Event
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </form>
            </Dialog>


            {/*****************Navlink***************** */}
            <Row>
                <Col md={3}
                    className='px-0'></Col>
                <Col md={4}
                    className="pb-4 pt-5 px-0 mr-5">
                    <ul className="nav nav-pills nav-justified" id='navprofil'>
                        <li className="nav-item">
                            <Link to={`/dashboard/events`}
                                className="link_cart">
                                <span className="n">General Events</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/dashboard/Gallery`}
                                className="link_cart">
                                <span className="n">Gallery</span>
                            </Link>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className='pt-5'>
                <Col md={1}
                    sm={1}></Col>
                <Col md={11}
                    sm={11}>
                    {/*********************NEXT PREVIEW EVENT************************* */}
                    <Row className='pb-5'>
                        <Col md={9}
                            sm={9}></Col>
                        <Col md={3}
                            sm={3}
                            className=' Top__section'>
                            {
                                event && event.previous_event !== null ? <button onClick={decrement}
                                    style={
                                        { backgroundColor: '#f7f8fa' }
                                    }>
                                    <NavigateBeforeIcon />Previous</button> : <button onClick={decrement} disabled='true'
                                        style={
                                            { backgroundColor: '#f7f8fa' }
                                        }>
                                        <NavigateBeforeIcon />Previous</button>
                            }...{event && event.next_event !== null ? <button
                                onClick={increment}
                                style={
                                    { backgroundColor: '#f7f8fa' }
                                }>Next
                                        <NavigateNextIcon /></button> : <button
                                    onClick={increment}
                                    disabled='true'
                                    style={
                                        { backgroundColor: '#f7f8fa' }
                                    }>Next
                                        <NavigateNextIcon /></button>}
                        </Col>
                    </Row>
                    <Row>
                        <Card className='pt-2'
                            style={
                                {
                                    backgroundColor: '#f7f8fa',
                                    border: '0px'
                                }
                            }>

                            <Row>
                                <Col xs={4} sm={4} md={4} xl={4}>

                                    <img src={
                                        event && event.cover
                                    }
                                        width="100%"
                                        height="320"
                                        alt='event'
                                        style={
                                            { borderRadius: '4px' }
                                        } />
                                </Col>
                                <Col xs={1} sm={1} md={1}></Col>
                                <Col md={7} sm={7}>
                                    <Row>
                                        <Col md={8}>
                                            <h4>
                                                <b>
                                                    {event && event.name.charAt(0).toUpperCase() + event.name.slice(1)}
                                                </b>
                                            </h4>
                                        </Col>
                                        <Col md={2}>
                                            <div className='col-sm-2' >
                                                <Dropdown>
                                                    <Dropdown.Toggle>
                                                        <svg width="26px" height="7px" version="1.1" xmlns="http://www.w3.org/1999/xlink" >
                                                            <g id="Group" transform="translate(0.5 0.5)">
                                                                <path d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z" id="Oval" fill="#D8D8D8" fill-rule="evenodd" stroke="none" />
                                                                <path d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z" transform="translate(20 0)" id="Oval-Copy" fill="#D8D8D8" fill-rule="evenodd" stroke="none" />
                                                                <path d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z" transform="translate(10 0)" id="Oval-Copy-2" fill="#D8D8D8" fill-rule="evenodd" stroke="none" />
                                                            </g>
                                                        </svg>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>
                                                            <IoShareSocialOutline />
                                                                              Share
                                                                          </Dropdown.Item>
                                                        <Dropdown.Item onClick={handleClickOpen}>
                                                            <AddBoxIcon />
                                                                                    Invite Friends</Dropdown.Item>
                                                        {
                                                            event && user && user.user_id === event.user.data.user_id ? <Dropdown.Item onClick={handleClickOpen2}>  <UpdateRoundedIcon /> Update
                                                                                  </Dropdown.Item> : <div></div>}
                                                        {
                                                            event && user && user.user_id === event.user.data.user_id ? <Link to='/dashboard/events' className='linkdeletevent'> <Dropdown.Item onClick={
                                                                e => deleteEvent(match.params.id)}>

                                                                <DeleteOutlineRoundedIcon style={
                                                                    { color: '#212529' }} />
                                                                                        Delete
                                                                          </Dropdown.Item> </Link> : <div></div>}
                                                        {event && user && user.user_id === event.user.data.user_id ? <Dropdown.Item><FeaturedDialog /></Dropdown.Item> : <div></div>}
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className='row'>
                                        <div className='col-sm-10'>
                                            <div className='row'>
                                                <div className='col-sm-10'>
                                                    <p>{event && event.location.charAt(0).toUpperCase() + event.location.slice(1)}, {event && <Moment date={event.date} format='dddd, MMMM Do YYYY' ></Moment>}</p>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-6 pb-4 pt-3'>
                                                    <span>
                                                        {event && event.description}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='row pb-3'>
                                                <div className='col-sm-5 pb-4'>
                                                    <Button onClick={handleClickOpen5}>
                                                        Participants {event && event.participants.length}
                                                    </Button>
                                                    <AvatarGroup max={4} className='pt-2'>
                                                        {event?.participants?.map(participants => (<Avatar alt={participants?.data?.attributes?.name} src={participants?.data?.attributes?.profile_image} />))}
                                                    </AvatarGroup>
                                                    <Dialog fullWidth align='center'
                                                        open={open5}
                                                        onClose={handleClose5}
                                                        aria-labelledby="alert-dialog-title"
                                                        aria-describedby="alert-dialog-description"
                                                    >
                                                        <DialogTitle id="alert-dialog-title">{"Participants "}</DialogTitle>
                                                        <DialogContent>
                                                            <Row className='pb-4 pt-3'>
                                                                <Col sm={2}  >{event?.participants?.map(participants => (<Avatar alt={participants?.data?.attributes?.name} src={participants?.data?.attributes?.profile_image} />))}
                                                                </Col>
                                                                <Col sm={4}>{event?.participants?.map(participants => (<div className='pt-2'>{participants?.data?.attributes?.name}</div>))}</Col>
                                                            </Row>
                                                        </DialogContent>
                                                    </Dialog>
                                                </div>
                                            </div>
                                        </div>
                                        {/************************************************ */}
                                    </div>
                                    <div className="bot__section">
                                        <div className='row '>
                                            {event && event.is_subscribed === false ? <div className='col-sm-4' id='attend'>
                                                <button onClick={subscribEevent(event.id, 1)}
                                                    className='btn btn-outline-dark'
                                                    disabled={disable}>Attend
                                                    </button>
                                            </div> : <div className='col-sm-4' id='attend'>
                                                    <button disabled={true}
                                                        className='btn btn-outline-dark'>Already subscribed</button>
                                                </div>
                                            }
                                            <Dialog className='invite_form'
                                                open={open}
                                                TransitionComponent={Transition}
                                                keepMounted
                                                onClose={handleClose}
                                                aria-labelledby="alert-dialog-slide-title"
                                                aria-describedby="alert-dialog-slide-description">
                                                <form onSubmit={
                                                    e => onsubmit(e)}>
                                                    <DialogTitle id="alert-dialog-slide-title">
                                                        {"invite"}</DialogTitle>
                                                    <DialogContent>
                                                        <div className='row'>
                                                            <FormControl className='input_name' placeholder='Name' margin='dense' type='text'
                                                                value={uid} /></div>
                                                        <div className='row pt-2'>
                                                            <div className='col-md-12 ' id='user_data'>
                                                                {friends && friends.map((c, index) => (
                                                                    <div className='col-md-12'>
                                                                        <form onSubmit={
                                                                            e => onsubmit(e)}>
                                                                            <div className='col-md-12'>
                                                                                <div className='row'>
                                                                                    <div className='col-md-2'>
                                                                                    <Avatar src={c.data.attributes.profile_image} />
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-md-6 pt-2'>
                                                                                    {c.data.attributes.first_name} {c.data.attributes.last_name}
                                                                                </div>
                                                                                <div className='col-md-2'>
                                                                                    <AddBoxIcon onClick={
                                                                                        e => invite(c.data.user_id, event.id)} />
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                ))
                                                                } </div>

                                                        </div>
                                                        <div></div>
                                                    </DialogContent>
                                                    <DialogActions></DialogActions>
                                                </form>
                                            </Dialog>
                                            <div className='col-sm-4 '>
                                                <button className='btn btn-outline-dark' id='cancel'>Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        <div className='mt-4 mb-2'></div>
                        <Row>
                            <Col xs={2}></Col>
                            <Col xs={8} sm={8}>
                                {event && event.video_link !== null ? <ReactPlayer
                                    playing={true} url={event.video_link} /> : <div></div>
                                }
                            </Col>
                        </Row>
                        <div className='pt-3 '>
                            <hr />
                            <h6>
                                <b>Similar Events</b>
                            </h6>
                            <Row> {/*events && events.map((event) =>
                                (
                                    <Single key={event.id} event={event} />)
                                )*/}

                                {/*<Carousel activeIndex={index} onSelect={handleSelect} >
                                    {events && events.slice(0, 3).map((event) =>
                                    (
                                        <Carousel.Item key={event.id} interval={4000}>
                                            <img
                                                className="d-block w-100"
                                                src={event.cover}
                                                alt="First slide"
                                                width="500" height="500"
                                                style={{ borderRadius: '10px' }}
                                            />
                                            <Carousel.Caption>
                                                <h3>{event.name}</h3>
                                                <p>{event.description}</p>
                                                <p>{event.date}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>*/}
                                <div>
                                    <OwlCarousel className="slider-items owl-carousel pt-4" autoplay='true' autoplaySpeed='2000'>
                                        {
                                            events && events.map((event) => (
                                                <div class="item"
                                                    key={
                                                        event.id
                                                    }>
                                                    <Col>
                                                        <img src={
                                                            event.cover
                                                        }
                                                            width='180px'
                                                            height='250'
                                                            style={
                                                                { borderRadius: '5px' }
                                                            } /></Col>
                                                </div>
                                            ))
                                        } </OwlCarousel>
                                </div>
                            </Row>
                        </div>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}; Eventitem.propTypes = {
    events: PropTypes.object.isRequired,
    getevent: PropTypes.func.isRequired,
    deleteEvent: PropTypes.func.isRequired,
    subscribEevent: PropTypes.func.isRequired,
    getfriends: PropTypes.func.isRequired,
    invite: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    getevents: PropTypes.func.isRequired
}
const mapStateToProps = state => ({ events: state.events, auth: state.auth, categories: state.categories })
export default connect(mapStateToProps, {
    update,
    getevent,
    deleteEvent,
    subscribEevent,
    getfriends,
    invite,
    getevents
})(Eventitem)
