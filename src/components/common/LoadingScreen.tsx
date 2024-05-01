import { PacmanLoader } from "react-spinners"
const LoadingScreen = () => {
    return (
        <>
            <div className="w-full h-screen fixed z-[300] top-0 left-0 flex items-center justify-center bg-black bg-opacity-70">
                <div className="flex flex-col items-center ">
                    <div ><PacmanLoader size={50} /></div>
                    <div className="font-black my-2">Loggging out..</div>
                </div>
            </div>
        </>
    )
}

export default LoadingScreen