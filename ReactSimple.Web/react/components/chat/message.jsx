import React from 'react';
import PropTypes from 'prop-types';

function message(props) {
    return (
        <div className="message">{props.content}</div>
    );
}

message.propTypes = {
    content: PropTypes.string.isRequired,
};

export default message;
