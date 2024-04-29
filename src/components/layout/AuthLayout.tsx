import { Outlet } from "react-router-dom"
import Header from "../common/Header"
import Footer from "../common/Footer"

const AuthLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default AuthLayout