const INITIAL_STATE = { step: 1, number: 0 };

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'INCREMENT':
        return { ...state, number: (state.number + state.step) };
        case 'DECREMENT':
        return { ...state, number: (state.number - state.step) };
        case 'STEP_CHANGED':
            const number = parseInt(action.payload);
            return { ...state, step: number };

        default:
            return state;
    }
}
