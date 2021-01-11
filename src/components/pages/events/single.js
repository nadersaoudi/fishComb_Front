import React   from 'react';
import Moment from 'react-moment';


const single =({  event})=> {
 
  
    return (
        <div className='col-md-2'>
        <div className='image_holder grid '>
            <img src='https://picsum.photos/id/14/200/300' width="125" height="100" alt='event' />
            <div className='description'>
                <span>{event.name}</span> <br />
                <Moment
                      date={event.date}
                      format="YYYY-MM-DD"
                      trim
                    />
                 
            </div>
        </div>
    </div>
      
    
    )
}

export default   single;