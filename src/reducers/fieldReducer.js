const INITIAL_STATE = { value: 'Hello!' };

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'VALUE_CHANGE':
            return { value: action.payload };

        default:
            return state;
    }
}
