import axiosInstance from "./_axios";


export const getAboutusData = async () =>{
    try {
        const res = await axiosInstance.get(`/about/getallaboutcontent`)
        return { res: res?.data, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}
export const getFounderData = async () =>{
    try {
        const res = await axiosInstance.get(`/about/allfounder`)
        return { res: res?.data, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}
export const getInvestmentData = async () =>{
    try {
        const res = await axiosInstance.get(`/about/allcontent`)
        return { res: res?.data, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}
export const getSingleInvestmentData = async (data) =>{
    try {
        const res = await axiosInstance.post(`/about/singlecontent`, data)
        return { res: res?.data, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}