export default function chatReducer(state = { group: '', messages: [], displayMessages: [] }, action) {
    switch (action.type) {
    case 'ADD_MESSAGE': {
        const messages = state.isTopDown ?
            [action.message, ...state.messages] :
            [...state.messages, action.message];
        return {
            ...state,
            messages,
            displayMessages: messages.filter(message =>
                message.to === state.group || message.from === state.group),
        };
    }
    case 'SELECT_GROUP':
        return {
            ...state,
            group: action.group,
            displayMessages: state.messages.filter(message =>
                message.to === action.group || message.from === action.group),
        };
    default:
        return state;
    }
}
