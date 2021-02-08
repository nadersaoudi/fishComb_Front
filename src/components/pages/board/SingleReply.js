import React from 'react';
import { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Board.css';
import { Col, Row, Card } from 'reactstrap';
import { Avatar } from '@material-ui/core';
import { deleteReply, updateReply } from '../../../Actions/Replies';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Form from 'react-bootstrap/Form';
import Dialog from '@material-ui/core/Dialog';
const SingleReply = ( { reply ,deleteReply , auth : { user }, updateReply } ) => {
/*************************************/
const [open, setOpen] = React.useState(false);
const handleClickOpen = () => {
    setOpen(true);
};
const handleClose = () => {
    setOpen(false);
};
const [formData, setformData] = useState({
    body: '',
})
const { body } = formData;
const onchange = e => setformData({ ...formData, [e.target.name]: e.target.value });
const submit = e => {
    e.preventDefault();
    updateReply(formData, reply.id);
    e.target.reset();
}
/*************************************/
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
                <Col xs={9}> 
                    {reply && reply.body.charAt(0).toUpperCase() + reply.body.slice(1)}
                </Col>
                <Col xs={1}>
                    {user && reply && user.user_id ===   reply.user.id ?
                    <Button onClick={handleClickOpen} ><UpdateIcon /></Button> : (<div></div>)}
                </Col>
                <Col xs={1}>
                    {user && reply && user.user_id ===   reply.user.id ?
                    <Button  onClick={e => deleteReply(reply.id)}><DeleteIcon /></Button>: (<div></div>)}
                </Col>
            </Row>
            </Card>
            <Dialog open={open} onClose={handleClose} >
                            <form className='addQuestion' onSubmit={e => submit(e)} >
                                <DialogTitle id="form-dialog-title">Update Question</DialogTitle>
                                <DialogContent>
                                    <Row className='pt-3'>
                                        <Col xs={12}>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Control as="textarea"
                                                    rows={3}
                                                    className='input_event'
                                                    placeholder={reply && reply.body}
                                                    name="body" value={body} onChange={e => onchange(e)}  />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className='pt-3'>
                                        <Col md={10} className='mt-3'></Col>
                                        <Col className='pb-4' >
                                            <Button className='btn btn-light pt-2 pb-2 ' onClick={handleClose} type='submit'>Update</Button>
                                        </Col>
                                    </Row>
                                </DialogContent>
                            </form>
                        </Dialog>
        </Fragment>
    )
}
SingleReply.prototype={ 
    auth:  PropTypes.object.isRequired,
    Replies:  PropTypes.object.isRequired,
    replies: PropTypes.object.isRequired,
    deleteReply: PropTypes.func.isRequired, 
    updateReply : PropTypes.func.isRequired, 
}
const mapStateToProps = state => ({
    auth: state.auth,
    replies : state.Replies,
    Replies:state.Replies
})
export default connect(mapStateToProps , { deleteReply, updateReply })(SingleReply);