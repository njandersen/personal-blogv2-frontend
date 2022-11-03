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
      className="rounded-md flex felx-col justify-center items-center mt-10"
    >
      {/* <div>
        <ReactMarkdown>{watch("content")}</ReactMarkdown>
      </div> */}
      <div className=" w-5/6 h-96">
        <textarea
          className="w-full h-full border-2 border-black bg-gray-200 p-3 rounded-lg"
          name="content"
          {...register("content", {
            required: "Content is required",
            minLength: { value: 10, message: "Content is too short" },
            maxLength: { value: 20000, message: "Content is too long!" },
          })}
        ></textarea>

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
          className="bg-cyan-400 py-2 px-4 rounded-full mt-4 "
          disabled={!isDirty || !isValid}
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}

export default CreatePost;
