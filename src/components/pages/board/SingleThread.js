import React from 'react';
import { Fragment, useState } from 'react';
import { Col, Row,Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Board.css';
import { Button } from '@material-ui/core';
import { deleteTreadh, upadateThread } from '../../../Actions/Board';
import { addReplies } from '../../../Actions/Replies';
import Dialog from '@material-ui/core/Dialog';
import FormControl from 'react-bootstrap/FormControl';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';

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
            <Row className='pb-2'>
                <Col xs={12}>
                    <Row>
                        <Col xs= {8}>
                            <Card style={{ width: '55rem',marginBottom:'4px' }}>
                                <Card.Title>
                                        {threads && threads.data.title.charAt(0).toUpperCase() + threads.data.title.slice(1)}        
                                  </Card.Title>
                            
                    <Card.Text>
                       <Col className='mr-0' style={{maxWidth:'35rem',}}>{threads && threads.data.body}</Col>     
                        
                            <Button className="float-right" onClick={handleClickOpen} ><UpdateIcon Style={{}}/>Edit</Button>
                            <Button className="float-right" onClick={e=>deleteTreadh(threads && threads.id)}><DeleteIcon/>Delete</Button>
                            <NavLink to='/dashboard/replies'>
                            <Button className='float-right'>Replies</Button>
                            </NavLink>
                    </Card.Text>
                
                            </Card>
                        </Col>
                       
                            <Dialog open={open} onClose={handleClose} className='addProduct'>
                            <form className='add__event' onSubmit={e => submit(e)}>
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
                                    <FormControl
                                                className='input_event'
                                                placeholder="descreption"
                                                margin="dense"
                                                as="textarea" 
                                                aria-label="With textarea"

                                                label="Title"
                                                type="textaz"
                                                name="body" value={body} onChange={e => onchange(e)} />
                                </Row>
                                <Row>
                                    <Col md={10}className='mt-3'></Col>
                                    <Col>
                                    <button className='btn btn-light mt-4' type='submit'>Save</button>
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
    addReplies: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    thread: state.Thread,
    Threads: state.Thread
})
export default connect(mapStateToProps, { deleteTreadh, upadateThread, addReplies })(SingleThread);