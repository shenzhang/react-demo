import React from 'react';
import { Provider } from 'react-redux'
import store from '../store'
import { Layout } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CustomerSearchPage from './search/CustomerSearchPage'
import CustomerProfilePage from './profile/CustomerProfilePage'

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
              <div>
                <Route exact path="/" component={CustomerSearchPage} />
                <Route path="/customers/:id" component={CustomerProfilePage} />
              </div>
            </Router>
          </Content>
        </Layout>
      </Provider>
    );
  }
}

export default App;
