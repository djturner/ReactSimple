import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../actions/chatActions';

function group(props) {
    return (
        <div className="group">
            <button
                onClick={() => props.dispatch(actions.selectGroup((props.id)))}
            >
                {props.name}
            </button>
        </div>
    );
}

group.propTypes = {
    dispatch: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
    };
}

export default connect(mapStateToProps)(group);
