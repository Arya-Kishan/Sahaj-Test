
import axiosInstance from "./_axios";


export const getBlogsData = async () =>{
    try {
        const res = await axiosInstance.get(`/blog/getallblogs`)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}