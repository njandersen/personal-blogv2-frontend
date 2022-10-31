import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Banner from "./components/UI/Banner";
import Navbar from "./components/UI/Navbar";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Banner />
    <Navbar />
    <App />
  </React.StrictMode>
);
