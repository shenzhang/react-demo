import React from 'react'
import { Layout } from 'antd'

const { Header, Content } = Layout;

export default class Framework extends React.Component {
  render() {
    return (
      <Layout>
          <Header style={{ backgroundColor: 'white' }}>
            <div>太阳公司客户信息平台</div>
          </Header>

          <Content style={{ paddingTop: 20, paddingLeft: 20 }}>
            <Router>
              <Switch>
                <Redirect exact from="/" to="/customers" />
                <Route exact path="/customers" component={CustomerSearchPage} />
                <Route path="/customers/:id" component={CustomerProfilePage} />
                <Route component={NotFoundPage} />
              </Switch>
            </Router>
          </Content>
        </Layout>
    );
  }
}