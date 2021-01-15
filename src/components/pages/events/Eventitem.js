
import React, { useEffect, useState,useCallback } from 'react'
import {Link} from 'react-router-dom'
import { getevent,deleteEvent,subscribEevent } from '../../../Actions/events'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Events.css'

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
    //  const participants= event.participants.data;
     // const count = Object.keys(participants).length
    return (
        <div>

        
        <div className='row pt-5 pb-2'>
        <div className='col-sm-10'></div>
        <div className='col-sm-2'> <button onClick={increment}>Next</button> -<button onClick={decrement}>Preview</button>
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
                    <div className='row'> <div className='col-sm-12'> <h4>{event && event.name}</h4></div></div>
                  <div className='row'> <div className='col-sm-4 '>  {event && event.location} </div>
               <div className='col-sm-4 '>  {event && event.date} </div></div>
                  
                    <div className='row'><div className='col-sm-6'>{event && event.description}
                    </div></div>
                    <div className='row'><div className='col-sm-6'>participants {event && event.participants.length}
                    </div></div> 
                    <div className='row pt-4'><div className='col-sm-2 '><button onClick={subscribEevent(x,1)}>attend</button></div>
                    <div className='col-sm-2'>Cancel</div>
                    </div>
                </div>
                
            </div>
            </div>
            </div></div>
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