import { BUY_CAKE } from './cakeTypes'

const initialCakes = {
    numOfCakes: 10
}

const cakeReducer = (state = initialCakes, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload.number
            }
        default: return state
    }
}

export default cakeReducer