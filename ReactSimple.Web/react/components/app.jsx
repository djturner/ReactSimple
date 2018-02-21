import React from 'react';
import GroupList from './chat/groupList';
import MessageList from './chat/messageList';
import Header from './chat/header';
import api from './../../api/api';

const [allMessages] = [api.messages];
const [groups] = [api.groups];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { group: '', displayMessages: [] };
        this.groupSelectHandler = this.groupSelectHandler.bind(this);
    }

    groupSelectHandler(id) {
        console.log('id is:,', id);

        let messages = [];
        if (allMessages) {
            messages = allMessages.filter(message =>
                message.to === id || message.from === id);
        }

        this.setState({ displayMessages: messages });
    }

    render() {
        return (
            <div>
                <div className="app">
                    <Header />
                    <div className="column">
                        <GroupList groups={groups} groupSelectHandler={this.groupSelectHandler} />
                    </div>
                    <div className="column">
                        <MessageList messages={this.state.displayMessages} />
                    </div>
                </div>
                <span>{this.state.group}</span>
            </div>
        );
    }
}

export default App;
