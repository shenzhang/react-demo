import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'

class LoginPage extends React.Component {
  login = () => {
    
  }

  render() {
    return (
        <div>
          <Button onClick={this.login} type="primary">登 录</Button>
        </div>
    );
  }
}

export default connect()(LoginPage)