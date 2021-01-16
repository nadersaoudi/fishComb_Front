
import React, { useEffect, useState,useCallback } from 'react'
import {Link} from 'react-router-dom'
import { getevent,deleteEvent,subscribEevent } from '../../../Actions/events'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Events.css'
import { IoShareSocialOutline } from "react-icons/io5";
import { Avatar, Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import { FormControl } from 'react-bootstrap'


const Eventitem = ({ match, getevent, events: { event },deleteEvent,auth:{user} }) => {
    useEffect(() => {
        getevent(match.params.id);
    }, [getevent, match.params.id]
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
      const [open , setOpen]=React.useState(false);
      const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose =()=>{
        setOpen(false);
    }
    //  const participants= event.participants.data;
     // const count = Object.keys(participants).length
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
                        <Dialog open={open} onClose={handleClose} arial-labelledby='form-dialog-title'>
                            <form>
                                <DialogTitle>Add Friends</DialogTitle>
                                <DialogContent>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <FormControl
                                            className='input_name'
                                            placeholder='Name'
                                            margin='dense'
                                            type='text'
                                            />
                                            
                                        </div>
                                        
                                    </div>
                                    <div className='row pt-2'>
                                        <div className='col-md-2 '><Avatar/></div>
                                        <div className='col-md-1'></div>
                                        <div className='col-md-8'> user Name</div>

                                    </div>
                                <div className='row pt-1'>
                                    <div className='col-md-2'> <button>Add</button></div>
                                </div>
                                    
                                </DialogContent>
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
    subscribEevent:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    events: state.events,
    auth:state.auth

})
export default connect(mapStateToProps, { getevent,deleteEvent,subscribEevent })(Eventitem)