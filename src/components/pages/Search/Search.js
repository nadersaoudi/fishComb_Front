import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import './Search.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFriend } from '../../../Actions/Friends'

const Search = ({ friend, addFriend }) => {
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
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  const friend_id = friend.data.user_id
  // eslint-disable-next-line
 const [disable,setDisable]=useState(false)
  return (
    <div className='row pt-3'>
      <div className='col-1'>
      </div>
      <div className='col-10'>
        <div className='row pt-2 pb-4'>
          <div className='card' id='cardSearsh'>
          <form  onSubmit={e => {
              e.preventDefault();
              addFriend({ friend_id });
             setDisable(true);
            }}>
          <div className='row '>
           <div className='col-1 pt-4'>
              <Avatar className={classes.large} />
              </div>
              <div className='col-8 '>
              <div className='row'>
                <div className='col-6 pt-4'>
                  <h5>{friend.data.attributes.name}</h5>
                  <h6>{friend.data.attributes.about}</h6>
                </div>
              </div>
            </div>
              <div className='col-3 pt-4'>
                <Button variant="outlined" type="submit">Add Friend<AiOutlineUserAdd className='add' /></Button>
              </div>
          </div>
          </form>
          </div>
       
              
          
           </div>
      
      </div>
   

    </div>



  )

}
Search.propTypes = {
  friend: PropTypes.object.isRequired,
  addFriend: PropTypes.func.isRequired
};

export default connect(null, { addFriend })(Search);
