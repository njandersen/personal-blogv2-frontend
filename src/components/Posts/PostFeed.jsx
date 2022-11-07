import { useEffect, useState } from "react";

import PostItem from "./PostItem";

function PostFeed() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/feed/posts");
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let post = await response.json();
        setPosts(post);
        setError(null);
      } catch (err) {
        setError(err.message);
        setPosts(null);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  return (
    <>
      <div>
        {loading && <div>Loading please wait....</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
      </div>

      {posts && posts.map((post) => <PostItem post={post} key={post.id} />)}
    </>
  );
}

export default PostFeed;
