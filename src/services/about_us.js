
import axiosInstance from "./_axios";


export const getAboutUsData = async () =>{
    try {
        const res = await axiosInstance.get(`/about/getallaboutcontent`)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}