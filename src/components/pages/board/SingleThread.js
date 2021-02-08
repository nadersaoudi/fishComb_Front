import React from 'react';
import { Fragment, useState } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Board.css';
import { Button } from '@material-ui/core';
import { deleteTreadh, upadateThread } from '../../../Actions/Board';
import { addReplies ,getReplies } from '../../../Actions/Replies';
import Dialog from '@material-ui/core/Dialog';
import FormControl from 'react-bootstrap/FormControl';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
const SingleThread = ({ auth: {user}, threads, deleteTreadh, upadateThread, addReplies, match ,getReplies}) => {
    /***********************************/
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const [open1, setOpen1] = React.useState(false);
    const handleClickOpen1 = () => {
        setOpen1(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClose1 = () => {
        setOpen1(false);
    };
    /***********************************/
    const [formData, setformData] = useState({
        title: '',
        body: '',
        status: '1'
    })
    const { title, body, status } = formData;
    const onchange = e => setformData({ ...formData, [e.target.name]: e.target.value });
    const submit = e => {
        e.preventDefault();
        upadateThread(formData, threads.data.id);
    }

    /***********************************/
    return (
        <Fragment>
            <Row className='pb-2'>
                <Col xs={12}>
                    <Row>
                        <Col xs={8}>
                            <Card style={{ width: '55rem', marginBottom: '4px' }}>
                                <Card.Title>
                                    {threads && threads.data.title.charAt(0).toUpperCase() + threads.data.title.slice(1)}
                                </Card.Title>
                                <Card.Text>
                                    {threads && threads.data.body}
                                    {user && threads && user.user_id ===   threads.data.user.data.user_id ?
                                    <Button className="float-right" onClick={handleClickOpen} ><UpdateIcon Style={{}} />Edit</Button> : (<div></div>)}
                                    {user && threads && user.user_id ===   threads.data.user.data.user_id ?
                                    <Button className="float-right" onClick={e => deleteTreadh(threads && threads.data.id)}><DeleteIcon />Delete</Button> : (<div></div>)}
                                    <NavLink to={`/dashboard/thread/${threads.data.id}`}>
                                        <Button className='float-right' onClick={e => getReplies(threads && threads.data.id)}>Replies</Button>
                                    </NavLink>
                                </Card.Text>
                                <Col xs={6}>
                                </Col>
                            </Card>
                        </Col>
                        <Dialog open={open} onClose={handleClose} >
                            <form className='addQuestion' onSubmit={e => submit(e)}>
                                <DialogTitle id="form-dialog-title">Ask Question</DialogTitle>
                                <DialogContent>
                                    <Row className=" pt-2">
                                        <Col sm={12} md={12} xl={12}>
                                            <FormControl
                                                className='input_event'
                                                placeholder="Title"
                                                margin="dense"
                                                id="Title"
                                                label="Title"
                                                type="text"
                                                name="title" value={title} onChange={e => onchange(e)} />
                                        </Col>
                                    </Row>
                                    <Row className='pt-1 pb-1'>
                                    </Row>
                                    <Row className='pt-3'>
                                        <Col xs={12}>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Control as="textarea"
                                                    rows={3}
                                                    className='input_event'
                                                    placeholder="descreption"
                                                    name="body" value={body} onChange={e => onchange(e)} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className='pt-3'>
                                        <Col md={10} className='mt-3'></Col>
                                        <Col className='pb-4' >
                                            <Button className='btn btn-light pt-2 pb-2 ' onClick={handleClose} type='submit'>Ask Question</Button>
                                        </Col>
                                    </Row>
                                </DialogContent>
                            </form>
                        </Dialog>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
}
SingleThread.prototype = {
    Thread: PropTypes.object.isRequired,
    thread: PropTypes.object.isRequired,
    deleteTreadh: PropTypes.func.isRequired,
    upadateThread: PropTypes.func.isRequired,
    addReplies: PropTypes.func.isRequired,
    getReplies: PropTypes.func.isRequired,
    auth :PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    auth: state.auth,
    thread: state.Thread,
    Threads: state.Thread
})
export default connect(mapStateToProps, { deleteTreadh, upadateThread, addReplies ,getReplies })(SingleThread);