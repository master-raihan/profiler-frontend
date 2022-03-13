import * as ACTION from "./adminActionType";

const initialState = {
    isLoggedIn: false,
    adminData: {}
}

const adminReducer = (action, state = initialState) => {
    switch(action.type){
        case ACTION.LOGIN:
            return { ...state }
        case ACTION.LOGIN_SUCCESS:
            return { ...state, isLoggedIn: true, adminData: action.payload }
        default:
            return { ...state }
    }
}

export default adminReducer;