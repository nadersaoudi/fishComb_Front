import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Fragment, useEffect } from 'react';
import Publication from '../../newsfeed/publications/Publication';
import { getPosts } from '../../../../Actions/Post';
import { getevents } from '../../../../Actions/events';
import OwlCarousel from 'react-owl-carousel';
import { Searchfriend } from '../../../../Actions/Friends';
import Moment from 'react-moment';
import { Link, useHistory } from 'react-router-dom';
import { Col } from 'react-bootstrap'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Button, Card } from '@material-ui/core';

const Network = ({ Post: { posts }, getPosts, getevents, events: { events }, Searchfriend }) => {
  useEffect(() => {
    getPosts()
  }, [getPosts])
  useEffect(() => {
    getevents()
  }, [getevents])
  const [uid, setText] = useState('');
  const history = useHistory()
  return (
    <Fragment>
      <nav>
      <div className='row pt-2 pb-4'>
      <form className="col-sm-4 px-0  header__input"
                    onSubmit={
                        e => {
                            e.preventDefault();
                            Searchfriend({ uid });
                            setText('')
                        }
                    }>
                    <div className="col-sm px-0  header__input">
                        <input type="text" placeholder='Search Fishcomb' aria-label="Search"
                            value={uid}
                            onChange={
                                e => setText(e.target.value)
                            } />
                        <button className="col-sm-2  header__button"
                            onClick={
                                () => {
                                    history.push('/dashboard/search')
                                }
                            }>
                            <svg width="19px" height="19px" version="1.1" xmlns="http://www.w3.org/1999/xlink">
                                <g id="fishcomb-product-icons-14">
                                    <path d="M12.2518 1.61932e-15C12.3328 0.0283492 12.4155 0.051191 12.4995 0.0683699C15.6293 0.480702 18.1632 2.82089 18.8306 5.91537C19.498 9.00985 18.1549 12.1912 15.4749 13.8641C12.7948 15.5369 9.35588 15.3404 6.88257 13.3732C6.81668 13.3207 6.74396 13.2752 6.63263 13.1977L0.840723 19L0 18.1978L5.82371 12.3658C5.74646 12.2656 5.68965 12.1858 5.6283 12.106C4.09022 10.1285 3.64051 7.51038 4.43017 5.13067C5.21984 2.75096 7.14415 0.925279 9.55698 0.266643C9.95007 0.157251 10.3545 0.0866019 10.7522 0L12.2518 1.61932e-15ZM11.4884 13.7948C14.0295 13.8077 16.3277 12.2829 17.3102 9.93242C18.2926 7.58189 17.7654 4.86919 15.9748 3.06078C14.1841 1.25238 11.4832 0.704965 9.13291 1.67411C6.78265 2.64325 5.24665 4.93781 5.24202 7.48651C5.24318 10.9531 8.03216 13.7697 11.4884 13.7948L11.4884 13.7948Z" id="Shape" fill="#CDCDCD" stroke="none" />
                                </g>
                            </svg>
                        </button>
                    </div>
                </form>
                <Col md={1}></Col>
                <Col md={5} className=" px-4 ">
                    <ul className="nav nav-pills nav-justified " id='navprofil'>
                        <li className="nav-item">
                            <Link  to={`/dashboard/profile/friend`}className="link_cart"><span className='n' >Frineds</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/dashboard/profile/invitation`}className="link_cart"><span className='n'>Invitations</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/dashboard/attendedevent`} className="link_cart"><span className='n'>Attending</span></Link>
                        </li>
                    </ul>
                </Col>
      </div>
      </nav>
      <div className='row mt-5'>
        <div className='col-sm-6'>
          <OwlCarousel className="slider-items owl-carousel">
            {events && events.map((event) =>
            (
              <div class="item" key={event.id}>
                <Col>
                  <img src={event.cover} width='300' height='150' className='pb-2' alt="fishcomb" /></Col>
                <Col> <p style={{ color: 'grey' }}>{event.name.charAt(0).toUpperCase() + event.name.slice(1)}</p>
                  <p style={{ color: 'grey' }}><Moment format='MMM Do YY'>{event.date}</Moment></p></Col>
              </div>
            ))}
          </OwlCarousel>
        </div>
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
  getevents: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired,
  Searchfriend: PropTypes.func.isRequired,
  Friends: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
  Post: state.Post,
  events: state.events
})
export default connect(mapStateToProps, { getPosts, getevents, Searchfriend })(Network)
