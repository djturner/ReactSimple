import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions/chatActions';


function messageInput(props) {
    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            // eslint-disable-next-line no-bitwise, no-mixed-operators
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
    }

    function dispatchMessage(e, dispatch) {
        const message = {
            messageId: uuidv4(),
            from: props.user,
            to: props.group,
            action: 1,
            body: e.target.message.value,
            creationTime: (new Date()).toISOString(),
            correlationId: '00000000-0000-0000-0000-000000000000',
        };
        e.preventDefault();
        e.target.message.value = '';
        dispatch(actions.addMessage(message));
    }

    return (
        <div className="messageInput">
            <form onSubmit={e => dispatchMessage(e, props.dispatch)}>
                <div className="messageBox">
                    <input type="text" name="message" />
                    <button type="submit">Send</button>
                </div>
            </form>
            <div className="clear" />
        </div>
    );
}

messageInput.propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        user: state.chat.user,
        group: state.chat.group,
    };
}

export default connect(mapStateToProps)(messageInput);
