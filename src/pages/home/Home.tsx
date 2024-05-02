import { AiFillDelete } from "react-icons/ai"
import { FaPencilAlt } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { updated } from "../../global/GlobalState"
import UpdatePage from "./UpdatePage"
import axios from "axios"
import useSWR from "swr"

const Home = () => {

  const user = useSelector((state: any) => state.user?._id)
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
  const { data, isLoading }: any = useSWR(`http://localhost:8080/api/v2/${userID}/view-all-task`, fetcher)
  // console.log("This is the data ", data)
  // console.log("This is the loading ", isLoading)

  const update = useSelector((state: any) => state.update)
  return (
    <>
      {update && <UpdatePage />}
      {isLoading ? <div className="text-white absolute top-0 left-0 z-[300] flex items-center justify-center w-full h-screen">Loading</div> : <div className="bg-white min-h-[100vh] flex justify-center w-full">
        <div className="w-[95%] grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 my-4 relativex">
          {data?.map((props: any) => {
            return (
              <div className="h-[300px] overflow-hidden border rounded-lg flex items-center flex-col relative " key={props?._id}>
                <div className="font-black text-[16px] my-2 px-2 uppercase">{props?.topic}</div>
                <div className="w-[95%] ">{props?.content}</div>
                <div className="bg-white w-full absolute bottom-0 h-[40px] flex items-center justify-end">
                  <div className="flex items-center">
                    <div className="mr-4"><AiFillDelete className="text-red-600 text-2xl hover:scale-[1.2] transition-all duration-300 hover:cursor-pointer" /></div>
                    <div className="mr-1 "><FaPencilAlt className="text-xl hover:scale-[1.2] transition-all duration-300 hover:cursor-pointer" onClick={() => {
                      dispatch(updated())
                    }} /></div>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>}
    </>
  )
}

export default Home