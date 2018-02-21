import React from 'react';
import PropTypes from 'prop-types';
import Message from './message';

function messageList(props) {
    return (
        <div>
            { props.messages.map(message =>
                <Message key={message.messageId} content={message.body} />) }
        </div>
    );
}

messageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        messageId: PropTypes.string.isRequired,
        from: PropTypes.string,
        to: PropTypes.string,
        body: PropTypes.string.isRequired,
    })).isRequired,
};

export default messageList;
