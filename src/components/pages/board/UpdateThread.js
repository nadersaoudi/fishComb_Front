import React from 'react';
import { Fragment, useState,useEffect } from 'react';
import { Col, Row, Card, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UpdateIcon from '@material-ui/icons/Update';
import { Button } from '@material-ui/core';
import { upadateThread, getoneThread } from '../../../Actions/Board';
import Dialog from '@material-ui/core/Dialog';
import FormControl from 'react-bootstrap/FormControl';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Form from 'react-bootstrap/Form';
const UpdateThread = ({auth:{user}, thread: {threads}, loading, upadateThread, match,getoneThread}) => {
    useEffect(() => {
        getoneThread(match.params.id);
    },  [getoneThread, match.params.id])
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
    return (
      <Fragment>
             <Card className='pt-3'> 
                        <Row className='pt-3 pb-3'>
                            <Col xs={1}></Col>
                            <Col xs={4}>
                                <h4><b>{threads && threads.data.title.charAt(0).toUpperCase() + threads.data.title.slice(1)}</b></h4>
                            </Col>
                        </Row>
                        <Row className='pt-3 pb-5'>
                            <Col xs={1}></Col>
                            <Col xs={10}>
                                <Row className='pt-2 pb-2'>
                                    <Col xs={9}>
                                        <span>{threads && threads.data.body.charAt(0).toUpperCase() + threads.data.body.slice(1)}</span>
                                    </Col>
                                    <Col xs={1}>
                                        <Image src={threads && threads.data.image}  width="200" height="150" alt='event' rounded className='product'/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={11}>
                                    </Col>
                                    <Col xs={1}>
                                    {user && threads && user.user_id ===   threads.data.user.data.user_id ?
                                                <Button className="float-right thread__btn" onClick={handleClickOpen} ><UpdateIcon/>Edit</Button> : (<div></div>)}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                    <Dialog open={open} onClose={handleClose} >
                            <form className='addQuestion' onSubmit={e => submit(e)}>
                                <DialogTitle id="form-dialog-title">Update Question</DialogTitle>
                                <DialogContent>
                                    <Row className=" pt-2">
                                        <Col sm={12} md={12} xl={12}>
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
                                    <Row className='pt-1 pb-1'>
                                        <Col xs={12}>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Control 
                                                    rows={3}
                                                    className='input_event'
                                                    placeholder={threads && threads.data.status}
                                                    name="status" value={status} onChange={onstatuschange} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className='pt-3'>
                                        <Col xs={12}>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Control as="textarea"
                                                    rows={3}
                                                    className='input_event'
                                                    placeholder={threads && threads.data.body}
                                                    name="body" value={body} onChange={onbodychange} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className=' pt-3'>
                                        <Col  sm={12} md={12} xl={12} className="btn-group btn-group-toggle ">
                                            <input accept="image/*" id="icon-button-file" type="file" onChange={onimagechange} />
                                            { /*<Button variant="outlined" style={{ backgroundColor: '#202c43', color: 'white', borderRadius: '0' }}  >
                                                <span  >Upload Video </span>

                                                </Button>*/}
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
UpdateThread.prototype={
    addReplies: PropTypes.func.isRequired,
    threads: PropTypes.object.isRequired,
    Replies: PropTypes.object.isRequired,
    getoneThread: PropTypes.func.isRequired,
    getReplies: PropTypes.func.isRequired,
    addReplies: PropTypes.func.isRequired,
    reply: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    upadateThread :PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    thread: state.Thread,
    threads: state.threads,
    Replies: state.Replies,
    replies : state.Replies,
    reply: state.Replies,
    auth: state.auth
})
export default connect(mapStateToProps, {upadateThread ,getoneThread})(UpdateThread);
