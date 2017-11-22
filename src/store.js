import { createStore } from 'redux'
import { reducer } from './components/demo'

let store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

export default store;