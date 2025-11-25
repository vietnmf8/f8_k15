// /* Bước 2: Tạo initState */
// const initState = {
//     product: {
//         items: [],
//         details: {},
//     },
//     post: {
//         items: [],
//         details: {},
//     },
//     comment: {
//         items: [],
//         details: {},
//     },
// };

// /* Bước 3: Tạo rootReducer */
// const rootReducer = (state = initState, action) => {
//     switch (action.type) {
//         /* Bước 8: Set biến initState theo API */
//         case "setProductItems": // Đặt tên rõ ràng, chi tiết
//             return {
//                 ...state,
//                 product: {
//                     ...state.product,
//                     items: action.payload,
//                 },
//             };
//         /* Bước 4: Return state ở case default */
//         default:
//             return state;
//     }
// };

import { reducer as productReducer } from "@/features/product";
import { combineReducers } from "redux";

/* Bước 9: Combine Reducer: Gom nhiều reducer lại rồi trả ra con to nhất */
const rootReducer = combineReducers({
    /* Bước 11: Lấy ra reducer con */
    product: productReducer, // Gọi productReducer trả ra cái gì thì lưu vào product
});

export default rootReducer;
