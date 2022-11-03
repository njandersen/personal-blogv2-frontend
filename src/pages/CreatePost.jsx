import ReactMarkdown from "react-markdown";
import { useForm } from "react-hook-form";

function CreatePost() {
  const { register, handleSubmit, reset, watch, formState } = useForm({
    defaultValues: {},
    mode: "onChange",
  });

  const { errors, isDirty, isValid } = formState;

  function createPost({ data }) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(createPost)}
      className="rounded-md flex felx-col justify-center items-center mt-2"
    >
      {/* <div>
        <ReactMarkdown>{watch("content")}</ReactMarkdown>
      </div> */}

      <div className=" w-5/6 h-96">
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
        />
        <textarea
          className="w-full h-full border-2 border-black bg-gray-100 p-3 rounded-lg"
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

export default CreatePost;
