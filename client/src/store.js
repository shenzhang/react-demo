import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'

// reducers
import selectedBrand from './components/brand/actions'
import searchByPolicy from './components/search/actions'
import customerProfile from './components/profile/actions'

const reducer = combineReducers({ 
  selectedBrand,
  searchByPolicy,
  customerProfile
});

const logger = createLogger();
export default createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(promise, thunk, logger));