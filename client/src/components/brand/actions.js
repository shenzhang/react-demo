import { createAction, handleAction } from 'redux-actions'

export const Actions = {
  CHANGE_BRAND: 'search/change_brand'
};

// actions
export const changeBrand = createAction(Actions.CHANGE_BRAND);

// reducer
export default handleAction(changeBrand, (state, action) => action.payload, null);