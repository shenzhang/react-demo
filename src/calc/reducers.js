import { combineReducers } from 'redux'
import { actionTypes } from './actions'

export default function (state = { value: 0 }, action) {
    switch (action.type) {
        case actionTypes.INCREASE:
            return {
                value: state.value + action.value
            };
        case actionTypes.DECREASE:
            return {
                value: state.value - action.value
            };
        default:
            return state;
    }
}