import { AiFillDelete } from "react-icons/ai"
import { FaPencilAlt } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { updated, selectBox } from "../../global/GlobalState"
import UpdatePage from "./UpdatePage"
import axios from "axios"
import useSWR, { mutate } from "swr"
import { deleteTask } from "../../apis/taskApi"
import { FaNoteSticky } from "react-icons/fa6"


const Home = () => {

  const user = useSelector((state: any) => state.user?._id)
  const handleClick = (topic: string, content: string, _id: string) => {
    dispatch(selectBox({ topic, content, _id }))
  }
  const fetcher = async (url: string) => {
    try {
      const response = await axios.get(url)
      return response.data.data
    }
    catch (error: any) {
      throw error
    }
  }
  const dispatch = useDispatch()
  const userID = user
  const { data, isLoading }: any = useSWR(`https://doitbackend.onrender.com/api/v2/${userID}/view-all-task`, fetcher)

  const update = useSelector((state: any) => state.update)
  return (
    <>
      {update && <UpdatePage />}
      {isLoading ? <div className="text-white absolute top-0 left-0 z-[300] flex items-center justify-center w-full h-screen">Loading</div> : <div className="bg-white min-h-[100vh] flex justify-center w-full">
        {data.length == 0 ? <div className="w-full flex items-center justify-center flex-col h-screen text-black">
          <div className=""><FaNoteSticky className="text-8xl" /></div>
          <div className="text-[20px] font-black uppercase mt-2">Nothing to show here</div>
          <div className="">Create a new note note</div>
        </div> : <div className="w-[95%] grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 my-4 relative">
          {data?.map((props: any) => {
            return (
              <div className="h-[300px] shadow-lg overflow-hidden border rounded-lg flex items-center flex-col relative " key={props?._id} onClick={() => handleClick(props?.topic, props?.content, props?._id)}>
                <div className="font-black text-[16px] my-2 px-2 uppercase text-center">{props?.topic}</div>
                <div className="w-[95%] ">{props?.content}</div>
                <div className="bg-white w-full absolute bottom-0 h-[40px] flex items-center justify-end">
                  <div className="flex items-center">
                    <div className="mr-4"><AiFillDelete className="text-red-600 text-2xl hover:scale-[1.2] transition-all duration-300 hover:cursor-pointer" onClick={() => {
                      deleteTask(userID, props._id).then(() => {
                        mutate(`https://doitbackend.onrender.com/api/v2/${userID}/view-all-task`)
                      })
                    }} /></div>
                    <div className="mr-1 "><FaPencilAlt className="text-xl hover:scale-[1.2] transition-all duration-300 hover:cursor-pointer" onClick={() => {
                      dispatch(updated())
                    }} /></div>
                  </div>
                </div>
              </div>

            )
          })}

        </div>}
      </div>}
    </>
  )
}

export default Home