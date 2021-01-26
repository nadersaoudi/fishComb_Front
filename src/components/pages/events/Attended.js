import React, { useEffect } from "react";
import { optedevent } from "../../../Actions/events";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { Card, Col, Row, Button,Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
const Attended = ({ events: { opted }, optedevent }) => {
    useEffect(() => {
        optedevent()
    }, [optedevent])


    return (
        <Container>
            <Row className='pt-5'>
                    <Col md={3} ></Col>
                    <Col md={8}className="pb-4">
                        <ul className="nav nav-pills nav-justified " id='navprofil'>
                            <li className="nav-item">
                                <Link to={`/dashboard/events`} className="m"><span style={{fontFamily:"arial"}}>All Events</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/dashboard/invited`} className="m"><span style={{fontFamily:"arial"}}>Invited Events</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link  to={`/dashboard/attendedevent`} className="m"><span style={{fontFamily:"arial"}}>Attending</span></Link>
                            </li>
                        </ul>

                    </Col>
                </Row>
            <Row className='pt-5 '>
            {opted && opted.map((opted) =>
            (
                <Card style={{ width: '18rem' }} key={opted.id}  >
                    <Card.Img variant="top" src={opted.cover} width='277px' height='278px'  />
                    <Card.Subtitle className="mb-2 text-muted pt-3"> Scheduled {opted.date} in  {opted.location}</Card.Subtitle>
                    
                    <Card.Body>
                        <Card.Title>{opted.name}</Card.Title>
                        <Card.Text>
                        {opted.description}
    </Card.Text>
                        <Link to={`/dashboard/singleevent/${opted.id}`}><Button variant="primary">View details</Button></Link>
                    </Card.Body>
                </Card>
            )



            )
            }
</Row>
</Container>

    )


}
Attended.propTypes = {
    events: PropTypes.object.isRequired,
    optedevent: PropTypes.func.isRequired
}


const mapStateToProps = state => ({
    events: state.events
})
export default connect(mapStateToProps, { optedevent })(Attended);