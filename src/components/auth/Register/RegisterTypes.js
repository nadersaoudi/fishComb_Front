import React from 'react';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Col, Row, Card } from 'reactstrap';
import './Register.css';
const RegisterTypes = () => {
    return (
        <Fragment>
            <Row>
                <Row className="Register">
                    <title>Register | FishComb</title>
                    <a href="/" className="img">
                        <img src="../../../../dist/img/logofish.png" alt="" /></a>
                </Row>
                <Col xs={4} md={4} sm={4}></Col>
                <Col xs={4} md={4} sm={4}>
                    <Card xs={12} md={12} sm={12}>
                        <Row className='pt-2 pb-4 p-3'>
                            <Col xs={5} md={5} sm={5}></Col>
                            <Col xs={4} md={4} sm={4}>
                                <h6><b>Sign Up</b></h6>
                            </Col>
                        </Row>
                        <Row className='pt-2 pb-3'>
                        <Col>
                            <NavLink to={'/userregister'} className='navlinkregi' >
                                <Button className="btn btn-primary col-sm-12 mt-2 mb-4 reg-button ">
                                    Norml User
                                </Button>
                            </NavLink>
                        </Col>
                        </Row>
                            <NavLink to={'/ministryregister'} className='navlinkregi' >
                                <Button className="btn btn-primary col-sm-12 mt-2 mb-4  reg-button">
                                        Ministry User
                                </Button>
                            </NavLink>
                    </Card>
                    <Col xs={4} md={4} sm={4}></Col>
                </Col>
            </Row>
        </Fragment>
    )
}

export default RegisterTypes
