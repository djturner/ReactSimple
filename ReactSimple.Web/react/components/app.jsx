import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GroupList from './chat/groupList';
import MessageList from './chat/messageList';
import Header from './chat/header';
import MessageInput from './chat/messageInput';

const App = props => (
    <div className="app">
        <Header />
        <div className="groupList column">
            <GroupList />
        </div>
        <div className="messageArea column">
            {props.isTopDown ? (
                <div>
                    <MessageInput />
                    <MessageList
                        messages={props.displayMessages}
                        me={props.user}
                    />
                </div>
            ) : (
                <div>
                    <MessageList
                        messages={props.displayMessages}
                        me={props.user}
                    />
                    <MessageInput />
                </div>
            )}
        </div>
    </div>
);

App.propTypes = {
    displayMessages: PropTypes.arrayOf(PropTypes.shape({
        messageId: PropTypes.string.isRequired,
        from: PropTypes.string,
        to: PropTypes.string,
        body: PropTypes.string.isRequired,
    })).isRequired,
    user: PropTypes.string.isRequired,
    isTopDown: PropTypes.bool.isRequired,
};

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        displayMessages: state.chat.displayMessages,
        user: state.chat.user,
        isTopDown: state.chat.isTopDown,
    };
}

export default connect(mapStateToProps)(App);
