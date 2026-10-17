import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./app/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/index.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./app/App.tsx";
import { ContextProvider } from "./app/context/ContextProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <Router>
          <App />
        </Router>
      </ContextProvider>
    </Provider>
  </StrictMode>,
);
