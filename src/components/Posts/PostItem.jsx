function PostItem({ post }) {
  return (
    <div className=" w-5/6 p-4 mb-6 rounded overflow-hidden shadow-xl shadow-slate-500">
      <h2 className="font-bold text-xl text-white font-title mb-2 bg-teal-500 bg-cover w-auto -m-4 p-3">
        {post.title}
      </h2>

      <div className="items-center">
        <p className="text-gray-700 text-base">{post.content}</p>
      </div>
    </div>
  );
}

export default PostItem;
