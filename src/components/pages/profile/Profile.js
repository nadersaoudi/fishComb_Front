import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import { Col, Row } from 'react-bootstrap';
import './Profile.css'
import $ from "jquery";
import Button from 'react-bootstrap/Button';
import { edit, picture } from '../../../Actions/profile';
import { NavLink, withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles';
import Aboute from '../profile/edit-profile/Aboute';
import Nav from './navbar/nav';
import Content from './content/Content';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));




const Profile = ({ auth: { user, loading }, edit, history, picture }) => {
  const [file1, setFile] = useState('');
  const [formdata, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    birth_date: '',
    phone: '',
    about: '',
    username: '',
    // eslint-disable-next-line
    profile_image: '',
  });

  const {
    first_name,
    last_name,
    email,
    birth_date,
    phone,
    about,
    // eslint-disable-next-line
    profile_image,
    username

  } = formdata;
  useEffect(() => {
    setFormData({
    })
  }, [loading])

  const onchange = e => setFormData({ ...formdata, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();

    edit(formdata, history, true);
  }
  $('#editprofile').click(function (event) {
    event.preventDefault();
    $('.show').each(function () {
      $(this).hide()
    })
    $('.edit').each(function () {
      $(this).attr('type', 'text')
      $(this).attr('type', 'textarea')
    })
  })
  $('#profilepic').on('click', function () {
    document.getElementById('imageform').click()
  })
  /******************************************************************************** */
  const [hide, sethide] = useState(true)
  const onchange1 = e => {
    setFile(e.target.files[0])
    sethide(false)
  };
  const [type, setType] = useState('profile')

  const onsubmit1 = e => {
    e.preventDefault();
    const file = new FormData();
    file.append('file', file1, file1.name);
    file.append('type', type)
    console.log(type)
    picture(file)
    sethide(true)

  }
  const [type1,settype1]=useState('cover')
  const [file2,setFile2]=useState('')
  const [hide1, sethide1] = useState(true)
  const onchange2 = e => {
    setFile2(e.target.files[0])
  sethide1(false)
  };
const onsubmit2=e=>{
  e.preventDefault();
  const file = new FormData();
  file.append('file', file2, file2.name);
  file.append('type', type1)
  picture(file)
  sethide1(true)
}

  /**************************************************************************************** */
  const classes = useStyles();
  return (
    <Fragment>
    
    <Row>
    <Col sm={12}>
    
    <form onSubmit={e=>onsubmit2(e)}>
    <div className='Top___header px-0'>
            <Image src={user && user.cover_image} alt='' className='coverture'/>
            <input accept="image/*" className={classes.input} id="icon-button-filee" type="file" onChange={onchange2} />
            <div className='row'>
              <div className='col-11'></div>
              <div className='col-1'>
              <label htmlFor="icon-button-filee">
              <IconButton className='upload' color="primary" aria-label="upload picture" component="span">
                <PhotoCamera   />

              </IconButton>
              <input
                type='submit'
                value='Upload'
                id='vali1'
                className='btn'
                hidden={hide1}
              />
            </label>
              </div>
            
            </div>
            </div>
            </form>
            <div>
            <form onSubmit={e => onsubmit1(e)}>
            <div className='info' >
            <Image  className="profile_img" src= {user && user.profile_image} alt='' roundedCircle  />
            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={onchange1} />
            
            <label htmlFor="icon-button-file">
              <IconButton className='upload1' color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
              <div className='row'>
              <input
                type='submit'
                value='Upload'
                id="vali2"
                className='btn '
                hidden={hide}
              />
              </div>
           
            </label>
          </div>
          </form>
          </div>
            
      
      
      <div>
        <h2>
          <p>{user && user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1)}  {user && user.last_name.charAt(0).toUpperCase() + user.last_name.slice(1)}</p>
        </h2>
      </div>
      </Col>
      </Row>
      <Row>
        <Col sm={2}></Col>
        <Col sm={6}>
        <Nav />
        </Col>
        
      </Row>
      <Row>
        <Col sm={1}></Col>
        <Col sm={8}>
        <Content />
        </Col>
        <Col sm={2}></Col>
        
      </Row>
    </Fragment>
  )

}
Profile.propTypes = {
  auth: PropTypes.object.isRequired,
  editt: PropTypes.func.isRequired,
  picture: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,

})
export default connect(mapStateToProps, { edit, picture })(withRouter(Profile));