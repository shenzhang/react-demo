import { createAction, handleAction } from 'redux-actions'

export const Actions = {
  SEARCH_BY_POLICY: 'search/search_by_policy',
};

const actionSearchByPolicy = createAction(Actions.SEARCH_BY_POLICY);

// reducer
export default handleAction(actionSearchByPolicy, (state, action) => action.payload, {});

// thunk
export const searchByPolicy = (policyNumber) => {
  return (dispatch) => {
    dispatch(actionSearchByPolicy({
      laoding: true,
      policyNumber
    }));

    fetch('/api/customers')
      .then(response => {
        return response.json();
      })
      .then(json => {
        dispatch(actionSearchByPolicy({
          loading: false,
          customers: json.data
        }));
      });
  }
};