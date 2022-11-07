import { useState } from "react";
import PostForm from "./PostForm";

function PostManager({ post }) {
  const [preview, setPreview] = useState(false);

  return (
    <main>
      {post && (
        <>
          <section>
            <PostForm postref={post} defaultValues={post} preview={preview} />
          </section>

          <aside>
            <h3>Tools</h3>
            <button onClick={() => setPreview(!preview)}>
              {preview ? "Edit" : "Preview"}
            </button>
          </aside>
        </>
      )}
    </main>
  );
}

export default PostManager;
