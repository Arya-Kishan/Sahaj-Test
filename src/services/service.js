
import axiosInstance from "./_axios";


export const getServicesData = async () =>{
    try {
        const res = await axiosInstance.get(`/service/getallservice`)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}