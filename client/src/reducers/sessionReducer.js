import * as types from '../actions/actionTypes';

export default function sessionReducer (state = {
    session: !!localStorage.Token,
    user: {}
}, action) {
    switch (action.type) {
        case types.CREATE_ACCOUNT:
            return {
                ...state,
                session: !!localStorage.Token,
                user: action.payload,
                error: ''
            }
        case types.LOGIN_USER:
            return {
                ...state,
                session: !!localStorage.Token,
                user: action.payload.user,
                error: ''
            }
        default: 
            return state;
    }
}