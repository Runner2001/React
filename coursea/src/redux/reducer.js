import { Dishes } from "../share.js/share";
import { Comments } from "../share.js/comment";
import { Leader } from "../share.js/leader";
import { Promotion } from "../share.js/promotion";

export const initialState = {
    dishes: Dishes,
    leader: Leader,
    comments: Comments,
    promotion: Promotion,
};

export const Reducer = (state = initialState, action) => {
    return state;
}

