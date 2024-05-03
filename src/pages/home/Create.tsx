import { useSelector } from "react-redux";
import { useState } from "react";
import { createTask } from "../../apis/taskApi";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DotLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

interface FormData {
  topic: string;
  content: string;
}

const Create = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const Schema = yup.object().shape({
    topic: yup.string().required(),
    content: yup.string().required(),
  });

  const { handleSubmit, register } = useForm<FormData>({
    resolver: yupResolver(Schema),
  });

  const user = useSelector((state: any) => state.user);
  const userID = user?._id;

  const onHandleSubmit = handleSubmit(async (data: any) => {
    try {
      setLoading(true);
      const { topic, content } = data
      if (!userID) {
        // Handle error: user ID not available
        return;
      }
      await createTask(userID, { topic, content });
      setLoading(false);
      navigate("/");
    } catch (error: any) {
      setLoading(false);
      throw error;
    }
  });

  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center flex-col bg-white">
      <form
        onSubmit={onHandleSubmit}
        className="border w-[500px] max-md:w-[95%] rounded-xl bg-white min-h-[600px] flex items-center flex-col"
      >
        <div className="w-full flex justify-center text-black my-2 font-black uppercase">
          Create task
        </div>
        <input
          className="uppercase text-black my-2 font-black w-[95%] outline-none border-black border rounded-md h-[40px] pl-3"
          {...register("topic")}
          placeholder="Title"
        />
        <textarea
          placeholder="Write Here..."
          className="outline-none rounded-lg w-[95%] border border-black max-h-[450px] h-[450px] text-black px-3 py-2"
          {...register("content")}
        ></textarea>
        <div className="flex items-center w-[95%] h-[50px] justify-end">
          <button
            className={`ml-3 flex items-center px-4 py-2 rounded-md transition-all duration-300 bg-green-600 text-white`}
            type="submit"
          >
            Create{" "}
            {loading && (
              <div className="ml-1">
                <DotLoader color="white" size={30} />
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
