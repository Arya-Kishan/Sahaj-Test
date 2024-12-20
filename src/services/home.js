
import axiosInstance from "./_axios";


export const getHomeData = async () =>{
    try {
        const res = await axiosInstance.get(`/homescreen/gethomescreencontent`)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}
export const getWhyChooseUsData = async () =>{
    try {
        const res = await axiosInstance.get(`/whychoose/whychoose`)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}
export const getClientReviewData = async () =>{
    try {
        const res = await axiosInstance.get(`/rating/allclient`)
        return { res: res.data, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}