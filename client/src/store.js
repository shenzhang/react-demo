import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { reducer } from './components/demo'

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(promise, thunk, logger));

export default store;