import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostManager from "../components/Posts/PostManager";

function Post() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const postId = useParams().pid;

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/feed/post/${postId}`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let post = await response.json();
        setPost(post);
        setError(null);
      } catch (err) {
        setError(err.message);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, []);

  console.log(post);
  return (
    <>
      <div>
        {loading && <div>Loading please wait....</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
      </div>
      <PostManager post={post} />
    </>
  );
}

export default Post;
