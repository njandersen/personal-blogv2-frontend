import { useParams } from "react-router-dom";
import PostManager from "../components/Posts/PostManager";

const DUMMY_POSTS = [
  {
    id: "first-post",
    title: "My First Test Post",
    content:
      "This is just a dummy test post meant to test the post system. I am just typing words right now to get as close to 200 words as I can. Will I get there before I give up? The answer is no I will not. Goodbye. ",
  },
];

function Post() {
  const pid = useParams().pid;

  const identifiedPost = DUMMY_POSTS.find((p) => p.id === pid);
  console.log(identifiedPost);

  // if (!identifiedPost) {
  //   return (
  //     <div>
  //       <h2>Could not find post</h2>
  //     </div>
  //   );
  // }

  return <PostManager />;
}

export default Post;
