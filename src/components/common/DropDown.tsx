import { useNavigate } from "react-router-dom"

const DropDown = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="w-full  h-screen flex items-center justify-center fixed bg-[#1E1E24] bg-opacity-85 top-0">
                <div className="w-[250px] h-[200px] bg-white rounded-xl flex flex-col items-center py-4">
                    <div className="flex flex-col items-center">
                        <button className="border hover:cursor-pointer hover:-translate-y-2 transition-all duration-500 border-black px-4 py-2 rounded-md my-1" onClick={() => {
                            navigate("/signin-account")
                        }}>Signin Account</button>
                        <div className="text-[13px]">Continue with your tasks</div>
                    </div>
                    <div className="my-1" />
                    <div className="flex flex-col items-center">
                        <button className="bg-[#1E1E24] hover:cursor-pointer hover:-translate-y-2 transition-all duration-500 px-4 py-2 rounded-md my-1 text-white" onClick={() => {
                            navigate("/create-account")
                        }}>Create Account</button>
                        <div className="text-[13px]">Create an account to get started</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DropDown