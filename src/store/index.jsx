import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import CryptoJS from "crypto-js";
let mode = "DEVELOPMENT";
const saveToLocalStorage = (state) => {
    let serializedUid = "";
    if (mode != "DEVELOPMENT") {
        serializedUid = CryptoJS.AES.encrypt(
            JSON.stringify(state.auth),
            "my-secret-key"
        ).toString();
    } else {
        serializedUid = JSON.stringify(state.auth);
    }

    localStorage.setItem("auth", serializedUid);
};
const checkLocalStorage = () => {
    const serializedUid = localStorage.getItem("auth");
    if (serializedUid === null) return undefined;
    let auth = "";

    if (mode != "DEVELOPMENT") {
        auth = JSON.parse(
            CryptoJS.AES.decrypt(serializedUid, "my-secret-key").toString(
                CryptoJS.enc.Utf8
            )
        );
    } else auth = JSON.parse(serializedUid);
    return {
        auth,
    };
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
    rootReducer,
    checkLocalStorage(),
    composeEnhancers(applyMiddleware(thunk))
);
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
