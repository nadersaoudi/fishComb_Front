import React from 'react';



const Views = () => {

return(
    <div className='views'>
        <form id='vie'>
            <div className='row mt-3'>
                <div className='col-6 mb-3'>
                    Recently Viewed
                </div>
            </div>
            <div className='row mt-3'>
              
                    <img src="../../../../covv.jpg" alt='' className='col-6'
                        
                          thumbnail></img>
            
               
               
                <img src="../../../../cov.jpg" alt='' className='col-6'
                  
                     thumbnail></img>
                         

            </div>
            <div className='row mt-3 mb-5'>
              
                  <img src="../../../../jeje.jpg" alt='' className='col-6'
                  
                    thumbnail></img>
      
         

                 <img src="../../../../johns-avatar.jpg" alt='' className='col-6 '
            
               thumbnail></img>
                   

               </div>

        </form>

    </div>
    
)


}

export default Views;