import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table, Icon } from 'antd';

const columns = [{
  title: 'ID',
  dataIndex: 'id',
  render: text => <Link to={`/customers/${text}`}>{text}</Link>
}, {
  title: '姓名',
  dataIndex: 'name'
}, {
  title: '年龄',
  dataIndex: 'age'
}, {
  title: '地址',
  dataIndex: 'address'
}];

class SearchResultTable extends React.Component {
  render() {
    return <Table columns={columns} dataSource={this.props.customers} rowKey="id" />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    customers: ownProps.customers
  };
};

export default connect(mapStateToProps)(SearchResultTable);
