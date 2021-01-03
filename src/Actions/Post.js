import axios from 'axios';
import { GET_POSTS, POST_ERROR, UPDATE_LIKES, DELETE_POST, ADD_POST, ADD_COMMENT, REMOVE_COMMENT } from './types';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
toast.configure();


//get posts
export const getPosts = () => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('/api/posts/getaLlposts', {}, config)
        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    } catch (error) {
        toast.error('Error happened when fetching posts');
        dispatch({
            type: POST_ERROR,
        });
    }

}
//Add like
export const addLike = (post_id) => async dispatch => {
    console.log(post_id)
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try {

        const res = await axios.post(`/api/posts/like`, { post_id }, config)
        console.log(res.data.data)
        dispatch({
            type: UPDATE_LIKES,
            payload: res.data.data,
        })
    } catch (error) {
        dispatch({
            type: POST_ERROR,


        });
    }

}

//delete post 
export const deletePost = id => async dispatch => {
    if (window.confirm('Are you sure? this can not be undone')) {
        try {
            const config = {
                headers: {
                    Authorization: 'Bearer ' + Cookies.get('user'),
                    'content-Type': 'application/json'
                }
            }
            await axios.delete(`/api/posts/${id}`, config)
            dispatch({
                type: DELETE_POST,
                payload: id
            })
            toast.success('Delete success');
        } catch (error) {
            dispatch({
                type: POST_ERROR,
            });
            toast.error('Error happened');
        }

    }
}
//Add post 

export const addPost = formData => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('/api/posts', formData, config)
        dispatch({
            type:  ADD_POST,
            payload: res.data.data
        })
        // save post id 
        
        // create function 
        getPost(res.data.data);
        toast.success('Post Created');
        // 1 call get post function params post id 
        // 2 update layout ==> show post 
    } catch (error) {

        toast.error('Error occured');
        dispatch({
            type: POST_ERROR
        });
    }


}
//get post
export function getPost(post) {

    //console.log(idpost);

    //show post
}





export const addComment = (idpost, formData) => async dispatch => {

    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'Content-Type': 'application/json'
        }
    }


    try {

        const res = await axios.post(`/api/posts/${idpost}/comment`, formData, config)

        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        })
        toast.success('Your have commented this Post');
    } catch (error) {
        dispatch({
            type: POST_ERROR,
        });
        toast.error('Comment Error');
    }

}
//delete Comment 

export const deleteComment = id => async dispatch => {
    if (window.confirm('Are you sure? this can not be undone')) {
        try {
            const config = {
                headers: {
                    Authorization: 'Bearer ' + Cookies.get('user'),
                    'Content-Type': 'application/json'
                }
            }

        const res= await axios.delete(`/api/posts/comments/${id}`, config);
           console.log(res.data.data)
            dispatch({
                type: REMOVE_COMMENT,
                payload: id,

            })
            toast.success('Delete success');
        } catch (error) {
            toast.error('Delete error');
            dispatch({
                type: POST_ERROR,
            });
        }

    }

}