import React from 'react'
import { connect } from 'react-redux'
import { Table, Icon } from 'antd';

const columns = [{
  title: 'Customer ID',
  dataIndex: 'customerId',
  key: 'customerId',
  render: text => <a href="#">{text}</a>,
}, {
  title: '姓名',
  dataIndex: 'name',
  key: 'name'
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age'
}, {
  title: '地址',
  dataIndex: 'address',
  key: 'address'
}];

class SearchResultTable extends React.Component {
  render() {
    return <Table columns={columns} dataSource={this.props.customers} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    customers: ownProps.customers
  };
};

export default connect(mapStateToProps)(SearchResultTable);
