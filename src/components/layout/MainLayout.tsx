import { Outlet } from "react-router-dom"
import SiderScreen from "../common/SiderScreen"
import { useSelector } from "react-redux"

const MainLayout = () => {
  const side = useSelector((state: any) => state.side)
  return (
    <div className="flex">

      <div className={` max-md:hidden ${side ? "w-[70px]" : "w-[200px]"}`}>
        <SiderScreen />
      </div>


      <Outlet />
    </div>
  )
}

export default MainLayout