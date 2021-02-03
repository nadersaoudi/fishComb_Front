import React from 'react';
import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
const SingleThread = ( {threads } ) => {
    return (
        <Fragment>
            <Row>
                <Col xs={12}>
                    <Row>
                        <Col xs= {8}>
                            <span>
                                {threads && threads.title}
                            </span>
                        </Col>
                        <Col xs={4}>
                            <Button>Delete</Button>
                        </Col>
                    </Row>
                </Col>
                <Col xs={10}>
                    <span>
                        {threads && threads.body}
                    </span>
               </Col>
            </Row>
        </Fragment>
    )
}
SingleThread.prototype={
    Thread: PropTypes.object.isRequired,
    thread: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    thread : state.Thread,
    Threads : state.Thread
})
export default connect (mapStateToProps) (SingleThread);