import React ,{ Fragment , useState, useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import './Profile.css'
import Button from 'react-bootstrap/Button';
import  {edit} from '../../../Actions/profile';
import { NavLink, withRouter } from 'react-router-dom';
import PageviewIcon from '@material-ui/icons/Pageview';

const Profile =({ auth: { user, loading }, edit ,history }) => {
  const [formdata, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    birth_date:'',
    phone:'',
    about:'',
    username :'',
    // eslint-disable-next-line
    profile_image:'',
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
const [hidden, setHidden] = useState(true);
const [show, setShow] = useState(true);
const onchange = e => setFormData({ ...formdata, [e.target.name]: e.target.value });
const onSubmit = e => {
    e.preventDefault();
    edit(formdata, history, true);
}
const onclick = () => {
  setHidden(false);
  setShow(false);
}
return(
    <Fragment>
      <div className='Top___header'>
        <div>
        <Image src={user && user.cover_image} alt=''  className='coverture'/>
        <PageviewIcon className="photoEdit" id="profilepic"  />
        </div>
        
            <div className='info' >
            <Image  className="profile_img" src= {user && user.profile_image} alt='' roundedCircle  />
            <PageviewIcon className="photoEdit" id="profilepic"  />
            </div>
            <input type="file" id="imageform"></input>
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
                <form className='card 'id='cardpro' show={show}>
                <div className='row'>
                     <div className='col-9'></div>
                       <div className="col-3">
                          <div className="btn-group btn-group-toggle col-md-12" >
                          <Button  variant="outlined" onClick={onclick}>
                              <span > Edit Profile</span> 
                            </Button>
                            </div>  
                          </div>
                  </div>        
                  <div className="row " >
                        <div className='col-12 mt-4'>
                           <span className="show"> {user && user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1)} {user && user.last_name.charAt(0).toUpperCase() + user.last_name.slice(1)}</span>
                        </div>
                        <div className="mt-4" ><span className="show">{user && user.username}</span></div> 
                        <div className="mt-4" ><span className="show">{user && user.email}</span> </div>
                        <div className="mt-4" ><span className="show">{user && user.location}</span> </div>
                        <div className="mt-4"> <span className="show"> {user && user.birth_date}</span></div>
                        <div className="mt-4"> <span className='show'> {user && user.phone}</span></div>
                        <div className='col-12 mt-4'>
                        <span className="show"> 
                           {user && user.about}
                        </span> 
                        </div>
                    </div>      
                          <form onSubmit={e => onSubmit(e)} hidden={hidden}>
                            <div className='row'>
                                <div className='col-9'></div>
                                  <div className="col-3 datas">
                                      <div className="btn-group btn-group-toggle col-md-12" >
                                      <Button type="submit" variant="outlined">
                                          <span > Save</span> 
                                        </Button>
                                        </div>  
                                      </div>
                                    </div>
                        <div className="row  " >
                        <div className='col-12 mt-4 '>
                        <input className="form-control mb-4 "   placeholder={ user&& user.first_name} autoComplete="first_name" name="first_name" value={first_name} onChange={e => onchange(e)} />
                        <input className=" form-control "  placeholder={ user&& user.last_name} autoComplete="lastname" name="last_name" value={last_name} onChange={e => onchange(e)} />
                        <input className=" form-control  "   placeholder={ user&& user.username} autoComplete="username" name="username" value={username} onChange={e => onchange(e)} />
                        <input className=" form-control "   placeholder={ user&& user.email} autoComplete="email" name="email" value={email} onChange={e => onchange(e)} />
                        <input className=" form-control "    placeholder={ user&& user.birth_date} autoComplete="birth_date" name='birth_date' value={birth_date}  onChange={e => onchange(e)} />
                        <input className=" form-control "   placeholder={user && user.phone} autoComplete="phone" name='phone' value={phone}  onChange={e => onchange(e)} />
                        <input className=" form-control "  placeholder={user && user.about}  autoComplete="about" name='about' value={about}  onChange={e => onchange(e)} />    
                        </div> 
                        </div>
                      </form>   
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
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    
  })
  export default connect(mapStateToProps ,{ edit })(withRouter(Profile));



