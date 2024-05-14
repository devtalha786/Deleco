import { ALL_RESTAURANT, RESTAURANT_LOADER, SINGLE_RESTAURANT } from "../types";

const initialState = {
    loader:false,
    restauents:[],
    singleRestauents:{}
};

const restaurantReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      
            case RESTAURANT_LOADER:
                return {
                    ...state,
                    loader:payload
                };
            case ALL_RESTAURANT:
                    return {
                        ...state,
                        restauents:payload
                    };
                    case SINGLE_RESTAURANT:
                            return {
                                ...state,
                                singleRestauents:payload
                            };
       
        default:
            return state;
    }
};

export default restaurantReducer;
