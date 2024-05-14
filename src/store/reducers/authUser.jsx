import { AUTH_LOADER, LOGIN, LOGOUT } from "../types";

const initialState = {
    user: null,
    uid: null,
    token: null,
    authLoader:false,
    isAdmin:false,
    isRestaurantOwner:false
};

const authUser = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN:
            console.log('payload: ', payload);
            return {
                ...state,
                user: payload,
                token: payload.tokrn,
                uid: payload.userId,
                isAdmin:payload.role.toLowerCase()=='admin'?true:false,
                isRestaurantOwner:payload.role.toLowerCase()=='restaurantowner'?true:false
            };
        case LOGOUT:
            // localStorage.removeItem("auth");
            return {
                ...state,
                user: null,
                token: null,
                uid: null,
                authLoader:false,
                isAdmin:false
            };
            case AUTH_LOADER:
                return {
                    ...state,
                    authLoader:payload
                };
        // case UPDATE_USER_STATUS:
        //     return  {...state,...state.user,SubscriptionStatus:}
        default:
            return state;
    }
};

export default authUser;
