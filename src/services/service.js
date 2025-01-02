
import axiosInstance from "./_axios";


export const getServicesTitles = async () =>{
    try {
        const res = await axiosInstance.get(`/service/getallservice`)
        return { res: res?.data, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}
export const getServicesData = async (data) =>{
    try {
        const res = await axiosInstance.post(`/service/services`, data)
        return { res: res?.data, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}

export const getMainPageServicesData = async () =>{
   try {
       const res = await axiosInstance.get(`/allservice/getallservices`)
       return { res: res?.data, err: null }
    } catch (error) {
       return { err: error, res: null }
    }
}