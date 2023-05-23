
function addNote(value) {
    return {
        type: 'ADD_NOTE',
        payload: value
    }
}

function addUsername(value) {
    return {
        type: 'ADD_USERNAME',
        payload: value
    }
}

export {addNote, addUsername}