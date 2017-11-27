import { Actions } from './actions';
// import { fromJS } from 'immutable'

const initState = { loading: false };

export default (state = initState, action) => {
  switch(action.type) {
    case Actions.SEARCH_BY_POLICY: {
      return action;
    }
  }

  return state;
}