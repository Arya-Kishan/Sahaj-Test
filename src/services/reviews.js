
import axiosInstance from "./_axios";


export const getReviewFooterData = async () =>{
    try {
        const res = await axiosInstance.get(`/reviewfooter/getreviewfooter`)
        return { res: res.data, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}