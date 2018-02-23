export function addMessage(message) {
    return { type: 'ADD_MESSAGE', message };
}

export function selectGroup(group) {
    return { type: 'SELECT_GROUP', group };
}
