import { Actions } from './actions';

const initState = { loading: false };

export default (state = initState, action) => {
  switch(action.type) {
    case Actions.LOAD_CUSTOMER: {
      if (!action.hasOwnProperty('success')) {
        return { loading: true };
      } else {
        if (action.success) {
          return {
            loading: false,
            customer: action.customer
          }
        }
      }
    }
  }

  return state;
}