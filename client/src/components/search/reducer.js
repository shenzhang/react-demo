import { Actions } from './actions';
// import { fromJS } from 'immutable'

const initState = { loading: false };

export default (state = initState, action) => {
  switch(action.type) {
    case Actions.SEARCH_BY_POLICY: {
      if (!action.hasOwnProperty('success')) {
        return { loading: true };
      } else {
        if (action.success) {
          return {
            loading: false,
            customers: action.customers
          }
        }
      }
    }
  }

  return state;
}