import axios from "axios"
const url: string = "http://localhost:8080/api/v2"

export const createTask = async (userID: any, data: any) => {
    try {
        return await axios.post(`${url}/${userID}/create-task`, data).then((res: any) => {
            return res.data.data
        })
    } catch (error: any) {
        throw error
    }
}