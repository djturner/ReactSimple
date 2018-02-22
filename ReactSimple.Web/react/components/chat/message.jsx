import React from 'react';
import PropTypes from 'prop-types';

function message(props) {
    const ownerClass = props.isSender ? 'sender' : 'receiver';
    return (
        <div className="messageOuter">
            <div className={`message ${ownerClass}`}>{props.content}</div>
        </div>
    );
}

message.propTypes = {
    content: PropTypes.string.isRequired,
    isSender: PropTypes.bool.isRequired,
};

export default message;
