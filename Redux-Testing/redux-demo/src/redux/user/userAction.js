import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"
import axios from "axios"

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(respone => {
                const user = respone.data
                dispatch(fetchUserSuccess(user))
            })
            .catch(error => {
                const emessage = error.message
                dispatch(fetchUserFailure(emessage))
            })
    }
}