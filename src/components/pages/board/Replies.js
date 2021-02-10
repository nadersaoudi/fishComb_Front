import React from 'react';
import { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getoneThread } from '../../../Actions/Board';
import { getReplies, addReplies } from '../../../Actions/Replies';
import PropTypes from 'prop-types';
import { Col, Row, Card, Image } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Button } from '@material-ui/core';
import SingleReply from './SingleReply';
import UpdateIcon from '@material-ui/icons/Update';
import './Board.css';

const Replies = ( {auth:{user}, thread: {threads} , match , getoneThread, getReplies , Replies: {replies} ,addReplies} ) => {
/**************************************/
const [open, setOpen] = React.useState(false);
const handleClickOpen = () => {
    setOpen(true);
};
  const handleClose = () => {
        setOpen(false);
    };
/**************************************/
    useEffect(() => {
        getoneThread(match.params.id);
    },  [getoneThread, match.params.id])
    useEffect(() => {
        getReplies(match.params.id);
    }, [getReplies, match.params.id])
/**************************************/
const [formData, setformData] = useState({
    body: '',
})
const { body } = formData;
    const onchange = e => setformData({ ...formData, [e.target.name]: e.target.value });
    const submit = e => {
        e.preventDefault();
        addReplies(formData, threads.data.id);
        setformData({
            body: ''  
        })
    }
/**************************************/
    return (
       <Fragment>
           <Row className='pt-5 pb-5'>
               <Col xs={2}></Col>
               <Col xs={8} className='pt-4'>
                    <Card className='pt-3'> 
                        <Row className='pt-3 pb-3'>
                            <Col xs={1}></Col>
                            <Col xs={4}>
                                <h4><b>{threads && threads.data.title.charAt(0).toUpperCase() + threads.data.title.slice(1)}</b></h4>
                            </Col>
                        </Row>
                        <Row className='pt-3 pb-5'>
                            <Col xs={1}></Col>
                            <Col xs={11}>
                                <Row className='pt-2 pb-2'>
                                    <Col xs={9}>
                                        <span>{threads && threads.data.body.charAt(0).toUpperCase() + threads.data.body.slice(1)}</span>
                                    </Col>
                                </Row>
                                <Row className='pt-3 pb-5'>
                                    <Col XS={1}></Col>
                                    <Col xs={11}>
                                        <Image src={threads && threads.data.image}  width="250" height="200" alt='event' rounded className='product'/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
               </Col>
           </Row>
           <Row className='pt-5 pb-5'>
                <Col xs={2}></Col>
                <Col xs={8}>
                    {replies && replies.map((replies) =>
                        (
                        <SingleReply key={replies.id} reply={replies}  />)
                    )}
                </Col>
           </Row>
           <form onSubmit={e => submit(e)}>
           <Row className='pt-3 '>
                <Col xs={2}></Col>
                <Col xs={8} >
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea"
                            rows={3}
                            className='input_event'
                            name="body" value={body} onChange={e => onchange(e)} />
                    </Form.Group>
               </Col>
           </Row>
           <Row className='pt-1 pb-5 '>
               <Col xs={10}></Col>
                <Col xs={1}>
                    <Button className='' type='submit'>Replies</Button>
                </Col>
           </Row>
           </form>
           <Row>
               <Col xs={8}></Col>
           </Row>
       </Fragment>
    )
}
Replies.prototype={
    addReplies: PropTypes.func.isRequired,
    threads: PropTypes.object.isRequired,
    Replies: PropTypes.object.isRequired,
    getoneThread: PropTypes.func.isRequired,
    getReplies: PropTypes.func.isRequired,
    addReplies: PropTypes.func.isRequired,
    reply: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    thread: state.Thread,
    threads: state.threads,
    Replies: state.Replies,
    replies : state.Replies,
    reply: state.Replies,
    auth: state.auth
})
export default connect(mapStateToProps, { getoneThread , getReplies, addReplies  }) (Replies)

