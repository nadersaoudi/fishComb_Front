import React, { useEffect } from "react";
import { optedevent, declineInv } from "../../../Actions/events";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { Card, Col, Row } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import './Events.css';

const Attended = ({ events: { opted }, optedevent, declineInv }) => {
    useEffect(() => {
        optedevent()
    }, [optedevent])
    return (
        <div>
            <title>Attended events | FishComb</title>
            <Row className=' pb-3 '>
                <Col md={1} className='px-0' ></Col>
                <Col md={4} className="pb-4 pt-5 px-0 ">
                    <ul className="nav nav-pills nav-justified " id='navprofil'>
                        <li className="nav-item">
                            <Link to={`/dashboard/events`} className="link_cart"><span className='n' >All Events</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/dashboard/invited`} className="link_cart"><span className='n'>Invited Events</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/dashboard/attendedevent`} className="link_cart"><span className='n'>Attending</span></Link>
                        </li>
                    </ul>
                </Col>
                <Col md={5}></Col>
            </Row>
            <Row className='pt-5 '>
                {opted && opted.map((opted) =>
                (
                    <Card style={{ width: '18rem' }} key={opted.id}  >
                        <Card.Img variant="top" src={opted.cover} width='250' height='240' />
                        <Card.Subtitle className="mb-2 text-muted pt-3"> Scheduled {opted.date} in  {opted.location}</Card.Subtitle>
                        <Card.Body>
                            <Card.Title>{opted.name.charAt(0).toUpperCase() + opted.name.slice(1)}</Card.Title>
                            <Card.Text>
                                {opted.description}
                            </Card.Text>
                            <Row className='px-0'>
                                <Col xs={7}>
                                    <Link to={`/dashboard/singleevent/${opted.id}`} className='link_attended'>
                                        <Button variant="outlined" color="primary" >View details</Button>
                                    </Link>
                                </Col>
                                <Col xs={4}>
                                    <Button variant="outlined" color="secondary" onClick={e => declineInv(opted.id, 0)} >Cancel</Button>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                )
                )
                }
            </Row>
        </div>
    )
}
Attended.propTypes = {
    events: PropTypes.object.isRequired,
    optedevent: PropTypes.func.isRequired,
    declineInv: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    events: state.events
})
export default connect(mapStateToProps, { optedevent, declineInv })(Attended);