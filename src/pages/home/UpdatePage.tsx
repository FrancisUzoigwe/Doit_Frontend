import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { changeUpdate } from "../../global/GlobalState";
import { useState } from "react";
import { updateTask } from "../../apis/taskApi";
import Swal from "sweetalert2";
import { mutate } from "swr";


const UpdatePage = () => {

    const user = useSelector((state: any) => state.user?._id)
    console.log("This is user: ", user)
    const selectedBox = useSelector((state: any) => state.selectedBox);
    const dispatch = useDispatch();
    const [topic, setTopic] = useState<string>(selectedBox?.topic || "");
    const [content, setContent] = useState<string>(selectedBox?.content || "");
    const [id, setId] = useState<string>(selectedBox?._id || "")
    console.log(typeof setId)
    console.log("Update ID:", id)


    const handleUpdate = async () => {
        try {
            await updateTask(user, id, { topic, content }).then((res: any) => {
                return res.data
            })
        } catch (error: any) {
            console.log("Error updating task", error.message)
        }
    }

    return (
        <div className="w-full min-h-[100vh] flex items-center justify-center flex-col fixed top-0 bg-black bg-opacity-65 z-[300] text-white">
            <div className="border w-[500px] max-md:w-[95%] rounded-xl bg-white min-h-[600px] flex items-center flex-col">
                <div className="w-full flex justify-end text-black">
                    <div className="mr-3 mt-3">
                        <IoClose className="text-2xl hover:cursor-pointer" onClick={() => {
                            dispatch(changeUpdate());
                        }} />
                    </div>
                </div>
                <input
                    className="uppercase text-black my-2 font-black w-[95%] outline-none border-black border rounded-md h-[40px] pl-3"
                    placeholder="TITLE"
                    value={topic}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTopic(e.target.value)}
                />
                <textarea
                    placeholder="Write Here..."
                    className="outline-none rounded-lg w-[95%] border border-black max-h-[450px] h-[450px] text-black px-3 py-2"
                    value={content}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}>{selectedBox?.content}
                </textarea>
                <div className="flex items-center w-[95%] h-[50px] justify-end">
                    <button
                        className="text-black hover:text-black hover:bg-red-600 px-4 py-2 rounded-md duration-300"
                        onClick={() => {
                            dispatch(changeUpdate());
                        }}>Cancel
                    </button>
                    <button
                        className={`ml-3  px-4 py-2 rounded-md transition-all duration-300 bg-green-600 text-white"}`}
                        onClick={() => {
                            handleUpdate().then(() => {
                                Swal.fire({
                                    icon: "success",
                                    text: "Updated successfully",
                                    timerProgressBar: true,
                                    timer: 400
                                }).then(() => {
                                    dispatch(changeUpdate())
                                    mutate(`http://localhost:8080/api/v2/${user}/view-all-task`)
                                })
                            })
                        }}>Update
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UpdatePage;
