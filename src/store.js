import { createStore } from 'redux'
import testApp from './calc/reducers'

let store = createStore(testApp);

let unsubscrib = store.subscribe(() => {
    console.log(store.getState());
});

export default store;