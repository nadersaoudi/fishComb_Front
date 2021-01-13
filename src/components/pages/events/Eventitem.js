
import React, { useEffect } from 'react'
import { getevent } from '../../../Actions/events'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Events.css'

const Eventitem = ({ match, getevent, events: { event } }) => {
    useEffect(() => {
        getevent(match.params.id);
    }, [getevent, match.params.id]
    )

    return (
        <div>

        
        <div className='row pt-5 pb-2'>
        <div className='col-sm-10'></div>
        <div className='col-sm-2'> Next - Preview</div>

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
                  
                    <div className='row'><div className='col-sm-6'>maezrtsyudiopf^hgkrzgfdzhkjlkmùkmytoeruaGTYKLdsfsfsdsdufoisd
                    ufoisdfliqsushdvl
                    isdyfviuldyfvuidsyvfuisdsqdkhnqsdvhdsui¨MIKLHTREZFDRTTVYp^lpkhugyf
                    </div></div>
                    <div className='row pt-4'><div className='col-sm-2 '><button className='input_event'>attend</button></div>
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
}
const mapStateToProps = state => ({
    events: state.events,

})
export default connect(mapStateToProps, { getevent })(Eventitem)