import { IoClose } from "react-icons/io5"
import { useDispatch } from "react-redux"
import { changeUpdate } from "../../global/GlobalState"
import { useState } from "react"

const UpdatePage = () => {

    const dispatch = useDispatch()
    const [text, setText] = useState<string>("")
    return (
        <div className="w-full min-h-[100vh] flex items-center justify-center flex-col absolute top-0 bg-black bg-opacity-65 z-[300] text-white">
            <div className="border w-[500px] max-md:w-[95%] rounded-xl bg-white min-h-[600px] flex items-center flex-col">
                <div className="w-full flex justify-end text-black">
                    <div className="mr-3 mt-3"><IoClose className="text-2xl hover:cursor-pointer" onClick={() => {
                        dispatch(changeUpdate())
                    }} /></div>
                </div>
                <input className="uppercase  text-black my-2 font-black w-[95%] outline-none border-black border rounded-md h-[40px] pl-3" placeholder="Title"  />
                <textarea placeholder="Write Here..." className="outline-none rounded-lg w-[95%] border border-black max-h-[450px] h-[450px] text-black px-3 py-2" value={text} onChange={(e: any) => setText(e.target.value)}></textarea>
                <div className=" flex items-center w-[95%] h-[50px] justify-end">
                    <button className="text-black hover:text-black hover:bg-red-600 px-4 py-2 rounded-md duration-300" onClick={() => {
                        dispatch(changeUpdate())
                    }}>Cancel </button>
                    <button className={`ml-3  px-4 py-2 rounded-md transition-all duration-300  ${text !== "" ? "bg-green-600 text-white" : "bg-gray-400 text-black"}`} disabled={!text.trim()}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default UpdatePage