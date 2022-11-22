import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useForm } from "react-hook-form";

function PostForm({ defaultValues, postref, preview }) {
  const { register, handleSubmit, reset, watch, formState } = useForm({
    defaultValues,
    mode: "onChange",
  });

  // States
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);
  const authorId = 1;

  const { errors, isDirty, isValid } = formState;

  const createPost = async (data) => {
    try {
      await fetch("http://localhost:3000/feed/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: data.title,
          content: data.content,
          published: data.published,
          authorId: 1,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(createPost)}
      className="rounded-md flex flex-col justify-center items-center mt-2"
    >
      {preview && (
        <div className="rounded bg-gray-100 w-5/6 shadow-lg">
          <ReactMarkdown>{watch("content")}</ReactMarkdown>
        </div>
      )}

      <div className={`${preview ? "hidden" : "w-5/6 h-96"}`}>
        <h1 className="mb-6 text-2xl font-bold text-teal-500 ">
          Create A New Post
        </h1>
        <input
          name="title"
          {...register("title", {
            required: "Title is required",
            minLength: { value: 5, message: "Title is too short" },
            maxLength: { value: 30, message: "Title is too long" },
          })}
          placeholder="A New Post"
          className="border-2 border-black w-full mb-6 rounded-lg bg-gray-100"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full h-full border-2 border-black bg-gray-100 p-3 rounded-lg"
          onChange={(e) => setContent(e.target.value)}
          name="content"
          {...register("content", {
            required: "Content is required",
            minLength: { value: 10, message: "Content is too short" },
            maxLength: { value: 20000, message: "Content is too long!" },
          })}
        ></textarea>

        <p className="text-red-500">{errors.content?.message}</p>
        <p className="text-red-500">{errors.title?.message}</p>

        <fieldset>
          <input
            className="mt-4"
            name="published"
            type="checkbox"
            onChange={(e) => setPublished(e.target.value)}
            {...register("published")}
          />
          <label>Published</label>
        </fieldset>

        <button
          type="submit"
          className="bg-teal-500 py-2 px-4 rounded-full mt-4 "
          disabled={!isDirty || !isValid}
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}

export default PostForm;
