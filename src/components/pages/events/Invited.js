import React, { useEffect } from "react";
import { Myinvitations, acceptinv } from "../../../Actions/events";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
const Invited = ({ events: { inv }, Myinvitations, acceptinv }) => {
    useEffect(() => {
        Myinvitations()
    }, [Myinvitations])

    return (
        <div>
            <title>Event invitation | FishComb</title>
 <Row className=' pb-3 '>

<Col md={1} className='px-0' ></Col>
<Col md={4} className="pb-4 pt-5 px-0 ">
    <ul className="nav nav-pills nav-justified " id='navprofil'>
        <li className="nav-item">
            <Link to={`/dashboard/events`} className="link_cart"><span className='n' >All Events</span></Link>
        </li>
        <li className="nav-item">
            <Link to={`/dashboard/invited`} className="link_cart"><span  className='n'>Invited Events</span></Link>
        </li>
        <li className="nav-item">
            <Link to={`/dashboard/attendedevent`} className="link_cart"><span  className='n'>Attending</span></Link>
        </li>
    </ul>
</Col>
<Col md={5}></Col>
</Row>
            <Row className='pt-3'>
                <Col xs={2}>

                </Col>
                <Col xs={9}>
                    <h2>Received invitations</h2>
                    <hr />
                </Col>

            </Row>

            <Row className='pt-5 '>

                {inv && inv.map((inv) =>
                (
                    <Col className='pt-3 pb-5'>
                        <Card style={{ width: '18rem' }} key={inv.id}  >
                            <Card.Img variant="top" src={inv.cover} width='277px' height='278px' />
                            <Card.Subtitle className="mb-2 text-muted pt-3"> Scheduled {inv.date} in  {inv.location}</Card.Subtitle>

                            <Card.Body>
                                <Card.Title>{inv.name.charAt(0).toUpperCase() + inv.name.slice(1)}</Card.Title>
                                <Card.Text>
                                    {inv.description}
                                </Card.Text>
                                <Row className='px-0'>
                                    <Col xs={7}>
                                        <Button variant="outlined" color="primary" onClick={e => acceptinv(inv.id)}>Accept</Button>
                                    </Col>
                                    <Col xs={4}>
                                        <Button variant="outlined" color="secondary">Decline</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                )
                )
                }
            </Row>
        </div>

    )

}
Invited.propTypes = {
    events: PropTypes.object.isRequired,
    Myinvitations: PropTypes.func.isRequired
    , acceptinv: PropTypes.func.isRequired
}


const mapStateToProps = state => ({
    events: state.events
})
export default connect(mapStateToProps, { Myinvitations, acceptinv })(Invited);