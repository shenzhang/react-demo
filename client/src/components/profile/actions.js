import { createAction, handleAction } from 'redux-actions'

export const Actions = {
  LOAD_CUSTOMER: 'customer/load_customer',
};

const actionLoadCustomer = createAction(Actions.LOAD_CUSTOMER);

// reducer
export default handleAction(actionLoadCustomer, (state, action) => action.payload, { loading: true });

// thunk
export const loadCustomer = (customerId) => {
  return (dispatch) => {
    dispatch(actionLoadCustomer({
      loading: true,
      customerId
    }));

    fetch(`/api/customers/${customerId}`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        dispatch(actionLoadCustomer({
          loading: false,
          customer: json.data
        }));
      });
  }
};