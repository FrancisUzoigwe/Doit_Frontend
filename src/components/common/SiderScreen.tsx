import { FaCaretLeft, FaCaretRight } from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux"
import { changedSide, logOut, sided } from "../../global/GlobalState"
import { IoIosCreate } from "react-icons/io"
import { CiLogout, CiViewBoard } from "react-icons/ci"
import { Link, useLocation } from "react-router-dom"
const SiderScreen = () => {
    const dispatch = useDispatch()
    const side = useSelector((state: any) => state.side)
    const location = useLocation()
    const active = location.pathname



    return (
        <>
            <div className={`${side ? "w-[70px]" : "w-[200px]"} h-screen `}>
                <div className={`h-full ${side ? "w-[70px] " : "w-[200px]"} top-0 fixed flex flex-col items-center bg-white`}>
                    <div className={`absolute ${side ? "w-[70px]" : "w-[200px]"} justify-end mt-7 hover:cursor-pointer opacity-40 hover:opacity-100 transition-all duration-300`}>
                        <div className={`${side ? "w-[70px]" : "w-[200px]"} flex items-center justify-end`}>
                            {
                                side ? <div><FaCaretRight className="absolute text-5xl -right-6 " onClick={() => {
                                    dispatch(changedSide())
                                }} /></div> : <div>
                                    <FaCaretLeft className="absolute text-5xl -right-6 " onClick={() => {
                                        dispatch(sided())
                                    }} />
                                </div>
                            }
                        </div>
                    </div>
                    <div className="mt-10" />
                    <Link to="/">
                        <div className={`flex items-center my-5 hover:cursor-pointer ${active === "/" ? "text-blue-600" : ""}`}>
                            <div className="text-3xl"><CiViewBoard /></div>
                            {!side && <div className="font-black ml-1">View Task</div>}
                        </div>
                    </Link>
                    <Link to="/create">
                        <div className={`flex items-center hover:cursor-pointer ${active === "/create" ? "text-blue-600" : ""}`}>
                            <div className="text-3xl"><IoIosCreate /></div>
                            {!side && <div className="font-black ml-1">Create Task</div>}
                        </div>
                    </Link>
                    <div className="flex items-center absolute bottom-10 font-black text-red-600 hover:cursor-pointer" onClick={() => {
                        dispatch(logOut())

                    }}>
                        <div><CiLogout className="text-2xl mr-1 " /></div>
                        {!side && <div>LogOut</div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SiderScreen