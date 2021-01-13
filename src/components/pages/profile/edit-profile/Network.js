import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Fragment ,useEffect} from 'react';
import Publication from '../../newsfeed/publications/Publication';
import { getPosts } from '../../../../Actions/Post';

const Network = ({ Post: { posts }, getPosts }) => {
    useEffect(() => {
        getPosts()
    }, [getPosts])
    return (    
        <Fragment>
       <div className='row mt-5'>
        <div className='col-sm-6'></div>
        {posts.length > 0 ? (
          <div className='col-sm-6'>
            <div className='row'>

              {posts && posts.map(posts =>
                <Publication key={posts.id} posts={posts} />


              )}

            </div>

          </div>
        ) :

          <div className='col-sm-6'>
            <div className='row'>
              <div className='col-sm-6'>
                No recent Feed
          </div>
            </div>
          </div>}
          <div className='col-sm-1'></div>
        <div className='col-sm-3'>
          <div className='row'>


          </div>
          </div>
          </div>
        </Fragment>
    )
}

Network.propTypes = {
    Post: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    Post: state.Post,
})



export default connect(mapStateToProps, { getPosts })(Network)
