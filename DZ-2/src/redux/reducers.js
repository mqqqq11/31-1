import { ADD, CLEAR } from './actions/actionTypes';

const initialState = {
    results: [],
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                results: [...state.results, action.payload],
            };
        case CLEAR:
            return {
                ...state,
                results: [],
            };
        default:
            return state;
    }
};

export default reducers;