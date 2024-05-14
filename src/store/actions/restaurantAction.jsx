import { toast } from "react-toastify";
import { ALL_RESTAURANT, RESTAURANT_LOADER, SINGLE_RESTAURANT } from "../types";
import { axiosInstance } from "../../config/axios";

export const createRestaurant = (payload, onSuccess) => async (dispatch) => {

    await dispatch({type: RESTAURANT_LOADER, payload:true});
    try {
        const { data ,status} = await axiosInstance.post("/restaurants", payload);
        console.log('data: ', data);
        if (status== 201) {
            toast.success(data.message);
            onSuccess(data.message);
        } else {
            toast.error(data.message);
             dispatch({type: RESTAURANT_LOADER, payload:false});
        }
        dispatch({type: RESTAURANT_LOADER, payload:false});
    } catch (error) {
        toast.error(error.data.message || "something went wrong");
        console.error(error);
        dispatch({type: RESTAURANT_LOADER, payload:false});
    }
};
export const getAllRestaurant = (onSuccess,onError) => async (dispatch) => {

    await dispatch({type: RESTAURANT_LOADER, payload:true});
    try {
        const { data ,status} = await axiosInstance.get("/restaurants");
      
        if (status== 200) {
            dispatch({type: ALL_RESTAURANT, payload:data});

            onSuccess(data);
        } 
        dispatch({type: RESTAURANT_LOADER, payload:false});
    } catch (error) {
        onError()
        // toast.error(error.data.message || "something went wrong");
        console.error(error);
        dispatch({type: RESTAURANT_LOADER, payload:false});
    }
};
export const getRestaurantById = (restauentId,onSuccess) => async (dispatch) => {

    await dispatch({type: RESTAURANT_LOADER, payload:true});
    try {
        const { data ,status} = await axiosInstance.get(`/restaurants/${restauentId}`);
    
        if (status== 200) {
            dispatch({type: SINGLE_RESTAURANT, payload:data});
            dispatch({type: RESTAURANT_LOADER, payload:false});

            onSuccess(data);
        } else {
            toast.error(data.message);
             dispatch({type: RESTAURANT_LOADER, payload:false});
        }
        dispatch({type: RESTAURANT_LOADER, payload:false});
    } catch (error) {
        dispatch({type: RESTAURANT_LOADER, payload:false});
        toast.error(error.data.message || "something went wrong");
        console.error(error);
    }
};
export const updateRestaurant = (payload,restauentId,onSuccess) => async (dispatch) => {

    await dispatch({type: RESTAURANT_LOADER, payload:true});
    try {
        const { data ,status} = await axiosInstance.put(`/restaurants/${restauentId}`,payload);
    
        if (status== 200) {
            dispatch({type: RESTAURANT_LOADER, payload:false});

            onSuccess(data);
        } else {
            toast.error(data.message);
             dispatch({type: RESTAURANT_LOADER, payload:false});
        }
        dispatch({type: RESTAURANT_LOADER, payload:false});
    } catch (error) {
        dispatch({type: RESTAURANT_LOADER, payload:false});
        toast.error(error.data.message || "something went wrong");
        console.error(error);
    }
};
export const deleteRestaurant = (restauentId,onSuccess) => async (dispatch) => {

    await dispatch({type: RESTAURANT_LOADER, payload:true});
    try {
        const { data ,status} = await axiosInstance.delete(`/restaurants/${restauentId}`);
    
        if (status== 200) {
            dispatch({type: RESTAURANT_LOADER, payload:false});
            toast.success(data.message);

            onSuccess(data);
        } else {
            toast.error(data.message);
             dispatch({type: RESTAURANT_LOADER, payload:false});
        }
        dispatch({type: RESTAURANT_LOADER, payload:false});
    } catch (error) {
        dispatch({type: RESTAURANT_LOADER, payload:false});
        toast.error(error.data.message || "something went wrong");
        console.error(error);
    }
};
export const createPackage = (payload,restauentId,onSuccess) => async (dispatch) => {

    await dispatch({type: RESTAURANT_LOADER, payload:true});
    try {
        const { data ,status} = await axiosInstance.post(`/packages/${restauentId}`, payload);
    
        if (status== 200) {
            dispatch({type: RESTAURANT_LOADER, payload:false});
            toast.success(data.message);

            onSuccess(data);
        } else {
            toast.error(data.message);
             dispatch({type: RESTAURANT_LOADER, payload:false});
        }
        dispatch({type: RESTAURANT_LOADER, payload:false});
    } catch (error) {
        dispatch({type: RESTAURANT_LOADER, payload:false});
        toast.error(error.data.message || "something went wrong");
        console.error(error);
    }
};
export const getPackagesByRestaurant = (restauentId,onSuccess) => async (dispatch) => {

    await dispatch({type: RESTAURANT_LOADER, payload:true});
    try {
        const { data ,status} = await axiosInstance.get(`/packages/${restauentId}`);
    
        if (status== 200) {
            dispatch({type: RESTAURANT_LOADER, payload:false});

            onSuccess(data);
        } else {
             dispatch({type: RESTAURANT_LOADER, payload:false});
        }
        dispatch({type: RESTAURANT_LOADER, payload:false});
    } catch (error) {
        dispatch({type: RESTAURANT_LOADER, payload:false});
        console.error(error);
    }
};