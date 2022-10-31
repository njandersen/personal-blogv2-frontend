import { GiHamburgerMenu } from "react-icons/gi";
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

function App({ posts }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Welcome to my blog!</h1>
      <h1>{console.log(posts)}</h1>
      <PostFeed posts={posts} />
    </div>
  );
}

export default App;
