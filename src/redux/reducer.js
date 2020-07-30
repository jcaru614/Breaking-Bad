import { GET_BREAKING_BAD } from './actions';
import { SET_BREAKING_BAD } from './actions';

let initialState = {
    characters: [],
    selected: {}
}

export default reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BREAKING_BAD:
            return {
                ...state, characters: [...state.characters, action.payload]
            }
        case SET_BREAKING_BAD:
            return {
                ...state, selected: {...state.selected, ...action.payload}
            }
        default:
            return state
    }
}

console.log("init state.char ", initialState.characters);