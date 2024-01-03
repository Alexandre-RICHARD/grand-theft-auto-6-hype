import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";

import {App, setupStore} from "@/IndexImporter";
import "@styles/index.scss";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("app")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
