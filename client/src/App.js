import React from 'react';
import { Provider } from 'react-redux'
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import store from './store'

import Menu from './components/layout/Menu'
import NotFoundPage from './page/404/NotFoundPage'
import CustomerSearchPage from './components/search/CustomerSearchPage'
import CustomerProfilePage from './components/profile/CustomerProfilePage'

// css
import './App.css';


const { Header, Sider: AntdSider, Content } = Layout;

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout style={{ height: "100vh" }}>
            <Header style={{ color: 'white', fontSize: 16 }}>
              <div>宇宙保险公司客户信息平台</div>
            </Header>

            <Layout>
              <AntdSider>
                <Menu />
              </AntdSider>

              <Layout style={{ paddingLeft: '24px' }}>
                <Content style={{ paddingTop: 20 }}>

                  <Switch>
                    <Redirect exact from="/" to="/customers" />
                    <Route exact path="/customers" component={CustomerSearchPage} />
                    <Route path="/customers/:id" component={CustomerProfilePage} />
                    <Route component={NotFoundPage} />
                  </Switch>

                </Content>
              </Layout>
            </Layout>

          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
