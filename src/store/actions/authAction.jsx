import { toast } from "react-toastify";
import { AUTH_LOADER, LOGIN, LOGOUT } from "../types";
import { axiosInstance } from "../../config/axios";
export const signup = (payload, onSuccess) => async (dispatch) => {
    await dispatch(loginLoading(true));

    try {
        const {data,status} = await axiosInstance.post("/public/signUp", payload);

        if (status ==201) {
            dispatch(loginLoading(false));
            onSuccess(data.message);
        } else {
            toast.error(data.message);
            dispatch(loginLoading(false));
        }
    } catch (error) {
        toast.error(error.data.message || "something went wrong");
        console.error(error);
        dispatch(loginLoading(false));
    }
};

export const login = (payload, onSuccess) => async (dispatch) => {
    await dispatch(loginLoading(true));
    try {
        const { data ,status} = await axiosInstance.post("/public/signIn", payload);
         
        if (status== 200) {
            dispatch({ type: LOGIN, payload: data });
            onSuccess();
            dispatch(loginLoading(false));
        } else {
            toast.error(data.message);
            dispatch(loginLoading(false));
        }
        dispatch(loginLoading(false));
    } catch (error) {
        dispatch(loginLoading(false));
        toast.error(error.data.message || "Sorry you missing or mismatch some fileds");
        console.error("Sorry you missing or mismatch some fileds",error);
    }
};
export const removeUser = (userId,onSuccess) => async (dispatch) => {
    dispatch(loginLoading(true));

    try {
        const { data ,status} = await axiosInstance.delete(`/protected/${userId}`);
        if(status == 200) {
            toast.success(data.message);
            onSuccess();
        }
        dispatch(loginLoading(false));

    } catch (error) {
        dispatch(loginLoading(false));

        console.error('error: ', error);
       toast.error(error.data.message || "something went wrong");
    }
};

export const logout = () => async (dispatch) => {
    try {
        localStorage.clear();
        dispatch({ type:LOGOUT });
        // dispatch({ type: GET_SUBCTION_DETAIL, payload: {} });
        // toast("Logout Successfully.");
    } catch (error) {
        toast.error(error.message);
    }
};

export const loginLoading = (val) => async (dispatch) => {
    dispatch({ type: AUTH_LOADER, payload: val });
};
