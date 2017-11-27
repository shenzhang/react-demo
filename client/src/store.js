import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'

// reducers
import selectedBrand from './components/brand/reducer'
import searchByPolicy from './components/search/reducer'

const reducer = combineReducers({ 
  selectedBrand,
  searchByPolicy
});

const logger = createLogger();
export default createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(promise, thunk, logger));