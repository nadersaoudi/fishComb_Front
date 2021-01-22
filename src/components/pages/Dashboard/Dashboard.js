import React,{useEffect} from 'react';
import Container from '../../layout/Container/Container';
import Header from '../../layout/Header/Header';
import Menu from '../../layout/Menu/Menu';
import {getcategories,Myinvitations} from '../../../Actions/events';
import {getMyinvitations} from '../../../Actions/Friends';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategories } from '../../../Actions/Market';
const Dashboard =({getcategories,getCategories,Myinvitations,getMyinvitations})=> {
    useEffect(() => {
        getMyinvitations();
      }, [getMyinvitations]);
      useEffect(() => {
        getcategories();
      }, [getcategories]);
      useEffect(() => {
        getCategories();
      }, [getCategories]);
      useEffect(() => {
       Myinvitations();
      }, [Myinvitations]);
    return <div className='row no-gutters'>
            <Header />
            <Menu />
            <Container />
           </div>
        
         
    
}
Dashboard.propTypes = {

    getMyinvitations: PropTypes.func.isRequired,
    Myinvitations: PropTypes.func.isRequired,
    getcategories: PropTypes.func.isRequired,
    getCategories: PropTypes.func.isRequired
  
  
  }; 
export default connect(null,{getcategories,getCategories,Myinvitations,getMyinvitations})(Dashboard);