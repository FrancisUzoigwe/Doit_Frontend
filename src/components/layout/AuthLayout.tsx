import { Outlet } from "react-router-dom"
import Header from "../common/Header"

const AuthLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default AuthLayout