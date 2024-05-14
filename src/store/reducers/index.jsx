// Root Reducer

import { combineReducers } from "redux";
import authUser from "./authUser";
import restaurantReducer from "./restaurantReducer";

export let rootReducer = combineReducers({
auth:authUser,
restaurant:restaurantReducer
});

export default rootReducer;
