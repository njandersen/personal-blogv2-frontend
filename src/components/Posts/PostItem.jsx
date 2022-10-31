function PostItem({ post }) {
  return (
    <div className=" w-5/6 p-4 mb-6 rounded overflow-hidden shadow-lg">
      <div className="bg-cyan-500">
        <h2 className="font-bold text-xl font-title mb-2">{post.title}</h2>
      </div>

      <div className="items-center">
        <p className="text-gray-700 text-base">{post.content}</p>
      </div>
    </div>
  );
}

export default PostItem;
