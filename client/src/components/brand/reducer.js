import { Actions } from './actions';

export default (state = null, action) => {
  if (action.type === Actions.CHANGE_BRAND) {
    return action.brand;
  }

  return state;
}