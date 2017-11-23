export const ActionTypes = {
    INCREASE: 'increase',
    DECREASE: 'decrease'
}

export function increase(value = 1) {
    return {
        type: ActionTypes.INCREASE,
        value
    };
}

export function decrease(value = 1) {
    return {
        type: ActionTypes.DECREASE,
        value
    };
}