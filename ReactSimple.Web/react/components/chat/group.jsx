import React from 'react';
import PropTypes from 'prop-types';

function group(props) {
    return (
        <div className="group">
            <button onClick={e => props.selectHandler(props.id, e)}>{props.name}</button>
        </div>
    );
}

group.defaultProps = {
    selectHandler() {},
};

group.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    selectHandler: PropTypes.func,
};

export default group;
