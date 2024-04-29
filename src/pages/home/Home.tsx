import { logOut } from "../../global/GlobalState"
import { useDispatch } from "react-redux"

const Home = () => {
  const dispatch = useDispatch()
  return (
    <div className="text-white" onClick={() => {
      dispatch(logOut())
    }}>Home</div>
  )
}

export default Home