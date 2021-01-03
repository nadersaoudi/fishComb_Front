import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { edit } from "../../../../Actions/classes";
import $ from "jquery";
import Button from 'react-bootstrap/Button';

const Aboute = ({ auth: { user  } , edit})  => {
 
  $('#editprofile').click( function(event){
    event.preventDefault();
    $('.show').each(function(){
      $(this).hide()
      
    })
    $('.edit').each(function(){
      $(this).show()
      
    })
  })
 
return(
  <div>
     <form className='card'id='cardpro' >
                 <div className='kk' >
                    <div className="row " >
                          <div className='col-9 mt-5 datas'>
                          <span className="show"> {user && user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1)} {user && user.last_name.charAt(0).toUpperCase() + user.last_name.slice(1)}</span> 
                          <input className="edit" value= {user && user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1)} ></input>
                          <input className="edit" value= {user && user.last_name.charAt(0).toUpperCase() + user.last_name.slice(1)} ></input>
                          </div> 
                          
                          <div className="col-3 datas">
                          <div className="btn-group btn-group-toggle col-md-12 mb-2 mt-2" id="editprofile"
                                         data-toggle="buttons">
                          <Button  className="show"  variant="outlined" >
                              <span className="show"> Edit Profile</span> 
                             
                            </Button>

                            <Button className= "edit"  variant='outlined'>
                              Save
                            </Button>
                            
                          
                            </div>
                         </div>
                         
                        </div>
                        <div className="mt-4  datas" ><span className="show">{user && user.email}</span> </div>
                        <input  className="edit" value={user && user.email}></input>
                        <div className="mt-4  datas"> <span className="show"> {user && user.birth_date}</span></div>
                        <input className="edit" value={user && user.birth_date}></input>
                        <div className="mt-4  datas"> <span className='show'> +44 22356 5456</span></div>
                        <input className="edit" ></input>
                        <div className='col-7 mt-4  datas'>
                         <span className="show"> 
                         Lorem Ipsum is simply dummy text of the printing 
                          and typesetting industry. Lorem Ipsum has
                          been the industry's standard
                            dummy text ever since the 1500s,
                           </span> 

                        </div>
                        <input className="edit" ></input>
                        
                    </div>        
  </form>

  
  </div>
 
           
)
    
}

Aboute.propTypes = {
    auth: PropTypes.object.isRequired,
    edit: PropTypes.object.isRequired,
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    
  })
  export default connect(mapStateToProps, {edit})(Aboute);