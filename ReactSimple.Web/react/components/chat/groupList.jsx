import React from 'react';
import PropTypes from 'prop-types';
import Group from './group';

function groupList(props) {
    return (
        <div>
            { props.groups.map(group => (
                <Group
                    key={group.id}
                    id={group.id}
                    name={group.name}
                    selectHandler={props.groupSelectHandler}
                />)) }
        </div>
    );
}

groupList.defaultProps = {
    groupSelectHandler() {},
};

groupList.propTypes = {
    groups: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    groupSelectHandler: PropTypes.func,
};

export default groupList;
