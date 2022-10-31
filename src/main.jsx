import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Banner from "./components/UI/Banner";
import Navbar from "./components/UI/Navbar";
import CreatePost from "./pages/CreatePost";
import About from "./pages/About";
import Enter from "./pages/Enter";
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
    <Router>
      <Banner />
      <Navbar />
      <App posts={DUMMY_POSTS} />
      <Routes>
        <Route path="/create" element={<CreatePost />} />
        <Route path="/about" element={<About />} />
        <Route path="/enter" element={<Enter />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
