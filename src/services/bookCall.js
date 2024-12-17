
import axiosInstance from "./_axios";


export const getSlots = async (data) =>{
    
    try {
        const res = await axiosInstance.post(`/zoho/getslots`, {date: data})
        return { res: res.data, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}