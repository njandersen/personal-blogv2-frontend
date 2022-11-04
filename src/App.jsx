import { Route, Routes } from "react-router-dom";

import PostFeed from "./components/Posts/PostFeed";

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

function App() {
  return (
    <div className="flex flex-col justify-center items-center mt-11">
      <Routes>
        <Route path="/" element={<PostFeed posts={DUMMY_POSTS} />} />
      </Routes>
    </div>
  );
}

export default App;
