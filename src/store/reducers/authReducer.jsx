const initialData = {
    laoding: false,
};
const authReducer = (state = initialData, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer; 
