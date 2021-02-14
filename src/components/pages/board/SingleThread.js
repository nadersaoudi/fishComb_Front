import React from 'react';
import { Fragment, useState, useEffect } from 'react';
import { Col, Row, Card, Image } from 'react-bootstrap';
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
import Switch from '@material-ui/core/Switch';
const SingleThread = ({ auth: {user}, threads, deleteTreadh, upadateThread, addReplies, match ,getReplies , loading,reply}) => {
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
    const [title, settitle] = useState('')
    const [body, setbody] = useState('')
    const [image, setimage] = useState('')
    const [status, setStatus] = useState('')
    const ontitlechange = e => {
        settitle(e.target.value)
    }
    const onbodychange = e => {
        setbody(e.target.value)
    }
    const onstatuschange = e => {
        setStatus(e.target.value)
    }
    const onimagechange = e => {
        setimage(e.target.value)
    }
    /***************************************/
    const [state, setState] = React.useState({checkedA: true});
    const handleswitch = (threads) => {
        setState({
            ...state,
            [threads.target.name]: threads.target.checked
        });
        if (threads.target.checked === true) {
            setStatus(1)
        } else {
            setStatus(0)
        }
        console.log(status)
    };
    /*********************************/
    useEffect(() => {
        settitle(loading || !!threads && !threads.data.title ? '' :  threads.data.title)
    }, [loading])
    useEffect(() => {
        setbody(loading || !!threads && !threads.data.body ? '' : threads.data.body)
    }, [loading])
    useEffect(() => {
        setStatus(loading || !!threads && !threads.data.status ? 1 : threads.data.status)
    }, [loading])
    useEffect(() => {
        setimage(loading || !!threads && !threads.data.image ? '' : threads.data.image )
    }, [loading])
    const submit = e => {
        e.preventDefault();
        const file = new FormData();
        file.append('title', title);
        file.append('body', body);
        file.append('image', image);
        file.append('status', status);
        upadateThread(file,threads.data.id)
        e.target.reset();
    }
    /************************************/
    /***********************************/
    return (
        
        <Fragment>
            <title>{threads && threads?.data?.title?.charAt(0).toUpperCase() + threads?.data?.title?.slice(1)} | FishComb</title>
            <div class="card mb-3">
                <div class="card-header">
                    <NavLink to={`/dashboard/thread/${threads.data.id}`} className='threadLink'>
                         <b className='title__thread'>{threads && threads.data.title.charAt(0).toUpperCase() + threads.data.title.slice(1)} </b>
                    </NavLink>
                  </div>
            <div class="card-body">
                    <blockquote class="blockquote mb-0">
                    {threads && threads.data.body.charAt(0).toUpperCase() + threads.data.body.slice(1)}
                        {reply && reply.body.charAt(0).toUpperCase() + reply.body.slice(1)} 
                    
                        <footer class="blockquote-footer">{user && threads && user.user_id ===   threads.data.user.data.user_id ?
                    <Button className="float-right thread__btn" onClick={handleClickOpen} ><UpdateIcon/>Edit</Button> : (<div></div>)}                                     
                        {user && threads && user.user_id ===   threads.data.user.data.user_id ?
                      <Button className="float-right thread__btn" onClick={e => deleteTreadh(threads && threads.data.id)}><DeleteIcon />Delete</Button> : (<div></div>)}
                                        <NavLink to={`/dashboard/thread/${threads.data.id}`}>
                      <Button className='float-right thread__btn' onClick={e => getReplies(threads && threads.data.id)}>Replies</Button>
                                         </NavLink>
                </footer>
                </blockquote>
             </div>
        </div>
                            <Dialog open={open} onClose={handleClose} >
                                    <form className='addQuestion' onSubmit={e => submit(e)}>
                                        <DialogTitle id="form-dialog-title">Update Question</DialogTitle>
                                    <DialogContent>
                                            <Row className=" pt-2">
                                         <Col sm={12} md={12} xl={12}>
                                            <Row>
                                                <Col xs={2}>
                                                    <Form.Label>Title</Form.Label>
                                                </Col>
                                                <Col xs={10}>
                                                    <FormControl
                                                    className='input_event'
                                                    placeholder={threads && threads.data.title}
                                                    margin="dense"
                                                    id="Title"
                                                    label="Title"
                                                    type="text"
                                                    name="title" value={title} onChange={ontitlechange} />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className='pt-3'>
                                        <Col xs={12}>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Row>
                                                    <Col xs={2}>
                                                        <Form.Label>Body</Form.Label>
                                                    </Col>
                                                    <Col xs={10}>
                                                        <Form.Control as="textarea"
                                                            rows={3}
                                                            className='input_event'
                                                            placeholder={threads && threads.data.body}
                                                            name="body" value={body} onChange={onbodychange} />
                                                    </Col>
                                                </Row>
           
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className='pt-1 pb-1'>
                                        <Col xs={12}>
                                        <FormControl // placeholder={event && event.status}
                                        className='input_event'
                                        hidden='true'
                                        id="status"
                                        name="status"
                                        value={
                                            status.toString()
                                        }
                                        type="textarea"
                                        fullWidth
                                        onChange={onstatuschange}/>
                                        Disable Post
                                    <Switch checked={
                                        state.checkedA
                                    }
                                    onChange={handleswitch}
                                    name="checkedA"
                                    inputProps={
                                        {'aria-label': 'secondary checkbox'}}/>
                                        Enable Post
                                    </Col>
                                    </Row>
                                    <Row className=' pt-3'>
                                        <Col  sm={12} md={12} xl={12} className="btn-group btn-group-toggle ">
                                        <div className='col-md-3 px-0'>Upload Image</div><input accept="image/*" id="icon-button-file" type="file" onChange={onimagechange} />
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