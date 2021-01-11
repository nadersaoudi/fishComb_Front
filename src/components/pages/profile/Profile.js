import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import './Profile.css'
import $ from "jquery";
import Button from 'react-bootstrap/Button';
import { edit, picture } from '../../../Actions/profile';
import { NavLink, withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles';



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
  // eslint-disable-next-line
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
  // eslint-disable-next-line
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
    


        <div className='Top___header'>
          <form onSubmit={e=>onsubmit2(e)}>
          <Image src={user && user.cover_image} alt='fishcomb-cover' className='coverture' />
         
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
          
          </form>
          <form onSubmit={e => onsubmit1(e)}>
          <div className='info' >
            <Image className="profile_img" src={user && user.profile_image} alt='' roundedCircle />
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
      <div className="row " id="n" >
        <div className="col-2">
        </div>
        <div className="col-1">
        </div>
        <div className="col-4 pb-3">
          <ul className="nav nav-pills nav-justified " id='navprofil'>
            <li className="nav-item">
              <NavLink to={`/dashboard/profile/about`} className="m"><span className='n'>About</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/dashboard/profile/order`} className="m"><span className='n'>Order History</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/dashboard/profile/order`} className="m"><span className='n'>Network</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/dashboard/profile/order`} className="m"><span className='n'>Webinars</span></NavLink>
            </li>
          </ul>
        </div>
        <div className='row pt-1'>
          <div className="col-2 ">
          </div>
          <div className='col-8 '>
            <form className='card ' id='cardpro' onSubmit={e => onSubmit(e)} >
              <div className='kk' >
                <div className='row'>
                  <div className='col-9'></div>
                  <div className="col-3 datas">
                    <div className="btn-group btn-group-toggle col-md-12 " id="editprofile">
                      <Button className="show" variant="outlined" >
                        <span className="show" > Edit Profile</span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="row  " >
                  <div className='col-12 mt-4 datas'>
                    <span className="show"> {user && user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1)} {user && user.last_name.charAt(0).toUpperCase() + user.last_name.slice(1)}</span>
                    <input className="form-control mb-4 edit" type='hidden' placeholder={user && user.first_name} autoComplete="first_name" name="first_name" value={first_name} onChange={e => onchange(e)} ></input>
                    <input className=" form-control edit" type='hidden' placeholder={user && user.last_name} autoComplete="lastname" name="last_name" value={last_name} onChange={e => onchange(e)} ></input>
                  </div>
                </div>
                <div className="mt-4  datas" ><span className="show">{user && user.username}</span>
                  <input className=" form-control  edit" type='hidden' placeholder={user && user.username} autoComplete="username" name="username" value={username} onChange={e => onchange(e)}></input> </div>
                <div className="mt-4  datas" ><span className="show">{user && user.email}</span> </div>
                <input className=" form-control edit" type='hidden' placeholder={user && user.email} autoComplete="email" name="email" value={email} onChange={e => onchange(e)}></input>
                <div className="mt-4  datas" ><span className="show">{user && user.location}</span> </div>
                <div className="mt-4  datas"> <span className="show"> {user && user.birth_date}</span></div>
                <input className=" form-control edit" type='hidden' placeholder={user && user.birth_date} autoComplete="birth_date" name='birth_date' value={birth_date} onChange={e => onchange(e)} ></input>
                <div className="mt-4  datas"> <span className='show'> {user && user.phone}</span></div>
                <input className=" form-control edit" type='hidden' placeholder={user && user.phone} autoComplete="phone" name='phone' value={phone} onChange={e => onchange(e)} ></input>
                <div className='col-12 mt-4   datas'>
                  <span className="show">
                    {user && user.about}
                  </span>
                </div>

                <input className=" form-control edit" type='hidden' placeholder={user && user.about} autoComplete="about" name='about' value={about} onChange={e => onchange(e)} ></input>
              </div>
              <div className="btn-group btn-group-toggle col-md-12 mb-5 mt-4 ">
                <Button className="edit" type="submit" variant="outlined"  >
                  <span  > Save </span>

                </Button>
              </div>
            </form>
          </div>
          <div className="col-2">
          </div>
        </div>
      </div>
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