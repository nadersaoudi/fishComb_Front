import React   from 'react';
import { useState } from 'react';
import { Avatar } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  deleteComment , getPosts, updateComment
} from "../../../../Actions/Post";
import EditIcon from '@material-ui/icons/Edit';
import { Button } from 'react-bootstrap';


const SingleComm =(

  { Post: { posts }, auth:{user}, getPosts 
  ,updateComment,deleteComment,comments
})=> {
 
  const [hidden, setHidden] = useState(true);
  const [body, setText] = useState("");
  const onclick = () => {
    setHidden(false);
  }
  const updatecomment = async (id, body) => {
    updateComment(id, body);
    getPosts()
  };
    return (
        <div className="row pt-1 pb-3" >
             <div className="col-1 mr-4">
             <Avatar  />
            </div>
            <div className="col-7" id="comment" >
              { comments.body} 
             <div>
             </div>
            </div>
            <div className='col-1 mr-2'>
            <Button variant="light" onClick={onclick} >
               <EditIcon  className='butDelCom'/>
              </Button> 
              </div>
              <div className='col-1 mr-2'> 
              <Button variant="light" onClick={(e) => deleteComment(comments.id)} >
                 <DeleteIcon className='butDelCom' />
              </Button>  
            </div> 
            <div className='row pt-2' hidden={hidden}>
            <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  updatecomment(comments.id, { body });
                  getPosts()
                  setText("");
                }} >
              <div className="row pt-2  " >
                
                <div className="col-1">
                  <Avatar />
                </div>
                <div className="col-9 pp" >
                  <input
                    className=" col-10 comm"
                    type="text" 
                    value={body}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <button type="submit" className="b">
                    add
                </button>
                </div>
              </div> 
            </form>
            </div>
         </div>
      
    
    )
}
SingleComm.prototype = {
  deleteComment: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired,
  Post: PropTypes.object.isRequired,

};
const mapStateToProps = (state) => ({
  auth: state.auth,
  Post: state.Post,
});
export default  connect(mapStateToProps,{deleteComment,getPosts ,updateComment})(SingleComm);
