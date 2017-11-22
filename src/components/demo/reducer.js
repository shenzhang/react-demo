// import { combineReducers } from 'redux'
import { ActionTypes } from './actions'

export default function (state = { value: 0 }, action) {
    switch (action.type) {
        case ActionTypes.INCREASE:
            return {
                value: state.value + action.value
            };
        case ActionTypes.DECREASE:
            return {
                value: state.value - action.value
            };
        default:
            return state;
    }
}