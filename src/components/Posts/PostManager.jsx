import { useState } from "react";
import PostForm from "./PostForm";

function PostManager({ post }) {
  const [preview, setPreview] = useState(true);

  return (
    <main className=" flex flex-row justify-between w-5/6">
      {post && (
        <>
          <section>
            <h1
              className={`${preview ? "text-4xl font-bold mb-10" : "hidden"}`}
            >
              {post.title}
            </h1>
            <PostForm postref={post} defaultValues={post} preview={preview} />
          </section>

          <aside className="flex flex-col items-center mt-56 bg-slate-200 w-60 rounded">
            <h3 className="text-lg ">Tools:</h3>
            <button
              className="bg-teal-500 py-2 px-4 rounded-full mt-4 w-40"
              onClick={() => setPreview(!preview)}
            >
              {preview ? "Edit" : "Preview"}
            </button>
          </aside>
        </>
      )}
    </main>
  );
}

export default PostManager;
