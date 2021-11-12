import { BUY_ICE } from './icTypes'

const initialIce = {
    noOfIce: 20
}

const icReducer = (state = initialIce, action) => {
    switch (action.type) {
        case BUY_ICE:
            return {
                ...state,
                noOfIce: state.noOfIce - action.payload.number
            }
        default: return state
    }
}

export default icReducer