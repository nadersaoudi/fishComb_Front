import React, { useState, useRef } from 'react';
import { Avatar } from '@material-ui/core';
import './Post.css';
import { makeStyles } from '@material-ui/core/styles';
import { ReactTinyLink } from 'react-tiny-link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPost } from '../../../../Actions/Post';
import $ from 'jquery';

const Post = ({ auth: { user }, addPost,  }) => {
  // eslint-disable-next-line
  const [show, setShow] = useState(false);
 
  const handleShow = () => setShow(true);
  const [url, setUrl] = useState(null);
  const inputEl = useRef(null);
// eslint-disable-next-line
  const [formData, setFormData] = useState({
    link: '',
    description: '',
    type: ''
  })
 
// eslint-disable-next-line
  const { link, description, type } = formData;


  const Onsubmit = e => {
    e.preventDefault();
    var link = $('#linkurl').val();
    var description = $('#description').val();
    console.log(link);
    
    console.log(link + "-------" + description + "-----" + type)
    addPost({ link, description });

  }


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

  function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator*
    return !!pattern.test(str);
  }

  function preview() {
    if (validURL(inputEl.current.value)) {
      setUrl(inputEl.current.value);
      $('#linkurl').val(inputEl.current.value)
    }
  }
  return (

    <div className="pub">
      <form onSubmit={e => Onsubmit(e)}>
        <div className="pub__top">
          <Avatar src={user && user.profile_image} className={classes.large} />
          <div className='post'>

            <input ref={inputEl} id="description" placeholder={`What's on your mind?`} onChange={preview} className='pub__input' />
            {url && <ReactTinyLink cardSize="large" showGraphic={true} maxLine={2} minLine={1} url={url} />}
            <input type="text" id="linkurl" />

          </div>
          <button id='sub' type="submit" onClick={handleShow}>submit</button>

        </div>
        <div className='row ' id='pub-bot' >
          <div className='col-3 px-0'>
            <div className="pub__option">
              <svg width="26px" height="22px" version="1.1" xmlns="http://www.w3.org/1999/xlink" >
                <g id="fishcomb-product-icons-12">
                  <path d="M0 20.683L0 1.311C0.167077 0.664269 0.680446 0.160596 1.33623 0L24.6638 0C25.7248 0.41082 26 0.815598 26 1.96952L26 20.2087C26 21.3536 25.3426 22 24.1837 22L2.80395 22C2.40644 22 2.012 22 1.61449 22C0.922226 21.9997 0.307193 21.5635 0.0856168 20.9156C0.0642126 20.8431 0.0305774 20.7615 0 20.683ZM24.1409 17.4357L24.1409 17.1638C24.1409 12.3306 24.1409 7.49746 24.1409 2.66429C24.1722 2.43125 24.091 2.1972 23.9215 2.03217C23.7521 1.86713 23.514 1.79025 23.2786 1.82452L2.75503 1.82452C2.14348 1.82452 1.85911 2.10545 1.85911 2.73074L1.85911 17.4175L2.18323 17.04C4.48673 14.2971 6.79023 11.5553 9.09373 8.8145C9.73586 8.05328 10.5492 8.02911 11.2342 8.75106C12.2799 9.86269 13.3165 10.9834 14.3745 12.0739C14.8637 12.5814 15.3285 12.5904 15.8819 12.1433C16.255 11.8413 16.6158 11.5211 16.9949 11.2371C17.1914 11.0448 17.463 10.9469 17.7387 10.9689C18.0143 10.991 18.2665 11.1309 18.429 11.3519C19.2393 12.2098 20.0496 13.0737 20.8569 13.9346L24.1409 17.4357Z" id="Shape" fill="#00ABEE" stroke="none" />
                  <path d="M3.01982 4.65956e-05C4.67662 0.0109945 6.01086 1.36296 5.99993 3.01977C5.98901 4.67658 4.63706 6.01083 2.98026 5.99993C1.32346 5.98903 -0.01081 4.6371 6.60203e-05 2.9803C0.0127526 1.32419 1.3637 -0.00908181 3.01982 4.65956e-05L3.01982 4.65956e-05Z" transform="translate(16 3)" id="Path" fill="#00ABEE" fill-rule="evenodd" stroke="none" />
                </g>
              </svg>
              <div className='col-5 px-0 pub__option'>
                <span className='postPv '>Photo/Video</span>
              </div>
            </div>
          </div>
          <div className='col-3 px-0'>
            <div className="pub__option">
              <svg width="22px" height="22px" version="1.1" xmlns="http://www.w3.org/1999/xlink" >
                <g id="fishcomb-product-icons-13">
                  <path d="M5.04548e-16 11.2313L5.04548e-16 10.6258C0.175338 10.1737 0.4627 9.77363 0.835063 9.46323C3.78335 6.51834 6.72974 3.56967 9.67423 0.617201C9.86885 0.408878 10.1244 0.267577 10.4042 0.213558C10.6428 0.17092 10.8842 0.128281 11.1257 0.102698C12.7323 -0.0342327 14.3476 -0.0342327 15.9542 0.102698C16.8632 0.168077 17.4653 0.637099 17.9908 1.33068C17.667 1.62347 17.3829 1.93615 17.0535 2.22893C16.9638 2.30325 16.8484 2.33902 16.7325 2.32842C15.7914 2.20836 14.8786 2.70203 14.4633 3.55563C14.048 4.40924 14.2227 5.4328 14.8975 6.10011C15.5723 6.76742 16.5971 6.92995 17.445 6.50416C18.2929 6.07836 18.7753 5.159 18.6441 4.21872C18.6269 4.13716 18.6433 4.05211 18.6895 3.98279C19.0105 3.64168 19.3428 3.31194 19.695 2.95378C19.9393 3.20677 20.1466 3.44839 20.3852 3.65873C20.5996 3.84979 20.7369 4.11259 20.7715 4.3978C20.8396 4.89525 20.9192 5.39554 20.9447 5.89583C21.0466 7.35252 21.0076 8.81565 20.8283 10.2648C20.7795 10.7058 20.5786 11.1159 20.2602 11.4246C17.2343 14.4339 14.2178 17.4489 11.2109 20.4696C10.9222 20.8063 10.501 21 10.0577 21C9.61438 21 9.19319 20.8063 8.9045 20.4696C6.18912 17.7559 3.4728 15.0413 0.755533 12.3257C0.413645 12.0322 0.153382 11.6552 5.04548e-16 11.2313Z" transform="translate(0 1)" id="Path" fill="#FF9D72" fill-rule="evenodd" stroke="none" />
                  <path d="M5.51577 0C6.1071 0.319019 6.15145 0.735515 5.67839 1.20814L1.10747 5.76892C0.94125 5.96942 0.669781 6.04891 0.421532 5.96979C0.190486 5.91958 0.019805 5.72384 0.00169272 5.4883C-0.0110694 5.28529 0.0486454 5.08433 0.17022 4.92116C1.73722 3.33197 3.31901 1.75756 4.9008 0.194956C4.97775 0.128055 5.05871 0.0659079 5.14324 0.00886163L5.51577 0Z" transform="translate(16 0)" id="Path" fill="#FF9D72" fill-rule="evenodd" stroke="none" />
                </g>
              </svg>
              <div className='col-5 px-0 pub__option'>
                <span className='postPv'>Tag Friends</span>
              </div>

            </div>
          </div>
          <div className='col-4'>
          </div>
          <div className='col-1' id="pnt">
            <svg width="26px" height="7px" version="1.1" xmlns="http://www.w3.org/1999/xlink" >
              <g id="Group" transform="translate(0.5 0.5)">
                <path d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z" id="Oval" fill="#D8D8D8" fill-rule="evenodd" stroke="none" />
                <path d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z" transform="translate(20 0)" id="Oval-Copy" fill="#D8D8D8" fill-rule="evenodd" stroke="none" />
                <path d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z" transform="translate(10 0)" id="Oval-Copy-2" fill="#D8D8D8" fill-rule="evenodd" stroke="none" />
              </g>
            </svg>
          </div>
        </div>
      </form>
    </div>
  )
}
Post.prototype = {
  auth: PropTypes.object.isRequired,
  addPost: PropTypes.func.isRequired,
 
};
const mapStateToProps = state => ({
  auth: state.auth,
  addPost: state.addPost,
  post: state.addPost
})
export default connect(mapStateToProps, { addPost })(Post);