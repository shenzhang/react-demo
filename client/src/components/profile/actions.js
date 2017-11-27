export const Actions = {
  LOAD_CUSTOMER: 'customer/load_customer',
};

export const loadCustomer = (customerId) => {
  return (dispatch) => {
    const action = {
      type: Actions.LOAD_CUSTOMER,
      loading: true,
      customerId
    };
    dispatch(action);

    fetch(`/api/customers/${customerId}`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        const action = {
          type: Actions.LOAD_CUSTOMER,
          loading: false,
          customer: json.data
        };
        dispatch(action);
      });
  }
};