import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {  getevents } from '../../../Actions/events';

const Market =({events:{events},getevents})=>{
    useEffect(() => {
        getevents()
    }, [getevents])

    return(
        <div>market</div>
    )
}
Market.prototype = {
    events:PropTypes.object.isRequired,
    getevents: PropTypes.func.isRequired
}
const mapStateToProps = state =>({
    events:state.events
})

export default connect(mapStateToProps,{getevents})(Market)