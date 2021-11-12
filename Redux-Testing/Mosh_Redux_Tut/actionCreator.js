import * as action from './actionType';

export function bugAdded(description) {
    return {
        type: action.BUG_ADDED,
        payload: {
            description //es6 if properties and value can write like this
        }
    };
}

export const bugRemoved = (id) => {
    return ({
        type: action.BUG_REMOVE,
        payload: {
            id
        }
    })
}