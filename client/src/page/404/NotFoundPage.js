import React from 'react'
import { connect } from 'react-redux'

class NotFoundPage extends React.Component {
  render() {
    return (
        <div>Not Found: {this.props.location.pathname}</div>
    );
  }
}

export default connect()(NotFoundPage)