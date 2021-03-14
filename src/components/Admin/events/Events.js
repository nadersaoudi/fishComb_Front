import React, {useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {getevents} from '../../../Actions/events';
const Events = ({events: {
        events
    }, getevents}) => {
    useEffect(() => {
        getevents()
    }, [getevents])
    return (
        <div>
            <title>
                Admin | events</title>
                <div>events count {events?.length}</div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                       
                        <th>Title</th>
                        <th>location</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>category</th>
                        <th>Creator</th>
                        <th>Participant</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody> {
                   events.map(events => (
                        <tr key={
                            events.id
                        }>
                            <td>{
                                events.name
                            }</td>
                            <td>{
                                events.location
                            }</td>
                            <td>{
                                events.date
                            }</td>
                             <td>{
                                events.description
                            }</td>
                            <td>{
                                events.category.name
                            }</td>
                            <td>{
                                events.user.data.attributes.first_name 
                            }{' '}{
                                events.user.data.attributes.last_name 
                            }
                            </td>
                            <td>{
                                events?.participants?.length
                            }</td>
                            <td>{
                                events?.status === true ? <div>actif</div>:<div>disabled</div>
                            }</td>
                            <td><button>delete</button></td>
                        </tr>
                    ))
                } </tbody>
            </Table>
        </div>
    )
}; Events.prototype = {
    events: PropTypes.object.isRequired,
    getevents: PropTypes.func.isRequired
}
const mapStateToProps = state => ({events: state.events})
export default connect(mapStateToProps, {getevents})(Events)
