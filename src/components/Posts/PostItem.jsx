function PostItem({ post }) {
  return (
    <div className=" w-5/6 p-4 mb-6 rounded overflow-hidden shadow-lg bg-teal-400">
      <h2 className="font-bold text-xl mb-2">{post.title}</h2>
      <div className="items-center">
        <p className="text-gray-700 text-base">{post.content}</p>
      </div>
    </div>
  );
}

export default PostItem;
