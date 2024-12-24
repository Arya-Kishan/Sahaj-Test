
import axiosInstance from "./_axios";


export const getFooterData = async () =>{
    try {
        const res = await axiosInstance.get(`/footer/getfooter`)
        return { res: res.data, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}