import React from 'react';
import { Fragment, useState } from 'react';
import { Avatar, Card } from "@material-ui/core";
import { Col, Row, Form } from 'react-bootstrap';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';
import { deleteComment, updateComment, getPosts } from '../../../../Actions/Post';
import Button from '@material-ui/core/Button';

const SingleComm = ({ getPosts, auth: { user }, Post: { posts }, updateComment, deleteComment, comments, getUsers }) => {
    const [body, setText] = useState("");
    const [show, setshow] = useState(false);
    const [hidden, setHidden] =useState(true);
    const onclick = () => {
        setHidden(hidden === false ? true : false); 
        setshow(show === false)
    }
    const updatecomment = async (id, body) => {
        updateComment(id, body);
        setshow(false);
        setHidden(true);
        getPosts()
      };
    return (
        <Fragment>
            <Row className="pt-2 pb-3">
                <Col xs={1} sm={2} md={1} className="pt-2 pb-2">
                    <NavLink to={`/dashboard/profileuser/${comments.user.id}`} >
                        <Avatar src={"http://77.68.24.35/storage/" + comments.user.profile_image.slice(6)}
                            onClick={(e) => getUsers(comments.user.id)} />
                    </NavLink>
                </Col>
                <Col xs={10} sm={10} md={10}>
                    <Card className="pt-2 pb-3 card__comments"  >
                        <Row>
                            <Col xs={1} md={1} sm={1} className='px-0'></Col>
                            <Col xs={9} sm={5} md={8} className='px-0' >
                                <p hidden={show}>{comments.body.charAt(0).toUpperCase() + comments.body.slice(1)}</p>
                                <Row hidden={hidden} >
                                   
                                        <Col xs={9} sm={5} md={11}>
                                            <Form  onSubmit={(e) => {
                                            e.preventDefault();
                                            updatecomment(comments.id, { body });
                                            setshow(false);
                                            setHidden(true);
                                            getPosts()
                                            setText("");}}>
                                                <Form.Group>
                                                    <Form.Control className='input__ComUpdate '  placeholder={comments.body} value={body}
                                                    onChange={(e) => setText(e.target.value)}     />
                                                </Form.Group>
                                                <button type='submit' className='update_combutton'></button>
                                            </Form>
                                        </Col>
                                </Row>
                            </Col>
                            {user && user.user_id === comments.user_id ?
                            <Col xs={1} sm={1} md={1} className='px-0' >
                                <Button size="small"  className='button_editCom' onClick ={onclick}>
                                    <MdModeEdit />
                                </Button>
                            </Col>
                             : <Col></Col>}
                            {user && user.user_id === comments.user_id ?
                            <Col xs={1} sm={1} md={1} className='px-0' >
                                <Button size="small"  className='button_editCom' onClick={(e) => deleteComment(comments.id)}>
                                    <MdDelete  />
                                </Button>
                            </Col>
                            : <Col></Col>}
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
SingleComm.prototype = {
    Post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
    updateComment: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
    auth: state.auth,
    Post: state.Post,
});
export default connect(mapStateToProps,{ deleteComment, getPosts, updateComment })(SingleComm);
