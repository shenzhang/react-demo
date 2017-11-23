import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './index.css';
import App from './components/App';
import Framework from './components/layout/framework'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router>
        <div>
            <Link to="/">Home</Link> &nbsp;
            <Link to="/antd">Antd</Link>
            <br/>
            <Route exact path="/" component={App} />
            <Route path="/antd" component={Framework} />
        </div>
    </Router>
), document.getElementById('root'));

registerServiceWorker();

