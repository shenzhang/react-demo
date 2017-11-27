export const Actions = {
  SEARCH_BY_POLICY: 'search/search_by_policy',
};

export const searchByPolicy = (policyNumber) => {
  return (dispatch) => {
    const action = {
      type: Actions.SEARCH_BY_POLICY,
      loading: true,
      policyNumber
    };
    dispatch(action);

    fetch('/api/customers')
      .then(response => {
        return response.json();
      })
      .then(json => {
        const action = {
          type: Actions.SEARCH_BY_POLICY,
          loading: false,
          customers: json.data
        };
        dispatch(action);
      });
  }
};