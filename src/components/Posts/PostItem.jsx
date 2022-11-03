function PostItem({ post }) {
  const wordCount = post?.content.trim().split(/\s+/g).length;
  const minutesToRead = (wordCount / 100 + 1).toFixed(0);

  return (
    <div className=" w-5/6 p-4 mb-6 rounded overflow-hidden shadow-xl shadow-slate-500">
      <h2 className="font-bold text-xl text-white font-title mb-2 bg-teal-500 bg-cover w-auto -m-4 p-3">
        {post.title}
      </h2>

      <div className="items-center">
        <span>
          {wordCount} words. {minutesToRead} min read
        </span>
      </div>
    </div>
  );
}

export default PostItem;
