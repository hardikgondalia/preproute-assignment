import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "./store/store";
import { Provider } from "react-redux";
import BreadcrumbProvider from "./contexts/BreadcrumbProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BreadcrumbProvider>
        <App />
      </BreadcrumbProvider>
    </Provider>
  </StrictMode>,
);
