import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import './Aboute.css';
const Aboute = ({auth: {user}})  => {

return(
  <div>
    <div className='row pt-1'>
          <div className='col-sm-12'>
            <form className='card ' id='cardpro'  >
              <div className='kk' >
             <div className='row'>  
             <div className='col-sm-9'></div>
             <div className='col-sm-2'>
             <div className="btn-group btn-group-toggle col-md-12 ">
                <Button  variant="outlined"  >
                <NavLink to={`/dashboard/profile/edit`} className='button__Edit'>
                  <span> Edit Profile </span>
                  </NavLink>
                </Button>
             </div>
             <div className='col-1'></div>
             </div>
             </div> 
                <div className='pt-4 pb-1'>
                 {user && user.attributes.first_name.charAt(0).toUpperCase() + user.attributes.first_name.slice(1)} {user && user.attributes.last_name.charAt(0).toUpperCase() + user.attributes.last_name.slice(1)}
                </div>  
                <div className='pt-4 pb-1'>
                 {user && user.attributes.name}
                </div>  
                <div className='pt-4 pb-1'>
                    {user && user.attributes.birthday} 
                </div>
                <div className='pt-4 pb-1'>
                    {user && user.attributes.phone} 
                </div> 
                <div className='pt-4 pb-1'>
                    {user && user.attributes.location} 
                </div> 
                <div className='pt-4 pb-1'>
                    {user && user.attributes.about} 
                </div>
             </div>
            </form>
          </div>
          <div className="col-sm-2">
          </div>
        </div>
  </div>
 
           
)
    
}


Aboute.propTypes = {
  auth: PropTypes.object.isRequired,
 
};
const mapStateToProps = state => ({
  auth: state.auth,

})
export default connect(mapStateToProps)(Aboute);