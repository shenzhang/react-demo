import React from 'react'
import { connect } from 'react-redux'
import { Tabs } from 'antd';
import BrandSelect from '../brand/BrandSelect'
import SearchByPolicyTab from './SearchByPolicyTab'

class CustomerSearchPage extends React.Component {
  render() {
    return (
      <div>
        <BrandSelect />
        <div style={{ marginTop: 30 }}>
          <Tabs hideAdd type="card">
            <Tabs.TabPane tab="保单号" key="保单号">
              <SearchByPolicyTab />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default connect()(CustomerSearchPage)