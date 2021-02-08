import React from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Row, Card, Button } from 'reactstrap';
import { Avatar } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteReply } from '../../../Actions/Replies';

const SingleReply = ( { reply , deleteReply } ) => {
    return (
        <Fragment>
            <Card className='p-3 my-2' style={{backgroundColor:'#f5f3f0'}}>
            <Row >
                <Col xs={1} className='py-2' >
                    <Avatar src={reply && reply.user.profile_image} />
                </Col>
                <Col xs={5} className='px-0'>
                    <h6><b>{reply  && reply.user.first_name.charAt(0).toUpperCase() + reply.user.first_name.slice(1)} {reply  && reply.user.last_name.charAt(0).toUpperCase() + reply.user.last_name.slice(1)}</b></h6>
                </Col>
            </Row>
            <Row className>
                <Col xs={1}>
                </Col> 
                <Col xs={8}> 
                    {reply && reply.body.charAt(0).toUpperCase() + reply.body.slice(1)}
                </Col>
                <Col xs={2}>
                    <Button  onClick={e => deleteReply(reply.id)}><DeleteIcon /></Button>
                </Col>
            </Row>
            </Card>
        </Fragment>
    )
}
SingleReply.prototype={ 
    Replies:  PropTypes.object.isRequired,
    replies: PropTypes.object.isRequired,
    deleteReply: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    replies : state.Replies,
    Replies:state.Replies
})
export default connect(mapStateToProps , { deleteReply }) (SingleReply);