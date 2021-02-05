import React from 'react';
import { Fragment, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Board.css';
import { Button } from '@material-ui/core';
import { deleteTreadh, upadateThread } from '../../../Actions/Board';
import { addReplies } from '../../../Actions/Replies';
import Dialog from '@material-ui/core/Dialog';
import FormControl from 'react-bootstrap/FormControl';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
const SingleThread = ({ threads, deleteTreadh, upadateThread, addReplies }) => {
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
        upadateThread(formData, threads.id);
    }
    const [formData1, setformData1] = useState({
        body2: '',
    })
    const { body2 } = formData1;
    const onchange1 = e => setformData1({ ...formData1, [e.target.name]: e.target.value });
    const submit1 = e => {
        e.preventDefault();
        addReplies(formData1, threads.id);
    }
    /***********************************/
    return (
        <Fragment>
            <Row className='pt-5 pb-2'>
                <Col xs={12}>
                    <Row>
                        <Col xs={8}>
                            <span>
                                <h5>
                                    {threads && threads.title.charAt(0).toUpperCase() + threads.title.slice(1)}
                                </h5>
                            </span>
                        </Col>
                        <Col xs={4}>
                            <Button onClick={handleClickOpen} >Edit</Button>
                            <Dialog open={open} onClose={handleClose} className='addProduct'>
                                <form className='addQuestion' onSubmit={e => submit(e)}>
                                    <DialogTitle id="form-dialog-title">Edit Question</DialogTitle>
                                    <DialogContent>
                                        <Row className=" pt-1">
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
                                        <Row>
                                            <Col md={10} className='mt-2'></Col>
                                            <Col className='pt-3 pb-3'>
                                                <Button className='btn btn-light' type='submit'>Edit</Button>
                                            </Col>
                                        </Row>
                                    </DialogContent>
                                </form>
                            </Dialog>
                            <NavLink to='/dashboard/replies'>
                            <Button>Replies</Button>
                            </NavLink>
                            <Button onClick={e => deleteTreadh(threads && threads.id)}>Delete</Button>
                        </Col>
                    </Row>
                </Col>
                <Col xs={8}>
                    <span>
                        {threads && threads.body}
                    </span>
                </Col>
                <hr></hr>
            </Row>
        </Fragment>
    )
}
SingleThread.prototype = {
    Thread: PropTypes.object.isRequired,
    thread: PropTypes.object.isRequired,
    deleteTreadh: PropTypes.func.isRequired,
    upadateThread: PropTypes.func.isRequired,
    addReplies: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    thread: state.Thread,
    Threads: state.Thread
})
export default connect(mapStateToProps, { deleteTreadh, upadateThread, addReplies })(SingleThread);