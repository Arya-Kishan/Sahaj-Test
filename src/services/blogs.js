
import axiosInstance from "./_axios";


export const getBlogsData = async (bodyData) =>{
    try {
        const res = await axiosInstance.post(`/api/blog/getallblogs`,bodyData)
      
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}