
import React, { useEffect, useState,useCallback } from 'react'
import {Link} from 'react-router-dom'
import { getevent,deleteEvent,subscribEevent,invite,getfriends } from '../../../Actions/events'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Events.css'
import { IoShareSocialOutline } from "react-icons/io5";
import { Avatar, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Slide } from '@material-ui/core'
import { FormControl } from 'react-bootstrap'
import Button from '@material-ui/core/Button';
import DialogContentText from '@material-ui/core/DialogContentText';
import Select from '@material-ui/core/Select';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const Eventitem = ({ match, getevent, events: { event,friends },deleteEvent,auth:{user},getfriends,invite }) => {
    useEffect(() => {
        getevent(match.params.id);
    }, [getevent, match.params.id]
    )
    useEffect(() => {
        getfriends()
    }, [getfriends]
    )
    var [x,setX]=useState(parseInt(match.params.id))
    const increment = useCallback(() => {
        var y =parseInt(match.params.id)+1;
        setX (y)
       x=x+1
       //console.log(x)
        getevent(x)
      }, [x])
      const decrement  = useCallback(() => {
       x=x-1
       //console.log(x)
        getevent(x)
      }, [x])
      
     
    //  const participants= event.participants.data;
     // const count = Object.keys(participants).length
     const [open, setOpen] = React.useState(false);

     const handleClickOpen = () => {
       setOpen(true);
     };
   
     const handleClose = () => {
       setOpen(false);
     };
     const [open1, setOpen1] = React.useState(false);
     const handleClose1 = () => {
         setOpen1(false);
     };
 
     const handleOpen1 = () => {
         setOpen1(true);
     };
     const [user_id,setUser]=useState('')
  
     const onsubmit =e=> {
        e.preventDefault();
        console.log(event.id)
        invite(user_id,event.id)
     }
    return (
        <div>

        
        <div className='row pt-5 pb-2'>
        <div className='col-sm-10'></div>
        <div className='col-sm-2 Top__section'> <button onClick={increment}>Next {'>>'} </button> -<button onClick={decrement}>{'<<'} Preview</button>
       {user && user.id === event &&  event.user.data.user_id ? <Link to='/dashboard/events'> <button onClick={e=>deleteEvent(match.params.id)}>delete</button>
       </Link>:<div></div>}
         </div>
         
      

        </div>
        <div className='row pt-5'>
            <div className="col-sm-1"></div>
            <div className='col-sm-9'>
            <div className='row '>
                <div className='col-sm-4'> <img src='https://picsum.photos/id/77/200/300' width="400" height="300" alt='event' /></div>
                <div className='col-sm-1'></div>
                <div className='col-sm-7'>
                    <div className='row'>
                         <div className='col-sm-8'> <h4><b>{event && event.name}</b></h4>
                         </div><div className='col-sm-4'><IoShareSocialOutline/></div></div>
                  <div className='row'> 
                  <div className='col-sm-3 '>  {event && event.location} </div>
                  <div className='col-sm-2 '></div>
               <div className='col-sm-4 '>  {event && event.date} </div></div>
                  
                    <div className='row'><div className='col-sm-6'>{event && event.description}
                    </div></div>
                    <div className='row'><div className='col-sm-6'>participants {event && event.participants.length}
                    </div></div>

                    <div className="bot__section">
                    <div className='row'>
                        <div className='col-sm-2' id='attend'>
                            <button>Attend</button>
                        </div>
                        
                        <div className='col-sm-2' id='Invite'>
                        <button  onClick={handleClickOpen}>Invite</button>
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
                                            
                                            /></div>
<div className='row pt-2'>
   <div className='col-md-2 'id='user_data'><Avatar  src={user && user.profile_image} className='user_data'/>
    {user && user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1)} {user && user.last_name.charAt(0).toUpperCase() + user.last_name.slice(1)}
</div>
    
    </div>
    <div className='row pt-2'>
   <div className='col-md-2 'id='user_data'><Avatar  src={user && user.profile_image} className='user_data'/>
    {user && user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1)} {user && user.last_name.charAt(0).toUpperCase() + user.last_name.slice(1)}
</div>
    
    </div>
    <div className='row pt-2'>
   <div className='col-md-2 'id='user_data'><Avatar  src={user && user.profile_image} className='user_data'/>
    {user && user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1)} {user && user.last_name.charAt(0).toUpperCase() + user.last_name.slice(1)}
</div>
    
    </div>

<div></div>
      
        
        <Select

                                                labelId="demo-controlled-open-select-label"
                                                id="demo-controlled-open-select"
                                                open={open1}
                                                onClose={handleClose1}
                                                onOpen={handleOpen1}
                                                value={user_id}
                                                name="user_id"
                                                onChange={e=>setUser(e.target.value)}
                                            >

                                                {friends && friends.map((c,index) =>
                                                    (<MenuItem key={index} value={c.data.user_id}>{c.data.attributes.name} </MenuItem>)

                                                )}   </Select>

        </DialogContent>
        <DialogActions>
          
          <Button type='submit' color="primary">
            invite
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    
                               
                    <div className='col-sm-2' >
                        <button id='cancel'>Cancel</button>
                        </div>
                    </div>
                    
                    </div>
                </div>
                <div className='mt-4 mb-2'><hr/></div>
                <div className='mt-2'>
                    <h6><b>Similar Events</b></h6>
                    <div className='row '>
                <div className='col-sm-2 mt-2'>
                     <img src='https://picsum.photos/id/55/200/300' width="130" height="120" alt='event' />
                     <div className='description'>
                         hello <br/>
                         time 19:25:22
                        
                     </div>
                </div>
                <div className='col-sm-2 mt-2'>
                     <img src='https://picsum.photos/id/55/200/300' width="130" height="120" alt='event' />
                     <div className='description'>
                         hello <br/>
                         time 19:25:22
                        
                     </div>
                </div>
                <div className='col-sm-2 mt-2'>
                     <img src='https://picsum.photos/id/55/200/300' width="130" height="120" alt='event' />
                     <div className='description'>
                         hello <br/>
                         time 19:25:22
                        
                     </div>
                </div>
                <div className='col-sm-2 mt-2'>
                     <img src='https://picsum.photos/id/55/200/300' width="130" height="120" alt='event' />
                     <div className='description'>
                         hello <br/>
                         time 19:25:22
                        
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
Eventitem.propTypes = {
    events: PropTypes.object.isRequired,
    getevent: PropTypes.func.isRequired,
    deleteEvent:PropTypes.func.isRequired,
    subscribEevent:PropTypes.func.isRequired,
    getfriends:PropTypes.func.isRequired,
    invite:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    events: state.events,
    auth:state.auth

})
export default connect(mapStateToProps, { getevent,deleteEvent,subscribEevent,getfriends,invite })(Eventitem)