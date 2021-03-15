import React from 'react';
import PropTypes from 'prop-types';
import  { Avatar, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { acceptInv } from '../../../../Actions/Friends';
import { NavLink } from 'react-router-dom';
const Invits = ({ users, acceptInv  }) => {
    const acceptinv =  () => {
        acceptInv(users.data.user_id,1)
      };
      const deletinv =  () => {
        acceptInv(users.data.user_id,2)
      };
    return (
        <div>
            <div className='row pt-2 pb-2'>
                <div className='col-sm-1'>
                    <NavLink  to={`/dashboard/profileuser/${users.data.user_id}`}>
                        <Avatar src={users && users.data.attributes.profile_image} />
                    </NavLink>
                </div>
                <div className='col-sm-5 pt-1'>
                    <h6><b>{users && users.data.attributes.first_name.charAt(0).toUpperCase() + users.data.attributes.first_name.slice(1)} {users && users.data.attributes.last_name.charAt(0).toUpperCase() + users.data.attributes.last_name.slice(1)}
                    </b></h6>
                    <div className='row '>
                        <div className='col-sm-5 '>
                            <span className='abouts'>
                                {users && users.data.attributes.about}
                            </span>
                        </div>
                    </div>
                </div>
                <input type='hidden' value={users && users.data.user_id} />
                <div className='col-sm-3'>
                    <Row className='pb-2'>
                        <Col xs={12}>
                            <Button variant="outlined" color="primary" className='pb-2' onClick={(e) => acceptinv()}>Accept</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Button variant="outlined" color="secondary" onClick={(e) => deletinv()} >Decline</Button>
                        </Col>
                    </Row>
                    {/** to do change the icons to accept declien */}
                </div>
            </div>
        </div>
    )
}
Invits.prototype = {
    Friends: PropTypes.object.isRequired,
    acceptInv: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
    Friends: state.Friends
})
export default connect(mapStateToProps, {acceptInv})(Invits)

