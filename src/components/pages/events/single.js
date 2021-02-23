import React   from 'react';
import Moment from 'react-moment';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'


const Single =({  event })=> {
    return (
        <div className='col-md-2 pb-4 '>
        <div className='image_holder grid '>
        <NavLink to={`/dashboard/singleevent/${event.id}`} > 
        <img src={event && event.cover} width="80%" height="100" alt='event'  style={{borderRadius:'5px'}} className='product' /></NavLink>
            <div className='description'>
                <span><b>{event && event.name.charAt(0).toUpperCase() + event.name.slice(1) }</b></span> <br /> 
                <Moment
                      date={event && event.date}
                      format="YYYY-MM-DD"
                      trim/>
            </div>
        </div>
    </div>
    )
}
Single.propTypes = {
    event: PropTypes.object.isRequired,
}
export default   Single;