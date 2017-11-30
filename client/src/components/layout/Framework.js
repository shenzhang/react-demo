import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import Sider from './Sider'
import NotFoundPage from '../../page/404/NotFoundPage'
import CustomerSearchPage from '../search/CustomerSearchPage'
import CustomerProfilePage from '../profile/CustomerProfilePage'

const { Header, Sider: AntdSider, Content } = Layout;

export default class Framework extends React.Component {
  render() {
    return (
      <Layout>
        <Header style={{ backgroundColor: 'white' }}>
          <div>保险公司客户信息平台</div>
        </Header>

        <AntdSider>
          <Sider />
        </AntdSider>

        <Content style={{ paddingTop: 20, paddingLeft: 20 }}>
          <Switch>
            <Route exact path="/customers" component={CustomerSearchPage} />
            <Route exact path="/customers/:id" component={CustomerProfilePage} />
          </Switch>
        </Content>
      </Layout>
    );
  }
}