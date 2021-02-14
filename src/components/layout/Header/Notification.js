import React, { Fragment } from 'react';
import  { Avatar, Button } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { MdCancel } from 'react-icons/md';
import { makeStyles } from '@material-ui/core/styles';
import { acceptInv } from '../../../Actions/Friends';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';
const Notification = ({users ,acceptInv}) => {
 
  const acceptinv =  () => {
    acceptInv(users.data.user_id,1)
  };
  const deletinv =  () => {
    acceptInv(users.data.user_id,2)
  };
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        small: {
          width: theme.spacing(3),
          height: theme.spacing(3),
        },
        large: {
          width: theme.spacing(6),
          height: theme.spacing(6),
        },
      }));
      const classes = useStyles();
    return(
        <Fragment>
          
            <div className='row pt-2 pb-2'>
                <div className='col-sm-1'>
                    <Avatar className={classes.large} src={users && users.data.attributes.profile_image} />
                </div>
                <div className='col-sm-1'></div>
                <div className='col-sm-7 pt-1'>
                <h6><b>{users && users.data.attributes.first_name.charAt(0).toUpperCase() + users.data.attributes.first_name.slice(1)} {users && users.data.attributes.last_name.charAt(0).toUpperCase() + users.data.attributes.last_name.slice(1)}
                </b></h6>
                     <div className='row '>
                        <div className='col-sm-5 '>
                        <span className='abouts'>
                         {users && users.data.attributes.about}
                        </span>  
                        </div>
                     </div>
                </div>
                <input type='hidden' value={users && users.data.user_id} />
                <div className='col-sm-3'>
                  {/** to do change the icons to accept declien */}
                    <Button><PersonAddIcon onClick={(e) =>acceptinv()} className='add'/></Button>
                    <Button><MdCancel onClick={(e) =>deletinv()}  className='add'/></Button>
                </div>
               
            </div>
            <hr />
                

        </Fragment>
    )
}
Notification.propTypes = {
  acceptInv:PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,  
  Friends : state.Friends    
})

export default connect(mapStateToProps ,{acceptInv})(Notification);