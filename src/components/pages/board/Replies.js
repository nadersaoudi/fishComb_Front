import React from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Replies = ({threads}) => {
    return (
       <Fragment>
           <span>
                {threads && threads.title}
           </span>
       </Fragment>
    )
}
Replies.prototype={
    addReplies: PropTypes.func.isRequired,
    threads: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    thread: state.Thread,
    threads: state.threads
})
export default connect(mapStateToProps) (Replies)

