import React from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import { Avatar } from '@material-ui/core';


const SingleReply = ( { reply } ) => {
    return (
        <Fragment>
            <Row >
                <Col xs={2} className='pb-2 pt-2' >
                    <Avatar src={reply && reply.user.profile_image} />
                </Col>
                <Col xs={5} className='px-0'>
                    <h6><b>{reply  && reply.user.first_name.charAt(0).toUpperCase() + reply.user.first_name.slice(1)} {reply  && reply.user.last_name.charAt(0).toUpperCase() + reply.user.last_name.slice(1)}</b></h6>
                </Col>
            </Row>
            <Row className='pt-2'>
                <Col xs={2}>
                </Col> 
                <Col xs={8}> 
                    {reply && reply.body.charAt(0).toUpperCase() + reply.body.slice(1)}
                </Col>
            </Row>
        </Fragment>
    )
}
SingleReply.prototype={ 
    Replies:  PropTypes.object.isRequired,
    replies: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    replies : state.Replies,
    Replies:state.Replies
})
export default connect(mapStateToProps)(SingleReply);