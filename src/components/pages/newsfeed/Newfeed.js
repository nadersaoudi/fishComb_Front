import React, { useEffect } from 'react';
import Post from '../newsfeed/Post/Post';
import Publication from './publications/Publication';
import { getPosts } from '../../../Actions/Post'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const NewFeed = ({ Post: { posts }, getPosts }) => {
  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <div className='row mt-5'>
      <div className='col-1'></div>
      <div className='col-6 mt-4'>
        <div className='card'>
          <Post />
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-1'></div>
        {posts.length > 0 ? (
          <div className='col-6'>
            <div className='row'>
             
                {posts.map(posts => <Publication key={posts.id} posts={posts} />)}
           
            </div>

          </div>
        ) :

          <div className='col-6'>
            <div className='row'>
              <div className='col-6'>
                No recent Feed
          </div>
            </div>
          </div>}




        <div className='col-1'></div>
        <div className='col-3'>
          <div className='row'>


          </div>
          <div className='row mt-5'>

          </div>
        </div>
        <div className='col-1'></div>
      </div>
    </div>



  )
}

NewFeed.propTypes = {

  Post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,


};
const mapStateToProps = state => ({
  Post: state.Post,

})
export default connect(mapStateToProps, { getPosts })(NewFeed);