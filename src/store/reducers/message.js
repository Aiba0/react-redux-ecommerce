import {CLEAR_MESSAGE, SET_MESSAGE} from "../actions/actionTypes";

const initialState = {}

export default function messageReducer(state = initialState, action) {

    switch (action.type) {
        case SET_MESSAGE:
            return { message: action.payload };
        case CLEAR_MESSAGE:
            return {message: ''};
        default: return state
    }

}
