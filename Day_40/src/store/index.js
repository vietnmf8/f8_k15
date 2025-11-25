import { legacy_createStore } from "redux";
import rootReducer from "./rootReducer";
/* Bước 1: Tạo store */
const store = legacy_createStore(rootReducer);
window.store = store
export { store };
