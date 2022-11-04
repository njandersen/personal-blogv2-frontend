import { useState } from "react";
import PostForm from "./PostForm";

function PostManager() {
  const [preview, setPreview] = useState(false);

  const DUMMY_POSTS = [
    {
      slug: "first-post",
      title: "My First Test Post",
      content: "This is just a dummy test post",
    },
  ];

  return (
    <main>
      {DUMMY_POSTS && (
        <>
          <section>
            <h1>{DUMMY_POSTS.title}</h1>
            <p>ID: {DUMMY_POSTS.slug}</p>

            <PostForm
              postref={DUMMY_POSTS}
              defaultValues={DUMMY_POSTS}
              preview={preview}
            />
          </section>

          <aside>
            <h3>Tools</h3>
            <button onClick={() => setPreview(!preivew)}>
              {preview ? "Edit" : "Preview"}
            </button>
          </aside>
        </>
      )}
    </main>
  );
}

export default PostManager;
