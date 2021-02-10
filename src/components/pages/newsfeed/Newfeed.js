import React, { useEffect } from 'react';
import Post from '../newsfeed/Post/Post';
import Publication from './publications/Publication';
import { getPosts } from '../../../Actions/Post';
import {getevents} from'../../../Actions/events';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Col} from 'react-bootstrap'
import Moment from 'react-moment';
const NewFeed = ({ Post: { posts }, getPosts,getevents,events:{events} }) => {
  useEffect(() => {
    getPosts()
  }, [getPosts])
  useEffect(() => {
    getevents()
  }, [getevents])
  return (
    <div className='row pt-5 no-gutters'>
      <div className='col-sm-1'></div>
      <div className='col-sm-6 '>
        <div className='card col-sm-12'>
          <Post />
        </div>
      </div><div  className='col-sm-1'>
        </div>
      <div className='col-sm-3'>
        
      <OwlCarousel className="slider-items owl-carousel">
        {events && events.map((event) =>
                                    (
                                        <div class="item" key={event.id}>
                                            <Col>
                                            <img src={event.cover} width='200px' height='100px'  className='pb-2'/></Col>
                                           <Col> <p style={{color:'grey'}}>{event.name.charAt(0).toUpperCase() + event.name.slice(1) }</p>
                                            <p  style={{color:'grey'}}><Moment format='MMM Do YY'>{event.date}</Moment></p></Col>
                                            </div>
                                       
                                    ))}
                        </OwlCarousel>
      </div>
      <div className='row pt-3'>
        <div className='col-sm-1'></div>
        {posts.length > 0 ? (
          <div className='col-sm-6'>
            <div className='row no-gutters'>

              {posts && posts.map(posts =>
                <Publication key={posts.data.id} posts={posts} />
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
          <div className='row '>

          </div>
        </div>
        <div className='col-sm-1'></div>
      </div>
    </div>



  )
}

NewFeed.propTypes = {

  Post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  getevents: PropTypes.func.isRequired,
  events:PropTypes.object.isRequired

};
const mapStateToProps = state => ({
  Post: state.Post,
  events:state.events

})
export default connect(mapStateToProps, { getPosts,getevents })(NewFeed);