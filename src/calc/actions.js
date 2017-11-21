export const actionTypes = {
    INCREASE: 'increase',
    DECREASE: 'decrease'
}

export function increase(value = 1) {
    return {
        type: actionTypes.INCREASE,
        value
    };
}

export function decrease(value = 1) {
    return {
        type: actionTypes.DECREASE,
        value
    };
}