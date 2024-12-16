
import axiosInstance from "./_axios";


export const getHomeData = async () =>{
    try {
        const res = await axiosInstance.get(`${process.env.NEXT_APP_BASE_URL}/homescreen/gethomescreencontent`)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}