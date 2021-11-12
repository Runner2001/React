import store from "./store";
import { bugAdded, bugRemoved } from './actionCreator'

//will show whenever store change
store.subscribe(() => {
    console.log('Store Change' + store);
})

store.dispatch(bugAdded('Bug 1'))

store.dispatch(bugRemoved(1))

console.log(store.getState());