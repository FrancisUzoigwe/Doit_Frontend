import axios from "axios"

const url: string = "http://localhost:8080/api/v2"

export const registerAccount = async (data: any) => {
    try {
        return await axios.post(`${url}/create-account`, data).then((res: any) => {
            return res.data.data
        })
    } catch (error: any) {
        console.log(error.message)
    }
}

export const signinAccount = async (data: any) => {
    try {
        return await axios.post(`${url}/signin-account`, data).then((res: any) => {
            return res.data.data
        })
    } catch (error: any) {
        console.log(error.message)
    }
}
