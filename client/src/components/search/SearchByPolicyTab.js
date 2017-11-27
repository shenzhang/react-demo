import React from 'react'
import { connect } from 'react-redux'
import { Form, Row, Col, Button } from 'antd';
import { searchByPolicy } from './actions'
import SearchResultTable from './SearchResultTable'

class SearchByPolicyTab extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = () => {
    this.props.onSearch('ABC123');
  }

  render() {
    return (
      <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
        <Row gutter={40}>
          <Col span={24}>
            <Button type="primary" onClick={this.handleSearch}>查 询</Button>
          </Col>
        </Row>

        <Row gutter={40}>
          <Col span={24}>
            <SearchResultTable customers={this.props.customers}/>
          </Col>
        </Row>
      </Form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { customers: state.customers };
};

const mapDisptachToProps = (dispatch, ownProps) => {
  return {
    onSearch: policyNumber => dispatch(searchByPolicy(policyNumber))
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(SearchByPolicyTab)