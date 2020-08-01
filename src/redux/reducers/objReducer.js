import { SET_BREAKING_BAD } from '../actions';

let initialState = {
    selected: {}
}

export default reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BREAKING_BAD:
            return {
                ...state, selected: {...state.selected, ...action.payload}
            }
        default:
            return state
    }
}
