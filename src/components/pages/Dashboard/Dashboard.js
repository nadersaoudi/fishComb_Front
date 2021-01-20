import React,{useEffect} from 'react';
import Container from '../../layout/Container/Container';
import Header from '../../layout/Header/Header';
import Menu from '../../layout/Menu/Menu';
import {getcategories,Myinvitations} from '../../../Actions/events';
import {getMyinvitations} from '../../../Actions/Friends';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const Dashboard =({getcategories,Myinvitations,getMyinvitations})=> {
    useEffect(() => {
        getMyinvitations();
      }, [getMyinvitations]);
      useEffect(() => {
        getcategories();
      }, [getcategories]);
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
  
  
  }; 
export default connect(null,{getcategories,Myinvitations,getMyinvitations})(Dashboard);