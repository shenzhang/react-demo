import { Actions } from './actions';

const initState = { loading: true };

export default (state = initState, action) => {
  switch(action.type) {
    case Actions.LOAD_CUSTOMER: {
      return action;
    }
  }

  return state;
}