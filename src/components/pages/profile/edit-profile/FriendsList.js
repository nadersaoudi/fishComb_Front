import React, { useEffect } from 'react';
import { getFriends } from '../../../../Actions/Friends';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Avatar, Card } from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const FriendsList = ({ getFriends, Friends: { friends } }) => {
    useEffect(() => {
        getFriends()
    }, [getFriends])
    return (
        <div className='pb-5'>
            <Card className='pb-5 pt-4'>
                {friends && friends.map((c, index) => (
                    <div className='col-md-12'>
                        <form onSubmit={
                            e => onsubmit(e)}>
                            <div className='col-md-12'>
                                <div className='row'>
                                    <div className='col-md-2'>
                                        <Avatar src={c.data.attributes.profile_image} />
                                    </div>
                               
                                <div className='col-md-6 pt-2'>
                                    {c.data.attributes.first_name} {c.data.attributes.last_name}
                                </div>
                                <div className='col-md-2'>
                                <NavLink to={`/dashboard/profileuser/${c.data.user_id}`}>
                                    <Button>View Profile</Button>
                                </NavLink>
                                </div>
                                </div>
                            </div>
                        </form>
                    </div>
                ))
                }
            </Card>
        </div>
    )
}

FriendsList.propTypes = {
    getFriends: PropTypes.func.isRequired,
    Friends: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
    Friends: state.Friends,
})
export default connect(mapStateToProps, { getFriends })(FriendsList)
