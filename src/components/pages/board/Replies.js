import React from 'react';
import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getoneThread } from '../../../Actions/Board';
import PropTypes from 'prop-types';

const Replies = ( {thread: {threads} , match , getoneThread }) => {
    useEffect(() => {
        getoneThread(match.params.id);
    },  [getoneThread, match.params.id])
    return (
       <Fragment>
           <span>
               {threads && threads.data.title}
               {threads && threads.data.body}
           </span>
       </Fragment>
    )
}
Replies.prototype={
    addReplies: PropTypes.func.isRequired,
    threads: PropTypes.object.isRequired,
    getoneThread: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    thread: state.Thread,
    threads: state.threads
})
export default connect(mapStateToProps, { getoneThread }) (Replies)

