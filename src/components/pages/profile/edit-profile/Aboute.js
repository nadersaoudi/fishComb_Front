import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
const Aboute = ({auth: {user}})  => {
 
 
 
return(
  <div>
    <div className='row pt-1'>
          <div className='col-sm-12'>
            <form className='card ' id='cardpro'  >
              <div className='kk' >
             <div className='row'>  
             <div className='col-sm-10'></div>
             <div className='col-sm-2'>
             <div className="btn-group btn-group-toggle col-md-12 ">
                <Button  variant="outlined"  >
                <NavLink to={`/dashboard/profile/edit`}>
                  <span  > Edit Profile </span>
                  </NavLink>
                </Button>
                </div>
             </div>
             </div> 
                <div className='pt-3'>
                 {user && user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1)} {user && user.last_name.charAt(0).toUpperCase() + user.last_name.slice(1)}
                </div>  
                <div className='pt-3'>
                 {user && user.username}
                </div>  
                <div className='pt-3'>
                    {user && user.email} 
                </div> 
                <div className='pt-3'>
                    {user && user.birth_date} 
                </div>
                <div className='pt-3'>
                    {user && user.phone} 
                </div> 
                <div className='pt-3'>
                    {user && user.about} 
                </div>
                <div className='pt-3'>
                    {user && user.location} 
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