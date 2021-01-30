import React from 'react'
import { Fragment } from 'react';
import Search from './Search'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const Searchitem = ({ Friends: { friend, loading } }) => {
  return (
    <Fragment>
      <div className='row pt-5'>
        <div className='col-1 '></div>
        <div className='col-6 '>
        <h4>Search results </h4> 
        </div>
        
      {!loading ? (<div className='col-6 pt-5'>
        <div className='row pt-5'>
          <div className='col-4 pt-5'>
          </div>
          <div className='col-6'>
            <div className='row  pb-3'>
             <h3> No result found</h3>

            </div>
          </div>
        </div>
      </div>) :
        <div className='col-8'>
          <div className='row '>
            <div className='col-2'></div>
            <div className='col-10'>
            
              {friend && friend.map((f,index) => (<Search key={index} friend={f} />))}
            
            </div>
        
          </div>
          
        </div>  
      }
      <hr />
</div>
    </Fragment>
  )
}
Searchitem.propTypes = {
  Friends: PropTypes.object.isRequired,

};
const mapStateToProps = state => ({
  Friends: state.Friends,

})
export default connect(mapStateToProps)(Searchitem);