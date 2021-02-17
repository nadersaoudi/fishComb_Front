import React from 'react';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Col, Row, Card } from 'reactstrap';
const RegisterTypes = () => {
    return (
       <Fragment>
           <Row>
           <Row className="Register">
                <title>Register | FishComb</title>
                <a href="/" className="img">
                <img src="../../../../dist/img/logofish.png" alt="" /></a>
            </Row>
                <Col xs={3} md={3} sm={3}></Col>
                <Col xs={5} md={5} sm={5}>
                    <Card>
                        <Button>
                            <NavLink to={'/userregister'}>
                                Register User
                            </NavLink>
                        </Button>
                        <Button>
                            <NavLink to={'/ministryregister'}>
                                Register ministry
                            </NavLink>
                        </Button>
                    </Card>
                </Col>
           </Row>
       </Fragment>
    )
}

export default RegisterTypes
