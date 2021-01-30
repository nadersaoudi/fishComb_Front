import React from 'react';
import { Fragment ,useState ,useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';
import { updatePost ,getPosts } from '../../../../Actions/Post';
import PropTypes from 'prop-types';

const UpdatePost  = ({ auth: { user }, getPosts, updatePost ,loading, history, Post:{ post }  }) => {
    const [formdata, setFormData] = useState({
       // link: '',
        description: '',
      });
      const {
     //  link,
       description
      } = formdata;
      const onchange = e => setFormData({ ...formdata, [e.target.name]: e.target.value });
      const onSubmit = e => {
        e.preventDefault();
        console.log('aaaaa');
        updatePost(formdata ,post.id);
      }
      useEffect(() => {
        setFormData({
            description: loading || !!post.description ? '' : post.description,
        })
      }, [loading])
    
    return(
        <Fragment>
            
                <div className="pub px-0 ">
                        <div className=" ">   
                        <Avatar src={user && user.attributes.profile_image} />
                        <div className='pub__top'>
                        <form  onSubmit={(e) => onSubmit(e)} >
                            <input id="description" placeholder={post && post.description}  autoComplete="description" className='pub__input' name="description" value={description} onChange={e => onchange(e)}  />
                            <input type="text" id="linkurl" />
                            <button  type="submit1" >submit</button>
                        </form>
                        </div>  
                </div>
                </div>
               
        </Fragment>
    )
}

UpdatePost.prototype = {
    auth: PropTypes.object.isRequired,
    Post: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired,
    updatePost: PropTypes.func.isRequired,
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    Post: state.Post,
  })
  export default connect(mapStateToProps, { getPosts,updatePost })(UpdatePost);