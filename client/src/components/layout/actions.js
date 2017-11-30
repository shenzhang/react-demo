import { createAction, handleAction } from 'redux-actions'

export const Actions = {
  SELECT_MENU: 'layout/select_menu',
};

// action creator
export const selectMenu = createAction(Actions.SELECT_MENU);

// reducer
export default handleAction(selectMenu, (state, action) => action.payload, {});