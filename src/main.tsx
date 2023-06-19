import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import productsAPI from "./features/api/apiSlice.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ApiProvider api={productsAPI}>
            <App />
        </ApiProvider>
    </React.StrictMode>
);
