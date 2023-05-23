const initialState = {
    order: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {


        case 'ADD_NOTE':
            const addNote = state.order.concat(action.payload);   

            return{
                ...state,
                order: addNote
            }

            case 'ADD_USERNAME':
                const addUsername = state.order.concat(action.payload);   
    
                return{
                    ...state,
                    order: addUsername
                }
        }}
            export default reducer