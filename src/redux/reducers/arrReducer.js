import { GET_BREAKING_BAD } from '../actions';

let initialState = {
    characters: []
}

export default reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BREAKING_BAD:
            return {
                ...state, characters: [...state.characters, action.payload]
            }
        default:
            return state
    }
}

console.log("init state.char ", initialState.characters);