import actionTypes from '../constant/Constant'

const INITIAL_STATE = {
    UID: null,
    USER: null
}

export default (states = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'UID':
            return ({
                ...states,
                UID: action.payload
            })
        case 'USER':
            return ({
                ...states,
                USER: action.payload
            })
        case 'SIGNUP':
            return ({
                ...states,
                loginData: action.payload
            })
        case 'LOGIN':
            return ({
                ...states,
                loginData: action.payload
            })
        case 'LOGOUT':
            return ({
                ...states,
                loginData: null
            })
        default:
            return states
    }

}