import React from 'react';
import { Fragment } from 'react';
import { getUsers } from '../../../../Actions/profile';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const ContentUser = ({ Profile: { profile}}) => {
   
    return (
      <Fragment>
              <form className='card ' id='cardpro'  >
              <div className='kk' >
             <div className='row'>  
             <div className='col-sm-9'></div>
             <div className='col-sm-2'>
             <div className='col-1'></div>
             </div>
             </div> 
                <div className='pt-4 pb-1'>
                 {profile && profile.data.attributes.first_name.charAt(0).toUpperCase() +  profile.data.attributes.first_name.slice(1)} {profile && profile.data.attributes.last_name.charAt(0).toUpperCase() + profile.data.attributes.last_name.slice(1)}
                </div>  
                <div className='pt-4 pb-1'>
                    {profile && profile.data.attributes.birthday}
                </div>  
                <div className='pt-4 pb-1'>
                    {profile && profile.data.attributes.location}
                </div> 
                <div className='pt-4 pb-1'>
                {profile && profile.data.attributes.about}
                </div>
                <div className='pt-4 pb-1'>
                {profile && profile.data.attributes.phone}  
                </div> 
                <div className='pt-4 pb-1'>
                </div> 
                <div className='pt-4 pb-1'>
                </div> 
             </div>
            </form>
      </Fragment>
    )
}
ContentUser.propTypes = {
    getUsers: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    Profile:state.Profile
})
export default connect(mapStateToProps ,{getUsers}) (ContentUser);
