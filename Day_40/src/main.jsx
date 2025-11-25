import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById("root")).render(
    /* Bước 5: Bọc bằng Provider và truyền store */
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
);
