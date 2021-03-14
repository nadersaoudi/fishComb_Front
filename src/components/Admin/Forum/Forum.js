import React,{useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import { getThread} from '../../../Actions/Board';
const Forum =({getThread,Thread:{thread}})=>{
    useEffect(() => {
        getThread()
    }, [getThread])
    return(
        <div>
        <title>
            Admin | Forum</title>
        <Table striped bordered hover>
            <thead>
                <tr>
                   
                    <th>Title</th>
                    <th>Description</th>
                    <th>Creator</th>
                    <th></th>
                </tr>
            </thead>
            <tbody> {
                thread.map(forum=>(
                    <tr key={forum.id}>
                    <td>{forum.data?.title}</td>
                    <td>{forum.data?.body}</td>
                    <td>{forum.data?.user.data.attributes.first_name}{' '}{forum.data?.user.data.attributes.last_name}</td>
                    
                </tr>
                ))
                   
               
            } </tbody>
        </Table>
    </div>
    )
}
Forum.prototype = {
    getThread: PropTypes.func.isRequired,
    Thread: PropTypes.object.isRequired
}
const mapStateToProps = state => ({Thread: state.Thread})
export default connect(mapStateToProps,{getThread}) (Forum)