import { BiSolidFoodMenu } from "react-icons/bi"
import { useNavigate } from "react-router-dom"
const Header = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="w-full h-[70px] flex items-center justify-center">
                <div className="w-full h-[70px] flex items-center justify-center fixed">
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
                        <div className="text-white hidden max-md:block"><BiSolidFoodMenu className="text-2xl hover:cursor-pointer" /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header