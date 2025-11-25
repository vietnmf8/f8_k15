import { SET_ITEMS } from "./consts";

/* Bước 13. Viết hàm action */
export const setItems = (payload) => ({
    type: SET_ITEMS,
    payload,
});
