import { useState } from "react"
import { BiSolidFoodMenu } from "react-icons/bi"
import { IoClose } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import DropDown from "./DropDown"
import { changedToggle, toggled } from "../../global/GlobalState"
const Header = () => {
    const [scroll, setScroll] = useState<boolean>(false)
    const onScroll = () => {
        if (window.scrollY >= 10) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    window.addEventListener("scroll", onScroll)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const toggle = useSelector((state: any) => state.toggle)
    setInterval(() => {
        dispatch(changedToggle())
    }, 10000)
    return (
        <>
            {toggle && <DropDown />}
            <div className="w-full h-[70px] flex items-center justify-center">
                {!scroll ? <div className="w-full h-[70px] flex items-center justify-center fixed  transition-all duration-300">
                    <div className="w-[95%] h-full flex items-center justify-between text-white">
                        <div>Doit</div>
                        <div className="flex items-center max-md:hidden">
                            <button className="mr-4 px-4 py-2 rounded-md border border-white" onClick={() => {
                                navigate("/signin-account")
                            }}>Signin</button>
                            <button className="px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all duration-300" onClick={() => {
                                navigate("/create-account")
                            }}>Create Account</button>
                        </div>
                        <div className="text-white hidden max-md:block">{!toggle ? <BiSolidFoodMenu className="text-2xl hover:cursor-pointer" onClick={() => {
                            dispatch(toggled())
                        }} /> : <IoClose className="text-2xl hover:cursor-pointer" onClick={() => {
                            dispatch(changedToggle())
                        }} />}</div>
                    </div>
                </div> : <div className="w-full h-[70px] flex items-center justify-center fixed bg-white transition-all duration-300">
                    <div className="w-[95%] h-full flex items-center justify-between ">
                        <div>Doit</div>
                        <div className="flex items-center max-md:hidden">
                            <button className="mr-4 px-4 py-2 rounded-md border border-[#1E1E24]" onClick={() => {
                                navigate("/signin-account")
                            }}>Signin</button>
                            <button className="px-4 py-2 rounded-md hover:bg-[#1E1E24] hover:text-white transition-all duration-300" onClick={() => {
                                navigate("/create-account")
                            }}>Create Account</button>
                        </div>
                        <div className="text-[#1E1E24] hidden max-md:block">{!toggle ? <BiSolidFoodMenu className="text-2xl hover:cursor-pointer" onClick={() => {
                            dispatch(toggled())
                        }} /> : <IoClose className="text-2xl hover:cursor-pointer" onClick={() => {
                            dispatch(changedToggle())
                        }} />}</div>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default Header