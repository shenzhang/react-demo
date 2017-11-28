import React from 'react';
import { Provider } from 'react-redux'
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import store from './store'
import NotFoundPage from './page/404/NotFoundPage'
import CustomerSearchPage from './components/search/CustomerSearchPage'
import CustomerProfilePage from './components/profile/CustomerProfilePage'

// css
import './App.css';


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
            <Router>
              <Switch>
                <Route exact path="/" render={() => (<Redirect to="/customers" />)} />
                <Route exact path="/customers" component={CustomerSearchPage} />
                <Route path="/customers/:id" component={CustomerProfilePage} />
                <Route component={NotFoundPage} />
              </Switch>
            </Router>
          </Content>
        </Layout>
      </Provider>
    );
  }
}

export default App;
