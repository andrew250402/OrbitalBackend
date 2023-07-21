import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App/App";
import { AuthContextProvider } from './context/AuthContext'
import { ReviewsContextProvider } from "./context/ReviewsContext";
import { SearchContextProvider } from "./context/SearchedContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <ReviewsContextProvider>
          <App />
        </ReviewsContextProvider>
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
