import girl from "../../../assets/girl.jpg"
import woman from "../../../assets/woman.jpg"
import man from "../../../assets/man.jpg"
const Hero = () => {
  return (
    <>
      <div className="w-full min-h-[100vh] flex items-center flex-col">
        <div className="w-[95%] flex min-h-[70vh] lg:justify-between items-center max-lg:flex-col">
          <div className="max-lg:w-[95%] w-[600px]">
            <div className="my-1 text-white text-[50px] max-md:text-[40px] max-md:leading-[50px] font-black capitalize leading-[60px]">You deserve to Doit, you deserve to know it</div>
            <div className="max-lg:mb-7 text-[20px] text-white font-black">Write them down as you know them...</div>
          </div>
          <div className="max-lg:w-[95%]  w-[600px] h-auto grid max-md:grid-cols-1 grid-cols-2 gap-4">
            <div className="gap-4 grid">
              <div style={{ backgroundImage: `url(${girl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", 
              backgroundPositionY: "center"
             }} 
              className="h-[300px] border rounded-2xl flex items-end justify-center">
                <div className="my-4 py-2 px-4 rounded-md bg-[#1E1E24] text-white">Write it..</div>
              </div>
              <div style={{ backgroundImage: `url(${woman})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="h-[300px] border rounded-2xl flex items-end justify-center">
                <div className="my-4 py-2 px-4 rounded-md bg-white text-[#1E1E24]">Monitor it..</div>
              </div>
            </div>
            <div>
              <div className="h-[300px] border rounded-2xl max-sm:mt-0 max-md:mt-0 mt-28 flex items-end justify-center " style={{ backgroundImage: `url(${man})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPositionX: "center" }} >
                <div className="my-4 px-4 py-2 rounded-md bg-white text-[#1E1E24]">Get it done..</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero