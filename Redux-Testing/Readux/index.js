const redux = require('redux')
const createStore = redux.createStore
const reduxLogger = require('redux-logger')
const applyMiddelware = redux.applyMiddleware()
const logger = reduxLogger.createLogger()

//action creator
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE = 'BUY_ICE';

//action create
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
function buyIce() {
    return {
        type: BUY_ICE,
        info: 'Ice-cream buy action'
    }
}

//create reducers
const initialState = {
    numofCakes: 10,
    numofIce: 10,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numofCakes: state.numofCakes - 1
            }
        case BUY_ICE:
            return {
                ...state,
                numofIce: state.numofIce - 1
            }
        default: return state
    }
}


//create store
const store = createStore(reducer, applyMiddelware(logger))


console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('Update', store.getState()));
store.dispatch(buyCake())
store.dispatch(buyIce())
unsubscribe()
store.dispatch(buyCake())