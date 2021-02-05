import React from 'react';
import { Fragment, useState } from 'react';
import { Col, Row,Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { deleteTreadh, upadateThread } from '../../../Actions/Board';
import Dialog from '@material-ui/core/Dialog';
import FormControl from 'react-bootstrap/FormControl';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';

import DialogContent from '@material-ui/core/DialogContent';
const SingleThread = ( {threads , deleteTreadh, upadateThread } ) => {
/***********************************/
const [open, setOpen] = React.useState(false);
const handleClickOpen = () => {
    setOpen(true);
};
const handleClose = () => {
    setOpen(false);
};
/***********************************/
const [formData, setformData] = useState({
    title: '',
    body: '',
    status: '1'
})
const { title, body,status } = formData;
const onchange = e => setformData({ ...formData, [e.target.name]: e.target.value });
const submit = e => {
    e.preventDefault();
    upadateThread(formData,threads.id);
}
/***********************************/
return (
        <Fragment>
            <Row>
                <Col xs={12}>
                    <Row>
                        <Col xs= {8}>
                            <Card style={{ width: '55rem',marginBottom:'4px' }}>
                                <Card.Title>
                                {threads && threads.title}
                            
                            </Card.Title>
                            
                    <Card.Text>
                    
                        {threads && threads.body}
                        
                        <Button className="float-right" onClick={handleClickOpen} ><UpdateIcon Style={{}}/>Edit</Button>
                            <Button className="float-right" onClick={e=>deleteTreadh(threads && threads.id)}><DeleteIcon/>Delete</Button>
                    
                    </Card.Text>
                    <Col xs={6}>
                            
                            </Col>
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
                                                type="textarea"
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
SingleThread.prototype={
    Thread: PropTypes.object.isRequired,
    thread: PropTypes.object.isRequired,
    deleteTreadh: PropTypes.func.isRequired,
    upadateThread: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    thread : state.Thread,
    Threads : state.Thread
})
export default connect (mapStateToProps , { deleteTreadh, upadateThread }) (SingleThread);