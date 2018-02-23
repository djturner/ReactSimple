import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Group from './group';

function groupList(props) {
    return (
        <div>
            { props.groups.map(group => (
                <Group
                    key={group.id}
                    id={group.id}
                    name={group.name}
                />)) }
        </div>
    );
}

groupList.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    groups: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
};

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        groups: state.chat.groups,
    };
}

export default connect(mapStateToProps)(groupList);
