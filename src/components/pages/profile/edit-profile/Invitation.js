import React from 'react';
import { acceptInv } from '../../../../Actions/Friends';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Avatar, Button, Card } from '@material-ui/core';
import { Col, Row } from 'reactstrap';
import Invits from './Invits';

const Invitation = ({ acceptInv, Friends: {
    users
} }) => {
    return (
        <div>
            Invitation
            <Card className='pb-4 p-3'>
                {
                    users && users.map(users => (
                        <Invits className='notification_row'
                            key={
                                users.id
                            }
                            users={users} />
                    ))
                }
            </Card>
        </div>
    )
}
Invitation.prototype = {
    Friends: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
    Friends: state.Friends
})
export default connect(mapStateToProps, null)(Invitation)
