import React from 'react';



const Favourit = () => {

return(
    <div className='views'>
    <form id='vie'>
        <div className='row mt-3'>
            <div className='col-8 mb-3'>
                Favourite Ministry Products
            </div>
        </div>
        <div className='row mt-3'>
                <img src="../../../../london.jpg" alt='' className='col-6' 
                      thumbnail></img>
            <img src="../../../../cov.jpg" alt='' className='col-6'
                 thumbnail></img>
        </div>
        <div className='row mt-3 mb-5'>
              <img src="../../../../photocov.jpg" alt='' className='col-6'
                thumbnail></img>
             <img src="../../../../johns-avatar.jpg" alt='' className='col-6 '
           thumbnail></img>
           </div>
    </form>
</div>
    
)


}

export default Favourit;