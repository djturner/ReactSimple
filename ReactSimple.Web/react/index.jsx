import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import configureStore from '../store/configureStore';
import api from '../api/api';
import * as actions from '../actions/chatActions';

const initialState = {
    chat: {
        messages: [],
        groups: api.groups,
        user: 'ADC4B9ED-6B4A-41CD-9B02-DEF07251E19A', // me
        group: '',
        displayMessages: [],
        isTopDown: false,
    },
};
const store = configureStore(initialState);

// add messages
api.messages.every(message => store.dispatch(actions.addMessage(message)));
store.dispatch(actions.selectGroup(api.groups[0].id));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
