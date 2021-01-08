import React, { Fragment } from 'react';
import  { Avatar, Button } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { MdCancel } from 'react-icons/md';
import { makeStyles } from '@material-ui/core/styles';
import './Header.css';
const Notification = ({users}) => {
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
                <div className='col-1'>
                    <Avatar className={classes.large} />
                </div>
                <div className='col-1'></div>
                <div className='col-7 pt-1'>
                <h6><b>{users.data.attributes.name}</b></h6>
                     <div className='row'>
                        <div className='col-5 '>
                        <span className='abouts'>
                         {users.data.attributes.about}
                        </span>  
                        </div>
                     </div>
                </div>
                <div className='col-3'>
                    <Button><PersonAddIcon  className='add'/></Button>
                    <Button><MdCancel  className='add'/></Button>
                </div>
               
            </div>
            <hr />
                

        </Fragment>
    )
}
export default Notification;