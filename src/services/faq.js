import axiosInstance from "./_axios";



export const getFaqData = async () =>{
    try {
        const res = await axiosInstance.get(`/faq/getalltopics`)
        return { res: res, err: null }
     } catch (error) {
        return { err: error, res: null }
     }
}
export const getTopicFaqData = async (bodyData) => {
   try {
       const res = await axiosInstance.post(`/faq/gettopicfaq`, bodyData); 
       return { res: res.data, err: null };
   } catch (error) {
       return { err: error, res: null };
   }
};
