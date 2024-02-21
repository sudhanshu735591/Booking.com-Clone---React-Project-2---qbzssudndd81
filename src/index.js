import React from "react";
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./components/ContextApi/UserContextProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
