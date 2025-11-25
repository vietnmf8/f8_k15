import { SET_ITEMS } from "./consts";

/* Bước 10: Tạo reducer con */
const initState = {
    items: [],
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        /* Bước 12: Xử lý */
        case SET_ITEMS:
            return {
                ...state,
                items: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
