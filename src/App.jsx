import { Route, Routes } from "react-router-dom";

import PostFeed from "./components/Posts/PostFeed";

function App() {
  return (
    <div className="flex flex-col justify-center items-center mt-11">
      <Routes>
        <Route path="/" element={<PostFeed />} />
      </Routes>
    </div>
  );
}

export default App;
