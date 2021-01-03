import React from 'react';
import { Avatar } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  deleteComment
} from "../../../../Actions/Post";


const SingleComm =( {deleteComment,comments})=> {
    return (
        <div className="row pt-1 pb-3" >
             <div className="col-1">
             <Avatar  />
            </div>
          
            <div className="col-10" id="comment" >
            {comments.body} 
            </div>
            <div className='col-1'>
              <button onClick={(e) => deleteComment(comments.id)} >
               <DeleteIcon className='butDelCom' />
              </button>
              
            </div>
         
    
      </div>
    
    )
}
SingleComm.prototype = {
  deleteComment: PropTypes.func.isRequired,

};
const mapStateToProps = (state) => ({
  auth: state.auth,
  Post: state.Post,
});
export default  connect(mapStateToProps,{deleteComment})(SingleComm);
