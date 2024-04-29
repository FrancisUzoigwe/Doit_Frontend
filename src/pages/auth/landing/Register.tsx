import { useNavigate } from "react-router-dom"
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa"
import { useState } from "react"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerAccount } from "../../../apis/authApi"
import { DotLoader } from "react-spinners"

const Register = () => {
  const navigate = useNavigate()
  const [see, setSee] = useState<boolean>(false)
  const onSee = () => {
    setSee(!see)
  }

  const [loading, setLoading] = useState<boolean>(false)


  const Schema = yup.object({
    email: yup.string().required(),
    userName: yup.string().required(),
    password: yup.string().required(),
  })

  const { handleSubmit, register, reset } = useForm({
    resolver: yupResolver(Schema)
  })

  const onHandleSubmit = handleSubmit(async (data: any) => {
    setLoading(false)
    const { email, password, userName } = data
    registerAccount({ email, password, userName }).then((res: any) => {
      return res.data.data
    })
    setLoading(true)
    reset()
  })
  return (
    <>
      <div className="w-full flex items-center justify-center h-[100vh] ">
        <form onSubmit={onHandleSubmit} className=" bg-white h-[85%] max-md:w-[95%] rounded-xl md:w-[500px] flex flex-col items-center">
          <div className="w-[90%] h-[50px] flex items-center justify-between hover:cursor-pointer">
            <div className="flex items-center" onClick={() => {
              navigate(-1)
            }}>
              <div className="mr-2"><FaArrowLeft /></div>
              <div>Back</div>
            </div>
          </div>
          <div className="my-2 font-black text-[20px]">Register</div>
          <div className="w-[90%] my-3">
            <div className="text-[18px] font-black">
              Let's Get Started
            </div>
            <div className="text-[13px] font-black text-gray-600">Create an Account</div>
          </div>
          <div className="w-[90%] h-[50px]">
            <label htmlFor="UserEmail" className="block text-sm font-black  text-gray-700"> Email </label>

            <input
              type="email"
              id="UserEmail"
              {...register("email")}
              placeholder="example@gmail.com"
              className="mt-1 w-full h-[50px] outline-none border border-[#1E1E24] pl-4 rounded-md  shadow-sm sm:text-sm"
            />
          </div>
          <div className="w-[90%] h-[50px] mt-8 relative">
            <label htmlFor="UserEmail" className="block text-sm  font-black  text-gray-700"> UserName </label>
            <input
              type="text"
              id="name"
              {...register("userName")}
              placeholder="example"
              className="mt-1 w-full h-[50px] outline-none border border-[#1E1E24] pl-4 rounded-md  shadow-sm sm:text-sm"
            />
          </div>
          <div className="w-[90%] h-[50px] mt-8 relative">
            <label htmlFor="UserEmail" className="block text-sm  font-black  text-gray-700"> Password </label>
            <div className="absolute right-3 top-9" onClick={() => {
              onSee()
            }}>{see ? <FaEyeSlash className="text-2xl hover:cursor-pointer" /> : <FaEye className="text-2xl hover:cursor-pointer" />}</div>
            <input
              type={`${!see ? "password" : "text"}`}
              id="UserEmail"
              placeholder="*******"
              {
              ...register("password")
              }
              className="mt-1 w-full h-[50px] outline-none border border-[#1E1E24] pl-4 rounded-md  shadow-sm sm:text-sm"
            />
          </div>
          <div className="my-3" />
          <div className="flex flex-col items-center w-full mt-8">
            <button className="w-[90%] h-[55px] flex items-center justify-center rounded-md bg-[#1E1E24] text-white" type="submit">{loading ? <div className="flex items-center">
              <div className="mr-3">Creating Account</div>
              <DotLoader size={35} color="white" />
            </div> : "Create Account"}</button>
            <div className="flex w-[90%] my-1 justify-start text-black hover:cursor-pointer text-[15px]" onClick={() => {
              navigate("/signin-account")
            }}>Have an account? Signin</div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register