import React from 'react'
import { connect } from 'react-redux'
import { Spin } from 'antd';

import { loadCustomer } from './actions'

class CustomerProfilePage extends React.Component {
  componentDidMount() {
    this.props.loadCustomer(this.props.match.params.id);
  }

  render() {
    if (this.props.loading) {
      return <Spin />
    }

    const customer = this.props.customer;

    return (
      <div>
        Name: {customer.name}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const profile = state.customerProfile;

  return {
    loading: profile.loading,
    customer: profile.customer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCustomer: (id) => {
      dispatch(loadCustomer(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerProfilePage)