import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import icReducer from "./iceCreams/icReducer";
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    ice: icReducer,
    user: userReducer
})

export default rootReducer