import axios from "axios"
import Swal from "sweetalert2"

const url: string = "https://doitbackend.onrender.com/api/v2"

export const spinUpApi = async () => {
    try {
        return await axios.get(url).then(() => {
            console.log("Active")
        })
    } catch (error: any) {
        console.log(error)
    }
}


export const registerAccount = async (data: any) => {
    try {
        return await axios.post(`${url}/create-account`, data).then((res: any) => {
            return (
                Swal.fire({
                    icon: "success",
                    iconColor: "green",
                    timerProgressBar: true,
                    timer: 4000,
                    title: "Success..",
                    text: `${res.response.data.message}`
                })
            )
        })
    } catch (error: any) {
        Swal.fire({
            icon: "error",
            iconColor: "red",
            timerProgressBar: true,
            timer: 4000,
            title: "Error Occured",
            text: `${error.response.data.message}`
        })

    }
}

export const signinAccount = async (data: any) => {
    try {
        return await axios.post(`${url}/signin-account`, data).then((res: any) => {
            return res.data.data
        })
    } catch (error: any) {
        Swal.fire({
            icon: "error",
            iconColor: "red",
            timerProgressBar: true,
            timer: 4000,
            title: "Error Occured",
            text: `${error.response.data.message}`
        })
    }
}
