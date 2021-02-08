import React from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Row, Card } from 'reactstrap';
import { Avatar } from '@material-ui/core';
import { deleteReply } from '../../../Actions/Replies';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
const SingleReply = ( { reply ,deleteReply , auth : { user } } ) => {
    return (
        <Fragment>
            <Card className='p-3 my-2' style={{backgroundColor:'#f5f3f0'}}>
            <Row >
                <Col xs={1} className='py-2'>
                    <Avatar src={"http://77.68.24.35/storage/"+reply.user.profile_image.slice(6)}/>
                </Col>
                <Col xs={5} className='px-0 pt-4'>
                    <h6><b>{reply  && reply.user.first_name.charAt(0).toUpperCase() + reply.user.first_name.slice(1)} {reply  && reply.user.last_name.charAt(0).toUpperCase() + reply.user.last_name.slice(1)}</b></h6>
                </Col>
            </Row>
            <Row className>
                <Col xs={1}>
                </Col> 
                <Col xs={10}> 
                    {reply && reply.body.charAt(0).toUpperCase() + reply.body.slice(1)}
                </Col>
                <Col xs={1}>
                    {user && reply && user.user_id ===   reply.user.id ?
                    <Button  onClick={e => deleteReply(reply.id)}><DeleteIcon /></Button>: (<div></div>)}
                </Col>
            </Row>
            </Card>
        </Fragment>
    )
}
SingleReply.prototype={ 
    auth:  PropTypes.object.isRequired,
    Replies:  PropTypes.object.isRequired,
    replies: PropTypes.object.isRequired,
    deleteReply: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth,
    replies : state.Replies,
    Replies:state.Replies
})
export default connect(mapStateToProps , { deleteReply })(SingleReply);