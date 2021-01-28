import React , {useState} from 'react';
import { reset } from '../../../Actions/auth';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import './Reset.css';
import Footer from "../../layout/Footer/Footer"
const Reset = ({ reset }) => {
    const [formData, setFormData] = useState({
        email: ''

      });
      const { email } = formData;

   
      const onchange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
      
      const onSubmit = async e => {
        e.preventDefault();
        reset(email);
        
      }

return(
    <div>
    <div className="Reset">
    <div className="row">
    <a href="/" className="img">
          <img src="../../../../dist/img/logofish.png" alt="fishcomb" /></a>
    </div>
    <div className="row">
      <div className='col-sm-3'></div>
      <div className='col-sm6'>
    <div className="card col-sm-7">
        <div className="card-reset">
            <form onSubmit={e => onSubmit(e)}>
                <div >
                    <label className="reg_su">Reset Password</label>
                </div>

                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-12 pt-3 ">
                            <input type="email" className="form-control res__input" placeholder="Your Email"
                                 name="email" value={email} onChange={e => onchange(e)}/>
                        </div>

                    </div>
                </div>
                <div>
                    <button className="btn btn-primary col-sm-12 mt-3  res-button">Reset Password
                    </button>
                </div>

            </form>
        </div>
    </div>
    </div>
    <div className='col-sm-3'></div>
    </div>
   
</div>

      <Footer />
</div>

)
}
Reset.propTypes = {
    reset: propTypes.func.isRequired,
    isAuthenticated: propTypes.bool
  }
  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  })

export default connect(mapStateToProps,{reset}) (Reset);