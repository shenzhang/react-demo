import React from 'react';
import { Provider } from 'react-redux'
import store from '../store'
import BrandSelect from './brand/BrandSelect'
import SearchByPolicyTab from './search/SearchByPolicyTab'
import './App.css';

import { Layout, Tabs } from 'antd';
const { Header, Content } = Layout;

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Layout>
          <Header style={{ backgroundColor: 'white' }}>
            <div>太阳公司客户信息平台</div>
          </Header>
          <Content style={{ paddingTop: 20, paddingLeft: 20 }}>
            <BrandSelect />
            <div style={{ marginTop: 30 }}>
              <Tabs hideAdd type="card">
                <Tabs.TabPane tab="保单号" key="保单号">
                  <SearchByPolicyTab />
                </Tabs.TabPane>
              </Tabs>
            </div>
            <hr style={{marginTop: 20}} />
          </Content>
        </Layout>
      </Provider>
    );
  }
}

export default App;
