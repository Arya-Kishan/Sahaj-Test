
import axiosInstance from "./_axios";


export const downloadData = async (data) =>{
    
    try {
        const res = await axiosInstance.post(`/book/bookcall`, data)
        return { res: res.data, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}
