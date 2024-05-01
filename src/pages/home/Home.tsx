import Tasks from "./Tasks"

const Home = () => {
  return (
    <div className="bg-white min-h-[100vh] flex justify-center w-full">
      <div className="w-[95%] grid grid-cols-4 gap-4 my-4">
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
      </div>
    </div>
  )
}

export default Home