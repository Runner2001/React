import { BUY_ICE } from "./icTypes";

export const buyIce = (number = 1) => {
    return {
        type: BUY_ICE,
        payload: {
            number
        }
    }
}