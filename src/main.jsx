import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Banner from "./components/UI/Banner";
import Navbar from "./components/UI/Navbar";
import "./index.css";

const DUMMY_POSTS = [
  {
    slug: "first-post",
    title: "My First Test Post",
    content: "This is just a dummy test post",
  },
  {
    slug: "second-post",
    title: "My Second Test Post",
    content: "Another dummy test post, lets see if it works!",
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Banner />
    <Navbar />
    <App posts={DUMMY_POSTS} />
  </React.StrictMode>
);
