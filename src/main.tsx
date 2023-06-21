import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { Provider } from "react-redux";
import { store } from "./app/store.tsx";
// import productsAPI from "./features/api/apiSlice.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
            {/* <ApiProvider api={productsAPI}>
                <App />
            </ApiProvider> */}
        </Provider>
    </React.StrictMode>
);
