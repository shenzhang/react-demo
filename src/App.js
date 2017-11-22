import React from 'react';
import store from './store'
import { Provider } from 'react-redux'
import './App.css';
import { Demo } from './components/demo'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Demo />
      </Provider>
    );
  }
}

export default App;
