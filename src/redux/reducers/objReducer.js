import { SET_BREAKING_BAD_SUCCESS, SET_BREAKING_BAD_FAIL, setBreakingBadRequest } from '../actions';

let initialState = {
    selected: {},
    // either change modal logic to toggle if object is filled vs null
    // or add a modalvis toggler here
    // need one more case
    modalVis: false,
    error: null
}

export default reducer = (state = initialState, action) => {
    console.log("the action in reducer ", action)
    switch (action.type) {
        case SET_BREAKING_BAD_SUCCESS:
            return {
                ...state, selected: { ...state.selected, ...action }
                ,modalVis: !state.modalVis
            }
            
        case SET_BREAKING_BAD_FAIL:
            return {
                ...state, error: { ...state.error, ...action }
            }
        default:
            return state
    }
}

console.log('====================================');
console.log("reducer intialstate.selected", initialState.selected);
console.log('====================================');