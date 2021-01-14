import React   from 'react';
import Moment from 'react-moment';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'


const Single =({  event })=> {
    return (
     
        <div className='col-md-2'>
              
        <div className='image_holder grid '>
        <NavLink to={`/dashboard/singleevent/${event.id}`} > <img src='https://picsum.photos/id/14/200/300' width="125" height="100" alt='event' /></NavLink>
            <div className='description'>
        <span>{event && event.name}</span> <br /> 
                <Moment
                      date={event && event.date}
                      format="YYYY-MM-DD"
                      trim
                    />
                 
            </div>
        </div>
       
    </div>

    
    )
}
Single.propTypes = {
    event: PropTypes.object.isRequired,
}
export default   Single;