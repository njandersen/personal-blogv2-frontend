import PostItem from "./PostItem";

function PostFeed({ posts }) {
  return posts
    ? posts.map((post) => <PostItem post={post} key={post.slug} />)
    : null;
}

export default PostFeed;
