import React,{ useEffect } from "react";
import { Myinvitations,acceptinv } from "../../../Actions/events";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { Card, Col, Row, Button,Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
const Invited =({ events: { inv }, Myinvitations,acceptinv })=>{
    useEffect(() => {
        Myinvitations()
    }, [Myinvitations])

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
                <Row className='pt-3'> <h2>Received invitations</h2></Row>
                <hr/>
    <Row className='pt-5 '>
    {inv && inv.map((inv) => 
    (
        <Card style={{ width: '18rem' }} key={inv.id}  >
            <Card.Img variant="top" src={inv.cover} width='277px' height='278px'  />
            <Card.Subtitle className="mb-2 text-muted pt-3"> Scheduled {inv.date} in  {inv.location}</Card.Subtitle>
            
            <Card.Body>
                <Card.Title>{inv.name}</Card.Title>
                <Card.Text>
                {inv.description}
</Card.Text>
                <Button variant="primary" onClick={e=>acceptinv(inv.id)}>Accept</Button> <Button variant="primary">Decline</Button>
            </Card.Body>
        </Card>
    )



    )
    }
</Row>
</Container>
    
)

}
Invited.propTypes = {
    events: PropTypes.object.isRequired,
    Myinvitations: PropTypes.func.isRequired
    ,acceptinv: PropTypes.func.isRequired
}


const mapStateToProps = state => ({
    events: state.events
})
export default  connect(mapStateToProps, { Myinvitations,acceptinv })( Invited);