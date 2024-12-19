import axiosInstance from "./_axios";


export const getFaqData = async () =>{
    try {
        const res = await axiosInstance.get(`/faq/gettopicfaq`)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}